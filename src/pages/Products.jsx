import ProductCard from '../components/ProductCard'
import { products } from '../data/dataProducts'

function Products() {
  return (
    <div className="relative">
      <div className="flex items-center justify-between mb-10">
        
        <h1 className="text-4xl font-display text-white ml-10">
          Products
        </h1>

        <div className="flex items-center gap-8 text-white mt-15 mr-30">
          <button className="flex items-center gap-2 hover:text-gray-400 transition">
            <span className="font-medium">Filters</span>
            <i className="fa-solid fa-filter "></i>
            <span className="w-2 h-2 bg-orange-500 rounded-full block"></span>
          </button>

          <button className="flex items-center gap-2 hover:text-gray-400 transition">
            <span className="font-medium">Sort By:</span>
            <span className="font-semibold">Featured</span>
            <i className="fa-solid fa-chevron-down text-sm"></i>
          </button>

        </div>
      </div>

			<div className="grid grid-cols-4 gap-8 px-10">
			{products.map(p => (
				<ProductCard key={p.id} {...p} />
			))}
			</div>

      <div className="fixed top-24 right-10 mt-13 bg-white shadow-xl w-12 h-12 rounded-full flex items-center justify-center">
        <i className="fa-solid fa-basket-shopping text-xl"></i>
      </div>

    </div>
  );
}

export default Products;
