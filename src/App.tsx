import { useState } from 'react';
import { useEffect } from 'react';
import { useLanguage } from './i18n';
import avatarImg from './assets/avatar.jpg';
import avatarGlitchImg from './assets/avatar-glitch.jpg';
import dnsImg from './assets/project/DNS.webp';
import geometryImg from './assets/project/GeometryFitness.png';
import pizzaImg from './assets/project/PizzaProsto.png';
import tokyoImg from './assets/project/Tokyo.png';
import soglasieImg from './assets/project/Soglasie.png';
import tigerImg from './assets/project/TigerDeCristal.png';
import lavasheImg from './assets/project/NaLAvashe.png';
import travelImg from './assets/project/Travelout 1.png';

// Carousel images
import carousel6 from './assets/carousel/6.webp';
import carousel12 from './assets/carousel/12.webp';
import carousel17 from './assets/carousel/17.webp';
import carousel3 from './assets/carousel/3.webp';
import carousel18 from './assets/carousel/18.webp';
import carousel19 from './assets/carousel/19.webp';
import carousel20 from './assets/carousel/20.webp';
import carousel21 from './assets/carousel/21.webp';
import carousel22 from './assets/carousel/22.webp';
import carousel27 from './assets/carousel/27.webp';
import carousel28 from './assets/carousel/28.webp';
import carousel29 from './assets/carousel/29.webp';
import carousel30 from './assets/carousel/30.webp';
import carousel32 from './assets/carousel/32.webp';
import { Send, Mail, Linkedin, Phone, MessageCircle, Instagram, ExternalLink } from 'lucide-react';

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

const carouselImages = [
  carousel6,
  carousel12,
  carousel17,
  carousel18,
  carousel19,
  carousel3,
  carousel20,
  carousel21,
  carousel22,
  carousel27,
  carousel28,
  carousel29,
  carousel30,
  carousel32
];

const challenges = [
  {
    code: `var a = 1
var b = 1

let closure = { [a] in
    print(a, b)
}

a = 2
b = 2

closure()`,
    answers: ['1 2', '1 and 2', '1, 2']
  },
  {
    code: `func test() {
    defer { print("1") }
    defer { print("2") }
    print("3")
}

test()`,
    answers: ['3 2 1', '3, 2, 1', '3 2 1']
  },
  {
    code: `var a = [1, 2]
var b = a
b.append(3)

print(a.count)`,
    answers: ['2']
  },
  {
    code: `enum Direction: Int {
    case up, down, left, right
}

print(Direction.left.rawValue)`,
    answers: ['2']
  }
];

