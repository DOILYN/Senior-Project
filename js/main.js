'use strict'
import PlayerNode from "./Player.js"
import RosterNode from "./Roster.js"

import 
    {
        // stuff
    }
from "./utils.js"


/**
 * Entry point to the application
 */
function main( )
{   
    
    // Testing player fetch/construct
    let player = new PlayerNode(237)

    // Dealing with asyncronous promises by setting time outs on use of objects for now
    // (Hopefully we can find a better method down the road)
    // Time outs are asyncronous though, so it wont slow any processes on the stack
    setTimeout(() => {
        console.log("TEST PLAYER PARSE: LeBron James\n")
        console.log("Name: ", player.name)
        console.log("Position: ", player.position)
        console.log("Team: ", player.team)
    }, 3000)
    
    
    
    // Testing rosterNode and PlayerNode
    let players = []
    
    // Create 13 player objects (5 for debuggin to avoid hitting request limit of 60/min)
    for (var i = 0; i < 9; i++){

        players[i] = new PlayerNode(100 + i)

    }

    // Send them as parameters for the roster project
    let roster = new RosterNode(players)

    // Test the roster
    setTimeout(() => {
        console.log("\n\nTEST ROSTER BUILD:\n")
        roster.list()
    }, 10000)
    
}

// run the application
main( )