import React, { Component } from 'react';
import styles from './Description.module.css';

class RecipeDescription extends Component {
  render() {
    return (
      <div>
        <div>
          <h1>Recipe Title</h1>
          <p>Short recipe description</p>
        </div>
        <RecipeAuthor />
      </div>
    );
  }
}

function RecipeAuthor() {
  // Local variables
  const authorLink = 'https://pinchofyum.com/'; 
  const authorPhoto = 'https://pinchofyum.com/wp-content/assets/images/about/lindsay-hero.jpg'; 
  const authorName = 'Lindsay'; 

  return (
    <div className="recipeAuthorBlock">
      <img src={authorPhoto} alt="Author's photo" className="imageUpdates" />
      <div>
        <h3>{authorName}</h3>
        <a href={authorLink}>Pinch of Yum</a> 
      </div>
    </div>
  );
}

export { RecipeAuthor, RecipeDescription };