import React from "react";
import Carousel from "nuka-carousel";
import ProjectStyle from "./Projects.module.css"

const projects = props => {
  return (
    <div id="projects"> 
      <Carousel className={ProjectStyle.carrocel}>
        <img src="http://placehold.it/1000x400/ffffff/edcbe6/&text=Projeto1" />
        <img src="http://placehold.it/1000x400/edcbe6/ffffff/&text=Projeto2" />
        <img src="http://placehold.it/1000x400/ffffff/edcbe6/&text=Projeto3" />
        <img src="http://placehold.it/1000x400/edcbe6/ffffff/&text=Projeto4" />
      </Carousel>
    </div>
  );
};

export default projects;
