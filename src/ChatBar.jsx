import React, { Component } from 'react';

class ChatBar extends Component {

    constructor(props) {
        super(props);

        this.state = {
            content: '',
            username: this.props.currentUser
        }
        this.onChangeContent = this.onChangeContent.bind(this)
        this.onEnterContent = this.onEnterContent.bind(this)
        this.onChangeUsername = this.onChangeUsername.bind(this)
        this.onEnterUsername = this.onEnterUsername.bind(this)
    }

    onChangeContent(event) {
        this.setState({ content: event.target.value })
    }


    onEnterContent(event) {
        if (event.keyCode == 13 && this.state.content.length > 0) {
            this.props.onNewMessage(this.state.content);
            this.setState({ content: '' })
        }
    }


    onChangeUsername(event) {
        this.setState({ username: event.target.value })
    }


    onEnterUsername(event) {
        if (event.keyCode == 13) {
            this.props.onNewUsername(event.target.value);
        }
    }


    render() {
        return (
            <footer className="chatbar" >
                <input className="chatbar-username" placeholder="Your Name (Optional)" onChange={this.onChangeUsername} onKeyUp={this.onEnterUsername} />
                <input className="chatbar-message" placeholder="Type a message and hit ENTER" onChange={this.onChangeContent} onKeyUp={this.onEnterContent} value={this.state.content} />
            </footer>
        )
    }
}

export default ChatBar; 