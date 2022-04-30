import "../App.scss";
import Header from "./header/header";
import Para from "./section/article1";
import Article2 from "./section/article2";
import Article3 from "./section/article3";
import Article4 from "./section/article4";
import Article5 from "./section/article5";
import Article6 from "./section/article6";
import Article7 from "./section/article7";
import ListUser from "./user/listUser";
import DetailUser from "./user/detailUser";
import Footer from "./footer/footer";
import ToDoParent from "./ToDo/ToDoParent";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Login from "./Login/login";
import { ToastContainer, toast } from "react-toastify";
import NavBar from "./header/navbar";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path="/">
              <header className="App-header sticky-top">
                <Header />
                <br />
                <section className="App-section">
                  <article1 className="App-section-article1">
                    <Para />
                  </article1>
                  <br />
                  <article2 className="App-section-article2">
                    <Article2 />
                  </article2>
                  <article3 className="App-section-article3">
                    <Article3 />
                  </article3>
                  <article4 className="App-section-article4">
                    <Article4 />
                  </article4>
                  <article5 className="App-section-article5">
                    <Article5 />
                  </article5>
                  <br />
                  <article6 className="App-section-article6">
                    <Article6 />
                  </article6>
                  <article7 className="App-section-article7">
                    <Article7 />
                  </article7>
                </section>
                <Footer />
              </header>
            </Route>
            <Route exact path="/ToDo">
              <NavBar />
              <br />
              <ToDoParent />
              <br />
              <br />
            </Route>
            <Route exact path="/Login">
              <NavBar />
              <br />
              <Login />
              <br />
            </Route>
            <Route exact path="/User">
              <NavBar />
              <br />
              <ListUser />
              <br />
            </Route>
            <Route exact path="/User/:id">
              <NavBar />
              <br />
              <DetailUser />
              <br />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}

export default App;
