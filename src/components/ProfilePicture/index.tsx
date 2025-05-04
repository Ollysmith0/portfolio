import profileImage from '@/assets/profile.jpeg';

const ProfilePicture = () => (
  <>
    <img
      src={profileImage}
      alt="Profile"
      className="w-full h-full object-contain"
    />
  </>
);

export default ProfilePicture;
