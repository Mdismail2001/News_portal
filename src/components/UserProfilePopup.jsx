import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";

export default function UserProfilePopup({ user, isOpen, onClose, onLogout }) {
  return (
    <Dialog open={isOpen} as="div" className="relative z-10" onClose={onClose}>
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4">
        <DialogPanel className="w-full max-w-md rounded-xl bg-base-200 p-6 shadow-lg relative">
          
          {/* 🔥 Logout button top-right */}
          <button
            className="absolute top-4 right-4 px-3 py-1 bg-red-600 text-white text-sm rounded-lg hover:bg-red-700"
            onClick={() => {
              onLogout();
              onClose(); // Close popup after logout
            }}
          >
            Logout
          </button>

          {/* User info */}
          <div className="flex flex-col items-center">
            <img
              src={user?.photo || "https://via.placeholder.com/150"}
              alt="Profile"
              className="w-24 h-24 rounded-full border-4 border-gray-300"
            />
            <DialogTitle className="mt-3 text-lg font-semibold text-gray-800">
              {user?.name || "Unknown User"}
            </DialogTitle>
            <p className="text-sm text-gray-500">{user?.email}</p>
          </div>

          <div className="mt-4 text-center text-gray-600">
            <p>Role: {user?.role || "User"}</p>
            <p>Joined: {user?.joined || "Unknown"}</p>
          </div>

          {/* Close button bottom-center */}
          <div className="mt-6 flex justify-center">
            <button
              className="px-4 py-2 btn btn-primary text-white rounded-lg hover:bg-black"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
}
