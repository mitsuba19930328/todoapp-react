import React from 'react';
import Article from './Article';
import * as FooBar from './components/FooBar';
import Hoge from './components/Hoge';

const Blog = () => {

    // componentDidMount() {
    //     // ボタンがクリックされたらいいねを行う
    //     document.getElementById('counter').addEventListener('click', this.countUp)
    // }
    //
    // componentDidUpdate() {
    //     if(this.state.count >= 10){
    //         this.setState({
    //             count: 0
    //         })
    //     }
    // }
    //
    // componentWillUnmount() {
    //     document.getElementById('counter').removeEventListener('click', this.countUp)
    // }

    return(
        <>
            <Article
                title = {'Reactの使い方'}
                // count = {this.state.count}
            />
            <FooBar.Foo />
            <FooBar.Bar />
            <Hoge />
        </>
    )

    // // 公開状態を反転させる関数メソッド
    // togglePublished = () =>{
    //     this.setState({
    //         isPublished: !this.state.isPublished
    //     })
    // };

    // // 公開状態を反転させる関数メソッド
    // countUp = () =>{
    //     this.setState({
    //         count: this.state.count + 1
    //     })
    // };
}


export default Blog;