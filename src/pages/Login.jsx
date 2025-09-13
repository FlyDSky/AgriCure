import { useEffect } from "react";
import { auth, provider } from "../firebase";
import { signInWithPopup, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  // agar user already login hai to home pe bhej de
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/home");
      }
    });
    return () => unsubscribe();
  }, [navigate]);

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, provider);
      navigate("/home");
    } catch (error) {
      console.error("Login Error:", error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-sm w-full text-center">
        <h1 className="text-2xl font-bold mb-6">Welcome Back 👋</h1>
        <button
          onClick={handleGoogleLogin}
          className="flex items-center justify-center w-full py-3 bg-red-500 hover:bg-red-600 text-white rounded-xl shadow-md transition"
        >
          <img
            src="https://www.svgrepo.com/show/355037/google.svg"
            alt="Google"
            className="w-6 h-6 mr-3 bg-white rounded-full"
          />
          Continue with Google
        </button>
      </div>
    </div>
  );
}
