
import { useNavigate } from 'react-router-dom';

function Notification() {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Navigation */}
      <nav className="bg-gray-900 shadow-md p-4 flex justify-between items-center">
        {/* Twitter logo */}
        <div className="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="6">
  <path d="M30 70 Q 50 20 70 70" />
</svg>
          <a className="text-xl font-bold ml-2" onClick={() => navigate('/')}>
            Sabari's Tweet
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
