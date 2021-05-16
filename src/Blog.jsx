import React from 'react';
import Article from './Article';
import * as FooBar from './components/FooBar';
import Hoge from './components/Hoge';

class Blog extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isPublished: false,
            count: 0
        }
    }

    componentDidMount() {
        // ボタンがクリックされたらいいねを行う
        document.getElementById('counter').addEventListener('click', this.countUp)
    }

    componentDidUpdate() {
        if(this.state.count >= 10){
            this.setState({
                count: 0
            })
        }
    }

    componentWillUnmount() {
        document.getElementById('counter').removeEventListener('click', this.countUp)
    }

    render(){
        const authorName = 'テストさん'
        return(
            <>
                <Article
                    title = {'Reactの使い方'}
                    isPublished = {this.state.isPublished}
                    toggle={() => this.togglePublished()}
                    count = {this.state.count}
                    toggleLike = {() => this.countUp()}
                />
                <FooBar.Foo />
                <FooBar.Bar />
                <Hoge />
            </>
        )
    }

    // 公開状態を反転させる関数メソッド
    togglePublished = () =>{
        this.setState({
            isPublished: !this.state.isPublished
        })
    };

    // 公開状態を反転させる関数メソッド
    countUp = () =>{
        this.setState({
            count: this.state.count + 1
        })
    };
}


export default Blog;