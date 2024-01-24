import { useRef } from "react";

function NewCard({ create }) {
	let inputText = useRef(null);
	return (
		<li className="new_card">
			<header>New note</header>
			<div className="new_card_text">
				<textarea className="new_card_input" ref={inputText}></textarea>
			</div>
			<div className="new_card_btn_wrap"><button type="button" onClick={() => {
				if (inputText.current) {
					create(inputText.current.value)
				}
			}}>Add</button></div>
		</li>
	);
}
export default NewCard;