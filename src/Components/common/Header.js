import React from "react"

export default function Footer(props) {
  console.log("props",props)
    return (
      <header>
        <p onClick={props.logout}>Log out</p>
       <h4>Home Page</h4>
      </header>
    )
  }

  