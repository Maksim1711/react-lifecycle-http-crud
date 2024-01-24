import { useEffect, useState } from "react";
import NewCard from "./NewCard";
import Card from "./Card";
function CardConteiner() {
	const [cards, setCards] = useState([{
		id: null,
		text: null
	}])
	function deleteCard(id) {
		fetch(`http://localhost:7070/notes/${id}`, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json;charset=utf-8'
			},
		})
		return setCards((prevCards) => {
			return prevCards.filter(el => el.id !== id)
		})
	}
	function update() {
		return setCards([])
	}
	function createCard(text) {
		fetch('http://localhost:7070/notes', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json;charset=utf-8'
			},
			body: JSON.stringify({ text })
		})
		return setCards([])
	}
	useEffect(() => {
		(async () => {
			const response = await fetch('http://localhost:7070/notes')
			const result = await response.json();
			if (result) {
				return setCards(result)
			} else {
				return
			}
		})()
	}, [cards])

	const cardsList = cards.map(card => {
		return <Card
			text={card.text}
			deleteCard={deleteCard}
			id={card.id}
		/>
	})

	return (
		<div className="card_conteiner">
			<div className="card_content">
				<header className="card_conteiner_header">Notes</header>
				<button type="button" className="card_conteiner btn refresh" onClick={update}><span><svg xmlns="http://www.w3.org/2000/svg" x="-80px" y="0px" width="30" height="30" viewBox="0 0 50 50">
					<path fill="#7cb342" d="M24 3A21 21 0 1 0 24 45A21 21 0 1 0 24 3Z"></path><path fill="#dcedc8" d="M24,36.1c-6.6,0-12-5.4-12-12c0-3.6,1.6-7,4.4-9.3l2.5,3.1c-1.8,1.5-2.9,3.8-2.9,6.2c0,4.4,3.6,8,8,8 s8-3.6,8-8c0-2.1-0.8-4-2.2-5.5l2.9-2.7C34.8,18,36,21,36,24.1C36,30.7,30.6,36.1,24,36.1z"></path><path fill="#dcedc8" d="M12 13L21 13 21 22z"></path>
				</svg></span></button>
			</div>
			<ul className="cards_wrappper">
				<NewCard
					create={createCard} />
				{cardsList}
			</ul>
		</div>
	);

}
export default CardConteiner;