import axios from "axios"
// eslint-disable-next-line

export default {
    // ZOMATO API CALL
    getRestaurants(){
            return axios.get('https://developers.zomato.com/api/v2.1/search?query=Chelsea&lat=40.742051&lon=-74.004821&count=10',{
                headers: {"user-key": process.env.REACT_APP_ZOMATO_API_KEY}
              });

            },
          }
//     // SeatGeek API Call  
//     getEvents(){
//       return axios.get(`https://api.seatgeek.com/2/performers?q=gaga&client_id=${process.env.REACT_APP_SEATGEEK_API_KEY}`)}

//  }