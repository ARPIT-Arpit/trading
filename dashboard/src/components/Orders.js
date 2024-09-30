import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Orders = () => {

  const [ allOrders, setallOrders ] = useState([]);

  useEffect( () => {

    axios.get("http://localhost:3002/allOrders")
    .then( (res) => {

      console.log(res.data);
      setallOrders( res.data );

    } );

  })

  return (


    <>
      <h3 className="title">Orders ({allOrders.length})</h3>

      <div className="order-table">
        <table>
          <tr>
            <th>Name</th>
            <th>Qty.</th>
            <th>Price</th>
            <th>Mode</th>
          </tr>

          {allOrders.map((stock, index) => {

          const profClass = ( stock.mode === "BUY" ) ? "profit" : "loss";

            return (
              <tr key={index}>
                <td>{stock.name}</td>
                <td>{stock.qty}</td>
                <td>{stock.price.toFixed(2)}</td>
                <td className={profClass}>
                  {stock.mode}
                </td>
              </tr>
            );
          })}
        </table>
      </div>
    </>


    // <div className="orders">
    //   <div className="no-orders">
    //     <p>You haven't placed any orders today</p>

    //     <Link to={"/"} className="btn">
    //       Get started
    //     </Link>
    //   </div>
    // </div>
  );
};

export default Orders;
