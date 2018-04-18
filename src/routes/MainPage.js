import React from 'react';
import AppLayout from '../components/AppLayout';
import LeftBarMenu from '../components/left-bar/left-side-menu';
import Register from '../components/middle-bar-signup/signup';
import UsersList from '../components/right-bar/user-contents';
import Home2 from './Home';

export default class App extends React.Component {
  state = {
    openRegister : false,
  };

  handleAddClientClick = () => {
    this.setState({ openRegister: true });

  }
  
  render() {
    return (
      console.log(this.state.openRegister),
      <AppLayout>
        <LeftBarMenu onAddClientClick={this.handleAddClientClick} />
        <div>
          { this.state.openRegister && <Register /> }
        </div>
        <UsersList/>
      </AppLayout>
        )
    }
};
