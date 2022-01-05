'use strict'
import api from "./api.js"
/*
 *  This is an object to store player data for the purpose of users creating
 *  their leagues. It's constructor called by utils.js, and the member data is passed
 *  through based on the JSON data retrieved by the api
 */

class PlayerNode
{

    constructor( id )
    {

        this.id = id
        this.update()
        this.name = ""
        this.position = ""
        this.team = ""
        this.stats = []

    }

    update( )
    {
        this.parsePlayerStats()
    }

    // Use player's season stats to create player's score for fantasy league
    getScore(){

        return 0

    }




    // Possibly put this here instead of utils?
    parsePlayerStats(){
        api.getPlayerStatsBySeason(this.id).then(u => {
        
            this.setData(u.data.data)
        })
        .catch(e => {
            console.log(e)
        })
    }

    setData(data){
        this.name = `${data[0].player.first_name} ${data[0].player.last_name}` 
        this.position = data[0].player.position
        this.team = data[0].team.full_name 
        this.id = data[0].player.id
        
        // We can expand on this later
        this.stats = data
    }
}

export default PlayerNode