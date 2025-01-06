import Hero from "../../components/Hero/Hero";
import Products from "../../components/shared/Products/Products";

export default function Home() {
    return (
        <div className="home flex flex-col items-center justify-center">
            <Hero />
            <Products title="Featured Products" />
        </div>
    );
}