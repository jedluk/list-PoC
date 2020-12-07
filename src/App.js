import { useCallback, useRef } from "react";
import { FixedSizeList as List } from "react-window";
import "./App.css";

const list = Array.from(Array(3000).keys()).map(
  (value) => "Some text " + value
);

const Row = ({ index, style }) => {
  return <div style={style}> {list[index + 1]}</div>;
};

function App() {
  const headerRef = useRef(null);
  const handleScroll = useCallback(({ scrollOffset }) => {
    const x = 100 - scrollOffset;
    if (x > 30) {
      headerRef.current.style.height = x + "px";
    }
  }, []);
  return (
    <div className="App">
      <div className="container">
        <div ref={headerRef} className="header">
          Subheader or sth
        </div>
        <List
          height={500}
          itemCount={list.length}
          itemSize={35}
          onScroll={handleScroll}
          width={300}
        >
          {Row}
        </List>
      </div>
    </div>
  );
}

export default App;
