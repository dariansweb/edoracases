import React from "react";
import "./styles/ProgressBar.css";
import { motion } from "framer-motion";


const ProgressBar = ({ currentStep, totalSteps }) => {
  const progressPercentage = (currentStep / totalSteps) * 100;

  return (
    <div className="progress-bar-container">
      <motion.div
        className="progress-bar"
        style={{ width: `${progressPercentage}%` }}
        initial={{ width: 0 }}
        animate={{ width: `${progressPercentage}%` }}
        transition={{ duration: 0.6 }}
      />
      <div className="progress-label">
        {currentStep === totalSteps
          ? "Enter notes and click Add Service"
          : `Step ${currentStep} of ${totalSteps}`}
      </div>
    </div>
  );
};

export default ProgressBar;
