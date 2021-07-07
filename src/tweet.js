import React, {useState} from "react";
import "./App.css"

// function likeButton() {
//     const [likes, setLikes] = useState(0);
    
//     const addLike = () => (
//     setLikes(likes + 1)
// )


// }



function Tweet({name, message}) {

    let [likes, setLikes] = useState(0);
    
    const addLike = () => (
    setLikes(likes + 1)
)



    return (
        <div className="tweet">
            <h3>{name}</h3>
            <p>{message}</p>
            <h3>Likes: {likes}</h3>
            <button onClick={addLike}>Add Like</button>
        </div>)
}

export default Tweet;