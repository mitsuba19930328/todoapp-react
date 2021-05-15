import React from 'react'
import Article from './Article'

class Blog extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isPublished: false,
            isGood: false
        }
    }

    render(){
        const authorName = 'テストさん'
        return(
            <>
                <Article
                    title = {'Reactの使い方'}
                    isPublished = {this.state.isPublished}
                    toggle={() => this.togglePublished()}
                    isGood = {this.state.isGood}
                    toggleGood={() => {this.toggleGood()}}                    
                />
            </>
        )
    }

    // 公開状態を反転させる関数メソッド
    togglePublished = () =>{
        this.setState({
            isPublished: !this.state.isPublished
        })
    };

    // いいね状態を反転させる関数メソッド
    toggleGood = () =>{
        this.setState({
            isGood: !this.state.isGood
        })
    };
}


export default Blog