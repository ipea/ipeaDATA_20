import React, { Component } from "react";
import {
	ButtonToolbar,
	DropdownButton,
	MenuItem,
	Button,
	ButtonGroup,
	SplitButton
} from "react-bootstrap";
import { Link } from "react-router-dom";

class MenuLeft extends Component {
	constructor() {
		super();
		this.renderMenu = this.renderMenu.bind(this);
		this.renderDropdownButton = this.renderDropdownButton.bind(this);
		this.menuUl = this.menuUl.bind(this);
	}
	renderMenu(title, i) {
		const titleReal = title.name;
		const titleFanstasia = title.fantasia;
		const teste = title.subItens;

		//console.log(title);
		//console.log(teste);

		return (
			<Link to={`/${this.props.menuname}/${titleFanstasia}`}>
				{/*<Link to={`/${titleFanstasia}`}>*/}
				<ul
					className="menu"
					title={titleReal}
					key={i}
					id={`dropdown-basic-${i}`}
				>
					<li>
						{titleReal}
						<ul className="submenu-2">

							{teste.map(function(itens, j) {
								const numul = 1;
								return (
									<li eventKey={j}>
										{" "}
										<Link to={`/${itens.fantasia}`}>
											{" "}{itens.name}{" "}
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
			<ul className={`submenu-${numul}`}>
				{itens.map(function(subi, j) {
					// console.log(subi.name +" " +  itens.name + " " +title);
					return (
						<li eventKey={j}>
							<Link to={`/${subi.fantasia}`}> {subi.name} </Link>
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
			<Link to={`/${title}`}>
				<ul
					className="menu"
					title={title}
					key={i}
					id={`dropdown-basic-${i}`}
				>
					<li>
						{title}
						<ul className="submenu-1">

							{x.map(function(itens, j) {
								const itensSub = Object.keys(itens).map(
									keys => itens[keys]
								);
								const itensSub1 =
									itensSub[Object.keys(itensSub)[2]];
								// console.log(itensSub1);
								// console.log(itens.subItens[0].name);
								const numul = 1;
								return (
									<li eventKey={j}>
										{" "}
										<Link to={`/${itens.fantasia}`}>
											{" "}{itens.name}{" "}
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
		//const itensSub = Object.keys(itens).map((keys) => itens[keys].itens)

		//const itens = this.props.itens
		//console.log(itens)
		//const itensNames = Object.keys(itens).map((keys) => itens[keys].name)
		//console.log(itensSub)

		var test2 = null;
		var x = Object.keys(itens).map(keys => itens[keys].itens);
		//console.log(x)

		//var teste10 = itensSub
		//console.log(itens.regional)
		// const test2 = Object.keys(test).map((keys) => test[keys].name);

		switch (this.props.menuname) {
			case "macroeconomico":
				var itenName = itensSub[Object.keys(itensSub)[0]];
				var i = 0;
				var itenName2 = Object.keys(itenName).map(
					keys => itenName[keys].name
				);
				break;

			case "regional":
				var itenName = itensSub[Object.keys(itensSub)[1]];
				var i = 1;
				var itenName2 = Object.keys(itenName).map(
					keys => itenName[keys].name
				);
				break;

			case "social":
				var itenName = itensSub[Object.keys(itensSub)[2]];
				var i = 2;
				var itenName2 = Object.keys(itenName).map(
					keys => itenName[keys].name
				);
				break;

			default:
				var itenName = itensSub[Object.keys(itensSub)[0]];
				var i = 0;
				var itenName2 = Object.keys(itenName).map(
					keys => itenName[keys].name
				);
				break;
		}

		//console.log (this.props.menuname)
		return (
			<div className="menucolor">
				<div className="container-fluid">
					<div className="row">
						<div className="col-sm-3 col-md-2 sidebar">
							<ul className={"nav " + this.props.menucolor}>
								<li className="active">
									<a href={"/" + this.props.menuname}>
										{this.props.menuname}
										{" "}
										<span className="sr-only">
											(current)
										</span>
									</a>
								</li>
								<ButtonGroup>
									{itenName.map(a => this.renderMenu(a, i))}
								</ButtonGroup>
								{/*<ButtonToolbar item={x}>{itenName2.map((a) => this.renderDropdownButton(a, i, x))}</ButtonToolbar>*/}

							</ul>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default MenuLeft;