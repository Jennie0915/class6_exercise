export default function StickerGallery() {
  return (
    <div>
      <div>
        <h1>Angry Cat!!!!</h1>
      </div>
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
          Angry
          <img src="https://placecats.com/100/100" alt="Cat1" />
        </div>
        <div>
          Cat
          <img src="https://placecats.com/100/100" alt="Cat2" />
        </div>
        <div>
          so
          <img src="https://placecats.com/100/100" alt="Cat3" />
        </div>
        <div>
          sute
          <img src="https://placecats.com/100/100" alt="Cat4" />
        </div>
      </div>
    </div>
  );
}
