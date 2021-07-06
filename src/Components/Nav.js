import React from "react";

const Nav = () => {
  const styles = {
    nav: {
      width: "100%",
      height: "10vh",
      // borderBottom: "var(--powder-color) solid",
      backgroundColor: "var(--green-color)",
      color: "white",
      display: "flex",
      position: "sticky",
      top: "0",
    },
    logo: {
      width: "30%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },

    listStyle: {
      listStyle: "none",
      display: "flex",
      width: "70%",
      justifyContent: "space-around",
      alignItems: "center",
    },
  };

  return (
    <nav style={styles.nav}>
      <div style={styles.logo}>
        <h1>TITLE</h1>
      </div>
      <ul style={styles.listStyle}>
        <li>Home</li>
        <li>Products</li>
        <li>Cart</li>
      </ul>
    </nav>
  );
};

export default Nav;
