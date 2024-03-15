import React from 'react';

function ProfilePage() {
  const userData = localStorage.getItem('user');
  let user = null;

  if (userData) {
    try {
      user = JSON.parse(userData);
    } catch (error) {
      console.error('Error parsing user data:', error);
    }
  }

  if (!user) {
    return <div>No user data found. Please log in.</div>;
  }

  return (
    <div className="max-w-4xl mx-auto py-10">
      <h1 className="text-3xl font-semibold mb-6">Profile</h1>
      <div className="bg-white shadow rounded-lg p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="col-span-1">
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <div className="mt-1">{user.name}</div>
          </div>
          <div className="col-span-1">
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <div className="mt-1">{user.email}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
