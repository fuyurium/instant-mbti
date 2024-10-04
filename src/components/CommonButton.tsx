import React from "react";

function CommonButton(props: {
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      className="border border-gray-400 rounded-md px-4 py-1 active:bg-gray-400"
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}

export default CommonButton;
