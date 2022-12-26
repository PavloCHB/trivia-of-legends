import React from 'react'
import { Component } from 'react';
import NavBar from '../components/nav'
import '../components/about-the-game.css'

class AboutTheGame extends Component {

    render() { 
        return (  
            <>
                <NavBar/>
                <div className='container-about'>
                    <div className='about' id="main-about">
                        <h2>League of Legends</h2>
                        <p>League of Legends (LoL), commonly referred to as League, is a 2009 multiplayer online battle arena video game developed and published by Riot Games. Inspired by Defense of the Ancients, a custom map for Warcraft III, Riot's founders sought to develop a stand-alone game in the same genre. Since its release in October 2009, League has been free-to-play and is monetized through purchasable character customization. The game is available for Microsoft Windows and macOS.<br/>

                        In the game, two teams of five players battle in player-versus-player combat, each team occupying and defending their half of the map. Each of the ten players controls a character, known as a "champion", with unique abilities and differing styles of play. During a match, champions become more powerful by collecting experience points, earning gold, and purchasing items to defeat the opposing team. In League's main mode, Summoner's Rift, a team wins by pushing through to the enemy base and destroying their "Nexus", a large structure located within.<br/>

                        League of Legends has received generally positive reviews; critics highlighted its accessibility, character designs, and production value. The game's long lifespan has resulted in a critical reappraisal, with reviews trending positively; the negative and abusive in-game behavior of its players, criticized since early in the game's lifetime, persists despite Riot's attempts to fix the problem. In 2019, League regularly peaked at eight million concurrent players, and its popularity has led to tie-ins such as music videos, comic books, short stories, and an animated series, Arcane. Its success has also spawned several spin-off video games, including a mobile version, a digital collectible card game and a turn-based role-playing game, among others. A massively multiplayer online role-playing game based on the property is in development.<br/>

                        Regularly cited as the world's largest esport, the game has an international competitive scene consisting of 12 leagues. These domestic leagues culminate in the annual League of Legends World Championship. The 2019 event registered over 100 million unique viewers, peaking at a concurrent viewership of 44 million during the finals. Domestic and international events have been broadcast on livestreaming websites such as Twitch, YouTube, Bilibili, and on cable television sports channel ESPN. </p>
                    </div>

                    <div className='about' id="gameplay-about">
                        <h2>Gameplay</h2>
                        <p>League of Legends is a multiplayer online battle arena (MOBA) game in which the player controls a character ("champion") with a set of unique abilities from an isometric perspective. As of 22 September 2022, there are 161 champions available to play. Over the course of a match, champions gain levels by accruing experience points (XP) through killing enemies. Items can be acquired to increase champions' strength, and are bought with gold, which players accrue passively over time and earn actively by defeating the opposing team's minions, champions, or defensive structures. In the main game mode, Summoner's Rift, items are purchased through a shop menu available to players only when their champion is in the team's base. Each match is discrete; levels and items do not transfer from one match to another. </p>
                    </div>

                    <div className='about' id="summoners-about">
                        <h2>Summoner's Rift</h2>
                        <p>Summoner's Rift is the flagship game mode of League of Legends and the most prominent in professional-level play. The mode has a ranked competitive ladder; a matchmaking system determines a player's skill level and generates a starting rank from which they can climb. There are nine tiers; the least skilled are Iron, Bronze, and Silver, and the highest are Master, Grandmaster, and Challenger.<br/>

                        Two teams of five players compete to destroy the opposing team's "Nexus", which is guarded by the enemy champions and defensive structures known as "turrets". Each team's Nexus is located in their base, where players start the game and reappear after death. Non-player characters known as minions are generated from each team's Nexus and advance towards the enemy base along three lanes guarded by turrets: top, middle, and bottom. Each team's base contains three "inhibitors", one behind the third tower from the center of each lane. Destroying one of the enemy team's inhibitors causes stronger allied minions to spawn in that lane, and allows the attacking team to damage the enemy Nexus and the two turrets guarding it. The regions in between the lanes are collectively known as the "jungle", which is inhabited by "monsters" that, like minions, respawn at regular intervals. Like minions, monsters provide gold and XP when killed. Another, more powerful class of monster resides within the river that separates each team's jungle. These monsters require multiple players to defeat and grant special abilities to their slayers' team. For example, teams can gain a powerful allied unit after killing the Rift Herald, permanent strength boosts by killing dragons, and stronger, more durable minions by killing Baron Nashor.<br/>

                        Summoner's Rift matches can last from as little as 15 minutes to over an hour. Although the game does not enforce where players may go, conventions have arisen over the game's lifetime: typically one player goes in the top lane, one in the middle lane, one in the jungle, and two in the bottom lane. Players in a lane kill minions to accumulate gold and XP (termed "farming") and try to prevent their opponent from doing the same. A fifth champion, known as a "jungler", farms the jungle monsters and, when powerful enough, assists their teammates in a lane. </p>
                    </div>

                </div>
            </>
        );
    }
}
 
export default AboutTheGame;