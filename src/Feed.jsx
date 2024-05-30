import React from "react";

export default function Feed({ title, link, publicationsDate }) {
  return (
    <div>
      <h4>{title}</h4>
      <a href={link}>{link}</a>
      <p>{publicationsDate}</p>
    </div>
  );
}
