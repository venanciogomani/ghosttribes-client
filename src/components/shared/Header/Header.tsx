import { Link } from "react-router-dom";
import { 
    FavoriteBorderOutlined,
    KeyboardArrowDownOutlined,
    PersonOutlineOutlined,
    SearchOutlined,
    ShoppingBagOutlined
} from "@mui/icons-material";
import "./Header.scss";

export default function Header() {
    function toggleDropdown(name: string) {
        const dropdownMenus = document.querySelectorAll(".dropdown-menu");
        const dropdownMenu = document.querySelector(`.${name}`);

        dropdownMenus.forEach(
            (dropdown) => { 
                if (dropdown !== dropdownMenu && !dropdown.classList.contains("hidden")) {
                    dropdown.classList.add("hidden");
                }
            }
        );

        if (dropdownMenu) {
            dropdownMenu.classList.toggle("hidden");
        }
    }

    function openSearchBar() {
        const searchBar = document.querySelector(".search-bar");
        if (searchBar) {
            searchBar.classList.toggle("hidden");
        }
    }

    return (
        <header className="bg-gray-100 dark:bg-slate-900 text-black dark:text-white sticky top-0 z-50">
            <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
                <div className="flex md:flex-1">
                    <Link to="/" className="-m-1.5 p-1.5 flex items-center gap-x-1.5 text-lg font-bold text-gray-900 dark:text-white">
                        <img src="./img/logo-white.png" alt="Ghost Tribes" className="h-8 w-auto" />
                        <h2>Ghost Tribes</h2>
                    </Link>
                </div>
                <div className="flex md:hidden">
                    <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
                        <span className="sr-only">Open main menu</span>
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>
                <div className="hidden md:flex md:gap-x-6 lg:gap-x-12">
                    {/* Books menu */}
                    <div className="relative">
                        <button type="button" className="flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900 dark:text-white" aria-expanded="false" onClick={() => toggleDropdown("dropdown-books")}>
                            Store
                            <KeyboardArrowDownOutlined className="size-5 flex-none text-gray-400" />
                        </button>
                        {/* Dropdown menu */}
                        <div className="hidden absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded bg-white shadow-lg dropdown-menu dropdown-books">
                            <div className="group relative flex items-center gap-x-6 p-4 text-sm/6 hover:bg-gray-100 hover:cursor-pointer">
                                <Link to="/category/books" className="block font-semibold text-white dark:text-gray-900">Books</Link>
                            </div>
                            <div className="group relative flex items-center gap-x-6 p-4 text-sm/6 hover:bg-gray-100 hover:cursor-pointer">
                                <Link to="/category/games" className="block font-semibold text-white dark:text-gray-900">Games</Link>
                            </div>
                            <div className="group relative flex items-center gap-x-6 p-4 text-sm/6 hover:bg-gray-100 hover:cursor-pointer">
                                <Link to="/category/fashion" className="block font-semibold text-white dark:text-gray-900">Fashion</Link>
                            </div>
                            <div className="group relative flex items-center gap-x-6 p-4 text-sm/6 hover:bg-gray-100 hover:cursor-pointer">
                                <Link to="/category/merchandise" className="block font-semibold text-white dark:text-gray-900">Merchandise</Link>
                            </div>
                        </div>
                    </div>
                    {/* Blog menu */}
                    <div className="relative">
                        <button type="button" className="flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900 dark:text-white" aria-expanded="false" onClick={() => toggleDropdown("dropdown-blog")}>
                            Blog
                            <KeyboardArrowDownOutlined className="size-5 flex-none text-gray-400" />
                        </button>
                        {/* Dropdown menu */}
                        <div className="hidden absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded bg-white shadow-lg dropdown-menu dropdown-blog">
                            <div className="group relative flex items-center gap-x-6 p-4 text-sm/6 hover:bg-gray-100 hover:cursor-pointer">
                                <Link to="/category/history" className="block font-semibold text-white dark:text-gray-900">History</Link>
                            </div>
                            <div className="group relative flex items-center gap-x-6 p-4 text-sm/6 hover:bg-gray-100 hover:cursor-pointer">
                                <Link to="/category/technology" className="block font-semibold text-white dark:text-gray-900">Technology</Link>
                            </div>
                            <div className="group relative flex items-center gap-x-6 p-4 text-sm/6 hover:bg-gray-100 hover:cursor-pointer">
                                <Link to="/category/art-and-literature" className="block font-semibold text-white dark:text-gray-900">Art & Literature</Link>
                            </div>
                            <div className="group relative flex items-center gap-x-6 p-4 text-sm/6 hover:bg-gray-100 hover:cursor-pointer">
                                <Link to="/category/news" className="block font-semibold text-white dark:text-gray-900">News</Link>
                            </div>
                        </div>
                    </div>
                    <Link to="/about" className="text-sm/6 font-semibold text-gray-900 dark:text-white">About</Link>
                    <Link to="/contact" className="text-sm/6 font-semibold text-gray-900 dark:text-white">Contact</Link>
                </div>
                <div className="hidden md:flex md:flex-1 md:justify-end gap-x-4 md:gap-x-6">
                    <div className="flex items-center relative cursor-pointer">
                        <FavoriteBorderOutlined className="text-gray-200 hover:text-pink-500" />
                        <span className="absolute bottom-3 left-4 py-1 px-2 bg-pink-500 rounded-full text-xs font-bold">0</span>
                    </div>
                    <div className="flex items-center relative">
                        <div className="flex items-center relative cursor-pointer" onClick={() => toggleDropdown("dropdown-cart")}>
                            <ShoppingBagOutlined className="text-gray-200 hover:text-pink-500" />
                            <span className="absolute bottom-3 left-4 py-1 px-2 bg-pink-500 rounded-full text-xs font-bold">0</span>
                        </div>
                        <div className="hidden flex flex-col absolute w-52 -left-10 top-full z-10 mt-3 overflow-hidden rounded bg-white shadow-lg dropdown-menu dropdown-cart">
                            <div className="wishlist-item flex justify-between items-center p-1">
                                <div className="w-1/2 flex flex-col justify-center items-center text-slate-600">
                                    <span className="text-sm/6 font-semibold">Book Title</span>
                                    <span className="text-xs/6 font-semibold">$5</span>
                                </div>
                            </div>
                            <div className="wishlist-total flex justify-between items-center">
                                <div className="w-1/2 py-2 bg-slate-900 hover:bg-slate-700 flex justify-center items-center text-sm font-semibold text-white cursor-pointer">
                                    View
                                </div>
                                <div className="w-1/2 py-2 bg-pink-600 hover:bg-pink-500 flex justify-center items-center text-sm font-semibold text-white cursor-pointer">
                                    Checkout
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center relative cursor-pointer">
                        <PersonOutlineOutlined className="text-gray-200 hover:text-pink-500" />
                    </div>
                    <div className="flex items-center justify-between rounded-full bg-pink-500 p-1 cursor-pointer" onClick={openSearchBar}>
                        <span className="hidden text-xs text-white px-2 search-bar">Search...</span>
                        <div className="bg-white rounded-full px-1">
                            <SearchOutlined className="text-pink-500" fontSize="small" />
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}