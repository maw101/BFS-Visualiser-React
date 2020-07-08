import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './BFS.css';

const DEFAULT_WALLS = ['{"column":19,"row":-12,"s":-7}','{"column":19,"row":-11,"s":-8}','{"column":-7,"row":-12,"s":19}','{"column":-6,"row":-12,"s":18}','{"column":18,"row":-12,"s":-6}','{"column":-5,"row":-12,"s":17}','{"column":-4,"row":-12,"s":16}','{"column":-3,"row":-12,"s":15}','{"column":-2,"row":-12,"s":14}','{"column":-1,"row":-12,"s":13}','{"column":0,"row":-12,"s":12}','{"column":1,"row":-12,"s":11}','{"column":2,"row":-12,"s":10}','{"column":3,"row":-12,"s":9}','{"column":7,"row":-12,"s":5}','{"column":17,"row":-12,"s":-5}','{"column":16,"row":-12,"s":-4}','{"column":15,"row":-12,"s":-3}','{"column":14,"row":-12,"s":-2}','{"column":12,"row":-12,"s":0}','{"column":11,"row":-12,"s":1}','{"column":13,"row":-12,"s":-1}','{"column":10,"row":-12,"s":2}','{"column":9,"row":-12,"s":3}','{"column":8,"row":-12,"s":4}','{"column":6,"row":-12,"s":6}','{"column":4,"row":-12,"s":8}','{"column":5,"row":-12,"s":7}','{"column":-8,"row":-11,"s":19}','{"column":-8,"row":-10,"s":18}','{"column":-9,"row":-9,"s":18}','{"column":-9,"row":-8,"s":17}','{"column":-10,"row":-7,"s":17}','{"column":-10,"row":-6,"s":16}','{"column":-11,"row":-5,"s":16}','{"column":-11,"row":-4,"s":15}','{"column":-12,"row":-3,"s":15}','{"column":-12,"row":-2,"s":14}','{"column":-13,"row":-1,"s":14}','{"column":-13,"row":0,"s":13}','{"column":-14,"row":1,"s":13}','{"column":-14,"row":2,"s":12}','{"column":-15,"row":3,"s":12}','{"column":-15,"row":4,"s":11}','{"column":-16,"row":5,"s":11}','{"column":-16,"row":6,"s":10}','{"column":-17,"row":7,"s":10}','{"column":-17,"row":8,"s":9}','{"column":-18,"row":9,"s":9}','{"column":-18,"row":10,"s":8}','{"column":-19,"row":11,"s":8}','{"column":-19,"row":12,"s":7}','{"column":-18,"row":12,"s":6}','{"column":-17,"row":12,"s":5}','{"column":-16,"row":12,"s":4}','{"column":-14,"row":12,"s":2}','{"column":-13,"row":12,"s":1}','{"column":-11,"row":12,"s":-1}','{"column":-10,"row":12,"s":-2}','{"column":-9,"row":12,"s":-3}','{"column":-7,"row":12,"s":-5}','{"column":-6,"row":12,"s":-6}','{"column":-5,"row":12,"s":-7}','{"column":-4,"row":12,"s":-8}','{"column":-2,"row":12,"s":-10}','{"column":-1,"row":12,"s":-11}','{"column":1,"row":12,"s":-13}','{"column":2,"row":12,"s":-14}','{"column":3,"row":12,"s":-15}','{"column":4,"row":12,"s":-16}','{"column":5,"row":12,"s":-17}','{"column":6,"row":12,"s":-18}','{"column":7,"row":12,"s":-19}','{"column":0,"row":12,"s":-12}','{"column":-3,"row":12,"s":-9}','{"column":-8,"row":12,"s":-4}','{"column":-12,"row":12,"s":0}','{"column":-15,"row":12,"s":3}','{"column":18,"row":-10,"s":-8}','{"column":18,"row":-9,"s":-9}','{"column":17,"row":-8,"s":-9}','{"column":17,"row":-7,"s":-10}','{"column":16,"row":-6,"s":-10}','{"column":16,"row":-5,"s":-11}','{"column":15,"row":-4,"s":-11}','{"column":15,"row":-3,"s":-12}','{"column":14,"row":-2,"s":-12}','{"column":14,"row":-1,"s":-13}','{"column":13,"row":1,"s":-14}','{"column":12,"row":2,"s":-14}','{"column":12,"row":3,"s":-15}','{"column":11,"row":4,"s":-15}','{"column":11,"row":5,"s":-16}','{"column":10,"row":6,"s":-16}','{"column":9,"row":8,"s":-17}','{"column":9,"row":9,"s":-18}','{"column":8,"row":10,"s":-18}','{"column":8,"row":11,"s":-19}','{"column":10,"row":7,"s":-17}','{"column":13,"row":0,"s":-13}','{"column":-6,"row":-8,"s":14}','{"column":-5,"row":-9,"s":14}','{"column":-4,"row":-10,"s":14}','{"column":-7,"row":-7,"s":14}','{"column":-7,"row":-6,"s":13}','{"column":-7,"row":-5,"s":12}','{"column":-8,"row":-4,"s":12}','{"column":-9,"row":-3,"s":12}','{"column":-16,"row":11,"s":5}','{"column":-16,"row":10,"s":6}','{"column":-16,"row":9,"s":7}','{"column":-15,"row":8,"s":7}','{"column":-14,"row":7,"s":7}','{"column":-13,"row":6,"s":7}','{"column":-12,"row":5,"s":7}','{"column":-12,"row":2,"s":10}','{"column":-12,"row":3,"s":9}','{"column":-11,"row":3,"s":8}','{"column":-10,"row":3,"s":7}','{"column":-10,"row":4,"s":6}','{"column":-10,"row":5,"s":5}','{"column":-10,"row":6,"s":4}','{"column":-11,"row":7,"s":4}','{"column":1,"row":9,"s":-10}','{"column":2,"row":7,"s":-9}','{"column":3,"row":6,"s":-9}','{"column":3,"row":5,"s":-8}','{"column":4,"row":4,"s":-8}','{"column":1,"row":8,"s":-9}','{"column":-2,"row":-7,"s":9}','{"column":-1,"row":-6,"s":7}','{"column":-2,"row":-6,"s":8}','{"column":0,"row":-5,"s":5}','{"column":-1,"row":-5,"s":6}','{"column":1,"row":-6,"s":5}','{"column":2,"row":-7,"s":5}','{"column":3,"row":-8,"s":5}','{"column":4,"row":-9,"s":5}','{"column":12,"row":-9,"s":-3}','{"column":12,"row":-8,"s":-4}','{"column":12,"row":-7,"s":-5}','{"column":12,"row":-6,"s":-6}','{"column":12,"row":-5,"s":-7}','{"column":12,"row":-4,"s":-8}','{"column":11,"row":-3,"s":-8}','{"column":9,"row":-2,"s":-7}','{"column":8,"row":-2,"s":-6}','{"column":7,"row":-3,"s":-4}','{"column":7,"row":-4,"s":-3}','{"column":7,"row":-5,"s":-2}','{"column":7,"row":-6,"s":-1}','{"column":7,"row":-7,"s":0}','{"column":7,"row":-9,"s":2}','{"column":7,"row":-8,"s":1}','{"column":7,"row":-10,"s":3}','{"column":8,"row":-11,"s":3}','{"column":7,"row":-2,"s":-5}','{"column":10,"row":-5,"s":-5}','{"column":9,"row":-5,"s":-4}','{"column":8,"row":-4,"s":-4}','{"column":11,"row":-9,"s":-2}','{"column":10,"row":-9,"s":-1}','{"column":9,"row":-8,"s":-1}','{"column":9,"row":-7,"s":-2}','{"column":7,"row":5,"s":-12}','{"column":6,"row":6,"s":-12}','{"column":5,"row":7,"s":-12}','{"column":8,"row":5,"s":-13}','{"column":9,"row":5,"s":-14}','{"column":10,"row":5,"s":-15}','{"column":-5,"row":3,"s":2}','{"column":-4,"row":4,"s":0}','{"column":-3,"row":5,"s":-2}','{"column":0,"row":4,"s":-4}','{"column":1,"row":3,"s":-4}','{"column":-2,"row":5,"s":-3}','{"column":-4,"row":5,"s":-1}','{"column":-5,"row":4,"s":1}','{"column":-6,"row":3,"s":3}','{"column":-7,"row":4,"s":3}','{"column":2,"row":3,"s":-5}','{"column":-4,"row":-3,"s":7}','{"column":-4,"row":-2,"s":6}','{"column":-5,"row":-1,"s":6}','{"column":-5,"row":0,"s":5}','{"column":-6,"row":1,"s":5}','{"column":-7,"row":1,"s":6}','{"column":-8,"row":1,"s":7}','{"column":4,"row":-3,"s":-1}','{"column":4,"row":-2,"s":-2}','{"column":-7,"row":8,"s":-1}','{"column":-8,"row":9,"s":-1}','{"column":-9,"row":10,"s":-1}','{"column":-9,"row":11,"s":-2}','{"column":-1,"row":6,"s":-5}','{"column":-1,"row":7,"s":-6}','{"column":-3,"row":9,"s":-6}','{"column":-1,"row":5,"s":-4}','{"column":-2,"row":8,"s":-6}','{"column":6,"row":1,"s":-7}','{"column":5,"row":2,"s":-7}','{"column":6,"row":0,"s":-6}','{"column":4,"row":-4,"s":0}','{"column":5,"row":-5,"s":0}','{"column":5,"row":-2,"s":-3}','{"column":-1,"row":-11,"s":12}','{"column":-2,"row":-10,"s":12}','{"column":-2,"row":-9,"s":11}','{"column":-6,"row":-4,"s":10}','{"column":-5,"row":-4,"s":9}','{"column":-7,"row":-3,"s":10}','{"column":-7,"row":-2,"s":9}','{"column":-8,"row":-1,"s":9}','{"column":-9,"row":0,"s":9}','{"column":-10,"row":8,"s":2}','{"column":-9,"row":8,"s":1}','{"column":-1,"row":10,"s":-9}','{"column":-2,"row":11,"s":-9}','{"column":-2,"row":10,"s":-8}','{"column":10,"row":0,"s":-10}','{"column":10,"row":1,"s":-11}','{"column":11,"row":1,"s":-12}','{"column":12,"row":1,"s":-13}','{"column":9,"row":2,"s":-11}','{"column":8,"row":2,"s":-10}','{"column":3,"row":10,"s":-13}','{"column":2,"row":11,"s":-13}','{"column":-12,"row":-1,"s":13}','{"column":-11,"row":-1,"s":12}','{"column":-11,"row":0,"s":11}','{"column":-13,"row":10,"s":3}','{"column":-13,"row":11,"s":2}','{"column":-14,"row":9,"s":5}','{"column":-13,"row":9,"s":4}','{"column":15,"row":-9,"s":-6}','{"column":15,"row":-8,"s":-7}','{"column":16,"row":-8,"s":-8}'];

