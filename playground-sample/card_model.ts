// interface Card {
//     numb: number
//     quality: number
// }

interface CardOut {
    score(): number
    size(): number
}

class Card {
    numb: number
    quality: number

    constructor(n: number, q: number) {
        this.numb = n
        this.quality = q 
    }

    score(): number { return this.numb * 4 + this.quality}
}

class SingleOut implements CardOut {
    card: Card

    constructor(card: Card) { this.card = card }
    score(): number { return this.card.score() }
    size(): number { return 1}
}

class PairOut implements CardOut {
    cardLeft: Card
    cardRight: Card

    constructor(cardLeft: Card, cardRight: Card) {
        if (cardLeft.numb != cardRight.numb || 
            cardLeft.quality == cardRight.quality) throw new Error("invalid pair")

        this.cardLeft = cardLeft
        this.cardRight = cardRight
    }

    score(): number { return this.cardLeft.score() + this.cardRight.score() }
    size(): number { return 2}
}

interface GameMediator {
    action(from: Player, out: CardOut)
}

class Player {
    name: string
    mediator: GameMediator

    // ...

    receiveOut(out: CardOut) {
        // ...
    }
}

class TienlenGameMediator implements GameMediator {
    p1: Player
    p2: Player
    p3: Player
    p4: Player

    currentOut?: CardOut

    action(from: Player, out: CardOut) {
        // ...
    }
}