import { useEffect, useState } from 'react';

export default function WelcomePopup() {
  const [showPopup, setShowPopup] = useState(true);  // State to control popup visibility

  useEffect(() => {
    // Automatically hide the popup after 5 seconds (optional)
    const timer = setTimeout(() => {
      setShowPopup(false);
    }, 5000); // You can adjust this time or remove it if you prefer manual closing

    return () => clearTimeout(timer); // Clean up the timer
  }, []);

  return (
    <>
      {/* Full-page overlay */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 transition-opacity duration-500 z-50">
          {/* Pop-up container */}
          <div className="bg-(--background) p-8 rounded-lg shadow-lg max-w-sm w-full text-center space-y-6 opacity-0 animate-fadeIn z-60">
            <h1 className="text-2xl font-bold text-(--font)">INTRO POP-UP</h1>
            <p className="text-(--logo)">MORE TEXT</p>
            <button
              onClick={() => setShowPopup(false)}  // Hide popup on button click
              className="px-6 py-2 bg-(--background) rounded-full hover:bg-blue-600 focus:outline-none transition duration-1000"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
