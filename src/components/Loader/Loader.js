import React from "react";
import PuffLoader from "react-spinners/PuffLoader";

const Loader = ({ loading, size, color }) => {
  return (
    <div>
      <PuffLoader loading={loading} size={size} color={color} />
    </div>
  );
};

export default Loader;
