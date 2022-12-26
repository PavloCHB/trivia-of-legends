import React from 'react';
import { Component } from 'react';
import NavBar from '../components/nav';
import '../components/trivia.css';
import { Link } from 'react-router-dom';

import Pause from '../assets/pause.svg'
import Play from '../assets/play.svg'
import Menu from '../assets/hamburguer.svg'
import Restart from '../assets/reload.svg'
import Hint from '../assets/light_bulb.svg'

class Trivia extends Component {
    constructor(props){
        super(props);
        this.state = {
            gameStarted: false,
            difficulty: "normal",
            resultMessage:"",
            questionAlreadySelected: false,
            questionNumber: 1,
            totalQuestions: 10,
            maxTime: 100,
            hints: "0",
            hintsLeft: 0,
            hintsAvaible: "hints-avaible",
            hinted: false,
            selectedQuestions: [],
            actualQuestion: {
                question: "",
                answers: [
                    {answer: "", correct: false},
                    {answer: "", correct: false},
                    {answer: "", correct: false},
                    {answer: "", correct: false},
                ]
            },
            correctAnswers: 0,
            timeLeft: "100%",
            timeState: undefined,
            pauseButton: Pause
        }

        this.questions = [
            {
                question: "Who of this champions is not a yordle?",
                answers: [
                    {answer: "Annie", correct: true},
                    {answer: "Teemo", correct: false},
                    {answer: "Poppy", correct: false},
                    {answer: "Amumu", correct: false},
                ]
            },
            {
                question: "What's the name of Grave's shotgun?",
                answers: [
                    {answer: "Destiny", correct: true},
                    {answer: "Fate", correct: false},
                    {answer: "Pow Pow", correct: false},
                    {answer: "Smoky", correct: false},
                ]
            },
            {
                question: "The playable semigods of The Freljord are...",
                answers: [
                    {answer: "Ornn, Volibear and Anivia", correct: true},
                    {answer: "Ashe, Sejuani and Tryndamere", correct: false},
                    {answer: "Gnar, Lissandra and Trundle", correct: false},
                    {answer: "Gragas, Olaf and Braum", correct: false},
                ]
            },
            {
                question: "Which of the following champions is from Jonia?",
                answers: [
                    {answer: "Kennen", correct: true},
                    {answer: "Udyr", correct: false},
                    {answer: "Darius", correct: false},
                    {answer: "Bard", correct: false},
                ]
            },
            {
                question: "Which of this characters dosn't appear on Arcane (season 1)",
                answers: [
                    {answer: "Urgot", correct: true},
                    {answer: "Vi", correct: false},
                    {answer: "Jinx", correct: false},
                    {answer: "Ekko", correct: false},
                ]
            },
            {
                question: 'Who says: "Cost of your life is one arrow"?',
                answers: [
                    {answer: "Varus", correct: true},
                    {answer: "Ashe", correct: false},
                    {answer: "Vayne", correct: false},
                    {answer: "Quinn", correct: false},
                ]
            },
            {
                question: 'Ok',
                answers: [
                    {answer: "Rammus", correct: true},
                    {answer: "Not Rammus", correct: false},
                    {answer: "Not Rammus", correct: false},
                    {answer: "Not Rammus", correct: false},
                ]
            },
            {
                question: 'Who says: "I am the blade in the darkness."?',
                answers: [
                    {answer: "Zed", correct: true},
                    {answer: "Nocturne", correct: false},
                    {answer: "Katarina", correct: false},
                    {answer: "Shaco", correct: false},
                ]
            },
            {
                question: 'Who says: “This blade never gets any lighter.”?',
                answers: [
                    {answer: "Yasuo", correct: true},
                    {answer: "Tryndamere", correct: false},
                    {answer: "Garen", correct: false},
                    {answer: "Teemo", correct: false},
                ]
            },
            {
                question: 'Who says: “I fight for a brighter tomorrow!”?',
                answers: [
                    {answer: "Jayce", correct: true},
                    {answer: "Lux", correct: false},
                    {answer: "Garen", correct: false},
                    {answer: "Azir", correct: false},
                ]
            },
            {
                question: 'Who says: “Sometimes a shark takes the bait, and sinks the whole ship.”?',
                answers: [
                    {answer: "Pyke", correct: true},
                    {answer: "Fizz", correct: false},
                    {answer: "Gangplank", correct: false},
                    {answer: "Illaoi", correct: false},
                ]
            },
            {
                question: 'Who says: “You deny the darkness in your soul! You deny your power!”?',
                answers: [
                    {answer: "Veigar", correct: true},
                    {answer: "Nocturne", correct: false},
                    {answer: "Syndra", correct: false},
                    {answer: "Diana", correct: false},
                ]
            },
            {
                question: "Which of this is not the name of one Jinx's weapons",
                answers: [
                    {answer: "Boomsy", correct: true},
                    {answer: "Zapper", correct: false},
                    {answer: "Fishbones", correct: false},
                    {answer: "Pow-Pow", correct: false},
                ]
            },
            {
                question: "Jinx is the sister of...",
                answers: [
                    {answer: "Vi", correct: true},
                    {answer: "Shaco", correct: false},
                    {answer: "Lux", correct: false},
                    {answer: "Seraphine", correct: false},
                ]
            },
            {
                question: "Which of this has not a playable brother?",
                answers: [
                    {answer: "Irelia", correct: true},
                    {answer: "Cassiopeia", correct: false},
                    {answer: "Renekton", correct: false},
                    {answer: "Draven", correct: false},
                ]
            },
            {
                question: "Which of this champions is not from Shurina?",
                answers: [
                    {answer: "Leona", correct: true},
                    {answer: "Taliya", correct: false},
                    {answer: "Sivir", correct: false},
                    {answer: "Rammus", correct: false},
                ]
            },
            {
                question: "Which of this champions is not from Noxus?",
                answers: [
                    {answer: "Aatrox", correct: true},
                    {answer: "Darius", correct: false},
                    {answer: "LeBlanc", correct: false},
                    {answer: "Vladimir", correct: false},
                ]
            },
            {
                question: "Which of this champions is not from Bilgewater?",
                answers: [
                    {answer: "Lucian", correct: true},
                    {answer: "Miss Fortune", correct: false},
                    {answer: "Illaoi", correct: false},
                    {answer: "Twisted Fate", correct: false},
                ]
            },
            {
                question: "Which of this champions is not from Zaun?",
                answers: [
                    {answer: "Kog'Maw", correct: true},
                    {answer: "Twitch", correct: false},
                    {answer: "Zac", correct: false},
                    {answer: "Janna", correct: false},
                ]
            },
            {
                question: "Which of this champions is not from The Void?",
                answers: [
                    {answer: "K'Sante", correct: true},
                    {answer: "Kai'Sa", correct: false},
                    {answer: "Rek'Sai", correct: false},
                    {answer: "Kog'Maw", correct: false},
                ]
            },
            {
                question: "Bard is also called...",
                answers: [
                    {answer: "Cosmic Vagabond", correct: true},
                    {answer: "Cosmic Ringer", correct: false},
                    {answer: "The Star Forger", correct: false},
                    {answer: "The Father of Meeps", correct: false},
                ]
            },
            {
                question: "What is the name of Teemo's ultimate?",
                answers: [
                    {answer: "Noxious Trap", correct: true},
                    {answer: "Noxious Shroom", correct: false},
                    {answer: "Poisonous Shroom", correct: false},
                    {answer: "Explosive Shroom", correct: false},
                ]
            },
            {
                question: "What is the name of Jinx's ultimate?",
                answers: [
                    {answer: "Super Mega Death Rocket!", correct: true},
                    {answer: "Super Explosive Rocket!", correct: false},
                    {answer: "Mega Death Final Rocket!", correct: false},
                    {answer: "Tibbers", correct: false},
                ]
            },
            {
                question: "What is the name of Annie's teddy bear?",
                answers: [
                    {answer: "Tibbers", correct: true},
                    {answer: "Tiboty", correct: false},
                    {answer: "Teemo", correct: false},
                    {answer: "Tedous", correct: false},
                ]
            },
            {
                question: "What is the name of Quinn's bird?",
                answers: [
                    {answer: "Valor", correct: true},
                    {answer: "Blue", correct: false},
                    {answer: "Talon", correct: false},
                    {answer: "Feathers", correct: false},
                ]
            },
            {
                question: "In Arcane, who created the Atlas Gauntlets?",
                answers: [
                    {answer: "Viktor and Jayce", correct: true},
                    {answer: "Heimerdinger", correct: false},
                    {answer: "Singed", correct: false},
                    {answer: "Vander", correct: false},
                ]
            },
            {
                question: "In which year was 'League Of Legends' launched?",
                answers: [
                    {answer: "2009", correct: true},
                    {answer: "2010", correct: false},
                    {answer: "2008", correct: false},
                    {answer: "2007", correct: false},
                ]
            },
            {
                question: "Yorick was born with which ability?",
                answers: [
                    {answer: "Speak to those who recently died", correct: true},
                    {answer: "Carry a shovel", correct: false},
                    {answer: "Enter the realm of the dead", correct: false},
                    {answer: "Revive the dead", correct: false},
                ]
            },
            {
                question: "Who created Blitzcrank?",
                answers: [
                    {answer: "Viktor", correct: true},
                    {answer: "Heimerdinger", correct: false},
                    {answer: "No one knows", correct: false},
                    {answer: "Jayce", correct: false},
                ]
            },
            {
                question: "Who is Taliyah's mentor?",
                answers: [
                    {answer: "Yasuo", correct: true},
                    {answer: "Sivir", correct: false},
                    {answer: "Azir", correct: false},
                    {answer: "Skarner", correct: false},
                ]
            },
            {
                question: "What is Poppy's hammer called?",
                answers: [
                    {answer: "The Hammer of Orlon", correct: true},
                    {answer: "The Hammer of Heros", correct: false},
                    {answer: "Mjolnir", correct: false},
                    {answer: "Ardent Hammer", correct: false},
                ]
            },
                {
                    question: "What does Poppy search for in the game?",
                    answers: [
                        {answer: "The Hero of Demacia", correct: true},
                        {answer: "The creator of the Hammer", correct: false},
                        {answer: "His mother", correct: false},
                        {answer: "The God of the Forge", correct: false},
                    ]
                },
        ]

        this.documentElements = {
            menu: undefined,
            game: undefined,
            result: undefined,
            pause: undefined
        }

        this.timeTrack = {
            interval: undefined,
            time: 100,
        }

        //#region Bindings 
        this.setOption = this.setOption.bind(this)
        this.selectQuestions = this.selectQuestions.bind(this)
        this.chooseAnswer = this.chooseAnswer.bind(this)
        this.checkForEnd = this.checkForEnd.bind(this)
        this.nextQuestion = this.nextQuestion.bind(this)
        this.endGame = this.endGame.bind(this)
        this.startTrivia = this.startTrivia.bind(this)
        this.startCountDown = this.startCountDown.bind(this)
        this.countDown = this.countDown.bind(this)
        this.timeOut = this.timeOut.bind(this)
        this.pause = this.pause.bind(this)
        this.resume = this.resume.bind(this)
        this.backToMenu = this.backToMenu.bind(this)
        this.hint = this.hint.bind(this)
        //#endregion Bindings 
    }

