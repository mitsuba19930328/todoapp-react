import React from 'react';

const Article = (props) => {
    let isGoodString = "いいのか？";
    if(props.isGood){
        isGoodString = "いいね押下済み";
    }else{
        isGoodString = "いいのか";
    }

    return (
        <div>
            <h2>{props.title}</h2>
            
            <label htmlFor="check">公開状態</label>
            <input type="checkbox" checked={props.isPublished} id="check" onClick={() => props.toggle()} />

            <p>{isGoodString}</p>

            <label htmlFor="goodBtn">いいねボタン</label>
            <input type="checkbox" checked={props.isGood} id="goodBtn" onClick={() => props.toggleGood()} />
        </div>
    )
};

export default Article;