const About = () => {
  return (
    <div className="flex flex-col items-center justify-center px-6 py-10 italic md:px-20 lg:px-32">
      <h1 className="mb-6 text-center text-3xl font-bold">
        welcome to <strong className="text-purple-500">Wistora.</strong>
      </h1>
      <p className="mb-6 max-w-5xl text-base leading-relaxed tracking-wide text-gray-400 ">
        <div className="my-4">
            <strong>Wistora</strong> is a YouTube-inspired video streaming platform that allows users to explore trending content and watch live streams. It showcases my ability to build modern, interactive, and scalable frontend applications.
        </div>
        <div className="my-4">
          <h3 className="font-bold not-italic">Frontend Focus :</h3>
          <p>This project was designed primarily as a frontend application, with an emphasis on creating a responsive user interface, smooth user experience, and efficient state management for handling dynamic video content.</p>
        </div>
        <div className="my-4">
          <h3 className="font-bold not-italic">Architecture Approach :</h3>
          <p>To enhance the application&apos;s architecture, I implemented a Backend-for-Frontend (BFF) pattern. I built a lightweight backend layer using Node.js and Express.js that acts as a secure proxy between the frontend and the external video API.</p>
        </div>
        <div className="my-4">
          <h3 className="font-bold not-italic">Why I Used BFF :</h3>
          <p>Instead of allowing the frontend to communicate directly with the external API, all requests are routed through the BFF layer. This approach helps:</p>
          <ul className="list-inside px-3 list-disc">
            <li>Secure API keys by keeping them on the server</li>
            <li>Prevent sensitive credentials from being exposed in the browser</li>
            <li>Centralize request handling and error management</li>
            <li>Format and optimize API responses for the frontend</li>
          </ul>
        </div>
      </p>

      <div className="mb-6 w-full max-w-5xl rounded-lg bg-gray-950 p-4 shadow-lg">
        <h2 className="mb-3 text-xl font-semibold">
          🛠️ Tech Stack:
        </h2>
        <ul className="list-inside list-disc leading-relaxed text-gray-400">
          <li>
            <strong>React </strong> : Core library for building user interfaces
          </li>
          <li>
            <strong>React Router </strong> : Dynamic Routing for navigation
          </li>
          <li>
            <strong>Tailwind CSS</strong> : Styling Framework for a sleek and
            minimalistic UI
          </li>
          <li>
            <strong>Redux-toolkit</strong> : State management
          </li>
          <li>
            <strong>YouTube Public API</strong> : Fetching data from YouTube
          </li>
        </ul>
      </div>

      <div className="mb-6 w-full max-w-5xl rounded-lg bg-gray-950 p-4 shadow-lg">
        <h2 className="mb-3 text-xl font-semibold">
          🔹 Features:
        </h2>
        <ul className="list-inside list-disc leading-relaxed text-gray-400">
          <li>
            Watch YouTube videos by categories like{" "}
            <strong>Trending, Live, Music, Gaming, and Sports</strong>
          </li>
          <li>
            <strong>Advanced Search</strong> to search for content across
            Youtube
          </li>
          <li>
            <strong>Static Comments & Dynamic Live Chat</strong> to interact
            with viewers
          </li>
          <li>
            <strong>Dynamic Routing</strong> for smooth navigation
          </li>
          <li>
            <strong>Responsive UI</strong> for a seamless experience on all
            devices
          </li>
        </ul>
      </div>

      <div className="w-full max-w-5xl rounded-lg bg-gray-950 p-4 shadow-lg">
        <h2 className="mb-3 text-xl font-semibold">
          🚀 Future Enhancements:
        </h2>
        <ul className="list-inside list-disc text-gray-400">
          <li>User authentication & profiles</li>
          <li>Pagination and Infinite scrolling</li>
          <li>Video upload & playback feature</li>
          <li>Dynamic Comments & Likes system</li>
          <li>Realtime Live Chat</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
