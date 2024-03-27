import React, { useEffect, useRef } from "react";
import * as ReactDOM from "react-dom/client";

import "../consent.scss";

const CONSENT_KEY = "__wcrichto_consent";

let ConsentForm = () => {
  let ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    document.documentElement.style.overflow = "hidden";
  });
  return (
    <div className="consent-form" ref={ref}>
      <div className="container">
        <h1>Experiment: Interactive Movement Hack</h1>
        <section>
          <h2>What is this?</h2>
          <div className="row">
            <p>
              The goals of this course are:
            </p>
            <ol>
              <li>
                to empower people to build with Movement and
              </li>
              <li>
                to help people understand Movement's advantages.
              </li>
            </ol>
          </div>
        </section>
        <section>
          <h2>How does it work?</h2>
          <div className="row">
            <div>
              <p>This course workbook is supplemented with community involvement:</p>
              <ol>
                <li>
                  <strong>Interactive quizzes are added in each section.</strong> These quizzes help
                  you test your understanding of building for Movement. The quizzes also help us determine which
                  sections need improvement. 
                </li>
                <li>
                  <strong>Join the Discord and Telegram.</strong> We will hold weekly office hours and calls to support you on your developer journey.
                </li>
              </ol>
            </div>
            <img src="img/experiment/quiz-example.png" width="300" />
          </div>
        </section>
        <section>
          <h2>Why should I take Movement Hack? </h2>
          <p>
            If you'd like to learn to build on an emerging new Move Ecosystem infrstracture, this is the course for you!
          </p>
        </section>
        <section>
          <h2>What data do I have to give you?</h2>
          <p>
            We do not need any personal information about you. The only data we gather are: whenever
            you take a quiz, we record your answers to the quiz. We also use cookies to determine
            when a set of answers are coming from the same browser session. We hope the patterns of
            answers will help us better understand the Movement learning experience.
          </p>
        </section>
        <div className="row">
          <button
            onClick={() => {
              ref.current!.style.display = "none";
            }}
          >
            Let's Move.
          </button>
        </div>
      </div>
    </div>
  );
};

if (localStorage.getItem(CONSENT_KEY) === null) {
  let el = document.createElement("div");
  document.body.appendChild(el);
  let root = ReactDOM.createRoot(el);
  root.render(<ConsentForm />);
}
