import React, { useState } from "react";

function Forms() {
  const [name, setName] = useState("");
  return (
    <div>
      <form>
        <label htmlFor="name">Name: </label>
        <input onChange={(event) => setName(event.target.value)} id="name" />
      </form>
      {name ? <strong>Hello {name}</strong> : "Please type your name"}
    </div>
  );
}

export default Forms;
