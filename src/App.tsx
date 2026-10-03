import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Agenda from '@/components/Agenda';
import Oficinas from '@/components/Oficinas';
import Galeria from '@/components/Galeria';
import Contato from '@/components/Contato';
import Footer from '@/components/Footer';

function App() {
  return <div className="min-h-screen bg-white"><Navbar /><main><Hero /><Agenda /><Oficinas /><Galeria /><Contato /></main><Footer /></div>;
}

export default App;
