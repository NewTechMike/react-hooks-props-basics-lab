import React from "react";
import user from "../data/user";
import { isPropertySignature } from "typescript";

function Links(){
  return (
    <div>
      <h3>Links</h3>
      <a href = "https://github.com/liza">{user.links.github}</a>
      <a href = "https://www.linkedin.com/in/liza/">{user.links.linkedin}</a>
    </div>
  );
}

export default Links;