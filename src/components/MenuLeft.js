import React, { Component } from "react";
/*import { 
	ButtonToolbar,
	DropdownButton,
	MenuItem,
	Button,
	ButtonGroup,
	SplitButton
} from "react-bootstrap";*/
import { Link } from "react-router-dom";

class MenuLeft extends Component {
	constructor() {
		super();
		this.renderMenu = this.renderMenu.bind(this);
		this.renderDropdownButton = this.renderDropdownButton.bind(this);
		this.menuUl = this.menuUl.bind(this);
	}
	renderMenu(title, i, menuname) {
		const titleReal = title.name;
		const titleFanstasia = title.fantasia;
		const teste = title.subItens;

		//console.log(title);
		//console.log(teste);

		return (
			<Link to={`/${menuname}/${titleFanstasia}`} >
				
				{/*<Link to={`/${titleFanstasia}`}>*/}
				<ul
					className={"dropdown-menu " + `dropdown-menu0${i}`}
					title={titleReal}
					
				>
					<li className="dropdown-submenu">
						<a>{titleReal}</a>
						<ul className="dropdown-menu">

							{teste.map(function(itens, j) {
								
								const numul = 1;
								return (
									<li key={j}
										className="dropdown-submenu"
										
									>
										{" "}
										<Link to={`/${menuname}/${title.fantasia}/${itens.fantasia}`}>
											{" "}<a>{itens.name}</a>{" "}
										</Link>
										{itens.hasOwnProperty("subItens") &&
											this.menuUl(itens.subItens, numul)}
									</li>
								);
							}, this)}
						</ul>

					</li>

				</ul>

			</Link>
		);
	}
	menuUl(itens, numul) {
		numul++;
		//console.log("funcao");

		return (
			<ul className="dropdown-menu">
				{itens.map(function(subi, j) {
					// console.log(subi.name +" " +  itens.name + " " +title);
					return (
						<li key={j} className="dropdown-submenu">

							<Link to={`/${subi.fantasia}`}>
								{" "}<a>{subi.name}</a>{" "}
							</Link>
							{subi.hasOwnProperty("subItens") &&
								this.menuUl(subi.subItens, numul)}

						</li>
					);
				}, this)}
			</ul>
		);
	}
	renderDropdownButton(title, i, x) {
		return (
			<Link key={i} to={`/${title}`}>
				<ul className="dropdown-menu" title={title} key={i}>
					<li className="dropdown-submenu">
						<a>
							{title}
						</a>
						<ul className="dropdown-menu">

							{x.map(function(itens, j) {
								const itensSub = Object.keys(itens).map(
									keys => itens[keys]
								);
								/*const itensSub1 =
									itensSub[Object.keys(itensSub)[2]];*/
								// console.log(itensSub1);
								// console.log(itens.subItens[0].name);
								const numul = 1;
								return (
									<li eventKey={j}>

										{" "}
										<Link to={`/${itens.fantasia}`}>
											{" "}<a>{itens.name} </a>{" "}
										</Link>
										{itens.hasOwnProperty("subItens") &&
											this.menuUl(itens.subItens, numul)}

									</li>
								);
							}, this)}
						</ul>

					</li>
				</ul>
			</Link>
		);
	}

	render() {
		const itens = this.props.itens;
		const itensNames = Object.keys(itens).map(keys => itens[keys].name);
		const itensSub = Object.keys(itens).map(keys => itens[keys].itens);

		switch (this.props.menuname) {
			case "macroeconomico":
				var itenName = itensSub[Object.keys(itensSub)[0]];
				var menuname = itensNames[Object.keys(itensSub)[0]];
				var i = 0;
				/*var itenName2 = Object.keys(itenName).map(
					keys => itenName[keys].name
				);*/
				break;

			case "regional":
				var itenName = itensSub[Object.keys(itensSub)[1]];
				var menuname = itensNames[Object.keys(itensSub)[1]];
				var i = 1;
				/*var itenName2 = Object.keys(itenName).map(
					keys => itenName[keys].name
				);*/
				break;

			case "social":
				var itenName = itensSub[Object.keys(itensSub)[2]];
				var menuname = itensNames[Object.keys(itensSub)[2]];
				var i = 2;
				/*var itenName2 = Object.keys(itenName).map(
					keys => itenName[keys].name
				);*/
				break;

			default:
				var itenName = itensSub[Object.keys(itensSub)[0]];
				var menuname = itensNames[Object.keys(itensSub)[0]];
				var i = 0;
				/*var itenName2 = Object.keys(itenName).map(
					keys => itenName[keys].name
				);*/
				break;
		}

		//console.log (this.props.menuname)
		return (
			<div>

				<ul className={"nav " + this.props.menucolor}>
					<li className="active">
						<Link to={`/${menuname}`}>
							{menuname}	
						</Link>
						
					</li>

				</ul>

				<ul
					className="dropdown-menu dropdown-menu66"
					aria-labelledby="dropdownMenu"
				>
					{itenName.map(a => this.renderMenu(a, i, menuname))}

				</ul>

				<div className={this.props.sidecolor}> </div>

			</div>
		);
	}
}

export default MenuLeft;