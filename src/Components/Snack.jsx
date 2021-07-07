import React from 'react'
import {Menu} from '../Menu.json'
import {Link} from 'react-router-dom'
//let arrayMenu = require('./Menu.json');

const Snack = () => {


    const [food, setFood] = React.useState(Menu)
    //console.log(food)

    React.useEffect(() => {

        setFood(food)
        //fetchData()
    }, [])


    let snackFood = food.filter(item => item.type === "Acompañamiento")

    function snackBtnFood() {   
        console.log('click')
    }

    return ( 
        <div>
            <ul>
                {
                snackFood.map((item,i)=> ( 
                       <li key={i}> 
                       <button className = "snacks" style={{height:400, width: 300}} onClick = {() => snackBtnFood()}>
                        {<img src = {item.images} style={{height:200, width: 250}}/>}
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



export default Snack