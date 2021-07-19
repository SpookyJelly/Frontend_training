import React from "react";
import "@/App.css";
import logo from "@/logo.svg";
import test from "@page/test";
import Style from "styled-components";
import firebase from "firebase";
import * as firebaseui from "firebaseui";
import FirebaseConfig from "./fb";

firebase.initializeApp(FirebaseConfig);

const auth = firebase.auth();
const ui = new firebaseui.auth.AuthUI(auth);

// const fb = require("firebase");
// const fbui = require("firebaseui");

// const ui = new fbui.auth.AuthUI(firebase.auth());
// console.log(ui);

ui.start("#firebaseui-auth-container", {
  signInOptions: [
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
  ],
});

const Container = Style.div`
  text-align: center;
  margin: 10% 10% 10% 10%;
`;

const Box = Style.div`
  width:100%;
`;

function App() {
  return (
    <Container>
      <p>hello world</p>
      <button>Click me</button>
      <Box>
        <div id="firebaseui-auth-container"></div>
      </Box>
    </Container>
  );
}

export default App;
