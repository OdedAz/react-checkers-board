import React from "react";
import { useDrag } from "react-dnd";
import blackMan from "../../assets/black-man.svg";
import { ItemTypes } from "./../../utils";

const BlackMan = (props) =>  {
  const [{ isDragging }, dragRef] = useDrag({
      type: ItemTypes.BLACKMAN,
      item:  {id: props.id,location: props.location},
      collect: (monitor) => ({
        isDragging: !!monitor.isDragging(),
      }),
    }
  );

  return (
    <img
      src={blackMan}
      alt={"A black man."}
      className={"piece"}
      ref={dragRef}
      style={{ border: isDragging ? "5px solid red" : "0px" }}
    />
  );
}

export default BlackMan;
