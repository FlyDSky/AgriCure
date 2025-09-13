import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="min-h-screen bg-gray-100 pt-24 flex items-center justify-center">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-green-600 text-center mb-6">
          Sign In to Agricure AI
        </h2>

        <form className="space-y-4">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">
              Username
            </label>
            <input
              type="text"
              id="username"
              placeholder="Enter your username"
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300"
            />
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <Link to="#" className="text-xs text-green-600 hover:underline">
                Forgot Password?
              </Link>
            </div>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
          >
            Sign In
          </button>
        </form>

        <div className="flex items-center my-6">
          <span className="flex-grow border-t border-gray-300"></span>
          <span className="mx-4 text-gray-500 uppercase text-sm">or</span>
          <span className="flex-grow border-t border-gray-300"></span>
        </div>

        {/* Social Login Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="flex items-center justify-center w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition">
            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z"/>
            </svg>
            Sign in with Google
          </button>

          <button className="flex items-center justify-center w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition">
            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z"/>
            </svg>
            Sign in with Twitter
          </button>
        </div>

        <p className="mt-6 text-center text-gray-500 text-sm">
          Don’t have an account?{" "}
          <Link to="#" className="text-green-600 hover:underline">
            Create One
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
