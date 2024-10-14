import React from "react";

const NotAttended = ({ isticketDescription }) => {
  return (
    <>
      <p dangerouslySetInnerHTML={{ __html: isticketDescription }} />
    </>
  );
};

export default NotAttended;
