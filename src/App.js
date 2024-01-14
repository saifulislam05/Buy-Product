import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from './components/Header/Header'
function App() {
  return (
    <div className="App h-[100vh] flex flex-col justify-between ">
      <Header />

      <Footer/>
    </div>
  );
}

export default App;
