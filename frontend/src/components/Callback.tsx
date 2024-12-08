// import React, { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useAuth } from 'react-oidc-context';

// const Callback: React.FC = () => {
//   const auth = useAuth();
//   const navigate = useNavigate();

//   useEffect(() => {
//     const handleCallback = async () => {
//       try {
//         // The library automatically handles the code exchange for you.
//         await auth.signinRedirect(); 
//         navigate('/');  // Redirect to your app's main page after successful authentication
//       } catch (error) {
//         console.error('Error handling callback:', error);
//       }
//     };

//     handleCallback();
//   }, [auth, navigate]);

//   return <div>Loading...</div>;
// };

// export default Callback;
