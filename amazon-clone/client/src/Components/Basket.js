import './Basket.css';

function Basket () {

  //Will have to apply conditional rendering to this component
    //when the basket state is empty it will render this

    //when the basket is not empty it will render the products that are in the basket state
  return (
    <div className="BasketP">
      <div className="BasketContainer">
        <div className="Basket">
          Your Amazon Cart is empty
        </div>
        <div className="BasketButtons">
          <button className="ButtonOne">Sign in to your account</button>
          <button className="ButtonTwo">Sign up now</button>
        </div>
      </div>

      <p>The price and availability of items at Amazon.com are subject to change. The Cart is a temporary place to store a list of your items and reflects each item's most recent price. Shopping CartLearn more.

      Do you have a gift card or promotional code? We'll ask you to enter your claim code when it's time to pay.</p>
    </div>
  )
}

export default Basket;