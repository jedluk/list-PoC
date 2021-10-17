export const LIST = Array.from(Array(3000).keys()).map(
  (value) => "Row " + value
);

export function Row({ index, style }) {
  return (
    <div className="row" style={style}>
      {index % 2 ? <>&#9824;</> : null}
      {LIST[index + 1]}
      {!(index % 2) ? <> &#9830;</> : null}
    </div>
  );
}
