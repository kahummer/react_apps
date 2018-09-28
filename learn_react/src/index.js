import React, {Component} from 'react';
import ReactDom from 'react-dom';
import Header from './components/header.js'
import JSON from './db.json';
import NewsList from './components/news_list';


class App extends Component {
    constructor(props){
        super(props)

        this.state = {
            news: JSON,
            filtered: JSON
        }
    }

    filterNews (keyWords) {
        keyWords = keyWords.toLowerCase();
        let filtered = this.state.news.filter((item) => {
            return item.title.toLowerCase().indexOf(keyWords) > -1;
        });
        this.setState({
            filtered
        });
    }
    render () {
        return (
            <div>
                <Header newsSearch = {keyWords=>this.filterNews(keyWords)}/>
                <NewsList news = {this.state.filtered}/>
                <h1>Hello World</h1>
                
            </div>
        ); 
    }
}

ReactDom.render(<App/>, document.querySelector('#root'));