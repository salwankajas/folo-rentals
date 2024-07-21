import Link from "next/link";
import Logo from "./logo";
import MobileMenu from "./mobile-menu";

export default function Header() {
	return (
		<header className="absolute w-full z-30">
			<div className="max-w-6xl mx-auto px-4 sm:px-6">
				<div className="flex items-center justify-between h-16 md:h-20">
					{/* Site branding */}
					<div className="flex-1">
						<Logo />
					</div>

					{/* Desktop navigation */}
					<nav className="hidden md:flex md:grow">
						{/* Desktop menu links */}
						<ul className="flex grow justify-end flex-wrap items-center">
							<li>
								<Link className="font-medium text-sm text-slate-300 hover:text-white mx-4 lg:mx-5 transition duration-150 ease-in-out" href="#how-to-work">
									How to Work
								</Link>
							</li>
							<li>
								<Link className="font-medium text-sm text-slate-300 hover:text-white mx-4 lg:mx-5 transition duration-150 ease-in-out" href="#plans">
									Plans
								</Link>
							</li>
							<li>
								<Link className="font-medium text-sm text-slate-300 hover:text-white mx-4 lg:mx-5 transition duration-150 ease-in-out" href="#depositions">
									Depositions
								</Link>
							</li>
							<li>
								<Link className="font-medium text-sm text-slate-300 hover:text-white mx-4 lg:mx-5 transition duration-150 ease-in-out" href="#career">
									Career
								</Link>
							</li>
							<li>
								<Link className="font-medium text-sm text-slate-300 hover:text-white mx-4 lg:mx-5 transition duration-150 ease-in-out" href="#rent">
									I want to rent
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
