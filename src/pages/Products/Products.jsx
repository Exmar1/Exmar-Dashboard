import ProductCard from '../../components/ui/ProductCard'
import { products } from '../../data/dataProducts'


function Products() {
  return (
    <div className="relative">
      <div className="flex items-center justify-between mb-10">
        
        <h1 className="text-4xl font-display dark:text-white text-gray-900 ml-10 transition-colors duration-300">
          Products
        </h1>

        <div className="flex items-center gap-8 dark:text-white text-gray-700 mt-15 mr-30">
          <button className="flex items-center gap-2 dark:hover:text-gray-400 hover:text-gray-900 transition">
            <span className="font-medium">Filters</span>
            <i className="fa-solid fa-filter"></i>
            <span className="w-2 h-2 bg-orange-500 rounded-full block"></span>
          </button>

          <button className="flex items-center gap-2 dark:hover:text-gray-400 hover:text-gray-900 transition">
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

      <div className="fixed top-24 right-10 mt-13 dark:bg-white bg-gray-900 shadow-xl w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-300 hover:scale-110 transition-transform">
        <i className="fa-solid fa-basket-shopping text-xl dark:text-gray-900 text-white"></i>
      </div>

    </div>
  );
}

export default Products;