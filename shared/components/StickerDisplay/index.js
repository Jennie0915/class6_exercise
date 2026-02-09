import React from "react";
import Image from "next/image";

export default function StickerDisplay() {
  return (
    <div>
      <h1>STICKER DISPLAY</h1>
      <div
        style={{
          backgroundColor: "gray",
          padding: "20px",
          width: "250px",
          height: "250px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img
            src="https://placecats.com/100/100"
            alt="cat"
            width={100}
            height={100}
          />
        </div>
        <div style={{ marginTop: "10px" }}>
          <p>title: cat</p>
          <p>description: cute cat</p>
        </div>
      </div>
    </div>
  );
}
