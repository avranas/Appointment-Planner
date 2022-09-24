import React from "react";

export const Tile = (props) => {
  const values = Object.values(props.object);
  return (
    values.map( (object, index) => {
      if(typeof values[index] == 'object'){
        return(
          <Tile
            object={object}
            index={index}
          />
        )
      } else {
        return <p>{values[index]}</p>
      }
    })
  );
};
