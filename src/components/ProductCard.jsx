function ProductCard({ image, title, price, oldPrice, inSale, inNew }) {
	return (
		<div className="bg-white rounded-2xl shadow-md overflow-hidden cursor-pointer hover:shadow-xl transition relative">
			
			{inSale && (
				<span className="absolute top-4 right-4 bg-red-500 text-white text-xs font-semibold px-3 py-1 rounded-md">
					SALE
				</span>
			)}
			{inNew && (
				<span className="absolute top-4 right-4 bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-md">
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
				<p className="font-semibold text-gray-800">{title}</p>

				<div className="flex items-center justify-between mt-2">

					<div className="flex items-center gap-2">
						<span className="w-3 h-3 rounded-full bg-green-600"></span>
						<span className="w-3 h-3 rounded-full bg-black"></span>
					</div>

					<div className="text-lg font-semibold">
						{oldPrice && (
							<span className="text-gray-400 line-through mr-2 text-sm">
								{oldPrice}
							</span>
						)}
						<span className={`${oldPrice ? "text-red-500" : "text-gray-800"}`}>
							{price}
						</span>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ProductCard;