    componentDidMount(){
        this.documentElements.menu = document.querySelector(".trivia-container.menu")
        this.documentElements.game = document.querySelector(".trivia-container.game")
        this.documentElements.result = document.querySelector(".trivia-container.results")
        this.documentElements.pause = document.querySelector(".game .pause")
        window.addEventListener("blur", this.pause)
    }


    selectQuestions(){
        this.setState({
            questionAlreadySelected: false,
            questionNumber: 1,
            selectedQuestions: [],
            actualQuestion: {
                question: "",
                answers: [
                    {answer: "", correct: false},
                    {answer: "", correct: false},
                    {answer: "", correct: false},
                    {answer: "", correct: false},
                ]
            },
            correctAnswers: 0,
        })

        let copyQuestions = this.questions 
        let questionsToUse = [...copyQuestions] //We must do this so "questionsToUse dosn't refers to "this.questions" and when we operate on one it will dosn't affect the other"
        let numberOfQuestions = questionsToUse.length;
        let selectedQuestions = [];
        let shuffledQuestions = [];

        while (selectedQuestions.length < this.state.totalQuestions) { 
            let randomNumber = Math.floor(Math.random() * numberOfQuestions)
            selectedQuestions.push(questionsToUse[randomNumber])
            questionsToUse.splice(randomNumber, 1)
            numberOfQuestions =  questionsToUse.length;
        }

        selectedQuestions.forEach(question => {
            let shuffled = question.answers
            .map(value => ({ value, sort: Math.random() }))
            .sort((a, b) => a.sort - b.sort)
            .map(({ value }) => value)
            question.answers = shuffled
            shuffledQuestions.push(question) 
        })

        this.setState({
            selectedQuestions: shuffledQuestions,
            actualQuestion: shuffledQuestions[0]
        })
    }

