import "./home.scss";

function Home() {
  return (
    <>
      <div className="home">
        {someButton()}
        {someButton()}
        {someButton()}
        {someButton()}
      </div>
    </>
  );
}

function someButton() {
  return (
    <>
      <button>
        Shop
      </button>
    </>
  );
}

export default Home;
