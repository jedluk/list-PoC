export const LIST = Array.from(Array(3000).keys()).map(
  (value) => "Some text " + value
);

export function Row({ index, style }) {
  return (
    <div className="row" style={style}>
      {LIST[index + 1]}
    </div>
  );
}
