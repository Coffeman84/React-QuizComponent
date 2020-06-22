import React, { Component } from 'react'

let quizData = require('./quiz_data.json')

class Quiz extends Component {
    constructor(props) {
        super(props)
        this.state = {quiz_poition:1}
    }
    render() {
        return ( <div>(<div className="QuizQuestion">{quizData.Quiz_questions[0].
            instructions_text}</div></div>)
    }
    
    }
}
export default Quiz