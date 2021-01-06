//show the List UI
import React from "react";
import { MessionsInfoQuery } from "../../generated/graphql";

// interface Props {
//   handleIdChange: (newId: number) => void;
// }

interface Props {
  data: MessionsInfoQuery;
}
const MessionList: React.FC<Props> = ({ data }) => {
  console.log("PROPS DATA::", data);
  return (
    <div>
      <h1>Missions</h1>
      <ul>
        {data.launches?.map((lounchObj, ind) => {
          return (
            <li key={ind} onClick={() => console.log("GET INDEX", ind)}>
              {/* <span>{lounchObj?.mission_id}</span> */}
              {lounchObj?.mission_name}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MessionList;
