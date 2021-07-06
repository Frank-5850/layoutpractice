import React from "react";
// import "../index.css"

const SideNav = () => {
  const styles = {
    overAll: {
      backgroundColor: "var(--prussian-color)",
      color: "var(--imperial-color)",
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
    },
    listWrap: {
      height: "100%",
      backgroundColor: "white",
      width: "100%",
    },
    list: {
      listStyle: "none",
      height: "40vh",
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
