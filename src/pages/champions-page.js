import React from 'react'
import { Component } from 'react';
import NavBar from '../components/nav'
import Champion from '../components/champion';
import '../components/champions.css'
import Reload from '../assets/reload.svg'
import SadBee from '../assets/Bee_Sad_Emote.webp'
import EnglishFlag from '../assets/gb.svg'
import SpanishFlag from '../assets/es.svg'

class Champions extends Component {
    constructor(props){
        super(props);
        this.state={
            lang: "en_US",
            flag: EnglishFlag,
            notFoundMessage:"No champions found.",
            namePlaceholder: "Champion name",
            totalChampions: 0,
            allChampsRendered: "notAllChampionsRendered",
            champions: [],
            renderChampions: [],
            //Filters
            nameFilter: "",
            Mage: true,
            Assassin: true,
            Fighter: true,
            Tank: true,
            Marksman: true,
            Support: true,
            //Roles
            role: "Role",
            roleMage: "Mage",
            roleAssassin: "Assasin",
            roleFighter: "Fighter",
            roleTank: "Tank",
            roleMarksman: "Marksman",
            roleSupport: "Support"
        }

        this.fetchChampionsData = this.fetchChampionsData.bind(this) 
        this.changenameFilter = this.changenameFilter.bind(this)
        this.filter = this.filter.bind(this)
        this.selectChampion = this.selectChampion.bind(this)
        this.closeChampion = this.closeChampion.bind(this)
        this.roleErase = this.roleErase.bind(this)
        this.resetFilters = this.resetFilters.bind(this)
        this.changeLanguage = this.changeLanguage.bind(this)
    }


    componentDidMount(){
        this.fetchChampionsData()
        console.log("component has mount")
        document.getElementById("overlay").setAttribute("data-display", "collapsed")
    }

    fetchChampionsData(){
        let championsArray = [];
        fetch('https://ddragon.leagueoflegends.com/cdn/12.21.1/data/en_US/champion.json')
        .then((response) => response.json())
        .then((data) => {
            let allChampionsFetch = "notAllChampionsRendered"
            let championsNames = Object.keys(data.data)
            let totalChampions = championsNames.length

            this.setState({
                totalChampions: totalChampions,
                allChampsRendered: "notAllChampionsRendered",
            })

            championsArray = [];
            championsNames.forEach(champ => {
                let fetchRoute = "https://ddragon.leagueoflegends.com/cdn/12.21.1/data/"+ this.state.lang +"/champion/" + champ + ".json" 

                fetch(fetchRoute)
                .then((response) => response.json())
                .then((data) => {
                    let championData = data.data[champ]
                    let champObject = {};
                    champObject.name = championData.name
                    champObject.id = championData.id
                    champObject.image = "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/" + championData.id + "_0.jpg"
                    champObject.icon = "https://ddragon.leagueoflegends.com/cdn/12.22.1/img/champion/" + championData.id + ".png"
                    champObject.role = championData.tags[0]
                    champObject.roleLang = championData.tags[0]
                    if(this.state.lang === "es_ES"){
                        switch (champObject.role) {
                            case "Mage":
                                champObject.roleLang = "Mago"
                                break;
                            case "Assassin":
                                champObject.roleLang = "Asesino"
                                break;
                            case "Fighter":
                                champObject.roleLang = "Luchador"
                                break;
                            case "Tank":
                                champObject.roleLang = "Tanque"
                                break;
                            case "Marksman":
                                champObject.roleLang = "Tirador"
                                break;
                            case "Support":
                                champObject.roleLang = "Soporte"
                                break;
                            default:
                                break;
                        }
                    }
                    champObject.alt = "An image of " + championData.name
                    champObject.title = championData.title
                    champObject.lore = championData.lore
                    champObject.key = championData.key
                    champObject.route = "https://www.leagueoflegends.com/en-us/champions/" + championData.name.toLowerCase().replaceAll(" ", "-").replaceAll("'","-").replaceAll(".","").replaceAll("nunu-&-willump", "nunu") // Nunu must be done manually because the character has a name change

                    championsArray.push(champObject)
                    if(championsArray.length === totalChampions){
                        allChampionsFetch = "allChampionsRendered"
                    }
                    this.setState({
                        champions: championsArray.sort((a, b) => (a.name > b.name) ? 1 : -1),
                        renderChampions: championsArray,
                        allChampsRendered: allChampionsFetch
                    }) 
                })
            })
        })

    }

