import { useState } from "react";

function UserCard ({ name, age, image}) {
    const [liked, setLiked] = useState(false);
    const [likeCount, setLikeCount] =useState(0);
    
        function handleLike() {
            if(liked) {
                setLiked(false);
                setLikeCount(likeCount -1);
            } else {
                setLiked(true);
                setLikeCount(likeCount + 1);
            }
        }

    return (
        <div className="card border-info text-center p-3 shadow-sm mb-4">
            <img 
                src={image}  
                alt={name}
                className="card-img-top rounded-circle mx-auto"
                style={{ width: "100px", height: "100px", objectFit: "cover"}}
            />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">Age: {age}</p>
                <button
                    className={`btn ${liked? "btn-danger" : "btn-outline-primary"}`}
                    onClick={handleLike}>
                    {liked? "Unlike" : "Like"}
                </button>
                <p className="mt-3 mb-0 text-muted">
                    Total Likes: {likeCount}
                </p>
            </div>
        </div>
    )
}


export default UserCard