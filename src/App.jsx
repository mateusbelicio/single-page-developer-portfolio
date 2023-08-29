import Experience from './components/Experience';
import Header from './components/Header';
import Hero from './components/Hero';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Experience />

        <section className="projects">
          <div className="projects__content container">
            <div className="projects__header">
              <h2 className="projects__title heading-xl">Projects</h2>
              <a href="#contact" className="projects__cta btn">
                Contact me
              </a>
            </div>

            <ul className="projects__list">
              <li className="projects__item">
                <article className="project">
                  <figure className="project__figure">
                    <img
                      src="src/assets/images/thumbnail-project-1-small.webp"
                      alt=""
                      className="project__image"
                    />
                    <figcaption>
                      <a href="#" className="project__btn btn btn--view">
                        View project
                      </a>
                      <a href="#" className="project__btn btn btn--code">
                        View code
                      </a>
                    </figcaption>
                  </figure>
                  <h3 className="project__title heading-m">Design portfolio</h3>
                  <div className="project__tags">
                    <span className="project__tag">HTML</span>
                    <span className="project__tag">CSS</span>
                  </div>
                </article>
              </li>
              <li className="projects__item">
                <article className="project">
                  <figure className="project__figure">
                    <img
                      src="src/assets/images/thumbnail-project-2-small.webp"
                      alt=""
                      className="project__image"
                    />
                    <figcaption>
                      <a href="#" className="project__btn btn btn--view">
                        View project
                      </a>
                      <a href="#" className="project__btn btn btn--code">
                        View code
                      </a>
                    </figcaption>
                  </figure>
                  <h3 className="project__title heading-m">
                    E-learning landing page
                  </h3>
                  <div className="project__tags">
                    <span className="project__tag">HTML</span>
                    <span className="project__tag">CSS</span>
                  </div>
                </article>
              </li>
              <li className="projects__item">
                <article className="project">
                  <figure className="project__figure">
                    <img
                      src="src/assets/images/thumbnail-project-3-small.webp"
                      alt=""
                      className="project__image"
                    />
                    <figcaption>
                      <a href="#" className="project__btn btn btn--view">
                        View project
                      </a>
                      <a href="#" className="project__btn btn btn--code">
                        View code
                      </a>
                    </figcaption>
                  </figure>
                  <h3 className="project__title heading-m">Todo web app</h3>
                  <div className="project__tags">
                    <span className="project__tag">HTML</span>
                    <span className="project__tag">CSS</span>
                    <span className="project__tag">JavaScript</span>
                  </div>
                </article>
              </li>
              <li className="projects__item">
                <article className="project">
                  <figure className="project__figure">
                    <img
                      src="src/assets/images/thumbnail-project-4-small.webp"
                      alt=""
                      className="project__image"
                    />
                    <figcaption>
                      <a href="#" className="project__btn btn btn--view">
                        View project
                      </a>
                      <a href="#" className="project__btn btn btn--code">
                        View code
                      </a>
                    </figcaption>
                  </figure>
                  <h3 className="project__title heading-m">
                    Entertainment web app
                  </h3>
                  <div className="project__tags">
                    <span className="project__tag">HTML</span>
                    <span className="project__tag">CSS</span>
                    <span className="project__tag">JavaScript</span>
                  </div>
                </article>
              </li>
              <li className="projects__item">
                <article className="project">
                  <figure className="project__figure">
                    <img
                      src="src/assets/images/thumbnail-project-5-small.webp"
                      alt=""
                      className="project__image"
                    />
                    <figcaption>
                      <a href="#" className="project__btn btn btn--view">
                        View project
                      </a>
                      <a href="#" className="project__btn btn btn--code">
                        View code
                      </a>
                    </figcaption>
                  </figure>
                  <h3 className="project__title heading-m">Memory Game</h3>
                  <div className="project__tags">
                    <span className="project__tag">HTML</span>
                    <span className="project__tag">CSS</span>
                    <span className="project__tag">JavaScript</span>
                  </div>
                </article>
              </li>
              <li className="projects__item">
                <article className="project">
                  <figure className="project__figure">
                    <img
                      src="src/assets/images/thumbnail-project-6-small.webp"
                      alt=""
                      className="project__image"
                    />
                    <figcaption>
                      <a href="#" className="project__btn btn btn--view">
                        View project
                      </a>
                      <a href="#" className="project__btn btn btn--code">
                        View code
                      </a>
                    </figcaption>
                  </figure>
                  <h3 className="project__title heading-m">
                    Art gallery showcase
                  </h3>
                  <div className="project__tags">
                    <span className="project__tag">HTML</span>
                    <span className="project__tag">CSS</span>
                    <span className="project__tag">JavaScript</span>
                  </div>
                </article>
              </li>
            </ul>
          </div>
        </section>
      </main>

      <footer className="footer">
        <section className="contact" id="contact">
          <div className="contact__content container">
            <h2 className="contact__title heading-xl">Contact</h2>
            <p className="contact__description">
              I would love to hear about your project and how I could help.
              Please fill in the form, and I’ll get back to you as soon as
              possible.
            </p>

            <form className="contact__form">
              <div className="contact__group" data-invalid="false">
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="name"
                  aria-label="name"
                />
                <p className="contact__error">Sorry, invalid format here</p>
              </div>
              <div className="contact__group" data-invalid="false">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="email"
                  aria-label="email"
                />
                <p className="contact__error">Sorry, invalid format here</p>
              </div>
              <div className="contact__group" data-invalid="false">
                <textarea
                  name="message"
                  id="message"
                  cols="30"
                  rows="10"
                  placeholder="message"
                  aria-label="message"
                ></textarea>
                <p className="contact__error">Sorry, invalid format here</p>
              </div>

              <button type="submit" className="btn">
                Send message
              </button>
            </form>
          </div>
        </section>

        <div className="footer__content containe">
          <a href="#" className="footer__logo logo">
            adamkeyes
          </a>

          <ul className="social">
            <li className="social__item">
              <a href="#" className="social__link" aria-label="Github">
                <svg className="social__icon">
                  <use xlinkHref="/src/assets/images/icons.svg#icon-github" />
                </svg>
              </a>
            </li>
            <li className="social__item">
              <a href="#" className="social__link" aria-label="Frontend Mentor">
                <svg className="social__icon">
                  <use xlinkHref="/src/assets/images/icons.svg#icon-frontend-mentor" />
                </svg>
              </a>
            </li>
            <li className="social__item">
              <a href="#" className="social__link" aria-label="Linkedin">
                <svg className="social__icon">
                  <use xlinkHref="/src/assets/images/icons.svg#icon-linkedin" />
                </svg>
              </a>
            </li>
            <li className="social__item">
              <a href="#" className="social__link" aria-label="Twitter">
                <svg className="social__icon">
                  <use xlinkHref="/src/assets/images/icons.svg#icon-twitter" />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}

export default App;
