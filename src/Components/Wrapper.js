import React from "react";

const Wrapper = (props) => {
  const styles = {
    display: "flex",
    width: "100%",
  };
  return <div style={styles}>{props.children}</div>;
};

export default Wrapper;
