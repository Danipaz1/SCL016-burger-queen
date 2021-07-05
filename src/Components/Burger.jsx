import React from 'react'
import {Menu} from '../Menu.json'
import {Link} from 'react-router-dom'
//let arrayMenu = require('./Menu.json');

const Burger = () => {


    const [food, setFood] = React.useState(Menu)
    //console.log(food)

    React.useEffect(() => {

        setFood(food)
        //fetchData()
    }, [])


    let burgerFood = food.filter(item => item.type === "Hamburguesas")

    function burgerBtnFood() {
          console.log('click')
    }

    return ( 
        <div>
            
            <ul>
                {
                burgerFood.map((item,i)=> (
                    
                    <li key={i}>
                        <button className = "burgers" style={{height:400, width: 300}} onClick = {() => burgerBtnFood()}>
                        {<img src = {item.images} style={{height:200, width: 250}}/>}
                          <p><b>{item.name}</b></p>
                          <p1><i>{item.description}</i></p1>
                          <p>${item.price}</p>
                        </button>
                    </li>  
                   
                    ))
                }          
            </ul>
        </div>
    )
}

export default Burger