export default class BFS extends React.Component {

	constructor(properties) {
		super(properties);

		this.handleMouseMove = this.handleMouseMove.bind(this);
		this.handleClick = this.handleClick.bind(this);

		this.state = {
			canvasSize: {width: 1000, height:800},
			hexSize: 20,
			hexOrigin: {x: 500, y: 400},
			currentHex: {column: 0, row: 0, s: 0, x: 0, y: 0},
			playerPosition: {column: 0, row: 0, s: 0, x: 0, y: 0},
			walls: DEFAULT_WALLS,
			playerPosition: {column: 0, row: 0, s: 0},
			cameFrom: {},
			hexPathMap: [], // non-wall hex's
			path: []
		};
	}

	componentWillMount() {
		const hexParameters = this.getHexParameters();
		this.setState({
			canvasSize: {canvasWidth: this.state.canvasSize.width, canvasHeight: this.state.canvasSize.height},
			hexParameters: hexParameters
		});
	}

	componentDidMount() {
		const {canvasWidth, canvasHeight} = this.state.canvasSize;
		// set width height of canvas hex canvas
		this.canvasHex.width = canvasWidth;
		this.canvasHex.height = canvasHeight;

		// set width and height of coordinates canvas
		this.canvasInteraction.width = canvasWidth;
		this.canvasInteraction.height = canvasHeight;

		this.canvasView.width = canvasWidth;
		this.canvasView.height = canvasHeight;

		this.getActualCanvasPoisition(this.canvasInteraction);
		
		// draw interaction canvas
		this.drawHex(this.canvasInteraction, this.Point(this.state.playerPosition.x, this.state.playerPosition.y), 'red', 0.2, 'red');

		this.drawAllHexes();

		this.drawWalls();
	}

