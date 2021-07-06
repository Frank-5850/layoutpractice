import React from "react";

const Main = (props) => {
  const styles = {
    backgroundColor: "var(--grey-color)",
    width: "70%",
    display: "flex",
    flexFlow: "wrap",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
  };

  return <main style={styles}>{props.children}</main>;
};

export default Main;
