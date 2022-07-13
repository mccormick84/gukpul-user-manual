import React from "react";

export default function EmbeddedVideo({ src, title }) {
  return (
    <div style={{ padding: "68.13% 0 0 0", position: "relative" }}>
      <iframe
        src={src}
        frameBorder={0}
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen=""
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
        title={title}
      />
    </div>
  );
}
