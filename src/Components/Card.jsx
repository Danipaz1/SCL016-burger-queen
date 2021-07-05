import React from 'react';
//import List from './List.jsx';
import Burger from './Burger'
import Snack from './Snack'
import Drinks from './Drinks'

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
        <div className='col-md-4'>
          <div className='cardTicket'>
            <div className="list-group">
            <div className="card text-white bg-primary">
              <div className="card-header">Orden</div>
              </div>
              <a className="list-group-item list-group-item-action flex-column align-items-start">
                <div className="d-flex w-100 justify-content-between">
                  <h5 className="mb-1">List group item heading</h5>
                  <small className="text-muted">3 days ago</small>
                </div>
                <p className="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                <small className="text-muted">Donec id elit non mi porta.</small>
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

export default card
