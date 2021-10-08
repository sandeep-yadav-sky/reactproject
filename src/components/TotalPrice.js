import reactDom from "react-dom";
import { useSelector } from "react-redux";

export default function TotalPrice(props)
{
  const cart = useSelector(state => state)
  let totalPrice = 0;
  cart.forEach(element => {
    const itemIndex = props.products.findIndex((item) => item.name === element.name);
    totalPrice+=(itemIndex === -1)?0:props.products[itemIndex].price*element.count;
  });

  return (
    <div class = "totalPriceContainer">
    <div className= "totalPriceHeader">
      Total Price:
    </div>
    <div class = "totalPrice">{totalPrice} </div>
    </div>
  )
}