import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import your route components too
import App from './App'

import AnotherComponent from 'components/AnotherComponent/AnotherComponent'
const Invoice = () => <div>Team</div>
const SentInvoices = () => <div>NewTeamForm</div>
const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App test={() => {}}></App>}></Route>
      <Route path="others">
        <Route path="" element={<AnotherComponent />} />;
        <Route path=":invoiceId" element={<Invoice />} />
        <Route path="sent" element={<SentInvoices />} />
      </Route>
    </Routes>
  </BrowserRouter>
)
export default Router
