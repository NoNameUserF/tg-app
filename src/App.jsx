import Header from './components/Header/Header';
import { Routes, Route } from 'react-router-dom';
import ProductList from './components/ProductList/ProductList';
import { Form } from './components/Form/Form';
function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route index path='/' element={<ProductList></ProductList>}></Route>
        <Route path='/form' element={<Form></Form>}></Route>
      </Routes>
    </>
  );
}

export default App;