    setOption(event){
        let target = event.currentTarget
        if(target.classList.contains("selected")){return}
        let targetOption =  target.getAttribute("data-select")
        let optionButtons = document.querySelectorAll("[data-select=" + targetOption + "]")
        let selected = target.name
        optionButtons.forEach(btn => {btn.classList.remove("selected")})

        this.setState({
            [targetOption]: selected
        })
        setTimeout(() => {
            target.classList.add("selected")
        }, 100);
    }

    startTrivia(){ 
        console.log(this.state)
        document.querySelector(".pause").classList.add("display-none")
        document.querySelector(".question").classList.remove("display-none")
        document.querySelector(".answers-container").classList.remove("display-none")
        if(this.state.hints === "0"){
            document.querySelector(".tracker.hints").classList.add("display-none")
        }else{
            document.querySelector(".tracker.hints").classList.remove("display-none")
        }
        this.selectQuestions()
        this.setState({
            gameStarted: true,
            hintsLeft: this.state.hints,
            hintsAvaible: "hints-avaible",
        })
        this.documentElements.result.classList.add("display-none")
        this.documentElements.menu.classList.add("display-none")
        this.documentElements.game.classList.remove("display-none")
        this.newQuestion()
    }

    chooseAnswer(event){
        if(this.state.questionAlreadySelected){
            return
        }
        let target = event.currentTarget
        let option = Number(target.dataset.option)
        let questionNumber = this.state.selectedQuestions.indexOf(this.state.actualQuestion)
        let container = document.querySelector(".answers-container")
        container.classList.add("already-selected")
        clearInterval(this.timeTrack.interval)
        if(this.state.actualQuestion.answers[option].correct){
            target.classList.add("right")
            this.setState({
                correctAnswers: this.state.correctAnswers + 1,
                questionAlreadySelected: true,
            })
        }else{
            target.classList.add("wrong")
            this.setState({
                questionAlreadySelected: true,  
            })
            let correctOption = this.state.actualQuestion.answers.findIndex(option => option.correct === true);
            let selector = ".answers-container button[data-option='" + correctOption + "']"
            let correctAnswer = document.querySelector(selector)
            correctAnswer.classList.add("unselected", "right")
        }
        this.checkForEnd(questionNumber)
    }

