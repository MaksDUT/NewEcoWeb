import './app.css'
import App from './App.svelte'
import { inject } from '@vercel/analytics';

inject();

const app = new App({
  target: document.getElementById('app'),
})

export default app
