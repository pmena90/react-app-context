import { Component } from "react";
import "./styles.css";
import axios from "axios";

const testData = [
    { name: "Dan Abramov", avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4", company: "@facebook" },
    { name: "Sophie Alpert", avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4", company: "Humu" },
    { name: "Sebastian Markbåge", avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4", company: "Facebook" },
];

// Form
class Form extends Component {
    state = {
        username: "",
    };

    handleClick = async (event) => {
        event.preventDefault();
        const { username } = this.state;

        const response = await axios.get(`https://api.github.com/users/${username}`);

        this.props.onSubmit(response.data);
        this.setState({ username: "" });
    };

    handleOnChange = (e) => {
        this.setState({ username: e.target.value });
    }

    render() {
        const { username } = this.state;

        return (
            <form onSubmit={this.handleClick}>
                <input type="text"
                    placeholder="GitHub username"
                    value={username}
                    onChange={this.handleOnChange}
                    required
                />
                <button type="submit">Add card</button>
            </form>
        )
    }
}

// Card List
const CardList = (props) => {
    return <div>
        {props.cards.map((card, key) => {
            return <div key={key}>
                <Card card={card} />
            </div>
        })}
    </div>
}


// Card
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

class GitHubCards extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cards: testData,
        }
    }

    handleOnSubmit = (card) => {
        this.setState({
            cards: [...this.state.cards, card],
        });
    }

    render() {
        return <div>
            <h1 className="header">The GitHub Cards App</h1>
            <Form onSubmit={this.handleOnSubmit} />
            <CardList cards={this.state.cards} />
        </div>
    }
}


export default GitHubCards;