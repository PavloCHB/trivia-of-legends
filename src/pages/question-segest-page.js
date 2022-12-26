import React from 'react'
import { Component } from 'react'
import NavBar from '../components/nav';
import '../components/sugestions.css';
import TopMessage from '../components/top-message';

class Sugestions extends Component {
    constructor(props) {
        super(props);
        this.state = {
            question: "",
            correct: "",
            wrong1: "",
            wrong2: "",
            wrong3: "",
            error: true,
          }
        this.questions= []

        this.modifiedField = {
            question: false,
            correct: false,
            wrong1: false,
            wrong2: false,
            wrong3: false,
        }

        this.submit = this.submit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.checkForErrors = this.checkForErrors.bind(this)
        this.containsDuplicates = this.containsDuplicates.bind(this)
    }

    submit(event){
        event.preventDefault()

        this.modifiedField = {
            question: true,
            correct: true,
            wrong1: true,
            wrong2: true,
            wrong3: true,
        }
        this.checkForErrors()

        let submitButton = document.querySelector("#submit")
        submitButton.classList.add("sub")
        console.log("submitButton", submitButton)
        console.log(submitButton.id)
        console.log(submitButton.classList)
        if(this.state.error){
            submitButton.classList.add("error", "not-sended")
            console.log("submitButton.classList", submitButton.classList)
            setTimeout(() => {
                submitButton.classList.remove("error", "not-sended")
            }, 500);
            return
        }

        submitButton.classList.add("sended")
        setTimeout(() => {
            submitButton.classList.remove("sended")
        }, 500);

        let question = {
            question: this.state.question,
            correctAnswer: this.state.correct,
            wrongAnswers: [this.state.wrong1, this.state.wrong2, this.state.wrong3]
        }
        this.questions.push(question)
        console.log("this.questions", this.questions)
    }

    handleChange(event){
        let target = event.currentTarget
        let name = target.name
        let value = target.value
        this.modifiedField[name] = true;
        this.setState({
            [name]: value,
        })
        setTimeout(() => {
            this.checkForErrors()
        }, 10);

    }

    checkForErrors(){
        let inputFields = document.querySelectorAll(".question-submit input[type=text]")
        let generalMessage = document.querySelector("#general-message")
        let inputValues = []
       
       
        this.setState({error: false})

        inputFields.forEach(input => {
            let inputError = false;
            let name = input.getAttribute("name")
            let value = input.getAttribute("value")
            let message = document.querySelector("label[for=" + name + "]").childNodes[1]
            input.classList.remove("duplicated", "error")
            value === "" ? this.setState({error: true}) : generalMessage.innerHTML = "Some field still empty"

            if(this.modifiedField[name]){
                inputValues.push(value)

                if(this.containsDuplicates(inputValues)){ 
                    message.innerHTML = ""
                    let allValues = [];
                    let duplicatedValues = [];
                    for (let i = 0; i < inputValues.length; i++) {
                        let val = inputValues[i]
                        if(val === ""){
                            continue
                        }
                        if( !allValues.includes(val) ){
                            allValues.push(val)
                        }else if (!duplicatedValues.includes(val)){
                            duplicatedValues.push(val)
                        }
                    }
                    duplicatedValues.forEach(dupVal => {
                        let duplicated = document.querySelectorAll( ".question-submit input[value='" + dupVal + "']")
                        duplicated.forEach(dupInp => {
                            dupInp.classList.add("duplicated")
                            let dupMessage = document.querySelector("label[for=" + dupInp.getAttribute("name") + "]").childNodes[1]
                            dupMessage.innerHTML = "This field is equal to another"
                        })
                    })
                    generalMessage.innerHTML = "Two fields cannot be the same"
                    inputError = true;   
                    this.setState({error: true})
                }else if(value.length > 50){
                    message.innerHTML = "Tha maximun of characters accepted is 50"
                    generalMessage.innerHTML = "Some field has more characters than expected"   
                    inputError = true;
                    this.setState({error: true})
                }else{
                    message.innerHTML = ""
                    generalMessage.innerHTML = ""
                    //inputValues.push(value)
                }

                if(value.replaceAll(" ", "") === ""){
                    message.innerHTML = "You cannot leave this field empty";
                    inputError = true;
                    this.setState({error: true})
                    }

                inputError ? input.classList.add("error") :  input.classList.remove("error") ;
                
            }
        }) 
    }

    containsDuplicates(array) {
        if (array.length !== new Set(array).size) {
          return true;
        }
        return false;
    }




    render() { 
        return ( 
            <>
            <TopMessage message="Sorry, this form isn't functional by the moment"/>
            <NavBar />
            <section className='question-submit-container'>
                <h2>Submit your question</h2>
                <form className='question-submit' action="submit" onSubmit={this.submit}>
                    <label htmlFor="question">What is the question? <span></span></label>
                    <input type="text" autocomplete="off" onChange={this.handleChange} name='question' value={this.state.question}/>
                    <label htmlFor="correct">What is the correct answer? <span></span></label>
                    <input type="text" autocomplete="off" onChange={this.handleChange} name='correct' value={this.state.correct}/>
                    <span>Choose three wrong answer</span>
                    <label htmlFor="wrong1">Wrong answer #1 <span></span></label>
                    <input type="text" autocomplete="off" onChange={this.handleChange} name='wrong1' value={this.state.wrong1}/>
                    <label htmlFor="wrong2">Wrong answer #2 <span></span></label>
                    <input type="text" autocomplete="off" onChange={this.handleChange} name='wrong2' value={this.state.wrong2}/>
                    <label htmlFor="wrong3">Wrong answer #3 <span></span></label>
                    <input type="text" autocomplete="off" onChange={this.handleChange} name='wrong3' value={this.state.wrong3}/>
                    <span id="general-message"></span>
                    <input id="submit" type="submit" value="Send"/>
                </form>
            </section>
            </>
         );
    }
}
 
export default Sugestions;