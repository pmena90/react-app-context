import Card from "./Card";

// Card List
const CardList = (props) => {
    return <div className="pb-3">
        {props.cards.map((card, key) => {
            return <div key={key}>
                <Card card={card} />
            </div>
        })}
    </div>
}

export default CardList;