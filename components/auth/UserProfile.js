// /components/auth/UserProfile.js
import { useState, useEffect } from 'react';
import { auth, firestore, storage } from '../../utils/firebase'; // Adjust the import according to your setup

const UserProfile = () => {
  const [user, setUser] = useState(null);
  const [newProfilePicture, setNewProfilePicture] = useState(null);
  const [isUploading, setIsUploading] = useState(false);

  useEffect(() => {
    // Listen for authentication state changes
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        // Fetch additional user data from Firestore
        const userDoc = await firestore.collection('users').doc(user.uid).get();
        const userData = userDoc.data();

        setUser({
          uid: user.uid,
          name: userData.name,
          email: user.email,
          profilePicture: userData.profilePicture || '/default-profile-pic.jpg', // Default if no profile pic
        });
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleProfilePictureChange = (e) => {
    setNewProfilePicture(e.target.files[0]);
  };

  const handleProfilePictureUpload = async () => {
    if (newProfilePicture && user) {
      setIsUploading(true);
      const storageRef = storage.ref();
      const profilePicRef = storageRef.child(`profilePictures/${user.uid}/${newProfilePicture.name}`);

      try {
        // Upload the file
        await profilePicRef.put(newProfilePicture);

        // Get the URL of the uploaded file
        const profilePictureURL = await profilePicRef.getDownloadURL();

        // Update the user's Firestore document
        await firestore.collection('users').doc(user.uid).update({
          profilePicture: profilePictureURL,
        });

        // Update the state with the new profile picture
        setUser((prevUser) => ({
          ...prevUser,
          profilePicture: profilePictureURL,
        }));

        setNewProfilePicture(null);
        alert('Profile picture updated successfully!');
      } catch (error) {
        console.error('Error uploading profile picture: ', error);
        alert('Failed to upload profile picture. Please try again.');
      } finally {
        setIsUploading(false);
      }
    }
  };

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center py-12 px-6 lg:px-8">
        <div className="text-center text-gray-600">Loading user profile...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <div className="flex justify-center mb-6">
            <img
              className="h-24 w-24 rounded-full object-cover"
              src={user.profilePicture}
              alt={`${user.name}'s profile`}
            />
          </div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            {user.name}
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">{user.email}</p>

          <div className="mt-6">
            <label htmlFor="profilePicture" className="block text-sm font-medium text-gray-700">
              Change Profile Picture
            </label>
            <input
              type="file"
              id="profilePicture"
              accept="image/*"
              onChange={handleProfilePictureChange}
              className="mt-1 block w-full text-sm text-gray-900 border border-gray-300 rounded-md cursor-pointer focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          <div className="mt-6">
            <button
              className={`group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${isUploading ? 'cursor-not-allowed' : ''}`}
              onClick={handleProfilePictureUpload}
              disabled={isUploading}
            >
              {isUploading ? 'Uploading...' : 'Update Profile Picture'}
            </button>
          </div>

          <div className="mt-8">
            <button
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              onClick={() => auth.signOut()}
            >
              Sign Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
