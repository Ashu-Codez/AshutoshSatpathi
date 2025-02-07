import React, { useEffect } from 'react';

const Page3 = () => {
  useEffect(() => {
    // Get DOM elements after the component has mounted
    let nextDom = document.getElementById('next');
    let prevDom = document.getElementById('prev');
    let carouselDom = document.querySelector('.carousel');
    // Since .carousel is the container, inside it .list is unique
    let SliderDom = carouselDom ? carouselDom.querySelector('.list') : null;
    let thumbnailBorderDom = carouselDom ? carouselDom.querySelector('.thumbnail') : null;
    let timeDom = carouselDom ? carouselDom.querySelector('.time') : null;

    // Make sure all elements exist before proceeding
    if (!nextDom || !prevDom || !carouselDom || !SliderDom || !thumbnailBorderDom) {
      console.error('One or more carousel elements are missing');
      return;
    }

    // Move the first thumbnail item to the end (or append again)
    let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');
    if (thumbnailItemsDom.length > 0) {
      thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
    }

    let timeRunning = 3000;
    let timeAutoNext = 7000;

    // Attach click events
    nextDom.onclick = function () {
      showSlider('next');
    };

    prevDom.onclick = function () {
      showSlider('prev');
    };

    // Auto slide after timeAutoNext
    let runTimeOut;
    let runNextAuto = setTimeout(() => {
      nextDom.click();
    }, timeAutoNext);

    function showSlider(type) {
      // Get fresh list of items on every slide change
      let SliderItemsDom = SliderDom.querySelectorAll('.item');
      let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');

      if (type === 'next') {
        // Move the first slide/item to the end
        SliderDom.appendChild(SliderItemsDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        carouselDom.classList.add('next');
      } else {
        // Move the last slide/item to the beginning
        SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
        thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
        carouselDom.classList.add('prev');
      }

      // Remove the animation classes after a delay
      clearTimeout(runTimeOut);
      runTimeOut = setTimeout(() => {
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
      }, timeRunning);

      // Reset the auto next timeout
      clearTimeout(runNextAuto);
      runNextAuto = setTimeout(() => {
        nextDom.click();
      }, timeAutoNext);
    }
  }, []); // Empty dependency array means this runs once on mount

  return (
    <div className="body2">
      <div className="carousel">
        <div className="list">
          <div className="item">
            <img src="./src/assets/CurrCon.png" alt="Currency Converter" />
            <div className="content">
              <div className="author">Ashutosh Satpathi</div>
              <div className="title">Project</div>
              <div className="topic">Currency Converter</div>
              <div className="des">
              The Crypto Currency Converter is a web application that allows users to convert between different cryptocurrencies and fiat currencies in real-time.
              It utilizes the ExchangeRate API to fetch live exchange rates and dynamically updates the converted amount based on user input.
              </div>
              <div className="buttons">
                
                <button>VISIT</button>
              </div>
            </div>
          </div>
          <div className="item">
            <img src="./src/assets/NikeLanding.png" alt="Nike Brand Page" />
            <div className="content">
              <div className="author">Ashutosh Satpathi</div>
              <div className="title">Project</div>
              <div className="topic">Nike Brand Page</div>
              <div className="des">
              This project is a Nike brand homepage built using React components. It replicates the homepage layout, showcasing Nike's latest products, banners, and a responsive navbar.
               The project follows a component-based architecture for better maintainability and reusability.
              </div>
              <div className="buttons">
                
                <button>VISIT</button>
              </div>
            </div>
          </div>
          <div className="item">
            <img src="./src/assets/tictoe.png" alt="Tic Tac Toe" />
            <div className="content">
              <div className="author">Ashutosh Satpathi</div>
              <div className="title">Project</div>
              <div className="topic">TIC-TAC-TOE</div>
              <div className="des">
              The Tic-Tac-Toe Game is a simple yet interactive two-player game built using JavaScript, HTML, and CSS. It allows two players to take turns marking X and O on a 3x3 grid.
               The game determines the winner based on classic Tic-Tac-Toe rules or declares a draw if all cells are filled without a winner.
              </div>
              <div className="buttons">
                
                <button>VISIT</button>
              </div>
            </div>
          </div>
          <div className="item">
            <img src="./src/assets/amznClo.png" alt="Amazon Clone" />
            <div className="content">
              <div className="author">Ashutosh Satpathi</div>
              <div className="title">Project</div>
              <div className="topic">Amazon Clone</div>
              <div className="des">
              This project is a simple Amazon homepage clone built using HTML and CSS. It replicates the basic structure and styling of Amazon's homepage,
               including the navbar, product sections, and footer, but without any JavaScript functionality.
              </div>
              <div className="buttons">
                
                <button>VISIT</button>
              </div>
            </div>
          </div>
        </div>

        <div className="thumbnail">
          <div className="item">
            <img src="./src/assets/NikeLanding.png" alt="Thumbnail 1" />
            <div className="content">
              <div className="title">Nike Brand Page</div>
              <div className="description"> React components</div>
            </div>
          </div>
          <div className="item">
            <img src="./src/assets/tictoe.png" alt="Thumbnail 2" />
            <div className="content">
              <div className="title">Tic-Tac-Toe</div>
              <div className="description">JavaScript, HTML, and CSS</div>
            </div>
          </div>
          <div className="item">
            <img src="./src/assets/amznClo.png" alt="Thumbnail 3" />
            <div className="content">
              <div className="title">Amazon Clone</div>
              <div className="description"> HTML and CSS</div>
            </div>
          </div>
          <div className="item">
            <img src="./src/assets/CurrCon.png" alt="Thumbnail 4" />
            <div className="content">
              <div className="title">Currency Converter</div>
              <div className="description">ExchangeRate API</div>
            </div>
          </div>
        </div>

        <div className="arrows">
          <button id="prev">P</button>
          <button id="next">N</button>
        </div>

        <div className="time"></div>
      </div>
    </div>
  );
};

export default Page3;
