import React, { Component } from 'react';
import styles from './Description.module.css';

class RecipeDescription extends React.Component {
  render() {
    return (
      <div>
        <div>
          <h1>Chocolate Chip Cookie</h1>
          <p>Cookie</p>
        </div>
        <RecipeAuthor />
      </div>
    );
  }
}

const RecipeAuthor = ()  => {
  // Local variables
  let authorLink = 'https://pinchofyum.com/'; 
  let authorPhoto = 'https://pinchofyum.com/wp-content/assets/images/about/lindsay-hero.jpg'; 
  let authorName = 'Lindsay'; 

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