import React, { createContext, PureComponent } from 'react';
import PropTypes from 'prop-types';

const UserContext = createContext({
  user: {},
  updateUser: () => {},
});

export class UserProvider extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
  };

  constructor(props) {
    super(props);

    this.state = {
      user: {},
      updateUser: this.updateUser,
    };
  }

  updateUser = (newUser) => this.setState(prevState => ({ user: { ...prevState.user, newUser } }));

  render() {
    return (
      <UserContext.Provider value={this.state}>
        {this.props.children}
      </UserContext.Provider>
    )
  }
}

export default UserContext;
