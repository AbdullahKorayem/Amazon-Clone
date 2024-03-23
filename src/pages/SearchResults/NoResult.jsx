function NoResult({ result }) {
  return (
    <div className="flex justify-center items-center mx-60 h-96 text-xl">
      <div>
        <div className="font-bold">No results for {result}.</div>
        <div>
          Try checking your spelling or use more general terms. Check each
          product page for other buying options.
        </div>
      </div>
    </div>
  );
}

export default NoResult;
