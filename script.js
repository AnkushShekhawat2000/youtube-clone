// google apis youtube v3

const BASE_URL = "https://www.googleapis.com/youtube/v3";

const API_KEY = "AIzaSyAbt5xQ4zxMe83B3HM_NFZFlBmobZeA8gE";


// the specified route
// it was search -> /search

// API_KEY

const CONTENT_DETAILS = "contentDetails"; // length of video
const STATS = "statistics";  // like count and comment count

async function fetchVideos(searchQuery,maxResults){

    try{
        const response = await fetch(
        BASE_URL + "/search" +
        `?key=${API_KEY}` +
         `&part=snippet` +
         `&q=${searchQuery}` +
         `&maxResults=${maxResults}`
        );
        const data = await response.json();
        console.log(data);
        // renderVideos(data);

    }
    catch(err){
        console.log(err);
    }
  
}

fetchVideos("icc world cup",10);

async function fetchVideoStats(videoId,typeOfDetails){
    const response = await fetch(
        BASE_URL + 
        "/videos" + 
        `?key=${API_KEY}` + 
        `&part=${typeOfDetails}` + 
        `&id=${videoId}`
        );
        const data = await response.json();
        console.log(data);
}



//fetchVideoStats('AFEZzf9_EHk',CONTENT_DETAILS);
//fetchVideoStats('AFEZzf9_EHk', STATS);

async function fetchChannelLogo(channelId){
    try{
        const response = await fetch(
            BASE_URL + "/channels" +
             `?key=${API_KEY}`+
             `&part=snippet`+
             `&id=${channelId}`
        );
    
        const data = await response.json();
        console.log(data);
    }
    catch(err)
    {
        console.log(err);
    }

} 

 // fetchChannelLogo("UCt2JXOLNxqry7B_4rRZME3Q");