	shouldComponentUpdate(nextProps, nextState) {
		if (nextState.currentHex !== this.state.currentHex) {
			const {column, row, s, x, y} = nextState.currentHex;
			const {canvasWidth, canvasHeight} = this.state.canvasSize;
			const context = this.canvasInteraction.getContext('2d');

			// this.drawLine(this.canvasInteraction, {x: 1, y: 1}, {x: 200, y: 200}, 'lime', 2);

			context.clearRect(0, 0, canvasWidth, canvasHeight);

			//this.drawCubeNeighbours(this.Hex(column, row, s));

			// // highlight each hex on our distance path
			// const currentDistancePath = nextState.currentDistancePath;
			// for (let hexNumber = 0; hexNumber < currentDistancePath.length - 1; hexNumber++) { // -1 as don't want to colour in final
			// 	if (hexNumber === 0) {
			// 		this.drawHex(this.canvasInteraction, this.Point(currentDistancePath[hexNumber].x, currentDistancePath[hexNumber].y), 'black', 1, 'red');
			// 	} else {
			// 		this.drawHex(this.canvasInteraction, this.Point(currentDistancePath[hexNumber].x, currentDistancePath[hexNumber].y), 'black', 1, 'grey');
			// 	}
			// }

			// // draw each of our walls
			// nextState.walls.map((hex) => {
			// 	const {column, row, s, x, y} = JSON.parse(hex);
			// 	this.drawHex(this.canvasInteraction, this.Point(x, y), 'black', 1, 'black');
			// })

			// this.drawHex(this.canvasInteraction, this.Point(x, y), 'lime', 2);

			this.drawPath();

			return true;
		}

		// draw hexes in our old path back as grey
		if (nextState.cameFrom !== this.state.cameFrom) {
			const {canvasWidth, canvasHeight} = this.state.canvasSize;
			const context = this.canvasView.getContext('2d');
			context.clearRect(0, 0, canvasWidth, canvasHeight);

			for (let hex in nextState.cameFrom) {
				const {column, row, s} = JSON.parse(hex);
				const {x, y} = this.hexToPixels(this.Hex(column, row));

				// cover over with original colour
				this.drawHex(this.canvasView, this.Point(x, y), 'black', 2, 'lightgrey');
				var from = JSON.parse(nextState.cameFrom[hex]);
				var fromCoordinate = this.hexToPixels(this.Hex(from.column, from.row));
				// draw our arrow
				this.drawCameFromArrow(fromCoordinate.x, fromCoordinate.y, x, y);
			}

			return true;
		}

		return false;
	}

