import './Basket.css';

function Basket ({productAmount, basket}) {

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
      display = <div className="BasketContainer">
      <div className="Basket">
        {basket.map(function(product, index){
          return <div className='MapContainer'>
            <div className='MapTitle'>{product.title}</div>
            <img src={product.image} alt='product'/>
            <div className='MapPrice'>{product.price}</div>
            <button>remove</button>
          </div>
        })}
      </div>
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