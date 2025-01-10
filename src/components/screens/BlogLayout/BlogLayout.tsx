import { Outlet } from "react-router-dom";
import Header from "../../shared/Header/Header";
import Footer from "../../shared/Footer/Footer";

export default function BlogLayout() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}