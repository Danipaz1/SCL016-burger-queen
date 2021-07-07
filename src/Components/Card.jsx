import React from 'react';
//import List from './List.jsx';
import Burger from './Burger'
import Snack from './Snack'
import Drinks from './Drinks'
import Order from './Order'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


const card = () => {



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
                  
                  <Link to='/Bebidas'className="btn btn-lg btn-primary bloc" type="button">
                  Bebidas
                  </Link>

              </div>
              <a className="list-group-item list-group-item-action flex-column align-items-center">
                <fieldset className="form-group">
                <div className="btn-group-vertical">
                  <Switch>
                    <Route path='/' exact>
                      <Burger/>
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
        <Order/>
      </div>
    </div>
    </Router>  
    )
}

export default card
