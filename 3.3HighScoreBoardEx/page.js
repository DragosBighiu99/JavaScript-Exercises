function createScoreBoard() {
    const initialEntry = {
        "The Best Ever": 1000000
    }

    return initialEntry;
}

function addPlayer(scoreBoard, playerName, score) {
    scoreBoard[playerName] = score;

    return scoreBoard;
}

function removePlayer(scoreBoard, playerName) {

    if(scoreBoard.hasOwnProperty(playerName)) {
        delete scoreBoard[playerName];
    }

    return scoreBoard;
}

function updateScore(scoreBoard, playerName, scoreToAdd) {

    if(scoreBoard.hasOwnProperty(playerName)) {
        scoreBoard[playerName] += scoreToAdd;
    }

    return scoreBoard;
}

function applyMondayBonus(scoreBoard) {

    for(const player in scoreBoard) {
        if(scoreBoard.hasOwnProperty(player)) {
            scoreBoard[player] += 100;
        }
    }

    return scoreBoard
}

function normalizeScore(params) {
    const {score, normalizeFunction} = params;

    const normalizedScore = normalizeFunction(score)

    return normalizedScore
}

