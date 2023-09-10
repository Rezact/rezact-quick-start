
export function Page() {
  let $counter = 0;
  return (
    <>
      <h1>Hello World</h1>
      <p>{$counter}</p>
      <button onClick={() => $counter--}>-</button>
      <button onClick={() => $counter++}>+</button>
    </>
  );
}
