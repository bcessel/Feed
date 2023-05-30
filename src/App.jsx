import { Post } from './Post';
import { Header } from './components/header';
import './styles.css';

export function App() {
  return (
    <div>
      <Header />

      <Post 
        author="Bruno Cessel" 
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae corporis doloremque itaque totam animi qui cum neque blanditiis accusantium laudantium eos, vero sed officia aut, voluptas quisquam! Fugiat, provident autem." 
      />

      <Post 
        author="Camilla Pereira" 
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae corporis doloremque itaque totam animi qui cum neque blanditiis accusantium laudantium eos, vero sed officia aut, voluptas quisquam! Fugiat, provident autem." 
      />
    </div>
  )
}
