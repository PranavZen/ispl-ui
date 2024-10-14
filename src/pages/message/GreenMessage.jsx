import React from "react";

function GreenMessage({ isticketDescription }) {
  return (
    <>
      <p dangerouslySetInnerHTML={{ __html: isticketDescription }} />
    </>
  );
}

export default GreenMessage;
