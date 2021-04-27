import React from 'react'

export default function Recipe({title, calories, image, ingredients}) {
    return (
        <div>
            <h1 className='title'>{title}</h1>
            <ul className='ingredient-list'>
                {ingredients.map(ingredient => (
                    <li className='ingredient'>{ingredient.text}</li>
                ))}
            </ul>
            <p className='calories'>Calories: {calories.toFixed(0)}</p>
            <img src={image} alt=""/>
        </div>
    )
}
