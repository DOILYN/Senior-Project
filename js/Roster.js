'use strict'

import PlayerNode from "./Player.js"

/*
 *  This is an object to store player's in a roster for the purpose of users creating
 *  their leagues. It's constructor called by utils.js, and the constructor parameters
 *  are player objects that will be determined by the UI
 */

class RosterNode
{

    constructor(players)
    {
        
        this.players = players
    }

    update( )
    {

        // unsure if this is necessary
        for (var i = 1; i < this.players.length; i++){

            score += this.players[i].update()

        }

    }

    // Use each player's season stats to find total score for fantasy league
    getScore(){

        var score = 0

        for (var i = 0; i < this.players.length; i++){

            score += this.players[i].getScore()

        }

        return score
    }

    list(){
        for (var i = 0; i < this.players.length; i++){
            console.log("\nPlayer ", i, " ", this.players[i].name, "\n")
        }
    }
}

export default RosterNode