	getHexCornerCoordinate(centre, cornerID) {
		let angle_deg = 60 * cornerID + 30;
    	let angle_rad = Math.PI / 180 * angle_deg

    	let x = centre.x + this.state.hexSize * Math.cos(angle_rad);
    	let y = centre.y + this.state.hexSize * Math.sin(angle_rad);

    	return this.Point(x, y);
	}

	Point(x, y) {
		return {x: x, y: y};
	}

	drawHex(canvas, centre, lineColour, lineWidth, fillColour) {
		for (let cornerID = 0; cornerID <= 5; cornerID++) {
			let startCoordinate = this.getHexCornerCoordinate(centre, cornerID);
			let endCoordinate = this.getHexCornerCoordinate(centre, (cornerID + 1));
			
			// fill hex
			this.fillHex(canvas, centre, fillColour);

			// draw border
			this.drawLine(canvas, startCoordinate, endCoordinate, lineColour, lineWidth);
		}
	}

	drawLine(canvas, startCoordinate, endCoordinate, lineColour, lineWidth) {
		const context = canvas.getContext('2d');
		context.beginPath();
		context.moveTo(startCoordinate.x, startCoordinate.y);

		context.strokeStyle = lineColour;
		context.lineWidth = lineWidth;

		context.lineTo(endCoordinate.x, endCoordinate.y);
		context.stroke();
		context.closePath();
	}

