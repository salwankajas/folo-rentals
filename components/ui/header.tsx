import Link from "next/link";
import Logo from "./logo";
import MobileMenu from "./mobile-menu";
import React, { useState, useEffect } from 'react';

export default function Header() {
	const [isSticky, setSticky] = useState(false);
	useEffect(() => {
		if (window.scrollY > 80) {
			setSticky(true);
		} else {
			setSticky(false);
		}
        const handleScroll = () => {
            if (window.scrollY > 80) {
                setSticky(true);
            } else {
                setSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Clean up
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
	return (
		<header className={`flex  w-full justify-center`}>
			<div className={`${isSticky ? 'stricky-fixed' : 'stricked-menu'} w-[calc(100%-20px)] max-w-6xl mx-auto px-4 sm:px-6 fixed w-fulls z-30 top-0 mt-3 rounded-full px-10`}>
				<div className="flex items-center justify-between h-16">
					{/* Site branding */}
					<div className="flex-1 pt-2 scale-90">
						<Logo />
					</div>

					{/* Desktop navigation */}
					<nav className="hidden lg:flex lg:grow">
						{/* Desktop menu links */}
						<ul className="ml-24 flex grow justify-end flex-wrap items-center">
							<li>
								<Link className="font-medium text-sm text-color-third hover:text-color-primary mx-4 lg:mx-5 transition duration-150 ease-in-out" href="#home">
									Home
								</Link>
							</li>
							<li>
								<Link className="font-medium text-sm text-color-third hover:text-color-primary mx-4 lg:mx-5 transition duration-150 ease-in-out" href="#how-to-work">
									About Us
								</Link>
							</li>
							<li>
								<Link className="font-medium text-sm text-color-third hover:text-color-primary mx-4 lg:mx-5 transition duration-150 ease-in-out" href="#bikes">
									Bikes
								</Link>
							</li>
							<li>
								<Link className="font-medium text-sm text-color-third hover:text-color-primary mx-4 lg:mx-5 transition duration-150 ease-in-out" href="#plans">
									Plans
								</Link>
							</li>
							<li>
								<Link className="font-medium text-sm text-color-third hover:text-color-primary mx-4 lg:mx-5 transition duration-150 ease-in-out" target="#blank" href="https://wa.me/351912852551">
									I Want to Rent
								</Link>
							</li>
						</ul>
					</nav>

					<MobileMenu />
				</div>
			</div>
		</header>
	);
}
