"use client"
import { PRODUCT_CATEGORIES } from "@/config"
import { Button } from "./ui/button"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"

// Type for category derived from PRODUCT_CATEGORIES array
type Category = typeof PRODUCT_CATEGORIES[number]

// Props definition for NavItem component
interface NavItemProps {
    category: Category
    handleOpen: () => void
    isOpen: boolean
    isAnyOpen: boolean
}

const NavItem = ({isAnyOpen, category, handleOpen, isOpen}: NavItemProps) => {
  return <div className='flex'>
    <div className='relative flex items-center'>
        {/* Button to toggle the display of category items */}
        <Button 
        className='gap-1.5' 
        onClick={handleOpen} 
        variant={isOpen ? 'secondary': 'ghost'}>
            {category.label}
            {/* Chevron icon that rotates when the category is open */}
            <ChevronDown className={cn('h-4 w-4 transition-all text-muted-foreground', {
                "-rotate-180": isOpen
            })} />
            </Button>
    </div>

    {/* Display category items if the category is open */}
    {isOpen ? (
        <div className={cn("absolute inset-x-0 top-full text-sm text-muted-foreground", {
            "animate-in fade-in-10 slide-in-from-top-5": 
            !isAnyOpen
        })}>
            {/* Overlay and shadow for open category items */}
            <div className='absolute inset-0 top-1/2 bg-white shadow' 
            aria-hidden='true' />

             {/* Container for featured category items */}
             <div className='relative bg-white'>
                <div className='mx-auto max-w-7xl px-8'>
                    {/* Grid layout for items */}
                    <div className='grid grid-cols-4 gap-x-8 gap-y-10 py-16'>
                        <div className='col-span-4 col-start-1 grid grid-cols-3 gap-x-8'>
                            {/* Mapping through featured items in the category */}
                            {category.featured.map((item) => ( 
                                <div 
                                key={item.name} 
                                className='group relative text-base sm:text-sm'>
                                    {/* Image container for each item */}
                                    <div className='relative aspect-video overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75'>
                                        <Image 
                                        src={item.imageSrc} 
                                        alt='product category image'
                                        fill
                                        className='object-cover object-center'
                                        />
                                    </div>
                                    {/* Link and description for each item */}
                                    <Link href={item.href} className='mt-6 bock font-medium text-gray-900'>
                                        {item.name}
                                    </Link>
                                    <p 
                                    className='mt-1' 
                                    aria-hidden='true'>
                                        Shop Now
                                    </p>
                                </div>

                            ))}
                        </div>
                    </div>
                </div>
             </div>

        </div>
    ) : null}
  </div>
}

export default NavItem
