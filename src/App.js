import './App.css';
import NavBar from './components/NavBar';
import "bootstrap/dist/css/bootstrap.min.css"
import ItemListContainer from './containers/itemListContainer';

function App() {

  return (
    <div className='app'>
        <NavBar/>
        <ItemListContainer greeting={"PAGINA EN CONSTRUCCIÓN"}/>
    </div>

  );
}

export default App;
