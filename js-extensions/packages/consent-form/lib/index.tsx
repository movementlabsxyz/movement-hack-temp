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
    <div>
    </div>
  );
};