    filter(){
        setTimeout(() => {
        let notFoundMessage = document.querySelector(".not-found-message")
        let filteredChampsArray = [];
        this.setState({
            renderChampions: []
        })
        let nameFilter = true
        let noNameFilter = this.state.nameFilter === ""
        this.state.champions.forEach(champ => {
            if( !noNameFilter ){
                nameFilter = champ.name.toLowerCase().includes(this.state.nameFilter.toLowerCase())
            }
            //This are just some easter eggs
            switch (this.state.nameFilter.toLowerCase()) {
                case "666":
                case "the devil":
                case "devil":
                    nameFilter = champ.name === "Teemo"
                  break;
                case "powder":
                    nameFilter = champ.name === "Jinx"
                  break;
                case "violet":
                    nameFilter = champ.name === "Vi"
                  break;
                case "firelight":
                    nameFilter = champ.name === "Ekko"
                  break;
                case "vander":
                    nameFilter = champ.name === "Warwick"
                  break;
                case "sarah":
                    nameFilter = champ.name === "Miss Fortune"
                  break;
                case "popo":
                case "the hero":
                    nameFilter = champ.name === "Poppy"
                  break;
                case "jarvan":
                    nameFilter = champ.name === "LeBlanc"
                  break;
                case "ninja":
                    nameFilter = champ.name === "Shen" || champ.name === "Akali" || champ.name === "Kennen" || champ.name === "Zed"
                  break;
                case "maxgamer":
                case "max gamer":
                    nameFilter = champ.name === "Sett"
                  break;
                case "arcane":
                    nameFilter = champ.name === "Vi" || champ.name === "Jinx" || champ.name === "Warwick" || champ.name === "Ekko" || champ.name === "Viktor" || champ.name === "Heimerdinger" || champ.name === "Jayce" || champ.name === "Singed" || champ.name === "Caitlyn"
                  break;
                case "el legendario":
                case "legendario":
                case "watch this":
                case "ayuda me estoy muriendo":
                case "torqus":
                    nameFilter = champ.name === "Veigar" || champ.name === "Kha'Zix" || champ.name === "Karma" || champ.name === "Hecarim" || champ.name === "Udyr"
                  break;
                case "cat":
                    nameFilter = champ.name === "Yuumi" || champ.name === "Rengar" 
                  break;
                case "dog":
                    nameFilter = champ.name === "Nasus" || champ.name === "Warwick" 
                  break;
                case "all":
                case "todos":
                     nameFilter = true
                    break;
                case "yordle":
                case "yordles":
                    nameFilter = champ.name === "Corki" || champ.name === "Fizz" || champ.name === "Hnar" || champ.name === "Heimerdinger" || champ.name === "Kennen" || champ.name === "Kled" || champ.name === "Lulu" || champ.name === "Norra" || champ.name === "Poppy" || champ.name === "Rumble" || champ.name === "Teemo" || champ.name === "Tristanta" || champ.name === "Veigar" || champ.name === "Vex" || champ.name === "Ziggs"
                    break;
                default:
                  break;
              }
            
            
            if( nameFilter && this.state[champ.role] ){
                filteredChampsArray.push(champ)
                notFoundMessage.classList.remove("not-found")
                this.setState({
                    renderChampions: filteredChampsArray
                })
            }
            setTimeout(() => {
                if (this.state.renderChampions.length === 0){
                    notFoundMessage.classList.add("not-found")
                }
            }, 100);
        });  

    }, 100);
    }

    changenameFilter(event){
        const target = event.target;
        const value = target.value;
        this.setState({
          nameFilter: value    
        })
        this.filter()  
    }

    roleErase(event){
        document.querySelectorAll(".champion-role-checkbox").forEach(e => {e.classList.remove("select")})
        const target = event.target
        const role = target.attributes.name.value
        this.setState({
            [role]: !this.state[role]
        })
        target.classList.remove("select")
        target.classList.toggle("hide")
        this.filter()  
    }

