import { appState } from "../AppState.js"


class QuestionsService {





    updateScore(name, score) {
        appState[name] += score

    }

}


export const questionsService = new QuestionsService()