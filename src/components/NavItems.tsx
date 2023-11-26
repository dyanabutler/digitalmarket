
"use client"


import { PRODUCT_CATEGORIES } from "@/config" // Import product categories from configuration.
import { useState, useRef, useEffect} from "react" // Import React hooks.
import NavItem from "./NavItem" // Import NavItem component.
import { useOnClickOutside } from "@/hooks/use-on-click-outside" // Import custom hook for detecting outside clicks.

// NavItems functional component
const NavItems = () => {
    // State for tracking the active index of navigation items.
    const [activeIndex, setActiveIndex] = useState<null | number>(null)

    // Effect hook for handling 'Escape' key press to reset the active index.
    useEffect(() => {
        // Handler function for 'keydown' event.
        const handler = (e: KeyboardEvent) => {
            if(e.key === "Escape") {
                setActiveIndex(null) // Reset active index when escape key is pressed.
            }
        }
        // Add event listener for keydown.
        document.addEventListener("keydown", handler)
        
        // Cleanup function to remove event listener.
        return () => {
            document.removeEventListener("keydown", handler)
        }
    }, [])

    // Check if any navigation item is active.
    const isAnyOpen = activeIndex !== null 

    // Ref for the nav container to detect outside clicks.
    const navRef = useRef<HTMLDivElement | null>(null)

    // Custom hook to set active index to null when clicking outside the nav.
    useOnClickOutside(navRef, () => setActiveIndex(null))
    
    // Render navigation items.
    return <div className='flex gap-4 h-full' ref={navRef}>
        {PRODUCT_CATEGORIES.map((category, i) => {
            // Function to handle opening/closing of navigation items.
            const handleOpen = () => {
                if(activeIndex === i) {
                    setActiveIndex(null) // Close if the same item is clicked.
                } else {
                    setActiveIndex(i) // Open the clicked item.
                }
            }
            // Check if the current item is open.
            const isOpen = i === activeIndex

            
            return (
                <NavItem 
                    category={category}
                    handleOpen={handleOpen}
                    isOpen={isOpen}
                    key={category.value}
                    isAnyOpen={isAnyOpen}
                />
            )
        })}
    </div>
}


export default NavItems
