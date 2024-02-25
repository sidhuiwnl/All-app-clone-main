import  { useState } from 'react';

function Settings() {
  const [selectedSetting, setSelectedSetting] = useState(null);

  const renderSettingDetails = () => {
    switch (selectedSetting) {
      case 'Account':
        return (
          <div className="text-gray-800">
            <p>User name profile settings go here.</p>
            <p>Other account settings...</p>
          </div>
        );
      case 'Privacy':
        return (
          <div className="text-gray-800">
            <p>Privacy settings go here.</p>
            <p>Other privacy settings...</p>
          </div>
        );
      case 'Notifications':
        return (
          <div className="text-gray-800">
            <p>Notification settings go here.</p>
            <p>Other notification settings...</p>
          </div>
        );
      case 'Security':
        return (
          <div className="text-gray-800">
            <p>Security settings go here.</p>
            <p>Other security settings...</p>
          </div>
        );
      case 'Help Center':
        return (
          <div className="text-gray-800">
            <p>Help center information goes here.</p>
            <p>Other help center details...</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Navigation */}
      <nav className=" shadow-md p-4 flex justify-between items-center bg-gray-900">
        {/* Twitter logo */}
        <div className="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="6">
  <path d="M30 70 Q 50 20 70 70" />
</svg>
          <a href='/' className="text-xl font-bold   ml-2">Sabar's Tweet</a>
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
        <div className="bg-white p-8 rounded-lg shadow-md w-96">
          <h1 className="text-2xl font-semibold mb-4">Settings</h1>
          <div>
            <ul className="divide-y divide-gray-200">
              <li className="py-4">
                <button
                  className="flex items-center w-full justify-between"
                  onClick={() => setSelectedSetting(selectedSetting === 'Account' ? null : 'Account')}
                >
                  <span className="text-lg font-semibold">Account</span>
                  <svg
                    className={`w-5 h-5 text-gray-500 transform ${
                      selectedSetting === 'Account' ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>
              </li>
              <li className="py-4">
                <button
                  className="flex items-center w-full justify-between"
                  onClick={() => setSelectedSetting(selectedSetting === 'Privacy' ? null : 'Privacy')}
                >
                  <span className="text-lg font-semibold">Privacy</span>
                  <svg
                    className={`w-5 h-5 text-gray-500 transform ${
                      selectedSetting === 'Privacy' ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>
              </li>
              <li className="py-4">
                <button
                  className="flex items-center w-full justify-between"
                  onClick={() =>
                    setSelectedSetting(selectedSetting === 'Notifications' ? null : 'Notifications')
                  }
                >
                  <span className="text-lg font-semibold">Notifications</span>
                  <svg
                    className={`w-5 h-5 text-gray-500 transform ${
                      selectedSetting === 'Notifications' ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>
              </li>
              <li className="py-4">
                <button
                  className="flex items-center w-full justify-between"
                  onClick={() => setSelectedSetting(selectedSetting === 'Security' ? null : 'Security')}
                >
                  <span className="text-lg font-semibold">Security</span>
                  <svg
                    className={`w-5 h-5 text-gray-500 transform ${
                      selectedSetting === 'Security' ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>
              </li>
              <li className="py-4">
                <button
                  className="flex items-center w-full justify-between"
                  onClick={() =>
                    setSelectedSetting(selectedSetting === 'Help Center' ? null : 'Help Center')
                  }
                >
                  <span className="text-lg font-semibold">Help Center</span>
                  <svg
                    className={`w-5 h-5 text-gray-500 transform ${
                      selectedSetting === 'Help Center' ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>
              </li>
            </ul>
          </div>
          {/* Render setting details */}
          <div className="mt-8">{renderSettingDetails()}</div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
