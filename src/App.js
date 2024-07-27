import { Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Home from './pages/book/Home';
import SaveForm from './pages/book/SaveForm';
import Detail from './pages/book/Detail';
import LoginForm from './pages/user/LoginForm';
import JoinForm from './pages/user/JoinForm';
import UpdateForm from './pages/book/UpdateForm';

// 화면 구성하기
function App() {
  return (
    <div>
      <Header />
      <Container>
        <Routes>
          <Route path="/" exact={true} Component={Home} />
          <Route path="/saveForm" exact={true} Component={SaveForm} />
          <Route path="/book/:id" exact={true} Component={Detail} />
          <Route path="/loginForm" exact={true} Component={LoginForm} />
          <Route path="/joinForm" exact={true} Component={JoinForm} />
          <Route path="/updateForm/:id" exact={true} Component={UpdateForm} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
