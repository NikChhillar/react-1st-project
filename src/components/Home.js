import React from "react";
import vg from "../assets/2.webp";
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";

const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>Dark Lord</h1>
          <p>Life is here...where are you</p>
        </main>
      </div>

      <div className="home2">
        <img src={vg} alt="Graphics" />
        <div>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            nam id accusamus earum et laboriosam consequatur adipisci
            perspiciatis natus incidunt, magni nostrum quas ratione reiciendis
            aperiam? Eligendi ipsa molestiae quis.
          </p>
        </div>
      </div>

      <div className="home3" id="about">
        <div>
          <h1>Who is Kartik..?</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
            architecto sunt ullam aspernatur repudiandae eum possimus
            necessitatibus soluta deleniti, blanditiis quia fugit commodi
            obcaecati. Eos quibusdam eius incidunt, quasi rerum delectus vero
            iusto tenetur, deserunt, debitis atque? Incidunt, qui! Quidem quae
            cum consequatur eius? Ducimus numquam quae facere nulla dolores ex
            iure quia saepe repudiandae voluptatem possimus, quidem deleniti
            molestiae.
          </p>
        </div>
      </div>

      <div className="home4" id="brands">
        <div>
          <h1>Squads</h1>
          <article>
            <div
              style={{
                animationDelay: "0.3s",
              }}
            >
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>
            <div
              style={{
                animationDelay: "0.5s",
              }}
            >
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
            <div
              style={{
                animationDelay: "0.7s",
              }}
            >
              <AiFillYoutube />
              <p>YouTube</p>
            </div>
            <div
              style={{
                animationDelay: "0.9s",
              }}
            >
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;
