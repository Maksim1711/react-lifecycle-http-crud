function Card(props) {
	console.log(props)
	return (
		<li className="card" key={props.id}>
			<header>Note</header>
			<div className="card_text">
				{props.text}
			</div>
			<div className="card_btn_del"><button type="button" onClick={() => { props.deleteCard(props.id) }}>&#10006;</button></div>
		</li>
	);
}


export default Card;