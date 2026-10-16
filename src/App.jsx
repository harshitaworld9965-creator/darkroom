import { useRef } from 'react'
import { useDarkroomAnimations } from './useDarkroomAnimations'
import './App.css'

const steps = [
  {
    num: '01',
    name: 'Expose',
    text: 'Light passes through the negative onto blank paper. Nothing visible happens yet. The image is there, waiting.',
  },
  {
    num: '02',
    name: 'Develop',
    text: 'The paper slips into the first tray. Shadows surface first, then the midtones, then the faint edges of light.',
  },
  {
    num: '03',
    name: 'Stop',
    text: 'A quick bath halts the chemistry. Leave it too long in the developer and everything drowns in black.',
  },
  {
    num: '04',
    name: 'Fix',
    text: 'The last tray makes it permanent. Now the image can finally survive the light.',
  },
]

const photos = [
  { src: '/photos/1.png', caption: 'Window, afternoon' },
  { src: '/photos/2.png', caption: 'Lane, 6:40 am' },
  { src: '/photos/3.png', caption: 'Negatives' },
  { src: '/photos/4.png', caption: 'Rooftop, dusk' },
  { src: '/photos/5.png', caption: 'Stairwell' },
  { src: '/photos/6.png', caption: 'Sea, first light' },
]

// The contact sheet shows every photo twice, like a real roll of film
const contactSheet = [...photos, ...photos]

function App() {
  const appRef = useRef(null)
  useDarkroomAnimations(appRef)

  return (
    <main className="app" ref={appRef}>
      <div className="progress" aria-hidden="true"></div>

      {/* 1. Hero */}
      <section className="hero">
        <p className="label">A study in patience · 2026</p>
        <h1 className="hero-title">Darkroom</h1>
        <p className="hero-sub">
          Every photograph begins as a blank sheet in the dark.
        </p>
        <p className="label hero-hint">Scroll to develop ↓</p>
      </section>

      {/* 2. Developing steps */}
      <section className="steps">
        <div className="tray">
          <div className="print">
            <img
              src={photos[0].src}
              alt="A window with curtains and a glass of tea on a table"
            />
          </div>
        </div>

        <div className="step-list">
          {steps.map((step) => (
            <article className="step" key={step.num}>
              <p className="label">Step {step.num}</p>
              <h2 className="step-name">{step.name}</h2>
              <p className="step-text">{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* 3. Contact sheet */}
      <section className="contact-sheet">
        <div className="section-head">
          <p className="label">Roll 07 · 12 exposures</p>
          <h2 className="section-title">Contact sheet</h2>
        </div>

        <div className="thumbs">
          {contactSheet.map((photo, i) => (
            <figure className="thumb" key={i}>
              <img src={photo.src} alt="" />
              <figcaption className="label">
                {String(i + 1).padStart(2, '0')}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* 4. Filmstrip */}
      <section className="filmstrip">
        <div className="filmstrip-track">
          {photos.map((photo, i) => (
            <figure className="frame" key={photo.src}>
              <img src={photo.src} alt={photo.caption} />
              <figcaption>
                <span className="label">Frame {i + 1}</span>
                <span className="frame-caption">{photo.caption}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* 5. Outro */}
      <section className="outro">
        <h2 className="outro-line">
          Every photograph is a small act of waiting.
        </h2>
        <p className="label">Developed by Harshita · 2026</p>
      </section>

      <div className="safelight" aria-hidden="true"></div>
    </main>
  )
}

export default App