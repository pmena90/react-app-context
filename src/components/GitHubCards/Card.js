import { Component } from "react";

class Card extends Component {
    render() {
        const { avatar_url, name, company } = this.props.card;
        return <div className="github-profile">
            <img src={avatar_url} alt="avatar" />
            <div className="info">
                <div className="name">{name}</div>
                <div className="company">{company}</div>
            </div>
        </div>
    }
}

export default Card;