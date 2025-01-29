import React from 'react';
import './project.css';

export const Project = () => {
  return (
      <div className="container">
        <h1 className="title">My Projects</h1>
        <div className="grid">
          <div className="card">
            <h2>Brain Tumor Prediction</h2>
            <p>
              A Python-based project utilizing TensorFlow and NumPy to classify MRI scans as tumor or non-tumor. Image augmentation is achieved using ImageDataGenerator.
            </p>
          </div>
          <div className="card">
            <h2>Sign Language Converter</h2>
            <p>
              A machine learning model using CNNs or RNNs to recognize hand gestures and translate them into text or speech, enabling real-time communication.
            </p>
          </div>
          <div className="card">
            <h2>Bank Management System</h2>
            <p>
              A console-based application built in C to simulate basic banking operations and manage customer accounts efficiently.
            </p>
          </div>
          <div className="card">
            <h2>Movie Review System</h2>
            <p>
              A Python application using Tkinter and speech recognition, allowing users to input and submit movie reviews by typing or speaking.
            </p>
          </div>
        </div>
      </div>
    );
  };