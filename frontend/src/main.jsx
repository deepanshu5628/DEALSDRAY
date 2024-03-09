import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'react-toastify/dist/ReactToastify.css';
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import { Store } from "./redux/Store.js";
import { Provider } from 'react-redux'
ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={Store}>
    <BrowserRouter>
    <div>
    <App /> 
    <ToastContainer /> 
    </div>
    </BrowserRouter>
    </Provider>
)
