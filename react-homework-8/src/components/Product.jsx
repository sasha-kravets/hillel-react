const Product = (props) => {
  const {product, onUpdate} = props;
  const {thumbnail, title, description, category, brand, price, id} = product;

  const handleDeleteProduct = async () => {
    const res = await fetch(`https://64bcfc352320b36433c74e1b.mockapi.io/products/${id}`, {
      method: "DELETE"
    });
    await onUpdate();
  }
  
  return (
    (<div className="product">
      <img src={thumbnail} alt={product.title}></img>
      <h4>{title}</h4>
      <p>{description}</p>
      <p>Category: {category}</p>
      <p>Brand: {brand}</p>
      <h6>{price} $</h6>
      <button onClick={handleDeleteProduct} >Delete</button>
      <button>Edit</button>
    </div>)
  )
}

export default Product