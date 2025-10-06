import { useState } from "react";

function LikeCard () {

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
        <div className="card p-4 text-center shadow-sm">
            <h4 className="mb-3">Like This Post</h4>
            <button
                className={`btn ${liked? "btn-danger" : "btn-outline-danger"}`}
                onClick={handleLike}>
                {liked? "Unlike" : "Like"}
            </button>
            <p className="mt-3 mb-0 text-muted">
                Total Likes: {likeCount}
            </p>
        </div>
    )


}

export default LikeCard