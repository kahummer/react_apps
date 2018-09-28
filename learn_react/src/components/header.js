import React, {Component} from 'react';


class Header extends Component {
    constructor (props) {
        super (props) 
            this.state = {typed: 'typed vals', keyWords: '' }
        
    }
   
    inputChange (event) {
        
    this.setState({
        keyWords: event.target.value
    });
   this.props.newsSearch(event.target.value);
    }
    
    render () {
      
        const styles = {
            header: {
                backgroundColor: 'magenta'
            },
            logo: {
                color: '#fff',
                textAlign: 'center'
            }
        }
        return (
            <header style = {styles.header}>
                <div style = {styles.logo}>Logo </div>
                <input onChange = {this.inputChange.bind(this)}/>
                <div>{this.state.typed}</div>
                <div>{this.state.keyWords}</div>
            </header>
        ) 
    }
}

export default Header;