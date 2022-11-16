import { useEffect, useState } from "react";

const LoadingScreen = () => {
    var quotesList = [
        "The most beautiful moments in life are moments when you are expressing your joy, not when you are seeking it.",
        "The sign of intelligence is that you are constantly wondering. Idiots are always dead sure about every damn thing they are doing in their life.",
        "The sign of intelligence is that you are constantly wondering. Idiots are always dead sure about every damn thing they are doing in their life.",
        "If you resist change, you resist life",
        "The fear is simply because you are not living with life, You are living in your mind."
    ]
   
    const [displayQuote, setQuote] = useState(quotesList[Math.ceil(Math.random()*(quotesList.length-1))])
    useEffect(()=>{
        setInterval(()=>{
            setQuote(quotesList[Math.ceil(Math.random()*quotesList.length - 1)])
        },5000)
        setTimeout(()=>{
            document.getElementById('loadingContainer').classList.add("exitLoading");
            setTimeout(()=>{
            document.getElementById('loadingContainer').classList.add("exitLoadingComplete");

            },1000)
        },10000)
    },[])
    return ( 
        <div className="loadingScreenContainer fixed-top" id="loadingContainer">
            <div className="quoteContainer d-flex justify-content-center align-items-center">
                <h1>{`"${displayQuote}"`}</h1>
            </div>     
          
        </div>
     );
}
 
export default LoadingScreen;