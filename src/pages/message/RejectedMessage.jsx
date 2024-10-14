import React from "react";

const RejectedMessage = ({isticketDescription}) => {
  return (
    <>
      <p dangerouslySetInnerHTML={{ __html: isticketDescription }} />
    </>
  );
};

export default RejectedMessage;
