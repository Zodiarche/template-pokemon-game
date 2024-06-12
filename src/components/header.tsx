import React from "react";

const Header: React.FC = () => {
  return (
    <header id="header">
      <div className="wrapper">
        <div className="cols">
          <div className="col-l"></div>
          <div className="col-r">
            <nav>
              <ul></ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