	drawAllHexes() {
		const {canvasWidth, canvasHeight} = this.state.canvasSize;
		const {hexWidth, hexHeight, verticalDistance, horizontalDistance} = this.state.hexParameters;
		const hexOrigin = this.state.hexOrigin;

		// determine how many hexes we need on each side of the origin
		const columnCountLeft = Math.round(hexOrigin.x / hexWidth) * 4;
		const columnCountRight = Math.round(canvasWidth - hexOrigin.x) / hexWidth * 2;
		const rowCountTop = Math.round(hexOrigin.y / (hexHeight / 2));
		const rowCountBottom = Math.round((canvasHeight - hexOrigin.y) / (hexHeight / 2))

		// intialise path map
		var hexPathMap = [];

		// draw rows above origin row
		let evenRowCount = 0;
		for (let row = 0; row <= rowCountBottom; row++) {
			// determine if row is even and not on first row
			if ((row % 2 === 0) && (row !== 0)) {
				evenRowCount++;
			}

			for (let column = -columnCountLeft; column <= columnCountRight; column++) {
				const {x, y} = this.hexToPixels(this.Hex(column - evenRowCount, row));
				// ensure current hex is within the size of our canvas
				if (((x > (hexWidth / 2)) && (x < (canvasWidth - (hexWidth / 2)))) && 
					((y > (hexHeight / 2)) && (y < (canvasHeight - (hexHeight / 2))))) {
					const centre = this.Point(x, y);
					this.drawHex(this.canvasHex, centre, 'black', 2, 'lightgrey');
					//this.drawHexCoordinates(this.canvasHex, centre, this.Hex(column - evenRowCount, row, (-(column - evenRowCount) - row)));

					// if walls are not part of our path, push onto path
					var bottomHalf = JSON.stringify(this.Hex(column - evenRowCount, row, -(column - evenRowCount) - row));
					if (!this.state.walls.includes(bottomHalf)) {
						hexPathMap.push(bottomHalf);
					}
				}
			}
		}

		// draw rows at and below origin row
		let oddRowCount = 0;
		for (let row = -1; row >= -rowCountTop; row--) {
			// determine if row not even
			if (row % 2 !== 0) {
				oddRowCount++;
			}

			for (let column = -columnCountLeft; column <= columnCountRight; column++) {
				const {x, y} = this.hexToPixels(this.Hex(column + oddRowCount, row));
				// ensure current hex is within the size of our canvas
				if (((x > (hexWidth / 2)) && (x < (canvasWidth - (hexWidth / 2)))) && 
					((y > (hexHeight / 2)) && (y < (canvasHeight - (hexHeight / 2))))) {
					const centre = this.Point(x, y);
					this.drawHex(this.canvasHex, centre, 'black', 2, 'lightgrey');
					//this.drawHexCoordinates(this.canvasHex, centre, this.Hex(column + oddRowCount, row, (-(column + oddRowCount) - row)));

					// if walls are not part of our path, push onto path
					var topHalf = JSON.stringify(this.Hex(column + oddRowCount, row, -(column + oddRowCount) - row));
					if (!this.state.walls.includes(topHalf)) {
						hexPathMap.push(topHalf);
					}
				}
			}
		}

		// manipulate state of displayed hexes
		hexPathMap = [].concat(hexPathMap);
		this.setState(
			{hexPathMap: hexPathMap}, 
			this.breadthFirstSearchCallback = () => this.breadthFirstSearch(this.state.playerPosition)
		);

	}

