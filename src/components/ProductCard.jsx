function ProductCard({ image, title, price, oldPrice, inSale, inNew }) {
	return (
		<div className="dark:bg-white bg-white rounded-2xl shadow-md overflow-hidden cursor-pointer hover:shadow-xl transition-all duration-300 relative hover:scale-[1.02]">
			
			{inSale && (
				<span className="absolute top-4 right-4 bg-red-500 text-white text-xs font-semibold px-3 py-1 rounded-md z-10 shadow-lg">
					SALE
				</span>
			)}
			{inNew && (
				<span className="absolute top-4 right-4 bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-md z-10 shadow-lg">
					NEW
				</span>
			)}

			{image && (
				<img
					src={image}
					alt={title}
					className="w-full h-56 object-cover"
				/>
			)}

			<div className="p-4 flex flex-col gap-2">
				<p className="font-semibold dark:text-gray-800 text-gray-900">{title}</p>

				<div className="flex items-center justify-between mt-2">

					<div className="flex items-center gap-2">
						<span className="w-3 h-3 rounded-full bg-green-600 cursor-pointer hover:scale-125 transition-transform"></span>
						<span className="w-3 h-3 rounded-full bg-black cursor-pointer hover:scale-125 transition-transform"></span>
					</div>

					<div className="text-lg font-semibold">
						{oldPrice && (
							<span className="text-gray-400 line-through mr-2 text-sm">
								{oldPrice}
							</span>
						)}
						<span className={`${oldPrice ? "text-red-500" : "dark:text-gray-800 text-gray-900"}`}>
							{price}
						</span>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ProductCard;