import React, { useState } from "react";

const Semaforo = () => {
	const [color, setColor] = useState("red");

	return (
		<div className="traffic-light-card">
			<h1>Semáforo</h1>
			<div className="traffic-light">
				<div
					className={`light red ${color === "red" ? "active" : ""}`}
					onClick={() => setColor("red")}
					aria-label="Rojo"
				/>
				<div
					className={`light yellow ${color === "yellow" ? "active" : ""}`}
					onClick={() => setColor("yellow")}
					aria-label="Amarillo"
				/>
				<div
					className={`light green ${color === "green" ? "active" : ""}`}
					onClick={() => setColor("green")}
					aria-label="Verde"
				/>
			</div>
			<p className="traffic-light-text">Color seleccionado: <strong>{color}</strong></p>
		</div>
	);
};

const Home = () => {
	return (
		<div className="app-shell">
			<Semaforo />
		</div>
	);
};

export default Home;