	drawHexCoordinates(canvas, centre, hex) {
		const context = canvas.getContext('2d');
		context.fillText(hex.column, centre.x+6, centre.y);
		context.fillText(hex.row, centre.x-3, centre.y+15);

		context.fillText(hex.s, centre.x-12, centre.y);
	}

	getHexParameters() {
		let hexHeight = this.state.hexSize * 2;
		let hexWidth = Math.sqrt(3) / 2 * hexHeight;
		let verticalDistance = hexHeight * 3/4;
		let horizontalDistance = hexWidth;
		return {hexWidth, hexHeight, verticalDistance, horizontalDistance};
	}

	hexToPixels(hex) {
		const hexOrigin = this.state.hexOrigin;
		const x = this.state.hexSize * Math.sqrt(3) * (hex.column  +  hex.row / 2) + hexOrigin.x
    	const y = this.state.hexSize * 3./2 * hex.row + hexOrigin.y
    	return this.Point(x, y)
	}

	Hex(column, row, s) {
		return {column: column, row: row, s: s};
	}

	handleMouseMove(event) {
		// get left right top bottom
		const {left, right, top, bottom} = this.state.canvasPosition;

		const {canvasWidth, canvasHeight} = this.state.canvasSize;
		const {hexWidth, hexHeight, verticalDistance, horizontalDistance} = this.state.hexParameters;

		const offsetX = event.pageX - left;
		const offsetY = event.pageY - top;

		const {column, row, s} = this.cubeRound(this.pixelToHex(this.Point(offsetX, offsetY)));
		const {x, y} = this.hexToPixels(this.Hex(column, row, s));

		this.getDistancePath(this.Hex(0, 0, 0), this.Hex(column, row, s));
		
		let playerPosition = this.state.playerPosition;
		this.getPath(this.Hex(playerPosition.column, playerPosition.row, playerPosition.s), this.Hex(column, row, s));

		// ensure we are within the hex inner boundary
		if (((x > (hexWidth / 2)) && (x < (canvasWidth - (hexWidth / 2)))) && 
			((y > (hexHeight / 2)) && (y < (canvasHeight - (hexHeight / 2))))) {
			this.setState({
				currentHex: {column, row, s, x, y}
			});
		}
	}

	cubeRound(cube) {
		let rx = Math.round(cube.column);
	    let ry = Math.round(cube.row);
	    let rz = Math.round(cube.s);

	    const x_diff = Math.abs(rx - cube.column);
	    const y_diff = Math.abs(ry - cube.row);
	    const z_diff = Math.abs(rz - cube.s);

	    if ((x_diff > y_diff) && (x_diff > z_diff)) {
	        rx = -ry - rz;
	    } else if (y_diff > z_diff) {
	        ry = -rx - rz;
	    } else {
	        rz = -rx - ry;
	    }

	    return this.Hex(rx, ry, rz);
	}