    checkForEnd(questionNumber){
        setTimeout(() => {
            if(this.state.selectedQuestions[questionNumber + 1] !== undefined){
                this.nextQuestion()
            }else{
                this.endGame()
            }
        }, 1000);
    }

    newQuestion(){
            document.querySelectorAll('.answers-container button').forEach(answer => answer.classList.remove("right", "wrong", "unselected", "deleted-by-hint"))   
            document.querySelector(".answers-container").classList.remove("already-selected")
            document.querySelector(".timer-bar-tracker").classList.add("restarting")
            setTimeout(() => {
                document.querySelector(".timer-bar-tracker").classList.remove("restarting")
            }, 10);
            document.querySelector(".timer-bar-container").classList.remove("time-out")
            clearInterval(this.timeTrack.interval)
            this.startCountDown()
    }
    nextQuestion(){
        this.newQuestion()
        let questionNumber = this.state.selectedQuestions.indexOf(this.state.actualQuestion)
        this.setState({
            actualQuestion: this.state.selectedQuestions[questionNumber + 1],
            questionAlreadySelected: false,
            questionNumber: questionNumber + 2,
            hinted: false
         })
    }

    endGame(){
        clearInterval(this.timeTrack.interval)
        let resultMessage;
                if(  this.state.correctAnswers === 0 ){
                    resultMessage = "Horrible"
                }else if( (this.state.totalQuestions / this.state.correctAnswers ) === 1 ){
                    resultMessage = "Perfect"
                }else if( (this.state.totalQuestions / this.state.correctAnswers ) <= 1.25 ){
                    resultMessage = "Very Good "
                }else if( (this.state.totalQuestions / this.state.correctAnswers ) <= 2 ){
                    resultMessage = "Good "
                }else if( (this.state.totalQuestions / this.state.correctAnswers ) <= 3 ){
                    resultMessage = "Bad"
                }else if( (this.state.totalQuestions / this.state.correctAnswers ) <= this.state.totalQuestions ){
                    resultMessage = "So Bad"
                }
                this.setState({
                    gameStarted: false,
                    resultMessage: resultMessage
                })
                setTimeout(() => {
                    this.documentElements.game.classList.add("display-none")
                    this.documentElements.result.classList.remove("display-none")
                }, 1000);
    }

