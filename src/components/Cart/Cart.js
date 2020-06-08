import React, {useState} from 'react'
import './Cart.css'
import {connect} from 'react-redux'
function Cart(cartState) {
  const [orderState, setOrderState] = useState(false);
  let productsCount = 0;
  let costDollars = 0;
  let costEuros = 0
  cartState.cartState.forEach((item) => {
    productsCount += item.count;
    costDollars += item.costDollars;
    costEuros += item.costEuros
  })
  return (
    <div className="cart">
      <div className="left-content">
        {cartState.cartState.length > 0 
        ? cartState.cartState.map((pizza, index) => {
          return(
            <div key={index} className="pizza-item"> 
              <img src={`./images/${pizza.img}.png`} alt=""/>
              <div className="description">
                <h1>{pizza.name}</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque corrupti quia voluptate, voluptatem nobis sequi.</p>
                <span className="pizza-count">{pizza.count}</span>
                <span>{pizza.costDollars} $</span>
                <span>{pizza.costEuros} &euro;</span>
              </div>
            </div>
          )
        }) 
        : <h1>Add some pizzas in cart</h1>}
      </div>
      <div className="right-content">
        <form>
          <span>Write your address</span>
          <input type="text"/>
          <span>Name, surname etc...</span>
          <input type="text"/>
          <span>Email</span>
          <input type="email"/>
          <span>Products: {productsCount}</span>
          <span>Cost $: {costDollars} $</span>
          <span>Cost &euro;: {costEuros} &euro;</span>
          <button onClick={(e) => {e.preventDefault(); setOrderState(true)}}>Order</button>
        </form>
        <div className={orderState === true ? 'blackout' : 'hidden'}></div>
      </div>
      <div className={`${orderState === true ? "show" : "hidden"} order-modal`}>
        <div className="order-modal-overlay">
          <span>Wait for your pizza :D</span>
          <span className="close-modal" onClick={() => setOrderState(false)}>X</span>
        </div>
      </div>
    </div> 
  )
}

const mapStateToProps = state => ({
  cartState: state.cartState,
});

export default connect(mapStateToProps)(Cart)