import React from 'react'
import './Catalog.css'
import {connect} from 'react-redux'
import { 
  addMocarello, removeMocarello,
  addTartufata, removeTartufata,
  addMargharita, removeMargharita,
  addItalian, removeItalian,
  addCocabella, removeCocabella,
  addTwenky, removeTwenky,
  addKesterata, removeKesterata,
  addNamelita, removeNamelita
} from '../../actions/addRemPizza' 
import {addToCart} from '../../actions/addToCart'


function Catalog({
  productState, addToCart,
  addMocarello, removeMocarello,
  addTartufata, removeTartufata,
  addMargharita, removeMargharita,
  addItalian, removeItalian,
  addCocabella, removeCocabella,
  addTwenky, removeTwenky,
  addKesterata, removeKesterata,
  addNamelita, removeNamelita}) {
  return (
    <div className="catalog-grid">
      <div className="pizza-type">
        <div className="product-item">
          <img src={`./images/${productState.Mocarello.img}.png`} alt="hello"/>
          <div className="product-list">
            <h3>{productState.Mocarello.name}</h3>
            <span className="price-dollars">{productState.Mocarello.price.dollars} dollars</span>
            <span className="price-dollars">{productState.Mocarello.price.euros} euros</span>
            <div className="count">
              <img src="./images/plus.png" className="plus" onClick={addMocarello} alt="hello"/>
                <div>{productState.Mocarello.count}</div>
              <img src="images/minus.webp" className="minus" alt="hello" onClick={productState.Mocarello.count === 0 ? null : removeMocarello} />
            </div>
            <button  className="button" onClick={productState.Mocarello.count > 0 ? () => addToCart(productState.Mocarello) : null}>Add to cart</button>
          </div>
        </div>
      </div>
      <div className="pizza-type">
        <div className="product-item">
          <img src={`./images/${productState.Tartufata.img}.png`} alt="h"/>
          <div className="product-list">
            <h3>{productState.Tartufata.name}</h3>
            <span className="price-dollars">{productState.Tartufata.price.dollars} dollars</span>
            <span className="price-dollars">{productState.Tartufata.price.euros} euros</span>
            <div className="count">
              <img src="./images/plus.png" className="plus" onClick={addTartufata} alt="sh"/>
                <div>{productState.Tartufata.count}</div>
              <img src="images/minus.webp" className="minus" onClick={productState.Tartufata.count === 0 ? null : removeTartufata}  alt="sh"/>
            </div>
            <button className="button" onClick={productState.Tartufata.count > 0 ? () => addToCart(productState.Tartufata) : null}>Add to cart</button>
          </div>
        </div>
      </div>
      <div className="pizza-type">
        <div className="product-item">
          <img src={`./images/${productState.Margharita.img}.png`} alt="sh"/>
          <div className="product-list">
            <h3>{productState.Margharita.name}</h3>
            <span className="price-dollars">{productState.Margharita.price.dollars} dollars</span>
            <span className="price-dollars">{productState.Margharita.price.euros} euros</span>
            <div className="count">
              <img src="./images/plus.png" className="plus" onClick={addMargharita} alt="sh"/>
                <div>{productState.Margharita.count}</div>
              <img src="images/minus.webp" className="minus" onClick={productState.Margharita.count === 0 ? null : removeMargharita} alt="sh"/>
            </div>
            <button  className="button" onClick={productState.Margharita.count > 0 ? () => addToCart(productState.Margharita) : null}>Add to cart</button>
          </div>
        </div>
      </div>
      <div className="pizza-type">
        <div className="product-item">
          <img src={`./images/${productState.Italian.img}.png`} alt="sh"/>
          <div className="product-list">
            <h3>{productState.Italian.name}</h3>
            <span className="price-dollars">{productState.Italian.price.dollars} dollars</span>
            <span className="price-dollars">{productState.Italian.price.euros} euros</span>
            <div className="count">
              <img src="./images/plus.png" className="plus" onClick={addItalian} alt="sh"/>
                <div>{productState.Italian.count}</div>
              <img src="images/minus.webp" className="minus" onClick={productState.Italian.count === 0 ? null : removeItalian} alt="sh"/>
            </div>
            <button  className="button" onClick={productState.Italian.count > 0 ? () => addToCart(productState.Italian) : null}>Add to cart</button>
          </div>
        </div>
      </div>
      <div className="pizza-type">
        <div className="product-item">
          <img src={`./images/${productState.Cocabella.img}.png`} alt="sh"/>
          <div className="product-list">
            <h3>{productState.Cocabella.name}</h3>
            <span className="price-dollars">{productState.Cocabella.price.dollars} dollars</span>
            <span className="price-dollars">{productState.Cocabella.price.euros} euros</span>
            <div className="count">
              <img src="./images/plus.png" className="plus" onClick={addCocabella} alt="sh"/>
                <div>{productState.Cocabella.count}</div>
              <img src="images/minus.webp" className="minus" onClick={productState.Cocabella.count === 0 ? null : removeCocabella} alt="sh"/>
            </div>
            <button  className="button" onClick={productState.Cocabella.count > 0 ? () => addToCart(productState.Cocabella) : null}>Add to cart</button>
          </div>
        </div>
      </div>
      <div className="pizza-type">
        <div className="product-item">
          <img src={`./images/${productState.Twenky.img}.png`} alt="sh"/>
          <div className="product-list">
            <h3>{productState.Twenky.name}</h3>
            <span className="price-dollars">{productState.Twenky.price.dollars} dollars</span>
            <span className="price-dollars">{productState.Twenky.price.euros} euros</span>
            <div className="count">
              <img src="./images/plus.png" className="plus" onClick={addTwenky} alt="sh"/>
                <div>{productState.Twenky.count}</div>
              <img src="images/minus.webp" className="minus" onClick={productState.Twenky.count === 0 ? null : removeTwenky}alt="sh"/>
            </div>
            <button  className="button" onClick={productState.Twenky.count > 0 ? () => addToCart(productState.Twenky) : null}>Add to cart</button>
          </div>
        </div>
      </div>
      <div className="pizza-type">
        <div className="product-item">
          <img src={`./images/${productState.Kesterata.img}.png`} alt="sh"/>
          <div className="product-list">
            <h3>{productState.Kesterata.name}</h3>
            <span className="price-dollars">{productState.Kesterata.price.dollars} dollars</span>
            <span className="price-dollars">{productState.Kesterata.price.euros} euros</span>
            <div className="count">
              <img src="./images/plus.png" className="plus" onClick={addKesterata} alt="sh"/>
                <div>{productState.Kesterata.count}</div>
              <img src="images/minus.webp" className="minus" onClick={productState.Kesterata.count === 0 ? null : removeKesterata} alt="sh"/>
            </div>
            <button  className="button" onClick={productState.Kesterata.count > 0 ? () => addToCart(productState.Kesterata) : null}>Add to cart</button>
          </div>
        </div>
      </div>
      <div className="pizza-type">
        <div className="product-item">
          <img src={`./images/${productState.Namelita.img}.png`} alt="sh"/>
          <div className="product-list">
            <h3>{productState.Namelita.name}</h3>
            <span className="price-dollars">{productState.Namelita.price.dollars} dollars</span>
            <span className="price-dollars">{productState.Namelita.price.euros} euros</span>
            <div className="count">
              <img src="./images/plus.png" className="plus" onClick={addNamelita} alt="sh"/>
                <div>{productState.Namelita.count}</div>
              <img src="images/minus.webp" className="minus" onClick={productState.Namelita.count === 0 ? null : removeNamelita} alt="sh"/>
            </div>
            <button  className="button" onClick={productState.Namelita.count > 0 ? () => addToCart(productState.Namelita) : null}>Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  productState: state.productState,
})
export default connect(
  mapStateToProps,
  {
    addCocabella, addItalian, addKesterata, addMargharita, addMocarello, addNamelita, addTartufata, addTwenky,
    removeCocabella, removeItalian, removeMargharita, removeNamelita, removeTwenky, removeTartufata, removeMocarello, removeKesterata,
    addToCart
  }
)
(Catalog)