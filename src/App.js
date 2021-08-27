import './App.css';
import Index from './components/index.js'
import {BrowserRouter as Router} from 'react-router-dom'
// import AOS from 'aos';
// import 'aos/dist/aos.css'; // You can also use <link> for styles
// // ..
// AOS.init({
//   duration: 600, // values from 0 to 3000, with step 50ms
//   easing: 'ease',
// });
function App() {
  return (
    <div className="App">
      <Router>
      <Index />

        </Router>
    </div>
  );
}

export default App;
