import React from "react";

const Nav = () => {
  const styles = {
    nav: {
      width: "100%",
      height: "10vh",
      backgroundColor: "black",
      color: "white",
      display: "flex",
      position: "sticky",
      top: "0",
    },
    listStyle: {
      listStyle: "none",
      display: "flex",
      width: "100%",
      justifyContent: "space-around",
      alignItems: "center",
    },
  };

  return (
    <nav style={styles.nav}>
      <ul style={styles.listStyle}>
        <li>Home</li>
        <li>Products</li>
        <li>Cart</li>
      </ul>
    </nav>
  );
};

export default Nav;
