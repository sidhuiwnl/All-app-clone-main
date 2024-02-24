
import { useNavigate } from 'react-router-dom';

function Notification() {
  const navigate = useNavigate();

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
          <a className="text-xl font-bold ml-2" onClick={() => navigate('/')}>
            Twitter
          </a>
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
      <div className="mt-8 flex justify-center items-center h-full">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-2xl font-semibold mb-4">Notifications</h1>
          <div className="divide-y divide-gray-200">
            <div className="py-4">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <img
                    className="w-10 h-10 rounded-full"
                    src="https://randomuser.me/api/portraits/men/1.jpg"
                    alt="User"
                  />
                </div>
                <div className="ml-3">
                  <h2 className="text-lg font-semibold">Notification Title</h2>
                  <p className="text-gray-600">Notification content lorem ipsum dolor sit amet.</p>
                </div>
              </div>
            </div>
            <div className="py-4">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <img
                    className="w-10 h-10 rounded-full"
                    src="https://randomuser.me/api/portraits/men/2.jpg"
                    alt="User"
                  />
                </div>
                <div className="ml-3">
                  <h2 className="text-lg font-semibold">Notification Title</h2>
                  <p className="text-gray-600">Notification content lorem ipsum dolor sit amet.</p>
                </div>
              </div>
            </div>
            <div className="py-4">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <img
                    className="w-10 h-10 rounded-full"
                    src="https://randomuser.me/api/portraits/women/1.jpg"
                    alt="User"
                  />
                </div>
                <div className="ml-3">
                  <h2 className="text-lg font-semibold">Notification Title</h2>
                  <p className="text-gray-600">Notification content lorem ipsum dolor sit amet.</p>
                </div>
              </div>
            </div>
            {/* Additional Notifications */}
            <div className="py-4">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <img
                    className="w-10 h-10 rounded-full"
                    src="https://randomuser.me/api/portraits/men/3.jpg"
                    alt="User"
                  />
                </div>
                <div className="ml-3">
                  <h2 className="text-lg font-semibold">New Notification</h2>
                  <p className="text-gray-600">New notification content goes here.</p>
                </div>
              </div>
            </div>
            <div className="py-4">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <img
                    className="w-10 h-10 rounded-full"
                    src="https://randomuser.me/api/portraits/men/4.jpg"
                    alt="User"
                  />
                </div>
                <div className="ml-3">
                  <h2 className="text-lg font-semibold">Another Notification</h2>
                  <p className="text-gray-600">Another notification content goes here.</p>
                </div>
              </div>
            </div>
            <div className="py-4">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <img
                    className="w-10 h-10 rounded-full"
                    src="https://randomuser.me/api/portraits/women/2.jpg"
                    alt="User"
                  />
                </div>
                <div className="ml-3">
                  <h2 className="text-lg font-semibold">Yet Another Notification</h2>
                  <p className="text-gray-600">Yet another notification content goes here.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Notification;
