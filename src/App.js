import React from "react";
import NavBar from "./components/Navbar/NavBar";
import Banner from "./components/Banner/Banner";
import RowPost from "./components/RowPost/RowPost";
import { action,originals,comedyMovies,horrorMovies,romanceMovies,documentaries } from "./components/urls";


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPost title='Netflix Originals' url={originals} />
      <RowPost title='Action Movies' isSmall url={action}/>
      <RowPost title='Comedy Movies' isSmall url={comedyMovies}/>
      <RowPost title='Horror Movies' isSmall url={horrorMovies}/>
      <RowPost title='Romance Movies' isSmall url={romanceMovies}/>
      <RowPost title='Documentaries' isSmall url={documentaries}/>
      
    </div>
  );
}

export default App;
