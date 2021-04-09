const BaseURL: string ="https://www.googleapis.com/youtube/v3/";
const APIKey: string = "AIzaSyBnDAA_ckRrMOTFvOU6fQY7PymRnot7VgU";


const Youtube = {
    async apiCall(params: string){
        return fetch(BaseURL+params + `&key=${APIKey}`,{
            method: "GET"
        })
        .then(response => {
            if(!response.statusText.includes("OK")) throw response;
            else return response;
        })
    },
    async searchYoutubeVideo(query: string, maxResults: string){
        return this.apiCall(`search?${
            new URLSearchParams({
                q: query === undefined ? "" : query,
                maxResults: maxResults === undefined? "": maxResults
            })}`)
            .then(data => data.json())
            .then(dataJSON => dataJSON.results)
            .catch(err => console.log(err))
    }

};

export default Youtube;