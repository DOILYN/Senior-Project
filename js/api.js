/* 
 *          This is a basic api for fetching data from an nba database. It will return the required 
 *          data for constructing a player roster, and determining the user's score for their league
 *          
 *          NOTE: 'balldontlie' is an open-source free to use api, and there is no licensing required
 */



// End point for data retrieval
const API_ENDPOINT = 'https://www.balldontlie.io/api/v1'

const api = {

  // These methods will return JSON objects of requested data using api.method()
  // **Theres more specific pulls, but I wasn't sure exactly what we'd need so I shotgunned some
  getTeam(id) {
    return this.apiRequest(`${API_ENDPOINT}/teams/${id}`)
  },

  getTeams(){
    return this.apiRequest(`${API_ENDPOINT}/teams`)
  },

  getPlayerInfo(id){
    return this.apiRequest(`${API_ENDPOINT}/players/${id}`)
  },

  getStat(id) {
    return this.apiRequest(`${API_ENDPOINT}/stats/${id}`)
  },

  getPlayerGameStatsById(playerId, gameId) {
    return this.apiRequest(`${API_ENDPOINT}/stats/?player_ids[]=${playerId}&game_ids[]=${gameId}`)
  },

  getPlayerStatsBySeason(id) {
    return this.apiRequest(`${API_ENDPOINT}/stats/?player_ids[]=${id}&seasons[]=2021`)
  },


  // Fetches the JSON object from a specified url
  apiRequest(url) {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then(data => {
            if (!data.ok) {
              throw data.statusText
            }
            data.json()
                .then(jsonData => {
                  let response = {
                      error: false,
                      errorReason: null,
                      data: jsonData
                  }
                  resolve(response)
                })
        })
        .catch(error => {
          let response = {
              error: true,
              errorReason: error,
              data: null
          }
          reject(response)
        })
    })
  }
}

export default api