function App() {
  const year = new Date().getFullYear();
  const { language, setLanguage, t } = useLanguage();
  
  useEffect(() => {
    document.title = `${t.name} | iOS Portfolio`;
  }, [t.name]);
  const [isChallengeOpen, setIsChallengeOpen] = useState(false);
  const [challengeAnswer, setChallengeAnswer] = useState('');
  const [challengeError, setChallengeError] = useState(false);
  const [challengeSuccess, setChallengeSuccess] = useState(false);
  const [currentChallenge, setCurrentChallenge] = useState(challenges[0]);

  const handleInstagramClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const randomChallenge = challenges[Math.floor(Math.random() * challenges.length)];
    setCurrentChallenge(randomChallenge);
    setIsChallengeOpen(true);
    setChallengeAnswer('');
    setChallengeError(false);
    setChallengeSuccess(false);
  };

  const checkAnswer = () => {
    const cleanAnswer = challengeAnswer.trim().replace(/,/g, ' ').replace(/\s+/g, ' ');
    if (currentChallenge.answers.includes(cleanAnswer)) {
      setChallengeSuccess(true);
      setTimeout(() => {
        setIsChallengeOpen(false);
      }, 3000);
    } else {
      setChallengeError(true);
      setTimeout(() => setChallengeError(false), 2000);
    }
  };

  return (
    <div className="container">
      {isChallengeOpen && (
        <div className="modal-overlay" onClick={() => setIsChallengeOpen(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <h3 className="modal-title">{t.challenge.title}</h3>
            <p className="modal-description">{t.challenge.description}</p>
            
            <div className="code-block">
              <pre>
{currentChallenge.code}
              </pre>
            </div>

            <input 
              type="text" 
              className="challenge-input"
              placeholder={t.challenge.placeholder}
              value={challengeAnswer}
              onChange={e => {
                setChallengeAnswer(e.target.value);
                setChallengeError(false);
              }}
              onKeyDown={e => e.key === 'Enter' && checkAnswer()}
            />
            
            {challengeError && <p className="error-msg">{t.challenge.error}</p>}
            {challengeSuccess && <p className="error-msg" style={{color: '#16a34a', fontWeight: 600}}>{t.challenge.success}</p>}

            <div className="challenge-actions">
              <button className="btn-cancel" onClick={() => setIsChallengeOpen(false)}>Cancel</button>
              <button className="btn-submit" onClick={checkAnswer}>{t.challenge.submit}</button>
            </div>
          </div>
        </div>
      )}

      <header className="topbar wrap">
        <a href="#hero" className="brand">
          {t.name}
        </a>
        <nav className="menu">
          <a href="#projects">{t.nav.projects}</a>
          <a href="#about">{t.nav.about}</a>
          <a href="#contacts">{t.nav.contacts}</a>
        </nav>
        <div className="header-actions">
          <button className="lang-switch" onClick={() => setLanguage(language === 'en' ? 'ru' : 'en')}>
            {language.toUpperCase()}
          </button>
          <a href="#contacts" className="top-btn">{t.nav.contactBtn}</a>
        </div>
      </header>
      <main>
        <section id="hero" className="hero wrap">
          <div className="avatar-container">
            <div className="avatar-blur"></div>
            <img 
              src={avatarImg}
              alt={t.name} 
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
            <span className="skill-chip">Objective-C</span>
          </div>
          
          <div className="companies-carousel" aria-hidden="true">
            <div className="carousel-track">
              {carouselImages.map((image, index) => (
                <div className="carousel-image-container" key={index}>
                  <img 
                    src={image} 
                    alt={`Carousel image ${index + 1}`}
                    className="carousel-image"
                  />
                </div>
              ))}
              {/* Duplicate for seamless loop */}
              {carouselImages.map((image, index) => (
                <div className="carousel-image-container" key={`dup-${index}`}>
                  <img 
                    src={image} 
                    alt={`Carousel image ${index + 1}`}
                    className="carousel-image"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="projects wrap">
          <div className="section-head">
            <h2>{t.projects.title}</h2>
          </div>
          <p className="section-subtitle">
            {t.projects.subtitle}
          </p>

          <div className="projects-grid">
            {t.projects.items.map((project, index) => (
              <article className="project-card" key={index}>
                <div className="project-image-container">
                  <img 
                    src={projectImages[index]} 
                    alt={project.title}
                    className="project-image"
                  />
                </div>
                <h3 className="project-title">
                  <a href={project.link || '#'} target="_blank" rel="noreferrer" className="project-link">
                    {project.title}
                    <ExternalLink size={16} className="external-link-icon" />
                  </a>
                </h3>
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
            <h2>{t.about.title}</h2>
          </div>
          <p>
            {t.about.description}
          </p>
        </section>

        <section id="contacts" className="contacts wrap">
          <div className="section-head">
            <h2>{t.contacts.title}</h2>
          </div>
          <div className="contact-list">
            <a href="https://t.me/artem7498" target="_blank" rel="noreferrer" className="contact-item">
              <div className="contact-icon">
                <Send size={24} />
              </div>
              <div className="contact-info">
                <span className="contact-label">{t.contacts.telegram}</span>
                <span className="contact-value">@artem7498</span>
              </div>
            </a>
            
            <a href="mailto:artem7498@gmail.com" className="contact-item">
              <div className="contact-icon">
                <Mail size={24} />
              </div>
              <div className="contact-info">
                <span className="contact-label">{t.contacts.email}</span>
                <span className="contact-value">artem7498@gmail.com</span>
              </div>
            </a>

            <a href="https://www.linkedin.com/in/artem-akopian-413823206" target="_blank" rel="noreferrer" className="contact-item">
              <div className="contact-icon">
                <Linkedin size={24} />
              </div>
              <div className="contact-info">
                <span className="contact-label">{t.contacts.linkedin}</span>
                <span className="contact-value">{t.name}</span>
              </div>
            </a>

            <a href="https://wa.me/79098587780" target="_blank" rel="noreferrer" className="contact-item">
              <div className="contact-icon">
                <MessageCircle size={24} />
              </div>
              <div className="contact-info">
                <span className="contact-label">{t.contacts.whatsapp}</span>
                <span className="contact-value">+7 909 858 77 80</span>
              </div>
            </a>

            <a href="tel:+79098587780" className="contact-item">
              <div className="contact-icon">
                <Phone size={24} />
              </div>
              <div className="contact-info">
                <span className="contact-label">{t.contacts.phone}</span>
                <span className="contact-value">+7 909 858 77 80</span>
              </div>
            </a>

            <div onClick={handleInstagramClick} className="contact-item">
              <div className="contact-icon">
                <Instagram size={24} />
              </div>
              <div className="contact-info">
                <span className="contact-label">{t.contacts.instagram}</span>
                <span className="contact-value">a****n</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer wrap">© {year} {t.name}</footer>
    </div>
  );
}

export default App;
