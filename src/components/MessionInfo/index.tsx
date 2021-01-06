import React from "react";

import { useLounchMessionInfoQuery } from "../../generated/graphql";
import MessionInfo from "./MessionInfo";

interface Props {
  id: number;
}

const MessionInfoContainer = ({ id }: Props) => {
  const { data, loading, error } = useLounchMessionInfoQuery({
    variables: { id: String(id) },
  });
  if (loading) return <h2>Loading...</h2>;
  if (error || !data) return <h2>Error...</h2>;
  console.log("DATATA", data);
  return <MessionInfo data={data} />;
};
export default MessionInfoContainer;
