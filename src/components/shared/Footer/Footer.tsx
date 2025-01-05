import { Link } from "react-router-dom";

export default function Footer() {
    function getFullYear(): string {
        const date = new Date();
        return date.getFullYear().toString();
    }

    return (
        <footer className="w-full bg-gray-100 dark:bg-slate-700 text-black dark:text-white">
            <div className="flex flex-col">
                <div className="hidden md:flex flex-col md:flex-row md:justify-between py-6 max-w-7xl lg:px-8 mx-auto">
                    <div className="flex flex-col md:w-1/4">
                        <h3 className="text-lg font-bold">Categories</h3>
                        <Link to="/category/books" className="text-sm/6">Books</Link>
                        <Link to="/category/games" className="text-sm/6">Games</Link>
                        <Link to="/category/electronics" className="text-sm/6">Electronics</Link>
                        <Link to="/category/clothing" className="text-sm/6">Clothing</Link>
                    </div>
                    <div className="flex flex-col md:w-1/4">
                        <h3 className="text-lg font-bold">Useful Links</h3>
                        <Link to="/faq" className="text-sm/6">FAQ</Link>
                        <Link to="/store" className="text-sm/6">Store</Link>
                        <Link to="/blog" className="text-sm/6">Blog</Link>
                        <Link to="/terms-and-conditions" className="text-sm/6">Terms & Conditions</Link>
                    </div>
                    <div className="flex flex-col md:w-1/4">
                        <h3 className="text-lg font-bold">Contact Us</h3>
                        <p className="text-sm/6">Email: info@ghosttribes.com</p>
                        <p className="text-sm/6">Phone: 123-456-7890</p>
                    </div>
                    <div className="flex flex-col md:w-1/4">
                        <h3 className="text-lg font-bold">About Us</h3>
                        <p className="text-sm/6">
                        Ghost Tribes is an open source library of information on all African tribes on the Africa continent. Our aim is to document tribal information from local tribes folk and share the beauty of African culture in all its diversity.
                        </p>
                    </div>
                </div>
                <div className="w-full dark:bg-slate-900">
                    <div className="flex justify-between mx-auto max-w-7xl py-2 lg:px-8">
                        <p className="text-sm/6">© {getFullYear()} Ghost Tribes. All rights reserved.</p>
                        <img src="./img/payment.png" alt="payment" className="h-8 w-auto" />
                    </div>
                </div>
            </div>
        </footer>
    );
}