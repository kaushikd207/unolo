import React, { useState } from "react";
import { useNavigate } from "react-router";
import { auth, provider, signInWithPopup, signOut } from "../../firebaseConfig";

export default function Login() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
      navigate("/overview");
    } catch (error) {
      console.error("Login failed:", error.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-6 text-center w-96">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Login</h2>
          <button
            onClick={handleLogin}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 flex items-center justify-center w-full"
          >
            <img
              src="https://www.svgrepo.com/show/355037/google.svg"
              alt="Google"
              className="w-5 h-5 mr-2"
            />
            Sign in with Google
          </button>
        </div>
      </div>
    </div>
  );
}
