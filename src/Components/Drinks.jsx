import React from 'react'
import {Menu} from '../Menu.json'
import {Link} from 'react-router-dom'
//let arrayMenu = require('./Menu.json');

const Drinks = () => {


    const [food, setFood] = React.useState(Menu)
    //console.log(food)

    React.useEffect(() => {

        setFood(food)
        //fetchData()
    }, [])


    let drinksFood = food.filter(item => item.type === "Bebidas")

    function drinkBtnFood() {
        console.log('click')
    }

    return ( 
        <div>
            <ul>
                {
                drinksFood.map((item,i)=> ( 
                       <li key={i}> 
                       <button className = "drinks" onClick = {() => drinkBtnFood()}>
                        {<img src = {item.images} style={{height:200, width: 200}}/>}
                        <p><b>{item.name}</b></p>
                        <p className = "descriptionFood"><i>{item.description}</i></p>
                        <p>${item.price}</p>
                        
                        </button>
                    </li>  
                ))
                }    

                       
                
            </ul>

        </div>
    )
}

export default Drinks
