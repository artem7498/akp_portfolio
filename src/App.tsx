import { useLanguage } from './i18n';
import avatarImg from './assets/avatar.jpg';
import avatarGlitchImg from './assets/avatar-glitch.jpg';
import dnsImg from './assets/dns-shop.jpg';
import geometryImg from './assets/geometry-fitness.jpg';
import pizzaImg from './assets/pizza-prosto.jpg';
import tokyoImg from './assets/tokyo.jpg';
import soglasieImg from './assets/soglasie.jpg';
import tigerImg from './assets/tiger-de-cristal.jpg';
import lavasheImg from './assets/na-lavashe.jpg';
import travelImg from './assets/travel-out.jpg';

const projectImages = [
  dnsImg,
  geometryImg,
  pizzaImg,
  tokyoImg,
  soglasieImg,
  tigerImg,
  lavasheImg,
  travelImg
];

function App() {
  const year = new Date().getFullYear();
  const { language, setLanguage, t } = useLanguage();

  return (
    <>
      <header className="topbar wrap">
        <a href="#hero" className="brand">
          Artem Akopian
        </a>
        <nav className="menu" aria-label="Main navigation">
          <a href="#projects">{t.nav.projects}</a>
          <a href="#about">{t.nav.about}</a>
          <a href="#contacts">{t.nav.contacts}</a>
        </nav>
        <div className="header-actions">
          <button
            className="lang-switch"
            onClick={() => setLanguage(language === 'en' ? 'ru' : 'en')}
            aria-label="Switch language"
          >
            {language === 'en' ? 'RU' : 'EN'}
          </button>
          <a href="#contacts" className="top-btn">
            {t.nav.contactBtn}
          </a>
        </div>
      </header>

      <main>
        <section id="hero" className="hero wrap">
          <div className="avatar-container">
            <div className="avatar-blur"></div>
            <img 
              src={avatarImg}
              alt="Artem Akopyan" 
              className="avatar"
            />
            <div className="glitch-effect">
              <div className="glitch-layer layer-1" style={{ backgroundImage: `url(${avatarGlitchImg})` }}></div>
              <div className="glitch-layer layer-2" style={{ backgroundImage: `url(${avatarGlitchImg})` }}></div>
              <div className="glitch-layer layer-3" style={{ backgroundImage: `url(${avatarGlitchImg})` }}></div>
            </div>
          </div>
          <p className="eyebrow">{t.hero.experience}</p>
          <h1>{t.hero.role}</h1>
          <div className="skill-chips">
            <span className="skill-chip">Swift</span>
            <span className="skill-chip">Objective-C</span>
            <span className="skill-chip">UIKit</span>
            <span className="skill-chip">SwiftUI</span>
            <span className="skill-chip">SnapKit</span>
            <span className="skill-chip">Auto Layout</span>
            <span className="skill-chip">VIPER</span>
            <span className="skill-chip">MVVM</span>
            <span className="skill-chip">Tuist</span>
            <span className="skill-chip">Needle</span>
            <span className="skill-chip">async/await</span>
            <span className="skill-chip">Combine</span>
            <span className="skill-chip">RxSwift</span>
            <span className="skill-chip">GCD</span>
            <span className="skill-chip">REST</span>
            <span className="skill-chip">URLSession</span>
            <span className="skill-chip">Alamofire</span>
            <span className="skill-chip">gRPC</span>
            <span className="skill-chip">Core Data</span>
            <span className="skill-chip">SwiftData</span>
            <span className="skill-chip">Realm</span>
            <span className="skill-chip">Keychain</span>
            <span className="skill-chip">Fastlane</span>
            <span className="skill-chip">Firebase</span>
            <span className="skill-chip">AppMetrica</span>
            <span className="skill-chip">Lottie</span>
            <span className="skill-chip">CocoaPods</span>
            <span className="skill-chip">Swift Package Manager</span>
            <span className="skill-chip">Git</span>
            <span className="skill-chip">SwiftLint</span>
            <span className="skill-chip">Xcode Instruments</span>
            <span className="skill-chip">Proxyman</span>
            <span className="skill-chip">SOLID</span>
            <span className="skill-chip">DRY</span>
            <span className="skill-chip">KISS</span>
            <span className="skill-chip">Figma</span>
            <span className="skill-chip">ClickUp</span>
            <span className="skill-chip">Trello</span>
            <span className="skill-chip">Agile</span>
            <span className="skill-chip">App Store</span>
          </div>
          
          <div className="companies-carousel" aria-hidden="true">
            <div className="carousel-track">
              <span className="company-name">Sberbank</span>
              <span className="company-name">Yandex</span>
              <span className="company-name">Tinkoff</span>
              <span className="company-name">VK</span>
              <span className="company-name">Ozon</span>
              <span className="company-name">Avito</span>
              <span className="company-name">Delivery Club</span>
              <span className="company-name">Kaspersky</span>
              {/* Duplicate for seamless loop */}
              <span className="company-name">Sberbank</span>
              <span className="company-name">Yandex</span>
              <span className="company-name">Tinkoff</span>
              <span className="company-name">VK</span>
              <span className="company-name">Ozon</span>
              <span className="company-name">Avito</span>
              <span className="company-name">Delivery Club</span>
              <span className="company-name">Kaspersky</span>
            </div>
          </div>
        </section>

        <section id="projects" className="projects wrap">
          <div className="section-head">
            <p className="eyebrow">{t.projects.eyebrow}</p>
            <h2>{t.projects.title}</h2>
          </div>
          <p className="section-subtitle">
            {t.projects.subtitle}
          </p>

          <div className="projects-grid">
            {t.projects.items.map((project, index) => (
              <article className="project-card" key={index}>
                <div className="phone-frame">
                  <div className="phone-notch" />
                  <div className="phone-screen">
                    <img 
                      src={projectImages[index]} 
                      alt={project.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                {project.stats && (
                  <p style={{ fontSize: '0.9em', opacity: 0.8, marginTop: '0.5rem' }}>
                    {project.stats}
                  </p>
                )}
              </article>
            ))}
          </div>
        </section>

        <section id="about" className="about wrap">
          <div className="section-head">
            <p className="eyebrow">{t.about.eyebrow}</p>
            <h2>{t.about.title}</h2>
          </div>
          <p>
            {t.about.description}
          </p>
        </section>

        <section id="contacts" className="contacts wrap">
          <div className="section-head">
            <p className="eyebrow">{t.contacts.eyebrow}</p>
            <h2>{t.contacts.title}</h2>
          </div>
          <div className="contact-list">
            <a href="mailto:you@example.com">you@example.com</a>
            <a href="https://t.me/yourhandle" target="_blank" rel="noreferrer">
              @yourhandle
            </a>
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noreferrer">
              linkedin.com/in/yourprofile
            </a>
          </div>
        </section>
      </main>

      <footer className="footer wrap">© {year} Artem Akopyan</footer>
    </>
  );
}

export default App;
