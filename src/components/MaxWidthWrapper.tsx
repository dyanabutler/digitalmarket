import { cn } from "@/lib/utils"
import { ReactNode } from "react"

// MaxWidthWrapper component to enforce a maximum width and central alignment
const MaxWidthWrapper = ({
    className, 
    children
}:{
    className?: string // Optional className for additional styling
    children: ReactNode // Children elements to render inside the wrapper
}) => {
    return (
        <div className={cn(
            // Default styles for maximum width and horizontal padding
            'mx-auto w-full max-w-screen-xl px-2.5 md:px-20',
            className // Merging custom className with default styles
            )}>
            {children} 
        </div>
    )
}

export default MaxWidthWrapper
