import './App.css';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Section from './components/Section.jsx';
import HistoryCard from './components/HistoryCard.jsx';
import ThingsToSeeCard from './components/ThingsToSeeCard.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <>
      <Header title="Seattle" />
      <Hero />
      <Section title="History">
        <HistoryCard title="History #1" content="Filler Content #1"/>
        <HistoryCard title="History #2" content="Filler Content #2"/>
      </Section>
      <Section title="Things to See">
        <ThingsToSeeCard title="Museum of Pop Culture" content="Filler Content #1" image=".\src\assets\Museum_of_Pop_Culture.jpg" alt="A view of the Museum of Pop Culture"/>
        <ThingsToSeeCard title="Pacific Science Center" content="Filler Content #2" image=".\src\assets\Pacific_Science_Center.jpg" alt="A view of the Pacific Science Center"/>
        <ThingsToSeeCard title="Space Needle" content="Filler Content #3" image=".\src\assets\Space_Needle.jpg" alt="A view of Space Needle"/>
      </Section>
      <Footer />
    </>
  )
}

export default App
