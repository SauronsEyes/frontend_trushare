const axios = require('axios');

export async function getYoutubeVideos() {

    try{
        const response = await axios.get('https://www.googleapis.com/youtube/v3/search?key=AIzaSyBhNa6Eq3lvSPdD4wX0xYXr3RoTJ_yEUVM&channelId=UC2-AI6TMiV7g2PCJ3Djov2Q&part=snippet,id&order=date&maxResults=20');
        return response.data;
    }catch(error) {
        return [];
    }
    
}