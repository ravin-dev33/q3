/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from "react";

const Particles = () => {
  return (
    <div className="fixed inset-0">
      {/* Floating geometric shapes */}
      <div className="absolute top-20 left-20 w-32 h-32 border-2 border-blue-200/30 rounded-full animate-pulse" />
      <div
        className="absolute top-40 right-32 w-24 h-24 border border-blue-300/20 rounded-lg animate-bounce"
        style={{ animationDuration: "3s" }}
      />
      <div
        className="absolute bottom-32 left-32 w-40 h-40 border-2 border-blue-200/30 rounded-full animate-pulse"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="absolute top-60 right-20 w-16 h-16 border border-blue-400/30 rounded-full animate-ping"
        style={{ animationDuration: "4s" }}
      />
      <div
        className="absolute top-1/3 left-10 w-20 h-20 border border-blue-300/20 rounded-full animate-pulse"
        style={{ animationDelay: "2.5s" }}
      />
      <div
        className="absolute bottom-20 right-40 w-28 h-28 border-2 border-blue-300/30 rounded-lg animate-bounce"
        style={{ animationDuration: "5s" }}
      />
      <div
        className="absolute top-10 left-1/2 w-14 h-14 border border-blue-400/20 rounded-full animate-ping"
        style={{ animationDuration: "6s", animationDelay: "1.5s" }}
      />
      <div
        className="absolute bottom-60 left-20 w-36 h-36 border-2 border-blue-400/10 rounded-full animate-pulse"
        style={{ animationDelay: "3s" }}
      />
      <div
        className="absolute top-2 right-16 w-24 h-24 border border-blue-400/20 rounded-lg animate-bounce"
        style={{ animationDuration: "4.5s", animationDelay: "0.5s" }}
      />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-gradient-to-r from-blue-200/20 to-cyan-200/20 rounded-full blur-3xl animate-pulse" />
      <div
        className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-l from-sky-200/15 to-blue-200/15 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-br from-cyan-200/10 to-blue-200/10 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "4s" }}
      />
      <div
        className="absolute bottom-10 right-10 w-72 h-72 bg-gradient-to-tl from-sky-200/12 to-cyan-200/12 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "3s" }}
      />
      <div
        className="absolute top-1/2 left-1/4 w-56 h-56 bg-gradient-to-r from-blue-300/8 to-sky-300/8 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "5s" }}
      />
      <div
        className="absolute bottom-1/4 right-1/3 w-88 h-88 bg-gradient-to-l from-cyan-300/10 to-blue-300/10 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      />

      {/* Moving particles */}
      <div className="absolute inset-0">
        <div className="absolute top-32 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-bounce opacity-60" />
        <div
          className="absolute top-56 right-1/3 w-1 h-1 bg-cyan-500 rounded-full animate-ping opacity-40"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute bottom-14 left-1/3 w-3 h-3 bg-blue-200 rounded-full animate-pulse opacity-50"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute bottom-32 right-1/3 w-3 h-3 bg-blue-200 rounded-full animate-pulse opacity-50"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute top-80 right-1/4 w-1.5 h-1.5 bg-sky-400 rounded-full animate-bounce opacity-30"
          style={{ animationDelay: "3s" }}
        />
        <div
          className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-blue-500 rounded-full animate-bounce opacity-35"
          style={{ animationDelay: "2.5s" }}
        />
        <div
          className="absolute top-3/4 left-1/5 w-2 h-2 bg-sky-500 rounded-full animate-pulse opacity-55"
          style={{ animationDelay: "5s" }}
        />
        <div
          className="absolute bottom-1/5 right-1/5 w-1 h-1 bg-cyan-600 rounded-full animate-ping opacity-40"
          style={{ animationDelay: "1.5s" }}
        />
        <div
          className="absolute top-1/6 left-3/4 w-2.5 h-2.5 bg-blue-400 rounded-full animate-bounce opacity-50"
          style={{ animationDelay: "3.5s" }}
        />
        <div
          className="absolute bottom-2/3 right-2/3 w-1.5 h-1.5 bg-sky-600 rounded-full animate-pulse opacity-40"
          style={{ animationDelay: "0.5s" }}
        />
      </div>
    </div>
  );
};

export default Particles;
