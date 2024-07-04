import React from "react";

function Layout({ children }) {
  return (
    <section id="pageWrapSection">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 col-md-12 mx-auto">{children}</div>
        </div>
      </div>
    </section>
  );
}

export default Layout;
