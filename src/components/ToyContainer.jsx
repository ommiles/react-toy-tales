import React from 'react';
import ToyCard from './ToyCard'

const ToyContainer = (props) => {
  return(
    <div id="toy-collection">
      {props.toys.map((toy) => (
        <ToyCard
          key={toy.id}
          id={toy.id}
          name={toy.name}
          image={toy.image}
          likes={toy.likes}
          deleteToy={props.deleteToy}
          updateToy={props.updateToy}
        />
      ))}
    </div>
  )
};

export default ToyContainer;
