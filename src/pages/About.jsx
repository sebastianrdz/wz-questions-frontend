// import React from "react";
// import { Navbar } from '../components';

// const About = () =>{
//   return (
//     <div className="flex flex-col h-screen w-screen">
//       <Navbar/>
//     </div>
//   )
// }

// export default About

import React from "react";
import { Navbar, QuestionsCardsV1 } from "../components";
import incognito from "../assets/incognito_logo.png";
import message from "../assets/message_logo.png";

const About = () => {
  return (
    <div className="flex flex-col content-center">
      <Navbar />
      <div className="max-w-7xl mx-auto w-11/12 space-y-20 mb-12">
        {/* Title */}
        <div className="flex flex-col space-y-12">
          <h2 className="text-gray-400 text-sm text-center uppercase">
            ABOUT US
          </h2>
          <h1 className="text-2xl text-center">This is Wizeline Questions</h1>
        </div>
        {/* Description */}
        <div className="flex flex-col space-y-12">
          <p className="text-lg">
            Wizeline Questions (WizeQ) is a communication space where you can
            express your ideas, learn more about Wizeline, and ask all kinds of
            questions.
          </p>
          <p className="text-base">
            Wizeline Questions is a knowledge base where you can ask for
            information to a specific department and allow other Wizeliners to
            benefit from it. For example:
          </p>
        </div>
        {/* Example */}
        <QuestionsCardsV1
          input={
            "Are you still having problems with Zoom for the next meeting?"
          }
          commentCount={0}
          likeCount={3}
          dateCreated={Date("question.date_created")}
          userId={2}
          questionId={15151515151515515}
        />
        {/* Example Description */}
        <div className="flex flex-row p-8 space-x-16">
          <p className="text-base">
            Check Wizeline Questions someone might have already asked IT the
            same question. If that is not the case, this is your chance to shine
          </p>
          <p className="text-base">
            Tag people in your question, other Wizeliners will be glad to learn
            about that same topic, for sure!
          </p>
        </div>
        <p className="text-base">
          Information can be easily lost in the flood of comments and pinged
          posts on Slack. Do you need information to persist? Use Wizeline
          Questions instead!
        </p>
        {/* What Else */}
        <h1 className="text-2xl">What else?</h1>
        <div className="flex flex-row space-x-20">
          <div className="flex flex-col space-y-10">
            <p className="text-lg">
              Start a conversation. Is there a topic you want to discuss with
              other Wizeliners?
            </p>
            <p className="text-base">
              This is the place! You can reply to a question and also hold
              interesting conversations with other Wizeliners. Use it as a
              discussion, suggestion what-else, or simply visit to say hello!
              Help us to keep Wizeline an amazing place!
            </p>
          </div>
          <img
            src={incognito}
            alt="incognito_logo"
            className="ml-auto w-20 h-20 float-right"
          />
        </div>
        <div className="flex flex-row space-x-20">
          <div className="flex flex-col space-y-10">
            <p className="text-lg">
              Is there a sensitive question you want to ask anonymously?
            </p>
            <p className="text-base">
              Ask in Wizeline Questions! To promote ownership and open
              communication, it displays your user name by default when you post
              a new question. But you can always opt for anonymity.
            </p>
          </div>
          <img
            src={message}
            alt="incognito_logo"
            className="ml-auto w-20 h-20 float-right"
          />
        </div>
        {/* Keep in Mind */}
        <div className="space-y-12">
          <h1 className="text-2xl">
            Things to Keep in Mind When Asking a Question
          </h1>
          <p>
            We value your ideas, questions, suggestions, and comments.
            Therefore, we encourage you to use this communication space. Please,
            when writing a new question or a comment follow these
            recommendations:
          </p>
          <div className="list-disc space-y-8 ml-8">
            <li>Strive for constructive open communication. Avoid vagueness</li>
            <li>
              Do not demean or degrade others because of their gender, race,
              age, religion, etc.
            </li>
            <li>
              Avoid posting questions that include sexually explicit comments,
              hate speech, prejudicial remarks, and profanity.
            </li>
            <li>
              Do not mock other members, their comments, profiles, threads, or
              experiences. Remember, what is funny for you may be offensive to
              others.
            </li>
          </div>
        </div>
        {/* Footer */}
        <p className="text-base text-center	max-w-2xl mx-auto">
          We need your help! Wizeline Questions is an internal project and
          everyone can contribute. Come aboard and meet the team.
        </p>
      </div>
    </div>
  );
};

export default About;
