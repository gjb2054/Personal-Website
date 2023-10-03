import { Routes, Route, BrowserRouter as Switch } from 'react-router-dom';
import App from './App';


function Router() {
    <Switch>
        <Routes>
            <Route path="/" element={<App />}>
            </Route>
        </Routes>
    </Switch>
}

export default Router;