import ProductCard from '../../components/ui/ProductCard'
import { products } from '../../data/dataProducts'

function Products() {
  return (
    <div className="relative">

      
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10 px-4 sm:px-10">

        <h1 className="text-3xl sm:text-4xl font-display dark:text-white text-gray-900 transition-colors duration-300">
          Products
        </h1>

        <div className="flex items-center justify-between sm:justify-end gap-6 dark:text-white text-gray-700 mt-2 sm:mt-0">

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

      <div className="
        grid 
        px-4 sm:px-10
        gap-6 sm:gap-8
        grid-cols-1
        sm:grid-cols-2
        md:grid-cols-3
        lg:grid-cols-4
      ">
        {products.map(p => (
          <ProductCard key={p.id} {...p} />
        ))}
      </div>

      <div className="
        fixed 
        bottom-6 right-6 
        sm:top-24 sm:right-10
        mt-13 
        dark:bg-white bg-gray-900 
        shadow-xl 
        w-12 h-12 
        rounded-full 
        flex items-center justify-center 
        transition-colors duration-300 
        hover:scale-110
      ">
        <i className="fa-solid fa-basket-shopping text-xl dark:text-gray-900 text-white"></i>
      </div>

    </div>
  );
}

export default Products;
