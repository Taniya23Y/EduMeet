import { useEffect, useState } from "react";
import logo from "../../assets/edumeet-yellow-logo-removebg-preview.png";
import { navItems } from "../../constants/navIndex";
import { Menu, X } from "lucide-react";
import ButtonOne from "../UI/ButtonOne";
import ButtonTwo from "../UI/ButtonTwo";
import clsx from "clsx";
import { Link, matchPath } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { apiConnector } from "../../services/apiConnector";
import { categories } from "../../services/apis";

const NavBar = () => {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const location = useLocation();

  // Fetching data from store
  const { token } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.profile);
  const { totalItems } = useSelector((state) => state.cart);

  // Fetching categories
  const [subLinks, setSubLinks] = useState([]);

  const fetchSublinks = async () => {
    try {
      const result = await apiConnector("GET", categories.CATEGORIES_API);
      if (result?.data?.data?.length > 0) {
        setSubLinks(result?.data?.data);
      }
      localStorage.setItem("subLinks", JSON.stringify(result.data.data));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchSublinks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 32);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const matchRoute = (route) => matchPath({ path: route }, location.pathname);

  return (
    <nav
      className={clsx(
        "fixed top-0 z-50 w-full py-1 backdrop-blur-lg border-b border-neutral-700/80",
        hasScrolled && "py-2 bg-black backdrop-blur-[8px]"
      )}
    >
      <div className="container px-4 mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center">
          {/* Logo and Brand Name */}
          <Link to="/" className="flex items-center flex-shrink-0">
            <img className="h-12 w-12 mr-2" src={logo} alt="Logo" />
            <span className="text-2xl tracking-tight font-semibold">
              EduMeet
            </span>
          </Link>

          {/* Navigation Links */}
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => (
              <li key={index}>
                {item.label === "Catelog" ? (
                  <div className="flex items-center gap-1">
                    <p>{item.label}</p>
                    <IoIosArrowDropdownCircle />
                    {/* hover part  */}
                    <div></div>
                  </div>
                ) : (
                  <Link
                    to={item?.path}
                    className={`${
                      matchRoute(item?.path)
                        ? "text-yellow underline"
                        : "text-white"
                    }`}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          {/* Cart and Buttons */}
          <div className="flex gap-x-4 items-center">
            {user && user?.accountType !== "Instructor" && (
              <Link to="/dashboard/cart" className="relative">
                <AiOutlineShoppingCart />
                {totalItems > 0 && <span>{totalItems}</span>}
              </Link>
            )}
            {token === null && (
              <div className="hidden lg:flex justify-center space-x-8 items-center">
                <ButtonOne />
                <ButtonTwo />
              </div>
            )}
            {token !== null && <ProfileShow />}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-4">
                  <Link to={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
            <div className="flex space-x-6 mt-4">
              <ButtonOne />
              <ButtonTwo />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
