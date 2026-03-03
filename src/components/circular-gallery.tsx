'use client'

import React, { useEffect, useRef, useState, Children, ReactNode } from 'react';

function debounce<T extends (...args: any[]) => void>(func: T, wait: number) {
  let timeout: ReturnType<typeof setTimeout>;
  return function (this: any, ...args: Parameters<T>) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
}

function lerp(p1: number, p2: number, t: number): number {
  return p1 + (p2 - p1) * t;
}

interface ElementData {
  element: HTMLDivElement;
  width: number;
  x: number;
  extra: number;
  widthTotal: number;
}

interface CircularGalleryProps {
  children?: ReactNode;
  bend?: number; // Arc curvature
  textColor?: string;
  borderRadius?: number;
  font?: string;
  scrollSpeed?: number;
  scrollEase?: number;
  spacing?: number; // Spacing between items in pixels or vw. We'll use pixels multiplier.
  items?: { image: string; text: string }[];
  offsetY?: number; // Added for vertical adjustment
}

export default function CircularGallery({
  children,
  bend = 3,
  textColor = '#ffffff',
  borderRadius = 0.05,
  font = 'bold 30px Figtree',
  scrollSpeed = 2,
  scrollEase = 0.05,
  spacing = 20, // Default padding added to items
  items,
  offsetY = 0
}: CircularGalleryProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  const scrollRef = useRef({
    ease: scrollEase,
    current: 0,
    target: 0,
    last: 0,
  });

  const dragRef = useRef({
    isDown: false,
    start: 0,
    position: 0,
  });

  const rafRef = useRef<number>(0);
  const elementsDataRef = useRef<ElementData[]>([]);
  const [containerHeight, setContainerHeight] = useState<number | null>(null);

  // Normalize children
  let childNodes: ReactNode[] = [];
  if (children) {
    childNodes = Children.toArray(children);
  } else if (items) {
    childNodes = items.map((item, i) => (
      <div 
        key={i} 
        style={{ borderRadius: `${borderRadius * 100}%` }}
        className="relative overflow-hidden group select-none cursor-pointer"
      >
        <img 
          src={item.image} 
          alt={item.text} 
          className="w-full h-full object-cover pointer-events-none" 
        />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/50 pointer-events-none">
           <span style={{ color: textColor, font }}>{item.text}</span>
        </div>
      </div>
    ));
  } else {
    // default fallback
    const defaultItems = [
      { image: `https://picsum.photos/seed/1/800/600?grayscale`, text: 'Bridge' },
      { image: `https://picsum.photos/seed/2/800/600?grayscale`, text: 'Desk Setup' },
      { image: `https://picsum.photos/seed/3/800/600?grayscale`, text: 'Waterfall' },
      { image: `https://picsum.photos/seed/4/800/600?grayscale`, text: 'Strawberries' },
    ];
    childNodes = defaultItems.map((item, i) => (
      <div 
        key={i} 
        style={{ borderRadius: `${borderRadius * 100}%` }}
        className="relative overflow-hidden group select-none"
      >
        <img src={item.image} alt={item.text} className="w-full h-full object-cover pointer-events-none" />
      </div>
    ));
  }

  // Duplicate for infinite effect (4x to ensure enough items for large screens)
  const duplicatedChildren = [...childNodes, ...childNodes, ...childNodes, ...childNodes];

  useEffect(() => {
    const init = () => {
      const els = itemsRef.current.filter(Boolean) as HTMLDivElement[];
      let totalWidth = 0;
      
      // Compute responsive values once per resize
      const containerWidth = containerRef.current?.offsetWidth || window.innerWidth;
      const scale = Math.max(0.5, Math.min(1, containerWidth / 1200));
      const responsiveSpacing = spacing * scale;
      const responsiveBend = bend * scale;

      const elementsData = els.map((el) => {
        const rect = el.getBoundingClientRect();
        const width = rect.width + responsiveSpacing;
        
        const data: ElementData = {
          element: el,
          width,
          x: totalWidth,
          extra: 0,
          widthTotal: 0,
        };
        
        totalWidth += width;
        return data;
      });

      elementsData.forEach(data => {
        data.widthTotal = totalWidth;
      });

      elementsDataRef.current = elementsData;

      // Dynamically size the container to fit children + arc displacement
      if (els.length > 0) {
        const firstRect = els[0].getBoundingClientRect();
        const itemH = firstRect.height;
        const maxArc = responsiveBend !== 0
          ? Math.abs(responsiveBend) * (containerWidth / 30)
          : 0;
        const baseShift = responsiveBend > 0 ? maxArc / 2 : 0;
        const responsiveOffsetY = offsetY * scale * 3;
        const totalYOffset = baseShift + responsiveOffsetY;
        // Solve for H: H/2 + maxArc + totalYOffset + itemH/2 + buffer = H
        // → H = 2*(maxArc + totalYOffset + itemH/2) + 2*buffer
        // = 2*maxArc + 2*totalYOffset + itemH + buffer (with buffer=16 each side)
        setContainerHeight(itemH + 0.6 * (maxArc + totalYOffset) + 12);
      }
    };

    const resizeTimeout = setTimeout(init, 50);

    const onResize = debounce(() => {
      init();
    }, 200);

    window.addEventListener('resize', onResize);
    return () => {
      clearTimeout(resizeTimeout);
      window.removeEventListener('resize', onResize);
    };
  }, [childNodes.length, spacing]);

  useEffect(() => {
    const update = () => {
      scrollRef.current.current = lerp(
        scrollRef.current.current,
        scrollRef.current.target,
        scrollRef.current.ease
      );

      const direction = scrollRef.current.current > scrollRef.current.last ? 'right' : 'left';
      const containerWidth = containerRef.current?.offsetWidth || window.innerWidth;
      const H = containerWidth / 2;

      elementsDataRef.current.forEach((data) => {
        const x = data.x - scrollRef.current.current - data.extra;

        let y = 0;
        let rotationZ = 0;

        const scale = Math.max(0.4, Math.min(1, containerWidth / 1200));
        const responsiveBend = bend * scale;
        if (responsiveBend !== 0) {
          const B_abs = Math.abs(responsiveBend) * (containerWidth / 30);
          const R = (H * H + B_abs * B_abs) / (2 * B_abs);
          const effectiveX = Math.min(Math.abs(x), H);

          const arc = R - Math.sqrt(R * R - effectiveX * effectiveX);
          if (responsiveBend > 0) {
            // Edges go UP (-y), center is at 0.
            y = -arc;
            rotationZ = Math.sign(x) * Math.asin(effectiveX / R);
          } else {
            y = arc;
            rotationZ = -Math.sign(x) * Math.asin(effectiveX / R);
          }
        }

        // baseShift compensates for the arc pushing edges up, scaled with containerWidth.
        // offsetY is treated as a proportion of containerWidth so it stays responsive.
        const baseShift = responsiveBend > 0 ? (Math.abs(responsiveBend) * (containerWidth / 30)) / 2 : 0;
        const responsiveOffsetY = offsetY * scale;
        const totalYOffset = baseShift + responsiveOffsetY;

        data.element.style.transform = `translate3d(calc(-50% + ${x}px), calc(-50% + ${-(y - totalYOffset)}px), 0) rotateZ(${rotationZ}rad)`;

        const viewportOffset = containerWidth; 
        const planeOffset = data.width / 2;
        const isBefore = x + planeOffset < -viewportOffset;
        const isAfter = x - planeOffset > viewportOffset;

        if (direction === 'right' && isBefore) {
          data.extra -= data.widthTotal;
        }
        if (direction === 'left' && isAfter) {
          data.extra += data.widthTotal;
        }
      });

      scrollRef.current.last = scrollRef.current.current;
      rafRef.current = requestAnimationFrame(update);
    };

    rafRef.current = requestAnimationFrame(update);
    return () => cancelAnimationFrame(rafRef.current);
  }, [bend]);

  const onTouchDown = (e: React.MouseEvent | React.TouchEvent) => {
    dragRef.current.isDown = true;
    dragRef.current.position = scrollRef.current.current;
    dragRef.current.start = 'touches' in e ? e.touches[0].clientX : e.clientX;
  };

  const onTouchMove = (e: MouseEvent | TouchEvent) => {
    if (!dragRef.current.isDown) return;
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const distance = (dragRef.current.start - clientX) * scrollSpeed;
    scrollRef.current.target = dragRef.current.position + distance;
  };

  const onTouchUp = () => {
    dragRef.current.isDown = false;
  };

  const onWheel = (e: WheelEvent) => {
    e.preventDefault();
    const delta = e.deltaY || (e as any).wheelDelta || (e as any).detail;
    scrollRef.current.target += delta * scrollSpeed;
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    
    container.addEventListener('wheel', onWheel, { passive: false });
    window.addEventListener('mousemove', onTouchMove);
    window.addEventListener('mouseup', onTouchUp);
    window.addEventListener('touchmove', onTouchMove, { passive: false });
    window.addEventListener('touchend', onTouchUp);
    
    return () => {
      container.removeEventListener('wheel', onWheel);
      window.removeEventListener('mousemove', onTouchMove);
      window.removeEventListener('mouseup', onTouchUp);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onTouchUp);
    };
  }, [scrollSpeed]);

  return (
    <div 
      ref={containerRef}
      className="relative w-full overflow-hidden cursor-grab active:cursor-grabbing"
      style={containerHeight !== null ? { height: `${containerHeight}px` } : { height: '60vh', minHeight: '400px' }}
      onMouseDown={onTouchDown}
      onTouchStart={onTouchDown}
    >
      {duplicatedChildren.map((child, i) => (
        <div 
          key={i} 
          ref={(el) => { itemsRef.current[i] = el; }}
          className="absolute top-1/2 left-1/2 -translate-y-1/2 w-[45vw] sm:w-[35vw] md:w-[25vw] lg:w-[20vw] max-w-[350px] [&_img]:w-full [&_img]:h-auto [&_img]:object-contain"
        >
          {child}
        </div>
      ))}
    </div>
  );
}
