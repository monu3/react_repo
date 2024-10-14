const User = ( props ) => {
  if (props.loggedIn && props.isAdmin) {
    return <h1>This is admin .</h1>;
  } else {
    return <h1> this is user .</h1>;
  }
};

export default User;
