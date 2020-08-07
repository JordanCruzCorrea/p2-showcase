import React from "react";

export default function Nav({ sites, handleChange }) {
  const siteMap = () => {
    return sites.map((site) => (
      <option key={site.title} value={site.title}>
        {site.title} by: {site.author}
      </option>
    ));
  };

  return (
    <header className="w-full bg-blue-300 p-3 sticky top-0">
      <nav className="flex flex-col md:flex-row justify-center items-center md:justify-around">
        <span className="text-white text-xl">
          &hearts;Team Tara/Jordan P2 Showcase &hearts;
        </span>
        <select onChange={handleChange} className="p-2">
          {siteMap()}
        </select>
      </nav>
    </header>
  );
}
