import React from "react";
import {createRoot} from 'react-dom/client';
import {App, About, Portfolio} from './components'


const container = document.getElementById('app')
const root = createRoot(container)
root.render(<App />)