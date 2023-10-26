/* 
- Create a form that will collect email and password
- Create a function that will handle the submit
- Create state variables to capture the email and password

- What needs happen when the login is successful?
*/
import React, { useState } from "react";
import { Form, FormGroup, Label, Input } from "reactstrap";
import PetButton from "../../ui/PetButton";
import { API_USER_LOGIN } from "../../constants/endpoints";

function Login(props) {
  const [email, setEmail] = useState("test1@test.com");
  const [password, setPassword] = useState("password1234");

  async function handleSubmit() {
    // Try Catch
    try {
      // Headers
      let myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      // Body
      const body = {
        email: email,
        password: password,
      };

      // Request Options
      const requestOption = {
        method: "POST",
        headers: myHeaders,
        body: JSON.stringify(body),
      };

      // Send Request
      const response = await fetch(API_USER_LOGIN, requestOption);

      //  Get A Response
      const data = await response.json();
      //   Update the token
      props.updateToken(data.token);

      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <div className="d-flex justify-content-center mt-5">
        <div
          className="secondary-background p-5 rounded"
          style={{ width: "450px", height: "370px" }}
        >
          <h2 className="text-center font-primary bold">LOGIN FORM</h2>
          <Form>
            {/* Form Group Email */}
            <FormGroup>
              <Label for="email">Email</Label>
              <Input
                id="email"
                name="email"
                placeholder="Enter Email Address"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormGroup>
            {/* Form Group Email Ending */}
            {/* Form Group Password */}
            <FormGroup>
              <Label for="password">Password</Label>
              <Input
                id="password"
                name="password"
                placeholder="Enter Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormGroup>
            {/* Form Group Password Ending */}
            <PetButton title="Login" onClick={handleSubmit} />
          </Form>
        </div>
      </div>
    </>
  );
}

export default Login;
