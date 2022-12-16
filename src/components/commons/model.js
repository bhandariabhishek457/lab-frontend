import React from "react";

import "./model.css";

export default function Modal(props) {
	const backdrop = props.open ? "modal-backdrop" : "modal-close";

	return props.open ? <div className={backdrop}>{props.children}</div> : "";
}
