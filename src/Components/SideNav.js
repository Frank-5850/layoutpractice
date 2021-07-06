import React from "react";

const SideNav = () => {
  const styles = {
    overAll: {
      backgroundColor: "grey",
      width: "30%",
      height: "100vh",
      position: "sticky",
      top: "10vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "flex-start",
    },
    header: {
      margin: "0",
      padding: "20px",
    },
    list: {
      listStyle: "none",
      height: "40vh",
      margin: "0",
      padding: "0",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-evenly",
    },
  };

  return (
    <div style={styles.overAll}>
      <h2 style={styles.header}>Categories</h2>
      <ul style={styles.list}>
        <li>Mens</li>
        <li>Womens</li>
        <li>Kids</li>
        <li>Electionics</li>
      </ul>
    </div>
  );
};

export default SideNav;
