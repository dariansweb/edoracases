import React, { useState } from "react";
import Textarea from "../../../components/Atoms/Textarea"; // Assuming Textarea is in the same folder
import ErrorBoundary from "../.././../utils/ErrorBoundary"; // The ErrorBoundary we just created

const TextareaPage = () => {
  // State variables for different textareas
  const [comments, setComments] = useState('');
  const [feedback, setFeedback] = useState('');
  const [description, setDescription] = useState('');
  const [summary, setSummary] = useState('');
  const [message, setMessage] = useState('');
  
  const [commentsError, setCommentsError] = useState(null);
  const [feedbackError, setFeedbackError] = useState(null);
  const [descriptionError, setDescriptionError] = useState(null);

  // Example event handlers
  const handleCommentsChange = (e) => setComments(e.target.value);
  const handleFeedbackChange = (e) => setFeedback(e.target.value);
  const handleDescriptionChange = (e) => setDescription(e.target.value);
  const handleSummaryChange = (e) => setSummary(e.target.value);
  const handleMessageChange = (e) => setMessage(e.target.value);

  return (
    <div className="pages-container">
      <h1 className="dark">Text Area Test Page</h1>

      {/* Wrap each Textarea in an ErrorBoundary */}
      <ErrorBoundary>
        <Textarea
          label="Comments"
          placeholder="Enter your comments..."
          value={comments}
          onChange={handleCommentsChange}
          error={commentsError}
        />
      </ErrorBoundary>

      <ErrorBoundary>
        <Textarea
          label="Feedback"
          placeholder="Your feedback..."
          value={feedback}
          onChange={handleFeedbackChange}
          error={feedbackError}
          resize={true}
        />
      </ErrorBoundary>

      <ErrorBoundary>
        <Textarea
          label="Description"
          placeholder="Description..."
          value={description}
          onChange={handleDescriptionChange}
          error={descriptionError}
          isDisabled={true} // This one is disabled
        />
      </ErrorBoundary>

      <ErrorBoundary>
        <Textarea
          label="Summary"
          value={summary}
          onChange={handleSummaryChange}
          isReadOnly={true} // This one is read-only
        />
      </ErrorBoundary>

      <ErrorBoundary>
        <Textarea
          label="Message"
          placeholder="Type your message..."
          value={message}
          onChange={handleMessageChange}
          maxLength={200} // Limiting input to 200 characters
        />
      </ErrorBoundary>
    </div>
  );
};

export default TextareaPage;
