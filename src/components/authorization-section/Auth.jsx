import Login from "./Login";
// TODO: Import Signup and Mount it

function Auth(props) {
  return (
    <>
      <h1>Hello from Auth</h1>
      <Login updateToken={props.updateToken} />
    </>
  );
}

export default Auth;
