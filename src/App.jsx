import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/shared/Layout';
import Dashboard from './components/Dashboard';
import Expenses from './components/Expenses';
import Wallets from './components/Wallets';
import Summary from './components/Summary';
import Accounts from './components/Accounts';
import Settings from './components/Settings';

function App() {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Dashboard/>}/>
          <Route path="expenses" element={<Expenses/>}/>
          <Route path="wallets" element={<Wallets/>}/>
          <Route path="summary" element={<Summary/>}/>
          <Route path="accounts" element={<Accounts/>}/>
          <Route path="settings" element={<Settings/>}/>
        </Route> 
      </Routes>
    </Router>
  );
}
export default App;
