function App() {
  const tg = window.Telegram.WebApp;

  const close = () => {
    tg.close();
  };
  return (
    <>
      <h1>Work</h1>
      <button onClick={close}>Close</button>
    </>
  );
}

export default App;
