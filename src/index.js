import React from "react";
import ReactDOM from "react-dom";
import ProtonNote from './components/ProtonNote';
import * as serviceWorker from "./serviceWorker";

import "./styles/global.scss";

ReactDOM.render(
	<React.StrictMode>
		<ProtonNote />
	</React.StrictMode>,
	document.getElementById("protonnote")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