    startCountDown(){
        this.timeTrack.time = 100
        this.setState({
            timeLeft: "100%",
            timeState: undefined
        })
        this.timeTrack.interval = setInterval(this.countDown, this.state.maxTime)
    }

    pause(event){
        if(!this.state.gameStarted){
            return
        }
        if(event.currentTarget === document.querySelector(".pause-button") && this.state.pauseButton === Play){
            this.resume()
            return
        }
        
        clearInterval(this.timeTrack.interval)
        
        this.documentElements.pause.classList.remove("display-none")
        document.querySelector(".question").classList.add("display-none")
        document.querySelector(".answers-container").classList.add("display-none")
        this.setState({
            pauseButton: Play
        })
    }

    resume(){
        this.timeTrack.interval = setInterval(this.countDown, this.state.maxTime)
        this.documentElements.pause.classList.add("display-none")
        document.querySelector(".question").classList.remove("display-none")
        document.querySelector(".answers-container").classList.remove("display-none")
        this.setState({
            pauseButton: Pause
        })
    }

    countDown(){
        this.timeTrack.time --
        this.setState({
            timeLeft: this.timeTrack.time + "%"
        })

        if(this.state.timeState !== "danger" && this.timeTrack.time < 20){
            this.setState({
                timeState: "danger"
            })
        }
        if(this.timeTrack.time === 0){
            clearInterval(this.timeTrack.interval)
            this.timeOut()
        }
    }

    timeOut(){ 
        let questionNumber = this.state.selectedQuestions.indexOf(this.state.actualQuestion)
        let container = document.querySelector(".answers-container")
        container.classList.add("already-selected")
        document.querySelector(".timer-bar-container").classList.add("time-out")
        this.setState({
            questionAlreadySelected: true,
        })
        this.checkForEnd(questionNumber)
    }

    backToMenu(){
        clearInterval(this.timeTrack.interval)
        this.documentElements.game.classList.add("display-none")
        this.documentElements.result.classList.add("display-none")
        this.documentElements.menu.classList.remove("display-none")
    }

    hint(){
        if(this.state.hinted || this.state.hintsLeft === 0 || this.state.questionAlreadySelected ){
            return
        }else if( this.state.hintsLeft === 1 && !this.state.hinted ){  
            this.setState({
                hintsAvaible: "no-hints"
            })
        }
        let wrongOptions = this.state.actualQuestion.answers.reduce(
            (out, item, index) => !item.correct ? out.concat(index) : out, 
            []
        )
        let deletedOptions = [...wrongOptions].sort(() => 0.5 - Math.random()).slice(0, 2)
        let options = document.querySelectorAll(".answers-container button")
        options.forEach(option => {
            if( deletedOptions.includes( Number(option.getAttribute("data-option"))) ){
                option.classList.add("deleted-by-hint")
            }
        })     
        this.setState({
            hinted: true,
            hintsLeft: this.state.hintsLeft - 1
        }) 
    }


