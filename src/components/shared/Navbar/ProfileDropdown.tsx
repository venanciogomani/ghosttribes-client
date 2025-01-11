import { Link } from "react-router-dom";

export function ProfileDropdown() {
    const isLoggedIn = false;

    if (!isLoggedIn) {
        return <LoggedOutDropdown />
    }

    return (
        <div className="hidden absolute top-full right-0 mt-2 w-52 z-10 bg-white rounded shadow-lg dropdown-menu dropdown-profile flex flex-col">
            <div className="px-4 py-2 bg-pink-600">
                <span className="block font-semibold text-white">
                    Hi, Venancio
                </span>
            </div>
            <div className="px-4 py-2 text-sm hover:bg-gray-100 hover:cursor-pointer">
                <Link to="/account-overview" className="block font-semibold text-white dark:text-gray-900">Account Overview</Link>
            </div>
            <div className="px-4 py-2 text-sm hover:bg-gray-100 hover:cursor-pointer">
                <Link to="/orders-and-invoices" className="block font-semibold text-white dark:text-gray-900">Orders & Invoices</Link>
            </div>
            <div className="px-4 py-2 text-sm hover:bg-gray-100 hover:cursor-pointer">
                <Link to="/credits" className="block font-semibold text-white dark:text-gray-900">Credits</Link>
            </div>
            <div className="px-4 py-2 text-sm hover:bg-gray-100 hover:cursor-pointer">
                <Link to="/wishlists" className="block font-semibold text-white dark:text-gray-900">Wishlists</Link>
            </div>
            <div className="px-4 py-2 text-sm bg-slate-200 hover:bg-gray-100 hover:cursor-pointer">
                <Link to="/Logout" className="block font-semibold text-slate-800">Logout</Link>
            </div>
        </div>
    )
}

function LoggedOutDropdown() {
    return (
        <div className="hidden absolute top-full right-0 mt-2 w-52 z-10 bg-white rounded shadow-lg dropdown-menu dropdown-profile flex flex-col">
            <div className="px-4 py-2 flex items-center justify-center">
                <span className="w-full border-2 border-pink-600 py-2 text-center rounded bg-pink-600 text-white">Login</span>
            </div>
            <div className="px-4 pb-2 flex flex-col">
                <span className="text-sm text-slate-600">
                    Don't have an account?
                </span>
                <span className="text-sm text-pink-600 cursor-pointer hover:underline">Start here</span>
            </div>
        </div>
    )
}