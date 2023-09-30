import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { Typewriter } from 'react-simple-typewriter';

function App() {
  const [audioFile, setAudioFile] = useState(null);
  const [email, setEmail] = useState('');

  const handleAudioFileChange = (e) => {
    const file = e.target.files[0];
    setAudioFile(file);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('audio_file', audioFile);
    formData.append('email', email);

    try {
      const response = await axios.post(`${import.meta.env.VITE_FLASK_BACKEND}/transcribe`, formData); 

      if (response.status === 200) {
        toast.success("Transcription Request Successful. Expect an Email Shortly.", {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        console.log('File and email submitted successfully');
      } else {
        toast.error(response.data.error, {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        console.error('Failed to submit file and email');
      }
    } catch (error) {
      toast.error('An error occurred. Please try again.', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      console.error('An error occurred:', error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen flex-col my-12 px-5">
      <div style={{ fontSize: 25, fontWeight: 'bold' }}>
        <Typewriter
          words={['TalkToText', 'Try it now!']}
          loop={5}
          typeSpeed={500}
          deleteSpeed={100}
          delaySpeed={1000}
        />
      </div>
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md">
        <div className="mb-4">
          <input
            required
            type="file"
            accept=".mp3, .wav, .ogg, .mp4, .m4a"
            onChange={handleAudioFileChange}
            className="w-full border border-gray-300 p-2 rounded-md"
          />
        </div>
        <div className="mb-4">
          <input
            required
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
            className="w-full border border-gray-300 p-2 rounded-md"
          />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-md">
          Submit
        </button>
      </form>
      <div className="w-full mt-4 px-4 md:px-96">
        <p className='text-center px-0 md:px-16'>
          TalkToText Pro is an advanced audio transcription app that easily converts spoken words into accurate written text, making it ideal for professionals and students alike.
        </p>
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
