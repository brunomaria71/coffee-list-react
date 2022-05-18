import './App.css';
import ContactForm from './components/ContactForm';
// import CCoffee from './components/CCoffee';
import FCoffee from './components/FCoffee';

function App() {
  return (
    <>
    {/* <CCoffee firstName="Maria"/>   */}
    <ContactForm />
    <FCoffee firstName="Maria"/>
    </>
  );
}

export default App;
