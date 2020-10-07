import React from 'react';

const Post = (props) => {
    return (
        <>
            <div className='post'> {props.message}</div> 
        </>
    )
};
export default Post;