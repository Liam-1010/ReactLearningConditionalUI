import React from "react";

export default function Greeting(props) {
  if (props.language == "Spanish") {
    return <h2> Hola! you speak {props.language} </h2>;
  } else if (props.language == "French") {
    return <h2> Bonjour! you speak {props.language} </h2>;
  } else {
    return <h2> Hello! you speak {props.language} </h2>;
  }
}
