import React, { useEffect, useState } from "react";

function MaintenancePopup() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const hasSeenPopup = localStorage.getItem("hasSeenMaintenancePopup");

    // Show popup only if user hasn't seen it yet
    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setShowPopup(true);
      }, 5000); // Show after 5 seconds

      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setShowPopup(false);
    localStorage.setItem("hasSeenMaintenancePopup", "true");
  };

  return (
    <>
      {showPopup && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[9999] p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6 relative text-center">
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-2 right-2 text-gray-600 hover:text-black text-xl font-bold"
            >
              &times;
            </button>

            {/* Popup Content */}
            <h2 className="text-xl font-semibold text-[#021C57] mb-3">Site Under Maintenance</h2>
            <p className="text-gray-700 mb-4">
              This website is currently undergoing scheduled maintenance to serve you better.
              We apologize for any inconvenience.
            </p>
            <p className="text-gray-600 text-sm mb-2">
                <a 
                  className="hover:underline transition text-left"
                  href="tel:+919369962486">
                  Call +91 9369962486</a><br />
                  <span className="text-sm">Monday to Saturday 10 AM to 6 PM</span>
            </p>
            <p className="text-gray-600 text-sm">
                 <a
                    href="mailto:arclinstruments@gmail.com"
                    className="hover:text-gray-700 hover:underline text-left transition-all"
                    >Mail: arclinstruments@gmail.com
                    </a><br />
                <span className="text-sm">Email us your query</span>
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export default MaintenancePopup;
