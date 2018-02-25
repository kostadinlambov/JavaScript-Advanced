function monkeyPatcher(command) {
    let self = this;

    let commands = {
        upvote: () => self.upvotes++,
        downvote: () => self.downvotes++,
        score: () => calculateScore()
    };

    function calculateScore() {
        let resultArr = [];
        let positiveVotes = self.upvotes;
        let negativeVotes = self.downvotes;
        let rating = calculateRating(positiveVotes, negativeVotes);
        let totalVotes = positiveVotes + negativeVotes;
        if (totalVotes > 50) {
            let number = Math.max(positiveVotes, Math.abs(negativeVotes));
            number = Math.ceil((number * 25) / 100);
            positiveVotes += number;
            negativeVotes += number;
        }
        let totalScore = positiveVotes - negativeVotes;
        resultArr.push(positiveVotes, negativeVotes, totalScore, rating);
        return resultArr;
    }

    function calculateRating(positiveVotes, negativeVotes) {

        let totalVotes = positiveVotes + negativeVotes;
        let totalScore = positiveVotes - negativeVotes;
        let positiveVotesPercent = Math.ceil((positiveVotes / totalVotes) * 100);
        if (totalVotes < 10) {
            return 'new';
        } else if (positiveVotesPercent > 66) {
            return 'hot';
        } else if (totalScore < 0) {
            return 'unpopular';
        } else if (positiveVotes > 100 || negativeVotes > 100) {
            return 'controversial';
        }
        return 'new';

    }

    return commands[command]();
}

let post = {
    id: '3',
    author: 'emil',
    content: 'wazaaaaa',
    upvotes: 100,
    downvotes: 100
};

let score = monkeyPatcher.call(post, 'score');
console.log(score);
monkeyPatcher.call(post, 'upvote');
monkeyPatcher.call(post, 'downvote');
score = monkeyPatcher.call(post, 'score'); // [127, 127, 0, 'controversial']
console.log(score);
for (let i = 0; i < 50; i++) {
    monkeyPatcher.call(post, 'downvote');      // (executed 50 times)
}
score = monkeyPatcher.call(post, 'score');
console.log(score);

