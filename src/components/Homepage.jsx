
import { useNavigate } from 'react-router-dom';

function Homepage() {
    const navigate = useNavigate()

    const handleNotificationClick = () => {
        // Navigate to the next page when the notification button is clicked
        navigate('/notification');
    };

    const handleMessageClick = () => {
        // Navigate to the messaging page when the message button is clicked
        navigate('/messaging');
    };
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Navigation */}
      <nav className="bg-white shadow-md p-4 flex justify-between items-center">
        {/* Twitter logo */}
        <div className="flex items-center">
          <svg className="w-10 h-10 text-blue-400" viewBox="0 0 24 24" fill="currentColor">
            <g>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M21.484 5.515a6.01 6.01 0 01-1.712.47A3.01 3.01 0 0021.422 4a6.01 6.01 0 01-1.913.73A3.003 3.003 0 0015.99 2c-1.656 0-3 1.344-3 3 0 .234.027.465.08.688A8.56 8.56 0 014.83 4.817a3 3 0 00-.414 1.512c0 1.044.531 1.965 1.338 2.504a2.98 2.98 0 01-1.368-.377v.038c0 1.456 1.047 2.667 2.431 2.943a3.02 3.02 0 01-1.364.052c.383 1.201 1.496 2.08 2.821 2.104A6.017 6.017 0 013 15.02c0-.091.005-.182.016-.273A8.533 8.533 0 0010.55 17c5.592 0 8.658-4.64 8.452-8.747a6.202 6.202 0 001.482-1.573z"
              ></path>
            </g>
          </svg>
          <div className="text-xl font-bold ml-2">Sabaris Tweet</div>
        </div>
        {/* Search input */}
        <div className="flex">
          <input
            type="text"
            placeholder="Search Twitter"
            className="border border-gray-300 rounded-md px-4 py-2 mr-4 focus:outline-none"
          />
          <button className="bg-blue-400 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-500">
            Search
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex">
        {/* Sidebar */}
        <div className="w-1/4 bg-white p-4">
          {/* Notifications */}
          <div className="mb-8">
            
            <button
                            className="bg-blue-400 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-500"
                            onClick={handleNotificationClick}
                        >
                            Notifications
            </button>
            
            <button
                        className="bg-blue-400 text-white px-6 py-2 ml-2 rounded-full font-semibold hover:bg-blue-500"
                        onClick={handleMessageClick}
                    >
                        Messages
                    </button>
          </div>

          {/* Settings */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Settings</h2>
            <ul>
              <li className="mb-2">
                <a href="#" className="text-blue-500 hover:underline">
                  Profile
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-blue-500 hover:underline" onClick={() =>
                navigate('/setting')}>
                  Settings
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-blue-500 hover:underline">
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Main Content */}
        <div className="w-3/4 bg-gray-100 p-4">
          {/* Create Tweet */}
          <div className="mb-4 bg-white rounded-lg p-4">
            <textarea
              className="w-full border border-gray-300 rounded-md p-2 mb-2 focus:outline-none"
              rows="4"
              placeholder="What's happening?"
            ></textarea>
            <button className="bg-blue-400 text-white px-4 py-2 rounded-full font-semibold hover:bg-blue-500">
              Tweet
            </button>
          </div>

          {/* Tweets */}
          <div className="bg-white rounded-lg p-4 mb-4">
            <div className="flex items-center mb-2">
              <img
                className="w-10 h-10 rounded-full mr-2"
                src="https://randomuser.me/api/portraits/men/1.jpg"
                alt="User"
              />
              <div>
                <h3 className="font-semibold">John Doe</h3>
                <p className="text-gray-600">@johndoe</p>
              </div>
            </div>
            <p className="mb-4">
              This is an example tweet. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <div className="flex">
              <button className="text-gray-500 hover:text-blue-400 mr-4">
                <svg
                  className="w-5 h-5 mr-1 inline-block"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM4 10a6 6 0 1112 0 6 6 0 01-12 0z"
                  ></path>
                </svg>{" "}
                Like
              </button>
              <button className="text-gray-500 hover:text-blue-400 mr-4">
                <svg
                  className="w-5 h-5 mr-1 inline-block"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M13.414 2H6.586A2.582 2.582 0 004 4.586V16a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-6.586L13 2.414A1.414 1.414 0 0013.414 2zM12 4v2h2a1 1 0 011 1v8a1 1 0 01-1 1H6a1 1 0 01-1-1V7a1 1 0 011-1h2V4h4z"
                  ></path>
                </svg>{" "}
                Share
              </button>
              <button className="text-gray-500 hover:text-blue-400">
                <svg
                  className="w-5 h-5 mr-1 inline-block"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4 3h3v10H4V3zm5 0h3v10H9V3zm4 0h3v10h-3V3z"
                  ></path>
                </svg>{" "}
                Retweet
              </button>
            </div>
          </div>
          <div className="bg-white rounded-lg p-4 mb-4">
            <div className="flex items-center mb-2">
              <img
                className="w-10 h-10 rounded-full mr-2"
                src="https://randomuser.me/api/portraits/women/1.jpg"
                alt="User"
              />
              <div>
                <h3 className="font-semibold">Jane Doe</h3>
                <p className="text-gray-600">@janedoe</p>
              </div>
            </div>
            <p className="mb-4">
              Another example tweet. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <div className="flex">
              <button className="text-gray-500 hover:text-blue-400 mr-4">
                <svg
                  className="w-5 h-5 mr-1 inline-block"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM4 10a6 6 0 1112 0 6 6 0 01-12 0z"
                  ></path>
                </svg>{" "}
                Like
              </button>
              <button className="text-gray-500 hover:text-blue-400 mr-4">
                <svg
                  className="w-5 h-5 mr-1 inline-block"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M13.414 2H6.586A2.582 2.582 0 004 4.586V16a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-6.586L13 2.414A1.414 1.414 0 0013.414 2zM12 4v2h2a1 1 0 011 1v8a1 1 0 01-1 1H6a1 1 0 01-1-1V7a1 1 0 011-1h2V4h4z"
                  ></path>
                </svg>{" "}
                Share
              </button>
              <button className="text-gray-500 hover:text-blue-400">
                <svg
                  className="w-5 h-5 mr-1 inline-block"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4 3h3v10H4V3zm5 0h3v10H9V3zm4 0h3v10h-3V3z"
                  ></path>
                </svg>{" "}
                Retweet
              </button>
            </div>
          </div>
          <div className="bg-white rounded-lg p-4 mb-4">
            <div className="flex items-center mb-2">
              <img
                className="w-10 h-10 rounded-full mr-2"
                src="https://randomuser.me/api/portraits/men/2.jpg"
                alt="User"
              />
              <div>
                <h3 className="font-semibold">Mark Smith</h3>
                <p className="text-gray-600">@marksmith</p>
              </div>
            </div>
            <p className="mb-4">
              Yet another example tweet. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <div className="flex">
              <button className="text-gray-500 hover:text-blue-400 mr-4">
                <svg
                  className="w-5 h-5 mr-1 inline-block"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM4 10a6 6 0 1112 0 6 6 0 01-12 0z"
                  ></path>
                </svg>{" "}
                Like
              </button>
              <button className="text-gray-500 hover:text-blue-400 mr-4">
                <svg
                  className="w-5 h-5 mr-1 inline-block"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M13.414 2H6.586A2.582 2.582 0 004 4.586V16a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-6.586L13 2.414A1.414 1.414 0 0013.414 2zM12 4v2h2a1 1 0 011 1v8a1 1 0 01-1 1H6a1 1 0 01-1-1V7a1 1 0 011-1h2V4h4z"
                  ></path>
                </svg>{" "}
                Share
              </button>
              <button className="text-gray-500 hover:text-blue-400">
                <svg
                  className="w-5 h-5 mr-1 inline-block"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4 3h3v10H4V3zm5 0h3v10H9V3zm4 0h3v10h-3V3z"
                  ></path>
                </svg>{" "}
                Retweet
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;

