import { appState } from "../AppState.js";
import { questionsService } from "../Services/QuestionsService.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML, setText } from "../Utils/Writer.js";

function _drawQuestion() {
    let question = appState.question
    setHTML('trivia', question.Template)
}

function _drawScore(player) {
    setText(`${player}-score`, appState[player])

}

export class QuestionsController {
    constructor() {
        appState.on('question', _drawQuestion)
        appState.on('tyler', () => _drawScore('tyler'))
        appState.on('class', () => _drawScore('class'))
        this.getQuestions()

    }


    updateScore(name, score) {
        questionsService.updateScore(name, score)
    }


    async getQuestions() {
        try {

            await questionsService.getQuestions()
        } catch (error) {
            console.error(error)
            Pop.toast(error.message, 'error')

        }
    }


    answerQuestion(answer) {
        try {
            questionsService.answerQuestion(answer)
        } catch (error) {
            console.error(error)
            Pop.toast(error.message, 'error')
        }
    }


}