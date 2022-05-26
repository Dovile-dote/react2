import './App.css';
const dogs = ['šuo', 'šunius', 'Bobikas', 'kudlius', 'Šarikas', 'avigalvis'];
const dogs1 = [...dogs];
dogs1.sort((a, b) => b.length - a.length);

let dogs2 = [];
for (let i = 0; i < dogs.length; i++) {
  if (dogs[i][0] !== dogs[i][0].toUpperCase()) {
    dogs2 = [...dogs2, dogs[i]];
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Atvaizduoti masyvą dogs. Kiekvienas šuo atskirame kvadrate */}
        <section>
          {dogs.map((dog, i) => (
            <div className="kvadratas" key={i}>
              {dog}
            </div>
          ))}
        </section>
        {/*  Atvaizduoti masyvą dogs. Kiekvienas šuo atskirame apskritime. Šunys turi būti išrūšiuoti nuo ilgiausio žodžio iki trumpiausio, o apskritimai sunumeruoti nuo 1 iki galo. */}
        <section>
          {dogs1.map((dog, i) => (
            <div className="apskritimas" key={i}>
              <span>{i + 1}</span>
              {dog}
            </div>
          ))}
        </section>
        {/* Atvaizduoti masyvą dogs. Poriniuose indeksuose esančius šunis atvaizduoti kvadratuose, neporinius apskritime. */}
        <section>
          {dogs.map((dog, i) => (
            <div key={i} className={i % 2 === 0 ? 'kvadratas' : 'apskritimas'}>
              {dog}
            </div>
          ))}
        </section>
        {/* Atvaizduoti masyvą dogs. Šunis, kurie prasideda didžiąja raide praleisti (neatvaizduoti). */}
        <section>
          {dogs.map((dog, i) =>
            dog[0] !== dog[0].toUpperCase() ? (
              <div className="apskritimas" key={i}>
                {dog}
              </div>
            ) : null
          )}
        </section>

        <section>
          {dogs2.map((dog, i) => (
            <div className="suo" key={i}>
              <div className="kaire-ausis"></div>
              <div className="snukis">
                <div className="akys">
                  <div className="rainele">
                    <div className="vizdys"></div>
                  </div>
                  <div className="rainele">
                    <div className="vizdys"></div>
                  </div>
                </div>
                <p>{dog}</p>
              </div>
              <div className="desine-ausis"></div>
            </div>
          ))}
        </section>
        {/* Naudojant masyvą dogs atvaizduoti skaičius, kurie yra lygūs žodžių masyve ilgiui. Skaičius, didesnius nei 6 atvaizduoti žaliai, kitus raudonai. */}
        <section>
          {dogs.map((dog, i) => (
            <div key={i} className={dog.length > 6 ? 'green' : 'red'}>
              {dog.length}
            </div>
          ))}
        </section>
      </header>
    </div>
  );
}
export default App;
