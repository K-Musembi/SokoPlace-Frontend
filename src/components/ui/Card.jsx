function Card({ title, description, price, onView, onMore }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{description}</p>
      <p><strong>${price}</strong></p>
      {onView && <button onClick={onView}>View Details</button>}
      {onMore && <button onClick={onMore}>More</button>}
    </div>
  )
}

export default Card
