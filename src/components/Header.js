import React from "react";

const Header = () => {
  return (
    <div style={headerStyle}>
      <h3>Welcome to your open sky dashboard</h3>
    </div>
  );
};

export default Header;

const headerStyle = {
  display: "flex",
  overflow: "hidden",
  justifyContent: "space-between",
  alignItems: "center",
};
