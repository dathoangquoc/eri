'use client'

import { useEffect } from "react"

export default function DevConsoleMessage() {
    useEffect(() => {
        console.log("👋 Hi there, this site was built by https://github.com/dathoangquoc")
    })
    return null
}