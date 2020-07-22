import React from "react";
import Deadline from "./Deadline";
import TranslatorProfiles from "./TranslatorProfiles";
import { useState } from "react";

export default function StepTwo() {
  return (
    <div className="step">
      <Deadline />
      <TranslatorProfiles />
    </div>
  );
}
