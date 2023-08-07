import { Component, useState } from "react";
import "./styles.css";
import { githubService } from "../../services/githubService";
import useErrorHandler from "../../hooks/useErrorHandler";
import Pagetitle from "../PageTitle";
import withTheme from "../withTheme";


const testData = [
    { name: "Dan Abramov", avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4", company: "@facebook" },
    { name: "Sophie Alpert", avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4", company: "Humu" },
    { name: "Sebastian Markbåge", avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4", company: "Facebook" },
];

// Form
const MyForm = (props) => {
    const handleError = useErrorHandler();
    const [username, setUsername] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleClick = (event) => {
        setIsLoading(true);
        event.preventDefault();

        githubService.getUserByName(username).then(data => {
            stopLoading();

            props.onSubmit(data);
            setUsername("");
        }).catch(error => {
            stopLoading();

            handleError(error);
        });

    };

    const handleOnChange = (e) => {
        setUsername(e.target.value);
    }

    const stopLoading = () => {
        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
    }

    return (
        <form onSubmit={handleClick} >
            <div className="col-auto">
                <input type="text"
                    placeholder="GitHub username"
                    value={username}
                    onChange={handleOnChange}
                    required
                    className="form-control-plaintext"
                />
            </div>
            <div className="col-auto">
                <button type="submit" className="btn btn-primary mb-3">
                    {isLoading ?
                        <span><span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>    Loading</span>
                        : 'Add Card'}
                </button>
            </div>
        </form>
    )

}

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
        console.log("Submit");
        console.log(card);

        if (card) {
            this.setState({
                cards: [...this.state.cards, card],
            }, () => { console.log(this.state.cards) });
        }

    }

    render() {
        const isDark = this.props.theme === 'dark';
        console.log(isDark);

        return <div className='container' id='GithubCardsPage'>
            <div className='row'>
                <Pagetitle title={'The GitHub Cards App'} />
            </div>
            <div className={isDark ? 'bg-dark text-white' : ''} >
                <MyForm onSubmit={this.handleOnSubmit} />
                <CardList cards={this.state.cards} />
            </div>
        </div>
    }
}


export default withTheme(GitHubCards);