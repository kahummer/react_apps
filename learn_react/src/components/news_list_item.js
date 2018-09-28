import React from 'react';

const NewsItem = ({item}) => {

    return (
        
        <div key = {item.id}> 
                <h3>{item.title}</h3>
                <div>
                    {item.feed}
                </div>
        </div>
    )
}

export default NewsItem;