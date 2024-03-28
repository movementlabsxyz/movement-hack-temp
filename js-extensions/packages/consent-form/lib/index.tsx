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
        <h1>Welcome to Movement Hack</h1>
        <section>
          <h2>What is this?</h2>
          <div className="row">
            <p>
              This course is designed to empower you to build with Movement and to help you understand Movement's advantages. Members of Movement's Masons guild can take this course to level up and earn rewards.
            </p>
          </div>
        </section>
        <section>
          <h2>How does it work?</h2>
          <div className="row">
            <div>
              <p>This course workbook is supplemented by community support:</p>
              <ol>
                <li>
                  <strong>Interactive quizzes are included in each section.</strong> These quizzes help you test your understanding of building for Movement. The quizzes also help us determine which sections need improvement. 
                </li>
                <li>
                  <strong>Join the <a href="https://discord.gg/movementlabsxyz">Discord</a>.</strong> We will hold weekly office hours and AMAs to support you as we build the Parthenon.
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
