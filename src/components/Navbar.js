import React, { Component } from "react";
import { NavDropdown, MenuItem, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import img1 from '../imgs/logo.gif';
import img2 from '../imgs/logo_ipea.gif';
import img3 from '../imgs/ico_inglaterra.gif';

/*import Metadados from "./Metadados";
import Equipe from "./Equipe";
import Content from "./Content";*/

class Navbar extends Component {
    constructor() {
        super();
        this.renderDropdownButton = this.renderDropdownButton.bind(this);
    }

    renderDropdownButton(title, i, x) {
        return (
            <Link key={i} to={`/${title}`}>
                <NavDropdown
                    className="navbar-form navbar-right"
                    title={title}
                    id="basic-nav-dropdown"
                >
                    {x.map(function(object, i) {
                        return (
                            <MenuItem eventKey={i} key={i}>
                                {" "}
                                <Link to={`/${object.fantasia}`}>
                                    {" "}{object.name}{" "}
                                </Link>
                                {" "}
                            </MenuItem>
                        );
                    })}
                </NavDropdown>
            </Link>
        );
    }

    render() {
        const itens = this.props.itens;
        const itensNames = Object.keys(itens).map(keys => itens[keys].name);
        const itensSub = Object.keys(itens).map(keys => itens[keys].itens);

        return (
            <nav className="navbar navbar-custom navbar-fixed-top">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button
                            type="button"
                            className="navbar-toggle collapsed"
                            data-toggle="collapse"
                            data-target="#navbar"
                            aria-expanded="false"
                            aria-controls="navbar"
                        >
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar" />
                            <span className="icon-bar" />
                            <span className="icon-bar" />
                        </button>

                        <a
                            href={"/" + this.props.navname}
                            className="navbar-brand"
                        >
                            <img alt="imagem" src={img1} />
                        </a>
                        <a href="#" className="navbar-icone">
                            <img alt="imagem" src={img3} />
                        </a>
                    </div>
                    <div id="navbar" className="navbar-collapse collapse">
                        <ul className="nav navbar-nav navbar-right">
                            <li><a href="#">Fale Conosco</a></li>

                            <a
                                href={"/" + this.props.navname}
                                className="navbar-brand"
                            >
                                <img alt="imagem" src={img2} />
                            </a>
                        </ul>

                        <Button className="navbar-form navbar-right">
                            {itensNames.map((a, i) =>
                                this.renderDropdownButton(a, i, itensSub[i])
                            )}
                        </Button>

                        <form className="navbar-form navbar-right">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Pesquisa..."
                            />
                            <button type="submit" className="btn btn-default">
                                Pesquisar
                            </button>
                        </form>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navbar;