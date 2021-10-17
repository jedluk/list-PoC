import { useCallback, useState } from "react";
import { FixedSizeList as List } from "react-window";
import { Row, LIST } from "./Row";
import "./App.css";

function App() {
  const [headerHeight, setHeaderHeight] = useState(100);

  const handleScroll = useCallback(
    ({ scrollOffset: offset }) => setHeaderHeight(Math.max(100 - offset, 30)),
    []
  );

  return (
    <div className="App">
      <div className="container">
        <div style={{ height: headerHeight }} className="header">
          <span>Header</span>
          {headerHeight > 35 && <b>sth important</b>}
        </div>
        <List
          height={500}
          itemCount={LIST.length}
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
