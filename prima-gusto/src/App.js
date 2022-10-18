import "./App.css";
import BasketItem from "./components/BasketItem";

import Header from './components/Header'
import AppRoutes from "./routes/AppRoutes";


function App(props) {
  return <div className="wrapper">
    <Header />
    
    <AppRoutes />
  </div>;
}

export default App;
