import { useState } from "react";

export default function TickerCard({ base, quote, low, high }) {
  const [fav, setFav] = useState(false);
  return (
    <div className="ticker-box shadow-lg p-6 m-4 flex justify-between">
      <div className="font-semibold">
        <span>{base.toUpperCase()}</span>-<span>{quote.toUpperCase()}</span>
      </div>
      <div className="font-semibold">
        <div style={{ color: "red" }}>{low}</div>
        <div style={{ color: "green" }}>{high}</div>
      </div>
      <div onClick={() => setFav(!fav)}>
        <img
          src={fav ? "./assets/star-solid.png" : "./assets/star.png"}
          className="w-6 h-6"
        />
      </div>
    </div>
  );
}