	getActualCanvasPoisition(canvas) {
		let rectangle = canvas.getBoundingClientRect();
		this.setState({
			canvasPosition: {left: rectangle.left, right: rectangle.right, top:rectangle.top, bottom: rectangle.bottom}
		});
	}

	pixelToHex(pixel) {
		const hexSize = this.state.hexSize;
		const hexOrigin = this.state.hexOrigin;

		const column = ((pixel.x - hexOrigin.x) * Math.sqrt(3)/3 - (pixel.y - hexOrigin.y) / 3) / hexSize;
		const row = (pixel.y - hexOrigin.y) * 2/3 / hexSize;

		return this.Hex(column, row, (-column - row));
	}

	cubeDirections(direction) {
		const cubeDirections = [this.Hex(1, 0, -1), this.Hex(1, -1, 0), this.Hex(0, -1, 1), this.Hex(-1, 0, 1), this.Hex(-1, 1, 0), this.Hex(0, 1, -1)];
		return cubeDirections[direction];
	}

	cubeAdd(a, b) {
		return this.Hex((a.column + b.column), (a.row + b.row), (a.s + b.s));
	}

	cubeSubtract(a, b) {
		return this.Hex((a.column - b.column), (a.row - b.row), (a.s - b.s));
	}

	cubeDistance(a, b) {
		const {column, row, s} = this.cubeSubtract(a, b);
		return (Math.abs(column) + Math.abs(row) + Math.abs(s)) / 2
	}

	linearInterpolation(a, b, t) {
		// https://www.redblobgames.com/grids/hexagons/#line-drawing
		return (a + (b - a) * t);
	}

	cubeLinearInterpolation(a, b, t) {
		// draws straight line and determines which hex step number t lies in
		return this.Hex(this.linearInterpolation(a.column, b.column, t), this.linearInterpolation(a.row, b.row, t), this.linearInterpolation(a.s, b.s, t));
	}

	getCubeNeighbour(hex, direction) {
		return this.cubeAdd(hex, this.cubeDirections(direction));
	}

	getCubeNeighbours(hex) {
		var cubeNeighbours = [];
		// look at each side for the neighbour
		for (let sideID = 0; sideID <= 5; sideID++) {
			let {column, row, s} = this.getCubeNeighbour(this.Hex(hex.column, hex.row, hex.s), sideID);
			cubeNeighbours.push(this.Hex(column, row, s));
		}
		return cubeNeighbours;
	}

	getDistancePath(a, b) {
		const distance = this.cubeDistance(a, b);
		var path = [];

		for (let hexNumber = 0; hexNumber <= distance; hexNumber++) {
			let centre = this.hexToPixels(this.cubeRound(this.cubeLinearInterpolation(a, b, (1.0 / distance * hexNumber))));
			path = [].concat(path, centre);
		}

		this.setState({
			currentDistancePath: path
		});
	}

	fillHex(canvas, centre, fillColour) {
		// get all corner coordinates
		const corners = [];
		for (let cornerID = 0; cornerID <= 5; cornerID++) {
			corners.push(this.getHexCornerCoordinate(centre, cornerID));
		}

		const context = canvas.getContext('2d');

		context.beginPath();
		context.fillStyle = fillColour;
		context.globalAlpha = 0.2;

		context.moveTo(corners[0].x, corners[0].y);

		for (let cornerID = 1; cornerID <= 5; cornerID++) {
			context.lineTo(corners[cornerID].x, corners[cornerID].y);
		}

		context.closePath();
		context.fill();
	}

	handleClick() {
		const {currentHex, cameFrom} = this.state;
		const {column, row, s} = currentHex;

		// if not a wall then update player position and re-run BFS from this new perspective
		if (cameFrom[JSON.stringify(this.Hex(column, row, s))]) {
			this.setState(
				{playerPosition: this.Hex(column, row, s)},
				this.breadthFirstSearchCallback = () => this.breadthFirstSearch(this.state.playerPosition)
			);
		}
	}

