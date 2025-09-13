function Settings() {
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Settings ⚙️</h1>
      
      <div className="space-y-4">
        <label className="flex items-center space-x-2">
          <input type="checkbox" className="form-checkbox" />
          <span>Enable Notifications</span>
        </label>

        <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded">
          Logout
        </button>
      </div>
    </div>
  );
}

export default Settings;
