import React from "react";

export default function TernaryGreeting(props) {
  return <h2> {props.language === "French" ? "French" : "Hello"}</h2>;
}
