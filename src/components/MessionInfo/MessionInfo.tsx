import React from "react";
import { LounchMessionInfoQuery } from "../../generated/graphql";

interface Props {
  data: LounchMessionInfoQuery;
}
const MessionInfo: React.FC<Props> = ({ data }) => {
  console.log("DATATA TWO", data);
  if (!data.launch) {
    return <div>no lounch available</div>;
  }
  return (
    <div>
      <h1>Mission Details</h1>
      <span>{data.launch.mission_name}</span>
      {/* {JSON.stringify(data)} */}
    </div>
  );
};

export default MessionInfo;
