import React from 'react'

export default function Recipe({title, calories, image, ingredients}) {
    return (
        <div className='recipe-container'>
            <img src={image} alt=""/>
            <h1 className='title'>{title}</h1>
            <ul className='ingredient-list'>
                {ingredients.map(ingredient => (
                    <li className='ingredient'>{ingredient.text}</li>
                ))}
            </ul>
            <p className='calories'>Calories: {calories.toFixed(0)}</p>
        </div>
    )
}
