import { Link } from "react-router-dom";
import CategoryCard from "../CategoryCard/CategoryCard";

export default function CategoryGrid() {
    return (
        <section className="category h-[80vh] w-full mb-8">
            <div className="grid grid-cols-2 gap-2 h-full">
                <div className="grid grid-cols-2 gap-2 h-full">
                    <div className="grid grid-rows-2 gap-2 h-full">
                        <CategoryCard 
                            title="Category 1"
                            img="https://images.pexels.com/photos/818992/pexels-photo-818992.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1600"
                        />
                        <CategoryCard 
                            title="Category 2"
                            img="https://images.pexels.com/photos/818992/pexels-photo-818992.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1600"
                        />
                    </div>
                    <CategoryCard 
                        title="Category 3"
                        img="https://images.pexels.com/photos/818992/pexels-photo-818992.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1600"
                        tall={true}
                    />
                </div>
                <div className="grid grid-rows-2 gap-2 h-full">
                    <div className="grid grid-cols-2 gap-2">
                        <CategoryCard 
                            title="Category 4"
                            img="https://images.pexels.com/photos/818992/pexels-photo-818992.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1600"
                        />
                        <CategoryCard 
                            title="Category 5"
                            img="https://images.pexels.com/photos/818992/pexels-photo-818992.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1600"
                        />
                    </div>
                    <CategoryCard 
                        title="Category 6"
                        img="https://images.pexels.com/photos/818992/pexels-photo-818992.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1600"
                    />
                </div>
            </div>
        </section>
    )
}