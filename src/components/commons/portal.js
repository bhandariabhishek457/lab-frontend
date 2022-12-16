import ReactDOM from "react-dom";

export default function Portal({ childern }) {
	return ReactDOM.createPortal(childern, document.body);
}
