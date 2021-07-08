import React, {useState, useEffect} from 'react';
//import List from './List.jsx';
import Burger from './Burger'
import Snack from './Snack'
import Drinks from './Drinks'
//import Order from './Order'


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


const Card = () => {

const [burgerTypeState, setBurgerTypeState] = useState();
const [burgerPriceState, setBurgerPriceState] = useState();
const [productList, setProductList] = useState([]);
const [total, setTotal] = useState(0);

/*useEffect(() => {
  if (burgerTypeState != undefined && burgerPriceState != undefined) {
    productList(burgerTypeState);
    setTotal(total + burgerPriceState);
    console.log(total);
  }
}, [])*/


const getTotal = () => {
  return "suma de precios";
}

    return (
     
    <Router>
    <div className='container mt-5'>
      <div className='row'>

      {/* TARJETA MENU */}
        <div className='col-md-8'>
          <div className='cardMenu'>
            <div className="list-group">
              <div className="btn-group" role="group" aria-label="Basic checkbox toggle button group">
               
                  <Link to='/' className="btn btn-lg btn-primary bloc" type="button">
                  Hamburguesas
                  </Link>   
               
                  <Link to='/Acompañamiento' className="btn btn-lg btn-primary bloc" type="button">
                  Acompañamiento
                  </Link>
                  
                  <Link to='/Bebidas' className="btn btn-lg btn-primary bloc" type="button">
                  Bebidas
                  </Link>

              </div>
              <a className="list-group-item list-group-item-action flex-column align-items-center">
                <fieldset className="form-group">
                <div className="btn-group-vertical">
                  <Switch>
                    <Route path='/' exact>
                      <Burger burgerTypeProp={setBurgerTypeState} burgerPriceProp={setBurgerPriceState} />
                    </Route>
                    <Route path='/Acompañamiento'>
                    <Snack/>
                    </Route>
                    <Route path='/Bebidas'>
                      <Drinks/>
                    </Route>
                  </Switch>

                  </div>
                </fieldset>
              </a>
            </div>
          </div>
        </div>
        
        {/* TARJETA COMANDA */}

        <div className='col-md-4'>
          <div className='cardTicket'>
            <div className="list-group">
            <div className="card text-white bg-primary">
              <div className="card-header">Orden</div>
              </div>
              <a className="list-group-item list-group-item-action flex-column align-items-start">
                <ul >
    
                  <li>{burgerTypeState} = ${burgerPriceState}</li>
                   
                </ul>
                <p className="mb-1">TOTAL {total}</p>
                <small className="text-muted">{}</small>
              </a>
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Nombre cliente" id="inputDefault" />
                <input type="checkbox" className="btn-check" id="btncheck3" autoComplete="off"/>
                <label className="btn btn-primary" htmlFor="btncheck3">Enviar</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </Router>  
    )
}

export default Card
