/* eslint-disable @next/next/no-img-element */
const services = [
  {
    id: 'pcb',
    title: 'PCB',
    image: 'PCB.jpg'
  },
  {
    id: 'CAD',
    title: 'CAD/CAM',
    image: 'CAD-CAM.jpg'
  },
  {
    id: 'firmware',
    title: 'Firmware',
    image: 'firmware.jpg'
  }
  // {
  //   id: 'machinery',
  //   title: 'Industrial Equipment and Machinery',
  //   image: 'machinery.png'
  // },
  // {
  //   id: 'hardware',
  //   title: 'Automotive and Mobility',
  //   image: 'automotive.jpg'
  // },
  // {
  //   id: 'electronics',
  //   title: 'Electronics and Smart Device',
  //   image: 'smart-device.jpg'
  // },
];

export function ServiceGrid() {
  return (
    <section className="section section--primary" id="services">
      <div className="section__header">
        <p className="eyebrow">Services</p>
        <h2>Hardware Development Services</h2>
        <p className="section__lede">
          With deep expertise in rapid prototyping, custom electronics development, precision CNC machining and Firmware/Software development services, we provide the essential tools to transform ideas into physical products, serving a diverse array of industries.
        </p>
      </div>
      <div className="grid grid--services">
        {services.map((service) => (
          <article key={service.id} className="card card--service">
            <h3>{service.title}</h3>
            {service.image && <img src={`/images/services/${service.image}`} alt={service.title} />}
          </article>
        ))}
      </div>
    </section>
  );
}

