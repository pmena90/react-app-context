import { Component } from "react";
import "./styles.css";
import Pagetitle from "../PageTitle";
import withTheme from "../withTheme";
import CardList from "./CardList";
import MyForm from "./MyForm";


const testData = [
    { name: "Dan Abramov", avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4", company: "@facebook" },
    { name: "Sophie Alpert", avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4", company: "Humu" },
    { name: "Sebastian Markbåge", avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4", company: "Facebook" },
];

class GitHubCards extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cards: testData,
        }
    }

    handleOnSubmit = (card) => {
        if (card) {
            this.setState({
                cards: [...this.state.cards, card],
            });
        }

    }

    render() {
        const isDark = this.props.theme === 'dark';

        return <div className='container' id='GithubCardsPage'>
            <div className='row'>
                <Pagetitle title={'The GitHub Cards App'} />
            </div>
            <div data-testid='container-theme' className={isDark ? 'bg-dark text-white' : ''} >
                <MyForm data-testid='my-form' onSubmit={this.handleOnSubmit} />
                <CardList data-testid='card-list' cards={this.state.cards} />
            </div>
        </div>
    }
}


export default withTheme(GitHubCards);