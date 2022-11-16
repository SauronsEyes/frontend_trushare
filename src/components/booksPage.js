import { useState } from 'react';
import { Link } from 'react-router-dom';
import booksInfo from '../jsonData/bookInfo'

const BooksPage = () => {
    const [authorsData,setAuthorsData] = useState (booksInfo.data)
    const [currentDisplayID,setCurrentDisplayID] = useState(0);
    document.addEventListener('mousemove',(e)=>{
        var docWidth = window.innerWidth;
        var docHeight = window.innerHeight;
        var mouseX = e.clientX;
        
        var booksItems = document.getElementsByClassName('booksItem')
        for(var i=0; i <booksItems.length; i++) {
            
            var elemenPosX = (booksItems[i].getBoundingClientRect().left + window.scrollX)
            var calc = (-mouseX + elemenPosX) / docWidth * 30
            booksItems[i].style.transform = `rotate3d(1,5,1,${calc}deg)`
        }
    })

    const displayDetails = () => {
        document.getElementById('authorDisplay').style.height = 'auto';
        document.getElementById('authorDisplay').style.opacity = '1';
        document.getElementById('authorDisplay').style.padding = '50px 10%';

    }

    const updateAuthorDisplay = (contentVal) => {
       window.scrollTo(0,0);
        if(currentDisplayID === 0) {
            displayDetails();
        }
        setCurrentDisplayID(contentVal);
    }
    return ( 
        <div className="booksContainer">
            <h1>Helpful <span>Books</span></h1>
            <div className="authorDetailsDisplay d-flex" id="authorDisplay">
                <div className='authorDisplay'>
                    <img src={authorsData[currentDisplayID].authorPic} className="bookPic"></img>
                    <h4>{authorsData[currentDisplayID].authorName}</h4>
                </div>
                <div className='authorDetails'>
                    <p>
                        {authorsData[currentDisplayID].authorDesc}
                    </p>
                    <h5>Books</h5>
                    <div className='booksCollection d-flex'>
                        {
                            authorsData[currentDisplayID].authorBooks.map((authorBook) => (
                                <div className="booksCard d-flex flex-column align-items-center" key={authorBook.id.toString()}>
                                    <img src={authorBook.bookSrc} className="bookPic"></img>
                                    <a  href={authorBook.bookLink}>Buy Now</a>
                                </div>
                            ))
                        }
                    </div>
                </div>

            </div>
            <div className="innerBooksContainer ">
                <div className='booksRow d-flex flex-wrap justify-content-center align-items-start'>
                    {
                        authorsData.map((authorData)=>(
                            <div className="booksItemContainer" key={authorData.id.toString()} >
                                 <div className="booksItem" onClick={()=>updateAuthorDisplay(authorData.id)}>
                                    <img src={authorData.authorPic} className="bookPic" alt={authorData.authorName}></img>
                                    <h4>{authorData.authorName}</h4>
                                    <p>
                                        {authorData.authorDesc.substring(0,180)} ...
                                    </p>
                                </div>
                            </div>
                           
                        ) )
                    }
                </div>
               
            </div>
        </div>
    );
}
 
export default BooksPage;