	drawWalls() {
		this.state.walls.map((hex) => {
			const {column, row, s} = JSON.parse(hex);
			const {x, y} = this.hexToPixels(this.Hex(column, row, s));
			this.drawHex(this.canvasHex, this.Point(x, y), 'black', 1, 'black');
		})
	}

	breadthFirstSearch(position) {
		let frontier = [position];
		let cameFrom = {};
		cameFrom[JSON.stringify(position)] = JSON.stringify(position);

		while (frontier.length !== 0) {
			let currentCube = frontier.shift();
			let currentNeighbours = this.getCubeNeighbours(currentCube);
			currentNeighbours.map((hex) => {
				// if not already explored and not a wall, add to frontier search
				if (!cameFrom.hasOwnProperty(JSON.stringify(hex)) && this.state.hexPathMap.includes(JSON.stringify(hex))) {
					frontier.push(hex);
					cameFrom[JSON.stringify(hex)] = JSON.stringify(currentCube);
				}
			})
		}

		cameFrom = Object.assign({}, cameFrom);
		this.setState({
			cameFrom: cameFrom
		});
	}

	getPath(start, current) {
		const {cameFrom} = this.state;
		start = JSON.stringify(start);
		current = JSON.stringify(current);

		if (cameFrom[current] !== undefined) {
			var path = [current];

			// backtrack to determine previous hex to reach current hex
			while (current !== start) {
				current = cameFrom[current];
				path.push(current);
			}

			// store path
			path = [].concat(path);
			this.setState({
				path: path
			});

			console.log('Path Length is', path.length);
		}

	}

	drawPath() {
		const path = this.state.path;

		// draw each hex present in our path
		for (let hexNumber = 0; hexNumber < path.length; hexNumber++) {
			const {column, row} = JSON.parse(path[hexNumber]);
			const {x, y} = this.hexToPixels(this.Hex(column, row));
			this.drawHex(this.canvasInteraction, this.Point(x, y), 'black', 2, 'red');
		}
	}

	drawCameFromArrow(fromX, fromY, toX, toY) {
		var context = this.canvasView.getContext('2d');
		var arrowHeadSize = 5;
		var arrowAngle = Math.atan2((toY - fromY), (toX - fromX));

		// draw the arrow line
		context.beginPath();
		context.moveTo(fromX, fromY);
		context.lineTo(toX, toY);

		context.globalAlpha = 0.2;
		context.strokeStyle = 'grey';
		context.lineWidth = 2;
		context.stroke();

		// draw the arrow head
		context.beginPath();
		context.moveTo(toX, toY);
		context.lineTo((toX - (arrowHeadSize * Math.cos(arrowAngle - Math.PI/7))), (toY - (arrowHeadSize * Math.sin(arrowAngle - Math.PI/7))));
		context.lineTo((toX - (arrowHeadSize * Math.cos(arrowAngle + Math.PI/7))), (toY - (arrowHeadSize * Math.sin(arrowAngle + Math.PI/7))));
		context.lineTo(toX, toY);
		context.lineTo((toX - (arrowHeadSize * Math.cos(arrowAngle - Math.PI/7))), (toY - (arrowHeadSize * Math.sin(arrowAngle - Math.PI/7))));

		context.globalAlpha = 0.4;
		context.lineWidth = 7;
		context.stroke();
		context.fillStyle = 'grey';
		context.fill();
	}

	render() {
		return (
			<div className="BFS">
				<canvas ref={canvasHex => this.canvasHex = canvasHex}></canvas>
				<canvas ref={canvasCoordinates => this.canvasCoordinates = canvasCoordinates}></canvas>
				<canvas ref={canvasView => this.canvasView = canvasView}></canvas>
				<canvas ref={canvasInteraction => this.canvasInteraction = canvasInteraction} onMouseMove={this.handleMouseMove} onClick={this.handleClick}></canvas>
			</div>
		);
	}

}