    resetFilters(){
        document.querySelectorAll(".champion-role-checkbox").forEach(e => {e.classList.remove("hide")})
        this.setState({
            nameFilter: "", 
            Mage: true,
            Assassin: true,
            Fighter: true,
            Tank: true,
            Marksman: true,
            Support: true
        })
        this.filter()  
    }

    selectChampion(e){
        if(!e.currentTarget.classList.contains("active")){
            e.currentTarget.classList.add("active")
            document.getElementById("overlay").setAttribute("data-display", "extended")
            console.log(document.querySelector("#root::before"))
        }
    }

    closeChampion(){
        setTimeout(() => {
            document.getElementById("overlay").setAttribute("data-display", "collapsed")
            document.querySelector(".champion.active").classList.remove("active")
        }, 10);
    }   

    changeLanguage(){
        if(this.state.lang === "en_US"){
            this.setState({
                lang: "es_ES",
                flag: SpanishFlag,
                role: "Rol",
                roleMage: "Mago",
                roleAssassin: "Asesino",
                roleFighter: "Luchador",
                roleTank: "Tanque",
                roleMarksman: "Tirador",
                roleSupport: "Soporte",
                notFoundMessage: "No se encontraron campiones.",
                namePlaceholder: "Nombre"
        })}else{
            this.setState({
                lang: "en_US",
                flag: EnglishFlag,
                role: "Role",
                roleMage: "Mage",
                roleAssassin: "Assasin",
                roleFighter: "Fighter",
                roleTank: "Tank",
                roleMarksman: "Marksman",
                roleSupport: "Support",
                notFoundMessage: "No champions found.",
                namePlaceholder: "Champion name"
        })}
        this.resetFilters()
        this.fetchChampionsData()
    }

    render() { 
        return (  
            <>
                <div id="overlay" onClick={this.closeChampion}></div>
                <div id="overlay-loading" className={this.state.allChampsRendered} > 
                    <p>Loading...</p>
                    <img src={Reload} alt="Loading Icon" />
                </div>
                <NavBar/> 
                <div className="filters">
                    <div onClick={this.changeLanguage} className={'checkbox-btn btn-img btn-flag ' + this.state.lang}><img src={this.state.flag} alt="Reload Filters" /></div>
                    <div className='role-filters'>
                        <div name="Fighter" onClick={this.roleErase} className='checkbox-btn champion-role-checkbox'>{this.state.roleFighter}</div>
                        <div name="Marksman" onClick={this.roleErase} className='checkbox-btn champion-role-checkbox'>{this.state.roleMarksman}</div>
                        <div name="Tank" onClick={this.roleErase} className='checkbox-btn champion-role-checkbox'>{this.state.roleTank}</div>
                        <div name="Assassin" onClick={this.roleErase} className='checkbox-btn champion-role-checkbox'>{this.state.roleAssassin}</div>
                        <div name="Mage" onClick={this.roleErase} className='checkbox-btn champion-role-checkbox'>{this.state.roleMage}</div>
                        <div name="Support" onClick={this.roleErase} className='checkbox-btn champion-role-checkbox'>{this.state.roleSupport}</div>
                    </div>
                    <input type="text" placeholder={this.state.namePlaceholder} className='name-input' value={this.state.nameFilter} onChange={this.changenameFilter}/>
                    <div onClick={this.resetFilters} className='checkbox-btn btn-img'><img src={Reload} alt="Reload Filters" /></div>
                </div>    
                <div className='champions-display' data-count={this.state.renderChampions.length}>  
                    <div className="not-found-message"> 
                        <img src={SadBee} alt="A sad Bee" />
                        <span>{this.state.notFoundMessage}</span>
                    </div>  
                    {this.state.renderChampions.map((champ) => (
                        <Champion 
                        key={champ.key} 
                        name= {champ.name} 
                        id= {champ.id} 
                        title= {champ.title}
                        roleLang= {this.state.role}
                        role = {champ.roleLang}
                        image= {champ.image}
                        icon= {champ.icon}
                        alt= {champ.alt}
                        lore= {champ.lore}
                        championPageRoute= {champ.route}
                        clicked = {this.selectChampion}
                        closeButton= {this.closeChampion}
                        />
                    ))} 
                </div>
            </>
        );
    }
}
 
export default Champions;

