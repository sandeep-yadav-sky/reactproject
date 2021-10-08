import React, { useRef } from "react";
import AddToCart from "./AddToCart";
import { useDrag, useDrop } from "react-dnd";
import { itemTypes } from "../constants";
import { products } from "../data";
// import { products } from "../data";

export default function DisplayProduct(props) {
  
  const ref = useRef(null);
  const [{ opacity }, drag] = useDrag(
    () => ({
      type: itemTypes.PRODUCT,
      collect: (monitor) => ({
        opacity: monitor.isDragging() ? 0.5 : 1,
      }),
      item: () => {
        return {...props}
      },
      end: (item, monitor) => {
        const dropResult = monitor.getDropResult();
        if (item && dropResult) {
          // const z  = products[props.index];
          // products[props.index] = products[item.props.index];
          // products[item.props.index] = z;
          // console.log("swapping done");
          // console.log(dropResult);
        }
      },
    }),
    []
  );

  const [{handlerId}, drop] = useDrop(() => ({
    accept: itemTypes.PRODUCT,
    drop: (product) => {
      // console.log("product is", product);
      return { ...product };
    },
    hover: (product, monitor) => {
      if (!ref.current) {
        return;
      }
      const dragIndex = product.index;
      const hoverIndex = props.index;
      if (dragIndex === hoverIndex) {
        return;
      }
      console.log("dragIndex=", dragIndex, "hoverIndex=", hoverIndex);
      // Determine rectangle on screen
      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      // Get vertical middle
      // const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const hoverMiddleX =
        (hoverBoundingRect.right - hoverBoundingRect.left) / 2;
      // Determine mouse position
      const clientOffset = monitor.getClientOffset();
      // Get pixels to the top
      const hoverClientX = clientOffset.x - hoverBoundingRect.left;
      // Only perform the move when the mouse has crossed half of the items height
      // When dragging downwards, only move when the cursor is below 50%
      // When dragging upwards, only move when the cursor is above 50%
      // Dragging downwards
      // console.log("hoverClientX=", hoverClientX, "hoverMiddleX=", hoverMiddleX);

      if (dragIndex < hoverIndex && hoverClientX < hoverMiddleX) {
        return;
      }

      if (dragIndex > hoverIndex && hoverClientX < hoverMiddleX) {
        return;
      }

      props.swapProducts(dragIndex, hoverIndex);
      product.index = hoverIndex;
      console.log("dragIndex=", dragIndex, "hoverIndex=", hoverIndex);
      // console.log("product index ", product.index);
    },
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      };
    },
  }));

  drag(drop(ref));
  return (
    <div>
      <div ref={ref} style={{ opacity }} className="Product" data-handler-id={handlerId}>
        <div className="Product-price"> Rs {props.price}</div>
        <div className="Image-container">
          <img src={props.img} alt="product" />
        </div>
        <div>{props.index}</div>
        <div className="Product-info">
          <div className="Product-name"> {props.name}</div>
          <div className="Product-desccription"> {props.description}</div>
        </div>
        <AddToCart productName={props.name} price={props.price} />
      </div>
    </div>
  );
}
