import React from 'react'
import Burger from './Burger'
import Snack from './Snack'
import Drinks from './Drinks'
import {Menu} from '../Menu.json'


const Order = () => {
 
    const [food, setFood] = React.useState(Menu)
    //console.log(food)

    React.useEffect(() => {

        setFood(food)
        //fetchData()
    }, [])
    
    
    let burgerFood = food.filter(item => item.type === "Hamburguesas")

    return (
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
              <p className="mb-1">

              </p>
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
    )
}

export default Order
