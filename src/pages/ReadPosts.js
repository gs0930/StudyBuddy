import React, { useState, useEffect } from 'react';
import Card from '../components/Card';

const ReadPosts = (props) => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        setPosts(props.data);
    }, [props]);

    return (
        <div className="ReadPosts">
            {
                posts && posts.length > 0 ?
                    posts.map((post, index) =>
                        <Card id={post.id} name={post.name} major={post.major} grade={post.grade} />
                    ) : <h2>{ }</h2>
            }
        </div>
    )
}

export default ReadPosts;