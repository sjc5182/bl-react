import React from 'react';
import { MiddleContent } from './style/';
import { Button, Input, Header } from 'semantic-ui-react';
import { gql, graphql } from 'react-apollo';

class Register extends React.Component {
  state = {
    username: '',
    email: '',
    password: '',
  };

  onSubmit = async () => {
    const response = await this.props.mutate({
      variables: this.state,
    })
    .then(({ data }) => {
      this.props.refetch();
    })
    .catch(error => {
      console.log(error);
    });
    console.log(response);
  };

  onChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { username, email, password } = this.state;

    return (
    <MiddleContent>
        <Header as="h2">Register</Header>
        <div>
        <Input
          size='small'
          name="username"
          onChange={this.onChange}
          value={username}
          placeholder="Username"
        />
        </div>
        <div>
        <Input size='small' name="email" onChange={this.onChange} value={email} placeholder="Email"/>
        </div>
        <div>
        <Input
          size='small'
          name="password"
          onChange={this.onChange}
          value={password}
          type="password"
          placeholder="Password"
        />
        </div>
        <Button onClick={this.onSubmit}>Submit</Button>
      </MiddleContent>
    );
  }
}

const registerMutation = gql`
  mutation($username: String!, $email: String!, $password: String!) {
    register(username: $username, email: $email, password: $password)
  }
`;

export default graphql(registerMutation)(Register);
