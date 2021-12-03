import './Basket.css';

function Basket ({productAmount, basket, subtotal, removeProduct}) {

  //Will have to apply conditional rendering to this component
    let display;
    if (productAmount === 0) {
      //display the basket is empty message
      display = <div className="BasketContainer">
      <div className="Basket">
        Your Amazon Cart is empty
      </div>
      <div className="BasketButtons">
        <button className="ButtonOne">Sign in to your account</button>
        <button className="ButtonTwo">Sign up now</button>
      </div>
    </div>;
    } else {
      //display the products that we have in the basket
      display = <div className="BasketContainer2">
      <div className="Basket2">
        <h2>Shopping Cart</h2>
        {basket.map(function(product, index){
          return <div className='MapContainer' key={index}>
            <div className='MapImageContainer'>
              <img src={product.image} alt='product' className='MapImage'/>
            </div>
            <div className='MapTitle'>{product.title} <button onClick={() => {removeProduct(product.title)}}>Delete</button></div>
            <div className='MapPrice'>Price: ${product.price}</div>
          </div>
        })}
      </div>
      {/* displays the subtotal on the bottom of the cart */}
      <div className='BasketSubtotal'>Subtotal ({basket.length} items): ${subtotal}</div>
    </div>
    }

  return (
    <div className="BasketP">
      {display}

      <p>The price and availability of items at Amazon.com are subject to change. The Cart is a temporary place to store a list of your items and reflects each item's most recent price. Shopping CartLearn more.

      Do you have a gift card or promotional code? We'll ask you to enter your claim code when it's time to pay.</p>
    </div>
  )
}

export default Basket;