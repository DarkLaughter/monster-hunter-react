import React from 'react'
import DishCard from './DishCard'

export default function DishContainer(props) {
    let componentArr = props.foodArr.map((food) => {
        return <DishCard
        name={food.name}
        image={food.image}
        key={food.id}
        />
    }
    )
    return (
        <div>
           {componentArr} 
        </div>
    )
}

// [{
//     id: 1,
//     name: "Meow",
//     location: "xxx",
//     Meals: [{
//         id: 1,
//         name: "Meaty",
//         Image: "sssss.jpg",
//         Dish: [{
//             id: 1,
//             name: "chicken",
//             image: "swwww.jpg",
//             recipes: [{
//                 id: 1,
//                 ingredients: "apple:10g, banana: 49g",
//                 instructions: "Mix everything!!"
//             }, {}]
//         }, {}, {}, {}, {}]

//     }, {}, {}]
// },{

// }]