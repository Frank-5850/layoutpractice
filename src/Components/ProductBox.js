import React from "react";

const ProductBox = (props) => {
  const styles = {
    overAll: {
      border: "var(--celadon-color) solid",
      backgroundColor: "var(--honeydew-color)",
      borderRadius: "3rem",
      width: "90%",
      height: "200px",
      margin: "10px",
      display: "flex",
      padding: "3rem",
      color: "black",
    },
    text: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      // alignItems: "center",
      marginLeft: "10px",
      width: "100%",
    },
    button: {
      width: "100px",
    },
  };
  return (
    <div style={styles.overAll}>
      <img src={props.img} alt="" />
      <div style={styles.text}>
        <h2>{props.title}</h2>
        <div>
          <p>{props.description}</p>
          <p>$ {props.price}</p>
        </div>
        <button style={styles.button}>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductBox;
