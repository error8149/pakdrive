import React, { useContext } from 'react';
import downloadBg from '../assets/down.png';
import userImage2 from '../assets/logo dark.png';
import userImage from '../assets/logo light.png';
import man from '../assets/man.png';
import { AuthContext } from '../context/AuthContext';

const Dashboard = () => {
  const { user, logout } = useContext(AuthContext);

  const handleDownloadBat = () => {
    const link = document.createElement('a');
    link.href = `${process.env.PUBLIC_URL}/PakDrive.zip`;
    link.download = 'PakDrive.zip';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleDownloadPdf = () => {
    const link = document.createElement('a');
    link.href = `${process.env.PUBLIC_URL}/USER MANUAL - PAKDRIVE.pdf`;
    link.download = 'USER MANUAL - PAKDRIVE.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="flex h-screen bg-slate-100">
      {/* Sidebar */}
      <div className="bg-black text-white w-64 p-6">
        <h1 className="text-4xl pl-12 font-bold text-purple-500 mb-8">PAKDRIVE</h1>
        <div className="mb-8">
          <img src={userImage} alt="User" className="w-16 h-16 pl-24 rounded-full mx-auto mt-10 mb-0 pb-0" />
          <h2 className="text-center text-white mb-0 text-xl font-semibold">{user ? user.name : "USER"}</h2>
          <p className="text-center mt-0 text-sm text-gray-400">{user ? user.email : "pakdrive@gmail.com"}</p>

          <h4 className="font-bold bg-white text-black text-center mx-8 text-lg">Free Plan</h4>
          <button onClick={logout} className="block pl-24 bg-transparent text-center text-lg text-purple-500 mt-4">Signout</button>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 p-10">
        <header className="flex justify-between items-center mb-10">
          <h1 className="text-3xl text-center font-bold">Welcome {user ? user.name : "USER"}</h1>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <img src={userImage2} alt="User" className="w-12 h-12 rounded-full" />
            </div>
          </div>
        </header>
        <div className="grid">
          <div className="grid gap-7 container mx-auto">
            <div className="bg-cover bg-center p-16 rounded-lg shadow-lg" style={{ backgroundImage: `url(${downloadBg})` }}>
              <h2 className="text-2xl font-bold text-white mb-4">Your download is ready</h2>
              <p className="text-white mb-6">Click the button below to download your file.</p>
              <button onClick={handleDownloadBat} className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
                Download
              </button>
            </div>
          </div>
          <div className="grid pt-6 container mx-auto">
            <div className="bg-cover bg-left p-16 rounded-lg shadow-lg" style={{ backgroundImage: `url(${man})` }}>
              <h2 className="text-2xl font-bold text-white mb-4">User Manual</h2>
              <p className="text-white mb-6">Please read this first in order to setup</p>
              <button onClick={handleDownloadPdf} className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
                Download
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
