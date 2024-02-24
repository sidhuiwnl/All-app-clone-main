import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi'; // Import the left arrow icon from react-icons/fi

// Sample user data with avatars
const users = [
    { id: 1, name: 'John Doe', avatar: 'https://randomuser.me/api/portraits/men/1.jpg' },
    { id: 2, name: 'Jane Smith', avatar: 'https://randomuser.me/api/portraits/women/1.jpg' },
    { id: 3, name: 'Alice Johnson', avatar: 'https://randomuser.me/api/portraits/women/2.jpg' },
    { id: 4, name: 'Bob Brown', avatar: 'https://randomuser.me/api/portraits/men/2.jpg' },
    { id: 5, name: 'Eva Williams', avatar: 'https://randomuser.me/api/portraits/women/3.jpg' },
    { id: 6, name: 'Michael Lee', avatar: 'https://randomuser.me/api/portraits/men/3.jpg' },
    { id: 7, name: 'Emily Davis', avatar: 'https://randomuser.me/api/portraits/women/4.jpg' },
    { id: 8, name: 'William Wilson', avatar: 'https://randomuser.me/api/portraits/men/4.jpg' },
    { id: 9, name: 'Olivia Martinez', avatar: 'https://randomuser.me/api/portraits/women/5.jpg' },
    { id: 10, name: 'James Taylor', avatar: 'https://randomuser.me/api/portraits/men/5.jpg' },
    { id: 11, name: 'Sophia Anderson', avatar: 'https://randomuser.me/api/portraits/women/6.jpg' },
    { id: 12, name: 'Daniel Rodriguez', avatar: 'https://randomuser.me/api/portraits/men/6.jpg' },
];

function Messaging() {
    const [activeUser, setActiveUser] = useState(null);
    const [messages, setMessages] = useState({});
    const [newMessage, setNewMessage] = useState('');
    const navigate = useNavigate();

    const handleUserClick = (user) => {
        setActiveUser(user);
    };

    const handleChange = (event) => {
        setNewMessage(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (newMessage.trim() === '') return;
        const newId = messages[activeUser] ? messages[activeUser].length + 1 : 1;
        const newMessageObject = {
            id: newId,
            sender: activeUser,
            content: newMessage,
        };
        setMessages(prevMessages => ({
            ...prevMessages,
            [activeUser]: [...(prevMessages[activeUser] || []), newMessageObject]
        }));
        setNewMessage('');
    };

    const handleReturnToHomepage = () => {
        navigate('/');
    };

    return (
        <div className="flex h-screen bg-gray-100">
            <div className="w-1/4 bg-gray-800 text-gray-100 overflow-y-auto">
                <h1 className="text-lg font-semibold p-4 border-b border-gray-700">Conversations</h1>
                <ul>
                    {users.map(user => (
                        <li key={user.id} onClick={() => handleUserClick(user.id)} className={`user-item flex items-center p-4 border-b border-gray-700 cursor-pointer hover:bg-gray-700 ${activeUser === user.id ? 'bg-gray-700' : ''}`}>
                            <img src={user.avatar} alt={user.name} className="w-10 h-10 rounded-full mr-4" />
                            <span>{user.name}</span>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="flex-1 bg-gray-200 flex flex-col">
                <div className="flex items-center justify-between p-4 border-b border-gray-300">
                    {/* Left arrow icon for returning to homepage */}
                    <button onClick={handleReturnToHomepage} className="flex items-center text-gray-700 hover:text-gray-900">
                        <FiArrowLeft className="w-6 h-6 mr-2" />
                        Back
                    </button>
                    <div className="text-lg font-semibold">Conversation</div>
                    <div></div>
                </div>
                <div className="overflow-auto flex-1 p-4">
                    {activeUser && messages[activeUser] && messages[activeUser].map((message) => (
                        <div key={message.id} className={`mb-4 ${message.sender === activeUser ? 'ml-auto' : 'mr-auto'}`}>
                            <div className={`message-bubble p-4 rounded-lg ${message.sender === activeUser ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-800'}`}>{message.content}</div>
                        </div>
                    ))}
                </div>
                {activeUser && (
                    <form onSubmit={handleSubmit} className="p-4 border-t border-gray-300 flex-shrink-0 flex items-center">
                        <input
                            type="text"
                            value={newMessage}
                            onChange={handleChange}
                            className="flex-1 bg-gray-900 border border-gray-300 rounded-md p-2 focus:outline-none"
                            placeholder={`Message ${users.find(user => user.id === activeUser)?.name}...`}
                        />
                        <button
                            type="submit"
                            className="bg-blue-900 text-white rounded p-2 ml-2 hover:bg-blue-600"
                        >
                            Send
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
}

export default Messaging;
