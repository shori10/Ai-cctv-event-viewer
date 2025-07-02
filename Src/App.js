import React from "react";
import "./App.css";

function App() {
  return (
    <div style={{ padding: "20px", background: "#f1f1f1", minHeight: "100vh" }}>
      <h1 style={{ textAlign: "center" }}>AI CCTV Event Viewer</h1>
      <div style={{ marginTop: "30px", maxWidth: "600px", margin: "auto" }}>
        <video controls width="100%">
          <source src="/detected_clip.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <p style={{ marginTop: "10px", textAlign: "center" }}>
          Event: Cash Drawer Open Detected
        </p>
      </div>
    </div>
  );
}

export default App;
