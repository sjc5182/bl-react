import React from 'react';
import { gql, graphql } from 'react-apollo';
import { RightUserContents } from './style/';
//import { UpdateUser} from '../middle'

class Users extends React.Component {
  render() {
    const { allUsers = [] } = this.props.data;
    const usersList = allUsers
      ? allUsers.map(u => <li key={u.id}>{u.email}</li>)
      : null;
    return (
      <RightUserContents>
        {usersList}
      </RightUserContents>
    );
  }
}

const allUsersQuery = gql`
  {
    allUsers {
      id
      email
    }
  }
`;

export default graphql(allUsersQuery)(Users);
