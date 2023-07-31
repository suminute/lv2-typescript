import Main from "./components/Main";
import Layout from "./components/Layout";

function App() {
  return (
    <Layout>
      <header>
        <div>My Todo List</div>
        <div>React</div>
      </header>
      <Main />
    </Layout>
  );
}

export default App;
