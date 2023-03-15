import React from "react";
class Users extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        users: []
      };
    }
  
    componentDidMount() {
      fetch("http://localhost:8000/api/users")
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              users: result
            });
          },
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
    }
  
    render() {
      const { error, isLoaded, users } = this.state;
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
            <>
            <h1>Users list</h1>
          <ul>
            {users.map(item => (
              <li key={item.id}>
                {item.name} : {item.email}
              </li>
            ))}
          </ul>
          </>
        );
      }
    }
  }
  export default Users;