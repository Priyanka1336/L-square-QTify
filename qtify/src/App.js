import { useEffect, useState } from "react";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import { getNewAlbums, getSongs, getTopAlbums } from "./components/api/api";
import Section from "./components/Section/Section";
import styles from "./App.module.css";
import { Route, Routes } from "react-router-dom";
import Albumssongs from "./components/Albumssongs/Albumssongs";
import Faq from "./components/Faq/Faq";
import Footer from "./components/Footer/Footer";
import SongContext from "./components/Context/Songcontext";

function App() {
  const [topAlbums, setTopAlbums] = useState([]);
  const [newAlbums, setNewAlbums] = useState([]);
  const [songs, setSongs] = useState([]);
  const [selectedsong, setSelectedSong] = useState({
    image: "https://rb.gy/r3w5y",
    title: "O Bedardeya",
    genre: {
      label: "Bollywood Hits",
    },
    durationInMs: 93501,
  });

  const fetchTopAlbums = async () => {
    try {
      let data = await getTopAlbums();
      setTopAlbums(data);
    } catch (e) {
      console.error(e);
    }
  };
  const fetchNewAlbums = async () => {
    try {
      let data = await getNewAlbums();
      setNewAlbums(data);
    } catch (e) {
      console.error(e);
    }
  };

  const fetchSongs = async () => {
    try {
      let data = await getSongs();
      setSongs(data);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchTopAlbums();
    fetchNewAlbums();
    fetchSongs();
  }, []);

  return (
    <SongContext.Provider value={setSelectedSong}>
      <div className="App">
        <Navbar topAlbums={topAlbums} newAlbums={newAlbums} />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <div className={styles.sectionWrapper}>
                  <Section
                    data={topAlbums}
                    altdata={newAlbums}
                    type="album"
                    title="Top Albums"
                  />
                  <Section
                    data={newAlbums}
                    altdata={topAlbums}
                    type="album"
                    title="New Albums"
                  />
                  <Section data={songs} type="song" title="Songs" />
                  <Faq />
                </div>
              </>
            }
          />
          <Route path="/albums" element={<Albumssongs />} />
        </Routes>
        <Footer song={selectedsong} />
      </div>
    </SongContext.Provider>
  );
}

export default App;
