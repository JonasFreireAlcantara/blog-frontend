import React, { Component } from "react";

import api from '../../services/api';

import "./styles.css";

import ReactLogo from "../../assets/react-logo.png";

import AccordionMenu from "../accordion-menu";

// const links = [
//   {
//     title: "Docker",
//     url: "url1"
//   },
//   {
//     title: "Machine Learning",
//     url: "url2"
//   },
//   {
//     title: "Web Development",
//     url: "url3"
//   },
//   {
//     title: "Security",
//     url: "url4"
//   }
// ];


class Header extends Component {

  constructor() {
    super();
    this.state = {};
  }


  async componentDidMount() {
    const categories = await (await api.get('/categories')).data;
  
    let links = [];
  
    if (categories) {
      links = categories.map( category => ({
        title: category.name,
        url: `/category/${category.url}`,
      }))
    }
    
    this.setState({ links });
  }


  render() {
    const links = this.state.links || [];

    return (
      <header>
        <div className="header-content">
          <img className="blog-logo" alt="Espaço da Tecnologia" src={ReactLogo} />

          <div className="blog-title">
            <strong className="title">Espaço da Tecnologia</strong>
            <strong className="subtitle">10110001 11010110</strong>

            <nav>
              <AccordionMenu
                className="header-navigation-button"
                title="Home"
                url="/"
              ></AccordionMenu>
              <AccordionMenu
                className="header-navigation-button"
                title="Sobre"
                url="/about"
              ></AccordionMenu>
              <AccordionMenu
                className="header-navigation-button"
                title="Categorias"
                links={links}
              ></AccordionMenu>
            </nav>
          </div>
        </div>

        <hr />
      </header>
    )
  };
}

export default Header;
