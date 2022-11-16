
export class Question {
    constructor(data) {
        this.type = data.type
        this.category = data.category
        this.difficulty = data.difficulty
        this.question = data.question
        this.correctAnswer = data.correct_answer
        this.choices = ([...data.incorrect_answers, data.correct_answer])
        this.choices.sort(() => Math.random() - 0.5)
        this.choices.sort(() => Math.random() - 0.5)
        this.choices.sort(() => Math.random() - 0.5)


    }

    get Template() {
        return  /*html*/`
<div class="row d-flex justify-content-center">
        <div class="col-md-10 mt-5 card">
          <h1>
${this.question}
          </h1>
        </div>
        <div class="row m-5 justify-content-center">
         ${this.ChoicesButtons}
        </div>



`

    }


    get ChoicesButtons() {
        let template = ''
        this.choices.forEach(c => template += `<button onclick='app.questionsController.answerQuestion("${c}")' class="col-md-4 btn btn-primary m-1">
            ${c}
          </button>`)
        return template
    }


}