import { appState } from "../AppState.js"
import { Question } from "../Models/Question.js";
import { Pop } from "../Utils/Pop.js";
import { api } from "./AxiosService.js"


class QuestionsService {
    answerQuestion(answer) {
        let activeQuestion = appState.question
        if (activeQuestion.correctAnswer == answer) {

            Pop.toast("You are the best!", "success")
            this.getQuestions()
        } else {
            Pop.toast("You need to git Gud", 'error')
        }
    }

    async getQuestions() {
        // NOTE res is a banana word
        const res = await api.get()
        // NOTE res.data.results data is an axios thing. Results is specific to this API
        // because this API had it properties inside an array called results

        console.log("This is my question from api", res.data);

        appState.question = new Question(res.data.results[0])

        console.log(appState.question);
    }





    updateScore(name, score) {
        appState[name] += score

    }

}


export const questionsService = new QuestionsService()