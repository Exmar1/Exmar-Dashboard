function Card({ title, description, image, fotext, children }) {
	return (
		<div className='bg-card'>
			{image && <img src={image} alt={title} />}
			<h2>{title}</h2>
			<p>{description}</p>
			<p>{fotext}</p>

			{children}
		</div>
	)
}

export default Card
