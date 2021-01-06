import React from "react";
import { useMessionsInfoQuery } from "../../generated/graphql";
import MessionList from "./MessionList";

const MessionContainer = () => {
  const { loading, error, data } = useMessionsInfoQuery();
  if (loading) return <h2>Loading...</h2>;
  if (error || !data) return <h2>Error..</h2>;

  // console.log("MY DTATA::", data);
  return <MessionList data={data} />;
};
export default MessionContainer;
