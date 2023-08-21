import CardList from './CardList';

describe('CardList Component', () => {
    it('Should return one card item per card in the list', () => {
        const cards = [
            { name: "Dan Abramov", avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4", company: "@facebook" },
            { name: "Sophie Alpert", avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4", company: "Humu" },
            { name: "Sebastian Markbåge", avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4", company: "Facebook" },
        ];

        const cardList = CardList({ cards: cards });

        expect(cardList.props.children.length).toBe(3);
    })
})