import { appState } from "../AppState.js";
import { questionsService } from "../Services/QuestionsService.js";
import { setText } from "../Utils/Writer.js";

function _drawScore(player) {
    setText(`${player}-score`, appState[player])

}

export class QuestionsController {
    constructor() {
        appState.on('tyler', () => _drawScore('tyler'))
        appState.on('class', () => _drawScore('class'))

    }


    updateScore(name, score) {
        questionsService.updateScore(name, score)
    }


}