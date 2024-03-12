import React from 'react';
import styles from './Description.module.css'; 

function RecipePhoto() {
  const recipePhotoUrl = 'https://pinchofyum.com/cdn-cgi/image/width=680,height=99999,fit=scale-down/wp-content/uploads/Chocolate-Chip-Cookies.jpg';

  return (
    <img src={recipePhotoUrl} alt="recipe photo" className={styles.imageUpdates} />
  );
}

export default RecipePhoto; 