    render() { 
        return (
            <>
                <NavBar/>
                <section className='trivia-container menu'>
                    <div className="game-selector">
                        <h2>Trivia of Legends</h2>
                        <div className="selector quantity">
                            <label>Choose a number of questions</label>
                            <button name="5" onClick={this.setOption} data-select="totalQuestions" >5</button>
                            <button name="10" onClick={this.setOption} data-select="totalQuestions" className='selected'>10</button>
                            <button name="20" onClick={this.setOption} data-select="totalQuestions" >20</button>
                        </div>
                        <div className="selector time">
                            <label>Choose the time for questions</label>
                            <button name="50" onClick={this.setOption} data-select="maxTime" >5s</button>
                            <button name="100" onClick={this.setOption} data-select="maxTime" className='selected'>10s</button>
                            <button name="200" onClick={this.setOption} data-select="maxTime" >20s</button>
                        </div>
                        <div className="selector hints-selector">
                            <label>Choose the number of hints</label>
                            <button name="0" onClick={this.setOption} data-select="hints" className='selected'>NO HINTS</button>
                            <button name="1" onClick={this.setOption} data-select="hints" >1 HINT</button>
                            <button name="2" onClick={this.setOption} data-select="hints" >2 HINTS</button>
                            <button name="3" onClick={this.setOption} data-select="hints" >3 HINTS</button>
                        </div>
                        <div className="selector start-selector">
                            <button id="start" onClick={this.startTrivia}>Start</button>
                        </div>
                    </div>
                </section>
                <section className='trivia-container game display-none'>
                    <div className="pause display-none">
                        <div className="pause-options">
                            <button className='pause-button' type="button" onClick={this.pause}>
                                <img src={this.state.pauseButton} alt="Pause" />
                            </button>
                            <button className='pause-button' type="button" onClick={this.backToMenu}>
                                <img src={Menu} alt="Menu" />
                            </button>
                            <button className='pause-button' type="button" onClick={this.startTrivia}>
                                <img src={Restart} alt="Restart" />
                            </button>
                        </div>
                        <span>Game paused</span>
                        <input type="button" value="Resume" onClick={this.resume}/>
                    </div>
                    <span className='question'>{this.state.actualQuestion.question}</span>
                
                    <div className="answers-container">
                        <button data-option="0" onClick={this.chooseAnswer}>{this.state.actualQuestion.answers[0].answer}</button>
                        <button data-option="1" onClick={this.chooseAnswer}>{this.state.actualQuestion.answers[1].answer}</button>
                        <button data-option="2" onClick={this.chooseAnswer}>{this.state.actualQuestion.answers[2].answer}</button>
                        <button data-option="3" onClick={this.chooseAnswer}>{this.state.actualQuestion.answers[3].answer}</button>
                    </div>
                    <div className="timer-bar-container">
                        <div className="timer-bar-tracker" style={{width: this.state.timeLeft, animationName: this.state.timeState, transitionDuration: ((this.state.maxTime / 1000) + "s")}}></div>
                    </div>
                    <div className="trackers-container">
                    <span className='tracker' unselectable="on">{"Question " + this.state.questionNumber + "/" + this.state.totalQuestions}</span>
                    <span className={'tracker hints ' + this.state.hintsAvaible} unselectable="on" onClick={this.hint}><img src={Hint} alt="Hints" /> {this.state.hintsLeft}</span>
                    </div>
                </section>
                <section className='trivia-container results display-none'>
                    <div className='results-display'>
                        <span>{this.state.resultMessage}</span>
                        <p>{"Your score was " + this.state.correctAnswers + " of " + this.state.totalQuestions}</p>
                        <button onClick={this.startTrivia}>PLAY AGAIN</button>
                        <button onClick={this.backToMenu}>BACK TO MENU</button>
                        <Link draggable="false" to="/submit-question">Submit a question</Link>
                    </div>
                </section>
           </>
        );
    }
}
 
export default Trivia;