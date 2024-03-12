import React from 'react';
import styles from './Ingredients.module.css';


function RecipeIngredients() {
  // Array containing the top 5 ingredients
  const ingredients = [
    '8 tablespoons of salted butter',
    '1 teaspoon vanilla',
    '3/4 cup chocolate chips',
    '1 1/2 cups all purpose flour',
    '1 egg'
  ];

  return (
    <div>
      <h3>Recipe Ingredients</h3>
      <ul className={styles.ingredientList}>
        <li>{ingredients[0]}</li>
        <li>{ingredients[1]}</li>
        <li>{ingredients[2]}</li>
        <li>{ingredients[3]}</li>
        <li>{ingredients[4]}</li>
      </ul>
    </div>
  );
}

export default RecipeIngredients;