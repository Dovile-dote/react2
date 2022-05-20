
import './App.css';
const dogs = ['šuo', 'šunius', 'Bobikas', 'kudlius', 'Šarikas', 'avigalvis'];
const dogs1 =[...dogs];
dogs1.sort((a, b) => b.length - a.length)

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Atvaizduoti masyvą dogs. Kiekvienas šuo atskirame kvadrate */}
        <section>
          {
            dogs.map((k, i) => <div className="kvadratas" key={i}>{k}</div>)
          }
        </section>
        {/*  Atvaizduoti masyvą dogs. Kiekvienas šuo atskirame apskritime. Šunys turi būti išrūšiuoti nuo ilgiausio žodžio iki trumpiausio, o apskritimai sunumeruoti nuo 1 iki galo. */}
        <section>
          {
            dogs1.map((k, i) => <div className="apskritimas" key={i}> <span>{i+1}</span>{k}</div>)
          }
        </section>
        {/* Atvaizduoti masyvą dogs. Poriniuose indeksuose esančius šunis atvaizduoti kvadratuose, neporinius apskritime. */}
        <section>
          {
            dogs.map((dog, i) => <div key={i} className={i % 2 === 0 ? "kvadratas":"apskritimas"}>{dog}</div>) 
          }
        </section>
        {/* Atvaizduoti masyvą dogs. Šunis, kurie prasideda didžiąja raide praleisti (neatvaizduoti). */}
        <section>
          {
            dogs.map((dog, i) => dog[0] === dog[0].toUpperCase ? <div className="apskritimas" key={i}>dog</div>:<div className='kvadratas' key={i}></div>)
            // dogs.map((dog, i) =>  <div className="apskritimas" key={i} > {dog[0] === dog[0].toUpperCase ? i : dog}</div>)
          }
          <p>nepabaigtas, nesugalvoju kaip isrinkti su mazosiom raidem</p>
        </section>
          {/* Naudojant masyvą dogs atvaizduoti skaičius, kurie yra lygūs žodžių masyve ilgiui. Skaičius, didesnius nei 6 atvaizduoti žaliai, kitus raudonai. */}
          <section>
            {
              dogs.map((dog, i) => <div key={i} className='number' style={{color:dog.length > 6 ? "green" : "red", boxShadow:dog.length > 6 ? "0 0 15px green" :"0 0 15px red" }}>{dog.length}</div>)
            }
          </section>
      </header>
    </div>
  );
}
export default App;
