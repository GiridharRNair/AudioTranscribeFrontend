import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { Typewriter } from 'react-simple-typewriter';

const currStatus = ['Submitting', 'Submitting.', 'Submitting..', ' Submitting...'];

function App() {
  const [file, setFile] = useState(null);
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState('Submit');

  let intervalId;
  var statusChange = 0;

  function statusUpdate () {
    if (statusChange === 0) {
      setStatus(currStatus[0]);
      statusChange++;
    } else if (statusChange === 1) {
      statusChange++;
      setStatus(currStatus[1]);
    } else if (statusChange === 2) {
      statusChange++;
      setStatus(currStatus[2]);
    } else {
      statusChange = 0;
      setStatus(currStatus[3]);
    }
  }

  function startInterval () {
    setLoading(true);
    intervalId = setInterval(statusUpdate, 300);
  }

  function stopInterval () {
    setLoading(false);
    clearInterval(intervalId);
    setStatus('Submit');
  }

  const handleAudioFileChange = (e) => {
    const file = e.target.files[0];
    setFile(file);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    startInterval();

    const formData = new FormData();
    formData.append('file', file);
    formData.append('email', email);

    try {
      const response = await axios.post(`${import.meta.env.VITE_FLASK_BACKEND}/transcribe`, formData);
        toast.success(response.data.message, {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
    } catch (error) {
      toast.error(error, {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } finally {
      stopInterval();
    }
  };

  return (
    <div className="flex justify-center items-center h-screen flex-col px-5">
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
        <button
          disabled={loading}
          type="submit"
          className={`w-full ${
            loading ? 'bg-gray-400 text-gray-600 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-700 active:bg-blue-800'
          } text-white p-2 rounded-md`}
        >
          {status}
        </button>
      </form>
      <div className="pt-5 text-center">
          AI-powered transcription, summarization, key points, action items, and sentiment analysis. <br/> Perfect for professionals and students.
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
