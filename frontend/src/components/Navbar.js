import React from "react";
export default function Navbar() {
  return (
    <nav className="nav">
      <a href="/" className="site-title">
        Roomate Rivalry
      </a>
      <ul>
        <li>
          <a href="/roomates">Roomates</a>
        </li>
        <li>
          <a href="/chores">Chores</a>
        </li>
        <li>
          <a href="/points">Points</a>
        </li>
      </ul>
    </nav>
  );
}
