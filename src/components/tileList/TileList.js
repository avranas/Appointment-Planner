import React from "react";
import {Tile} from '../tile/Tile'

export const TileList = (props) => {
  return (
    <ol>
      {
        props.data.map( (object, index) => {
          return (  
            <li>
              <Tile 
                object={object}
                index={index}
              />
            </li>
          )
        })
      }
    </ol>
  );
};
