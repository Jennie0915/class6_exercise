export default function StickerGallery() {
  return (
    <div>
      <div>Angry Cat!!!!</div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 100px)",
          gridTemplateRows: "repeat(2, 100px)",
          gap: 20,
          margin: 30,
        }}
      >
        <div>
          <img src="https://placecats.com/100/100" alt="Cat1" />
        </div>
        <div>
          <img src="https://placecats.com/100/100" alt="Cat2" />
        </div>
        <div>
          <img src="https://placecats.com/100/100" alt="Cat3" />
        </div>
        <div>
          <img src="https://placecats.com/100/100" alt="Cat4" />
        </div>
      </div>
    </div>
  );
}
