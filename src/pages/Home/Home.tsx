import CategoryGrid from "../../components/CategoryGrid/CategoryGrid";
import Hero from "../../components/Hero/Hero";
import BlogCarousel from "../../components/shared/BlogCarousel/BlogCarousel";
import ProductsCarousel from "../../components/shared/ProductsCarousel/ProductsCarousel";

export default function Home() {
    return (
        <div className="home flex flex-col items-center justify-center">
            <Hero />
            <ProductsCarousel title="Trending Products" />
            <CategoryGrid />
            <BlogCarousel title="Featured Articles" />
        </div>
    );
}