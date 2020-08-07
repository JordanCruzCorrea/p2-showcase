import React, { useState } from "react";
import Iframe from "react-iframe";
import Nav from "./nav";
import sites from "./assets/data/sites";
import Footer from "./footer";

function App() {
  const [site, setSite] = useState(sites[0]);
  const [allSites] = useState(sites);

  const handleChange = (e) => {
    let filtered = sites.filter((site) => site.title === e.target.value);
    // console.log(filtered[0]);
    setSite(filtered[0]);
  };

  const siteRender = () => {
    return (
      <Iframe url={site.url} className="p-4 pt-0 w-full h-full shadow-xl" />
    );
  };

  return (
    <div style={{ height: `100vh` }}>
      <Nav sites={allSites} handleChange={handleChange} />
      {siteRender()}
      <Footer />
    </div>
  );
}

export default App;
