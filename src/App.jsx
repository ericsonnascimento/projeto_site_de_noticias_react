import React from "react";
import "./styles/App.css"
import { Navbar } from "./components/Navbar/Navbar";
import { Article } from "./components/Article/Article";

import articleIMG1 from "./assets/image/article1.png"
import articleIMG2 from "./assets/image/article2.png"
import articleIMG3 from "./assets/image/article3.png"

//Conmponente em classe é uma classe que herda a classe "Component" do React, e retorna HTML dentro do método "render()"

class App extends React.Component {
  //Metodo responsável por renderizar o conteudo HTML do nosso componente
  render() {
    return (
      <>
        <Navbar/>

        <section id="articles">
          <Article 
            tittle="Designing Dashboards"
            provide="NASA"
            description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
            thumbnail= {articleIMG1}
          />

          <Article
            tittle="Vibrant Portraits of 2020"
            provide="SpaceNews"
            description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
            thumbnail= {articleIMG2}
          />
          
          <Article
            tittle="36 Days of Malayalam type"
            provide="Spaceflight Now"
            description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
            thumbnail= {articleIMG3}
          />
            
          <Article
            tittle="Designing Dashboards"
            provide="NASA"
            description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
            thumbnail= {articleIMG1}
          />
        </section> 
      </>
    );
  };
};

export default App;
