import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import Profile from './profiles/Profile';
import Footer from './Footer';
import './sections.css';

library.add(fab)

const mainStyles = {
  height: "100vh",
  width: '100%',
  margin: 0,
  padding: 0,
  display: "block"
}

const headerStyles = {
  width: '100%',
  margin: 0,
  padding: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexWrap: "wrap"
}


class App extends Component {
  render() {
    return (
      <div style={mainStyles}>
        <section class="sections">
          <h2>Project Hydro Header</h2>
        </section>

        <section class="sections">
          <h2>About Project Hydro</h2>
        </section>

        <section class="sections">
          <div style={headerStyles} id="cards">
            <Profile
              name = "Andy Chorlian"
              linkedIn="https://www.linkedin.com/in/achorlia/"
              email="andy@hydrogenplatform.com"
              twitter="https://twitter.com/andy8052"
              github="https://github.com/AndyHydro"
              photoName = "andy.jpeg"
              backgroundName = "architecture.jpg"
            />
            <Profile
              name = "Noah Zinsmeister"
              linkedIn="https://www.linkedin.com/in/noahzinsmeister/"
              email="noah@hydrogenplatform.com"
              twitter="https://twitter.com/noahzinsmeister"
              github="https://github.com/noahhydro"
              photoName = "noah.png"
<<<<<<< HEAD
              background =  "space.png"
=======
              backgroundName = "stars.png"
>>>>>>> 11ff9ff28650a0286c67f84be53cb24e93f92afa
            />
            <Profile
              name = "Shane Hampton"
              linkedIn="https://www.linkedin.com/in/shane-hampton-a9689b49/"
              email="shane@hydrogenplatform.com"
              twitter="https://twitter.com/citizenshane_"
              github="https://github.com/shanehampton"
              photoName = "shane.png"
              backgroundName = "hexagons.png"
            />
          </div>
        </section>

        <Footer />

      </div>
    );
  }
}

export default App;
