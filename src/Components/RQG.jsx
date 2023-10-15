export function RQG() {
  return (
    <div>
      <div id="bgtext-container">
        <div className="bg-text random">
          <h1>random</h1>
        </div>
        <div className="bg-text quote">
          <h1>quote</h1>
        </div>
        <div className="bg-text generator">
          <h1>generator</h1>
        </div>
      </div>
      <div id="quote-box">
        <div id="text">
          <h2>Quote goes here</h2>
        </div>
        <div id="author">
          <h4>Author goes here</h4>
        </div>
        <div className="buttons">
          <button className="btn" id="tweet-quote">Tweet</button>
          <button className="btn" id="new-quote">New Quote</button>
        </div>
      </div>
    </div>
  );
}
