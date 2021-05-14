//Add Types if you deem it neccasry
// @ts-ignore
import {BASE_URL, API_KEY} from 'react-native-dotenv'


 
const Youtube = {
    apiCall(params: string){
        return fetch(BASE_URL+params + `&key=${API_KEY}`,{
            method: "GET"
        })
        .then(response => {
            //response.json().then(r => console.log("line13",r))
            if(response.status!==200) throw response;
            else return response.json();
        }).catch(e => console.log("wow err", e))
    },
    searchYoutubeVideo(query: string, maxResults: string = '5'){
        return this.apiCall(`search?part=snippet&${
            new URLSearchParams({
                q: query === undefined ? "" : query,
                maxResults: maxResults === undefined? "": maxResults
            })}`)
            .catch(e => console.log("err", e))
    }

};

export default Youtube;