import Hero from "../../components/Hero/Hero";
import Products from "../../components/shared/Products/Products";

export default function Home() {
    return (
        <div className="home flex flex-col items-center justify-center mx-auto max-w-7xl px-0 lg:px-8">
            <Hero />
            <Products title="Featured Products" />
        </div>
    );
}