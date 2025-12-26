/* eslint-disable @next/next/no-img-element */
const logos = [
  'resonator.svg',
  'axign.png',
  'kaercher.svg',
  'scania-wide.png',
  'r-logo.png',
  'shelly.svg',
  'bms.jpg',
  'cinemacity.svg',
  'Spark Vision'
];

export function LogoStrip() {
  return (
    <section className="section section--muted section--logos">
      <h1 style={{textAlign: 'center', fontFamily: 'Ethnocentric', color: "black"}}>Our clients</h1>
      <hr />
      <div className="logo-strip">
        {logos.map((src, idx) => (
          <div key={`${src}-${idx}`} className="logo-strip__item">
            {src.includes(".") ? 
            <img src={`/images/logos/${src}`} alt="Client logo" />
            :
            <span style={{color: 'var(--color-primary)'}}>{src}</span>
            }
          </div>
        ))}
      </div>
    </section>
  );
}

