import CategoryGrid from "../../components/CategoryGrid/CategoryGrid";
import Hero from "../../components/Hero/Hero";
import ProductsCarousel from "../../components/shared/ProductsCarousel/ProductsCarousel";

export default function Home() {
    return (
        <div className="home flex flex-col items-center justify-center">
            <Hero />
            <ProductsCarousel title="Featured Products" />
            <CategoryGrid />
            <ProductsCarousel title="Trending Products" />
        </div>
    );
}