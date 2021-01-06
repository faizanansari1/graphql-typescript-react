//Schema One
import gql from 'graphql-tag';

export const MessionsInfo = gql`
query MessionsInfo{
    launches{
      flight_number
      mission_id
      mission_name
      launch_success
      launch_year
    }
  }
`;