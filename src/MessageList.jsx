import React from 'react';
import Message from './Message.jsx'
import { Z_FILTERED } from 'zlib';


export default function MessageList(props) {

    // Rendering incoming Messages on the client-side. Consider moving the logic to check whether an image is in onMessage defined in 
    // App.jsx sent prior to sending postNotification to web socket server to improve performance.
    const messages = props.messages.map((message) => {
        switch (message.type) {
            case "incomingMessage":
                const wordsArray = message.content.split(' ');
                const wordsResult = wordsArray.filter(word => !(/\.(gif|jpg|jpeg|tiff|png)$/i).test(word));
                const imgsResult = wordsArray.filter(word => (/\.(gif|jpg|jpeg|tiff|png)$/i).test(word));
                const wordsResultJoined = wordsResult.join(' ');
                const imgsResultArray = imgsResult.map((imgSource) => { return <img className="images" src={imgSource} /> })

                if (imgsResultArray.length > 0) {
                    return <div> <Message key={message.id} userName={message.username} content={wordsResultJoined} color={message.color} />
                        {imgsResultArray} </div>
                } else {
                    return <Message key={message.id} userName={message.username} content={wordsResultJoined} color={message.color} />
                }
            case "incomingNotification":
                return <div className="notification" key={message.id}>
                    <span className="notification-content"> {message.content} </span>
                </div>
        }
    });

    return (
        <main className="messages">
            {messages}
        </main>
    )
}