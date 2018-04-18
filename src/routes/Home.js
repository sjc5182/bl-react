import React from 'react';
import { gql, graphql } from 'react-apollo';


const Home = ({ data: { allUsers = [] } }) => allUsers.map(u => <li key={u.id}>{u.email}</li>);

const allUsersQuery = gql`
  {
    allUsers {
      id
      email
    }
  }
`;

export default graphql(allUsersQuery)(Home);
