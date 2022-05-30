// import React from "react";
// import { Navbar } from '../components';

// const Contact = () =>{
//   return (
//     <div className="flex flex-col h-screen w-screen">
//       <Navbar/>
//     </div>
//   )
// }

// export default Contact

import React from "react";
import { Navbar } from "../components";
import { RiMailLine, RiSlackLine } from "react-icons/ri";

const Contact = () => {
  return (
    <div className="flex flex-col h-screen w-screen">
      <Navbar />
      <div className="max-w-sm mx-auto">
        <p className="text-gray-400 text-sm text-center">CONTACT US</p>
        <br></br>
        <p className="text-2xl text-center">We are here for you!</p>
        <br></br>
        <p className="text-base text-center">
          We'd love to hear from you, please let us know what you think and get
          in touch with us.
        </p>
        <br></br>
        <br></br>
        <div className="text-base text-center bg-center">
          <RiMailLine
            size={45}
            className="bg-gray-100 drop-shadow-md rounded-full p-2 mx-auto"
          />
          <br></br>
          <p>Email us at</p>
          <a
            href="mailto:wizeq@wizeline.com"
            className="text-red-wz-200 hover:text-red-300"
          >
            wizeq@wizeline.com
          </a>
        </div>
        <br></br>
        <br></br>
        <div className="text-base text-center">
          <RiSlackLine
            size={45}
            className="bg-gray-100 drop-shadow-md rounded-full p-2 mx-auto"
          />
          <br></br>
          <p>Slack us at</p>
          <a
            href="https://app.slack.com/client/T8K9GGC8Z/C033D3WL9D0/thread/C033D3WL9D0-1646869162.433089"
            className="text-red-wz-200 hover:text-red-300"
          >
            #wize-q-support
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
