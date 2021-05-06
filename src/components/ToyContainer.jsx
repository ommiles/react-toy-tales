import React from 'react';
import ToyCard from './ToyCard'

const ToyContainer = ({ allToys, deleteToy, patchLikes }) => {
  return(
    <div id="toy-collection">
      {allToys.map(toy => <ToyCard toy={toy} key={toy.id} deleteToy={deleteToy} patchLikes={patchLikes} />)}
    </div>
  );
}

export default ToyContainer;
