import React, { Component } from "react";
import ReactDOM from "react-dom";
import Menu, { SubMenu, Item as MenuItem, Divider } from "rc-menu";
import "rc-menu/assets/index.css";
import { Link } from "react-router-dom";

export class MenuLeftCustom extends Component {

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
/*
		function handleSelect(info) {
			console.log("selected ", info);
		}

		function handleClick(info) {
			console.log("click ", info);
		}

		const titleRight = (
			<span>
				sub menu
				<i className="fa fa-caret-right pull-right" />
			</span>
		);
		const titleRight1 = (
			<span>
				sub menu 1
				<i className="fa fa-caret-right pull-right" />
			</span>
		);
		const titleRight2 = (
			<span>
				sub menu 2
				<i className="fa fa-caret-right pull-right" />
			</span>
		);
		const titleRight3 = (
			<span>
				sub menu 3
				<i className="fa fa-caret-right pull-right" />
			</span>
		);*/

		const leftMenu = (
			<Menu>
				<SubMenu title={itenName.map(a => this.renderMenu(a, i))} key="1">
				{/*	<MenuItem key="1-1">0-1</MenuItem>
					<MenuItem key="1-2">0-2</MenuItem>*/}
				</SubMenu>
				
			</Menu>
		);

		return (
			<div>
				<link
					href="//cdn.bootcss.com/font-awesome/4.2.0/css/font-awesome.css"
					rel="stylesheet"
				/>
				<div style={{ width: 200 }}>{leftMenu}</div>
			</div>
		);
	}
}

export default MenuLeftCustom;