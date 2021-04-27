import React from 'react'

export default function Recipe({title, calories, image, ingredients}) {
    return (
        <div className='recipe-container'>
            <img className='recipe-image' src={image} alt=""/>
            <h1 className='recipe-title'>{title}</h1>
            <ul className='recipe-ingredient-list'>
                {ingredients.map(ingredient => (
                    <li className='recipe-ingredient'>{ingredient.text}</li>
                ))}
            </ul>
            <p className='recipe-calories'>Calories: {calories.toFixed(0)}</p>
        </div>
    )

}
