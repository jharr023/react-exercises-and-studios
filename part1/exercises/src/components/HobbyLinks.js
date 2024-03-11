import React from 'react';

function HobbyLinks() {
  const hobbyLinks = [
    'https://www.warhammer.com/en-GB/home',
    'https://www.playstation.com/en-us/games/helldivers-2/',
  ];

  return (
    <div>
      <a href={hobbyLinks[0]}>Warhammer</a><br />
      <a href={hobbyLinks[1]}>Helldivers 2</a>
      {/* Add more <a> tags for additional links */}
    </div>
  );
}

export default HobbyLinks;