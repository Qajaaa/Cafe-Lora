import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import { Header } from '../components/Header/Header';
import { Banner } from '../components/Banner/banner';
import { Menu } from '../components/Menu/menu';
import { Gallery } from '../components/Gallery/Gallery';
import { Contact } from '../components/Contact/contact';
import { Footer } from '../components/Footer/footer';

const response = await fetch('http://localhost:4000/api/drinks');
const json = await response.json();
const drinks = json.data;

console.log(drinks)

document.querySelector('#root').innerHTML = render(
  <div className="page">
    <Header />
    <main>
      <Banner />
      <Menu drinks={drinks}/>
      <Gallery />
      <Contact />
    </main>
    <Footer />
  </div>
);

const hamburger = document.querySelector('.nav-btn');
const menuPolozky = document.querySelector('.rollout-nav');

const closeNav = () => {
  menuPolozky.classList.add('nav-closed');
};

hamburger.addEventListener('click', () => { 
  menuPolozky.classList.toggle('nav-closed');});

menuPolozky.addEventListener('click', (e) => {
  if (e.target.tagName === 'A') {
    closeNav();
  }
});
