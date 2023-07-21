export default function SearchResult({ results ,handleClick}) {
  return (
    <div className="results">
      <ul>
        {results.map((result) => (
          <li onClick={() => {
            handleClick(result);
          }}>
            <img src={result.cover} width={50} height={50} />
            <p>{result.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
