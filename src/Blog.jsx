import React from 'react'
import Article from './Article'

class Blog extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isPublished: false
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
}


export default Blog