import React from "react";
import "../css/NoticeStrip.css";

export default function NoticeStrip(props) {
  const {children, color} = props;
  //change this to use clsx and always have notice strip class, but add class for color}
  return (
    <>
      <div id="notice-strip">
        <p className="notice-strip-text blue">{children}</p>
      </div>
    </>
  );
}
