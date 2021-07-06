import React from "react";
// import "../index.css"

const SideNav = () => {
  const styles = {
    overAll: {
      // backgroundColor: "var(--green-color)",
      color: "var(--fontGreen-color)",
      // border: "var(--green-color) solid",
      width: "30%",
      height: "90vh",
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
      paddingBottom: "5px"
    },
    listWrap: {
      height: "100%",
      backgroundColor: "white",
      width: "100%",
    },
    list: {
      borderRight: "var(--greenFont-color) solid",
      listStyle: "none",
      height: "30vh",
      width: "100%",
      margin: "0",
      padding: "0",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-evenly",
      alignItems: "center",
      backgroundColor: "white",
    },
  };

  return (
    <div style={styles.overAll}>
      <h2 style={styles.header}>Categories</h2>
      <div style={styles.listWrap}>
        <ul style={styles.list}>
          <li>Mens</li>
          <li>Womens</li>
          <li>Kids</li>
          <li>Electionics</li>
        </ul>
      </div>
    </div>
  );
};

export default SideNav;
