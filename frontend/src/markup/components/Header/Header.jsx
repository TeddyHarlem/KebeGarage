import React, { useEffect, useState } from "react";
import logo from "../../../assets/images/logo.png";
// Import the custom context hook
import { useAuth } from "../../../Contexts/AuthContext";
// Import the login service to access the logout function
import loginService from "../../../services/login.service";
// Import logo
import logo1 from "../../../assets/images/logokebe.png";

import { Link, NavLink, useLocation } from "react-router-dom";

function Header() {
	const {
		isLogged,
		setIsLogged,
		isAdmin,
		setIsAdmin,
		isManager,
		setisManager,
		employee,
		isEmployee,
		setisEmployee,
		setEmployee,
	} = useAuth();
	const { pathname } = useLocation();

	const [showMenu, setShowMenu] = useState(false);
	// for sticky header big screen
	const [isSticky, setIsSticky] = useState(false);
	function handleClick() {
		setShowMenu(() => !showMenu);
	}

	// for sticky header big screen
	useEffect(() => {
		let prevScrollPos = window.scrollY;

		const handleScroll = () => {
			const currentScrollPos = window.scrollY;
			const isHeaderSticky = currentScrollPos > prevScrollPos;
			setIsSticky(isHeaderSticky);
			prevScrollPos = currentScrollPos;
		};

		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);
	// Use the custom hook to access the data in the context
	const logOut = () => {
		// Call the logout function from the login service
		loginService.logOut();
		// Set the isLogged state to false
		setIsLogged(false);
		setIsAdmin(false);
		setisEmployee(false);
		setisManager(false);
		setisEmployee(false);
	};
	return (
		<div className="header">
			<header
				className={`main-header header-style-one ${isSticky ? "sticky" : ""}`}
			>
				<div className={`header-top ${isSticky ? "hide" : ""}`}>
					<div className="auto-container">
						<div className="inner-container">
							<div className="left-column">
								<div className="text">Enjoy the Beso while we fix your car</div>
								<div className="office-hour">
									Monday - Saturday 7:00AM - 6:00PM
								</div>
							</div>
							<div className="right-column">
								{!pathname.includes("/order-status/") ? (
									<>
										{isLogged ? (
											<div className="link-btn">
												<div className="phone-number">
													<strong>
														Welcome, {employee?.employee_first_name}
													</strong>
												</div>
											</div>
										) : (
											<div className="phone-number ">
												Schedule Appointment: <strong>+ 251 92 420 7890</strong>
											</div>
										)}
									</>
								) : (
									<div className="phone-number mr-5">
										<strong>Welcome, Dear Guest</strong>
									</div>
								)}
							</div>
						</div>
					</div>
				</div>
				<div className={`header-upper ${isSticky ? "hide" : ""}`}>
					<div className="auto-container">
						<div className="inner-container">
							<div className="logo-box">
								<div className="logo">
									<Link to="/">
										{/* <img src={logo} alt="" /> */}
										<img src={logo1} alt="" />
									</Link>
								</div>
							</div>
							<div className="right-column">
								<div className="nav-outer">
									<nav className="main-menu navbar-expand-md navbar-light">
										<div
											className="collapse navbar-collapse show clearfix"
											id="navbarSupportedContent"
										>
											<ul
												onClick={handleClick}
												id="menuList"
												className={
													showMenu ? "navigation visible" : "navigation"
												}
											>
												<li className="dropdown">
													<NavLink className="menu home" to="/">
														Home
													</NavLink>
												</li>
												<li className="dropdown">
													<NavLink className="menu" to="/about">
														About Us
													</NavLink>
												</li>
												<li className="dropdown">
													<NavLink className="menu" to="/services">
														Services
													</NavLink>
												</li>
												<li>
													<NavLink className="menu" to="/contact">
														Contact Us
													</NavLink>
												</li>
												<li>
													{!pathname.includes("/order-status/") && (
														<>
															{isAdmin ? (
																<div className="mr-5 ">
																	<Link
																		className="text-primary"
																		to="/admin/dashboard"
																	>
																		Admin
																	</Link>
																</div>
															) : (
																""
															)}
															{isManager ? (
																<div className="mr-5">
																	<Link
																		className="text-primary"
																		to="/managerlanding"
																	>
																		Manager
																	</Link>
																</div>
															) : (
																""
															)}
															{isEmployee ? (
																<div className="mr-5">
																	<Link
																		className="text-primary"
																		to="/admin/orders"
																	>
																		Orders
																	</Link>
																</div>
															) : (
																""
															)}
														</>
													)}
												</li>

												{!isLogged ? <div className="search-btn"></div> : ""}

												<li className="dropdown">
													{!pathname.includes("/order-status/") && (
														<>
															{isLogged ? (
																<div className="link-btn">
																	<Link
																		to="/"
																		className="theme-btn btn-style-one blue"
																		onClick={logOut}
																	>
																		Log out
																	</Link>
																</div>
															) : (
																<div className="link-btn">
																	<Link
																		to="/login"
																		className="theme-btn btn-style-one"
																	>
																		Login
																	</Link>
																</div>
															)}
														</>
													)}
												</li>
											</ul>
										</div>
									</nav>
									<div onClick={handleClick} className="mobaile">
										{showMenu ? (
											<i className="fa fa-times"></i>
										) : (
											<i className="fa fa-bars"></i>
										)}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className={`sticky-header ${isSticky ? "" : "hide"}`}>
					<div className="header-upper">
						<div className="auto-container">
							<div className="inner-container">
								<div className="logo-box">
									<div className="logo">
										<Link to="/">
											<img src={logo1} alt="" />
										</Link>
									</div>
								</div>
								<div className="right-column">
									<div className="nav-outer">
										<nav className="main-menu navbar-expand-md navbar-light">
											<div
												className="collapse navbar-collapse show clearfix"
												id="navbarSupportedContent"
											>
												<ul
													onClick={handleClick}
													id="menuList"
													className={
														showMenu ? "navigation visible" : "navigation"
													}
												>
													<li className="dropdown">
														<NavLink className="menu home" to="/">
															Home
														</NavLink>
													</li>
													<li className="dropdown">
														<NavLink className="menu" to="/about">
															About Us
														</NavLink>
													</li>
													<li className="dropdown">
														<NavLink className="menu" to="/services">
															Services
														</NavLink>
													</li>
													<li>
														<NavLink className="menu" to="/contact">
															Contact Us
														</NavLink>
													</li>
													<li>
														{!pathname.includes("/order-status/") && (
															<>
																{isAdmin ? (
																	<div className="mr-5 ">
																		<Link
																			className="text-primary"
																			to="/admin/dashboard"
																		>
																			Admin
																		</Link>
																	</div>
																) : (
																	""
																)}
																{isManager ? (
																	<div className="mr-5">
																		<Link
																			className="text-primary"
																			to="/managerlanding"
																		>
																			Manager
																		</Link>
																	</div>
																) : (
																	""
																)}
																{isEmployee ? (
																	<div className="mr-5">
																		<Link
																			className="text-primary"
																			to="/admin/orders"
																		>
																			Orders
																		</Link>
																	</div>
																) : (
																	""
																)}
															</>
														)}
													</li>

													{!isLogged ? <div className="search-btn"></div> : ""}

													<li className="dropdown">
														{!pathname.includes("/order-status/") && (
															<>
																{isLogged ? (
																	<div className="link-btn">
																		<Link
																			to="/"
																			className="theme-btn btn-style-one blue"
																			onClick={logOut}
																		>
																			Log out
																		</Link>
																	</div>
																) : (
																	<div className="link-btn">
																		<Link
																			to="/login"
																			className="theme-btn btn-style-one"
																		>
																			Login
																		</Link>
																	</div>
																)}
															</>
														)}
													</li>
												</ul>
											</div>
										</nav>
										<div onClick={handleClick} className="mobaile">
											{showMenu ? (
												<i className="fa fa-times"></i>
											) : (
												<i className="fa fa-bars"></i>
											)}
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="mobile-menu">
					<div className="menu-backdrop"></div>
					<div className="close-btn">
						<span className="icon flaticon-remove"></span>
					</div>

					<nav className="menu-box">
						<div className="nav-logo">
							<Link to="#">
								<img src="assets/images/logo-two.png" alt="" title="" />
							</Link>
						</div>
						<div className="menu-outer"></div>
					</nav>
				</div>

				<div className="nav-overlay">
					<div className="cursor"></div>
					<div className="cursor-follower"></div>
				</div>
			</header>
		</div>
	);
}

export default Header;
