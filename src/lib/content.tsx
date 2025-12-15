import { type ReactNode } from 'react';
import type { Article, Hero, Service, SiteContent, Slide } from '@/types';

export const hero: Hero = {
  headline: 'From concept to reality',
  subheadline: 'Let’s bring your machine idea to life today',
  ctaPrimary: 'Send',
  ctaSecondary: 'Request demo',
};

export const capabilities: Service[] = [
  { id: 'pcb', title: 'PCB & Firmware', description: 'Custom PCB design, firmware and validation.' },
  { id: 'cnc', title: 'CNC Machining', description: 'Precision parts, prototypes, and low-volume production.' },
  { id: 'printing', title: '3D Printing', description: 'Rapid prototypes using FDM, SLA, and SLS.' },
  { id: 'moulding', title: 'Injection Moulding', description: 'Fast tooling and short-run plastic parts.' },
  { id: 'hardware', title: 'Hardware Design', description: 'End-to-end device design and integration.' },
  { id: 'software', title: 'Software Design', description: 'Embedded, web, and cloud integration support.' },
];

export const highlights: string[] = [
  'Integrated hardware development services',
  'Rapid prototyping to scalable production',
  'Low-volume manufacturing and validation',
];

function paragraph(text: ReactNode) {
  return <p>{text}</p>;
}

export const articles: Article[] = [
  {
    id: 'firmware',
    title: 'The Hidden Engine Behind Every Smart Product',
    summary: 'How robust firmware and electronics underpin product reliability.',
    imageAlt: 'Close-up of a green PCB with firmware tools.',
    heroImage: '/images/articles/firmware.jpg',
    bodyContent: (
      <>
        <h2>Firmware: The Hidden Engine Behind Every Smart Product</h2>
        {paragraph(
          <>
            If you’re building a hardware prototype—whether it’s a connected wearable, a medical device, or a smart
            home gadget—firmware is not an afterthought. It’s the invisible layer that makes your product do something.
          </>
        )}
        {paragraph(
          <>
            You can have the most beautiful enclosure, a rock-solid PCB, and a clever app interface. But without
            properly developed firmware, your product is just a shell.
          </>
        )}
        {paragraph(
          <>
            At <strong>Warning Machines</strong>, we’ve worked across healthcare, mobility, consumer tech, and
            industrial automation. In every case, <strong>firmware is the glue</strong> between your device and what it
            does.
          </>
        )}
        <h2>What is Firmware, Really?</h2>
        {paragraph(
          <>
            <strong>Firmware</strong> is the low-level software that lives directly on your hardware. Stored in
            non-volatile memory, it runs the moment a device powers up and tells your microcontroller how to behave.
          </>
        )}
        <ul>
          <li>When to wake up or sleep</li>
          <li>How to talk to sensors</li>
          <li>What to do when a button is pressed</li>
          <li>How to communicate over Bluetooth or Wi‑Fi</li>
          <li>How to send data to your app or cloud</li>
        </ul>
        {paragraph(
          <>
            Most embedded products run bare-metal or on a lightweight RTOS like FreeRTOS—not a full OS. Firmware choices
            define reliability, latency, power, and debuggability.
          </>
        )}
        <h2>Why Startups Get Firmware Wrong</h2>
        <h3>1. Leaving Firmware for Last</h3>
        {paragraph('Designing PCBs and cases first, then discovering sensor voltage or GPIO conflicts late in the game.')}
        <blockquote>
          <p>
            <strong>Tip:</strong> Start firmware in parallel with hardware. Validate early.
          </p>
        </blockquote>
        <h3>2. Overcomplicating the Stack</h3>
        {paragraph('Running heavy OS stacks or reinventing drivers without need, slowing teams down.')}
        <blockquote>
          <p>
            <strong>Tip:</strong> Match the stack to the job; use proven libraries where it makes sense.
          </p>
        </blockquote>
        <h3>3. No Debug Plan</h3>
        {paragraph('Skipping UART logs, breakpoints, or OTA debug leaves you blind when issues appear.')}
        <blockquote>
          <p>
            <strong>Tip:</strong> Build debug hooks in from day one.
          </p>
        </blockquote>
        <h3>4. Weak Discipline</h3>
        {paragraph('No Git, no changelogs, no HALs—firmware needs the same rigor as software.')}
        <h2>How We Help</h2>
        <ul>
          <li>Embedded architecture planning for your MCU and power/perf budget</li>
          <li>Sensor integration, calibration, and real-time processing</li>
          <li>Connectivity stacks: BLE, Wi‑Fi, LoRa, UART, SPI, I2C</li>
          <li>Power optimization: sleep states, wake triggers, clock scaling</li>
          <li>Manufacturing hooks: self-tests, fixture signals, safe bootloaders</li>
        </ul>
      </>
    ),
  },
  {
    id: 'healthcare-mvp-prototyping',
    title: 'From Care to Cure: Craft Your Health MVP Story!',
    summary: 'Building medical prototypes with speed and compliance in mind.',
    imageAlt: 'Medical device prototype with 3D-printed casing and PCB.',
    heroImage: '/images/articles/care-to-cure.png',
    bodyContent: (
      <>
        <p>
          This is your complete guide to healthcare MVP prototyping—turning your idea into a functional, test-ready
          medical product.
        </p>
        <h2>Introduction – The New Era of Health Innovation</h2>
        <p>
          Healthcare is no longer just the domain of large corporations. Advances in rapid prototyping, digital
          manufacturing, and integrated electronics let startups and clinicians ship faster.
        </p>
        <p>
          The <strong>Minimum Viable Product (MVP)</strong> is your bridge from idea to market. At <strong>Warning
          Machines</strong>, we help teams go from care to cure with evidence-backed builds investors and users trust.
        </p>
        <h2>Why Healthcare MVP Prototyping Works</h2>
        <ol>
          <li>
            <strong>Speed to Market:</strong> Focus on essentials to build in weeks, not years.
          </li>
          <li>
            <strong>Risk Reduction:</strong> Surface design, compliance, and UX issues early while fixes are cheap.
          </li>
          <li>
            <strong>Investor Confidence:</strong> A working MVP beats a pitch deck.
          </li>
        </ol>
        <h3>Step 1 – Define the Problem, Not the Product</h3>
        <p>Lead with the pain point and who feels it most; clarify why current options fall short.</p>
        <h3>Step 2 – Map Core Functionality</h3>
        <ul>
          <li>One core mechanical function</li>
          <li>One clear user interface</li>
          <li>Basic data capture/reporting for validation</li>
        </ul>
        <h3>Step 3 – Choose the Right Prototyping Methods</h3>
        <ul>
          <li>CNC machining for precise housings and metal parts</li>
          <li>3D printing (FDM/SLA/SLS) for fast ergonomic and fixture iterations</li>
          <li>PCB design &amp; SMT for connected sensors and wearables</li>
          <li>Integrated fixtures to simulate real use</li>
        </ul>
        <h3>Step 4 – Validate with Real Users</h3>
        <p>Usability testing, clinical workflow trials, and feedback sessions uncover unknowns early.</p>
        <h3>Step 5 – Document for Compliance and Investment</h3>
        <ul>
          <li>Design history and test results</li>
          <li>User feedback reports</li>
          <li>Manufacturing process notes</li>
        </ul>
        <h2>Crafting the “Care to Cure” Narrative</h2>
        <p>Tell the human story, the breakthrough moment, the journey, and the vision for better outcomes.</p>
      </>
    ),
  },
  {
    id: 'build-your-product-mvp',
    title: 'From Idea to Investment: Build Your Product MVP!',
    summary: 'Taking concepts to investor-ready prototypes efficiently.',
    imageAlt: 'Product MVP comparison shots.',
    heroImage: '/images/articles/idea-to-investment.png',
    bodyContent: (
      <>
        <h2>From Idea to Investment</h2>
        <p>
          Every groundbreaking product starts with a spark. An MVP isn’t just a prototype; it’s proof your concept works
          and deserves backing.
        </p>
        <h2>Why an MVP Matters for Investment</h2>
        <p>
          Investors fund evidence. A solid MVP shows market fit, scalability, and reduces perceived risk.
        </p>
        <h3>Step 1: Start with the Core Problem</h3>
        <p>Identify the sharpest pain point and solve it first; keep the MVP lean and targeted.</p>
        <h3>Step 2: Map the User Journey</h3>
        <p>Trace setup and first use. Remove friction in one critical spot to demonstrate user value.</p>
        <h3>Step 3: Build a Simple Prototype</h3>
        <p>Use quick tools (Figma, 3D prints, dev boards). Aim for reliable function, not polish.</p>
        <h3>Step 4: Test and Learn</h3>
        <p>Put it in users’ hands, gather feedback, and iterate. Show adaptability.</p>
        <h3>Step 5: Navigate the Investment Landscape</h3>
        <p>
          Align with what your investors care about: traction, feasibility, compliance, or market size. Show early data
          and a path to scale.
        </p>
        <h3>Turning Your MVP into a Pitch</h3>
        <p>Pair usage data with a clear plan for growth and certification. Tell a concise build story.</p>
      </>
    ),
  },
  {
    id: 'cnc-machines-vs-3d-printer',
    title: 'CNC Machines vs 3D Printers: Which Is Better for Prototyping?',
    summary: 'Choosing the right process for speed, finish, and cost.',
    imageAlt: 'Workshop with CNC and 3D printing equipment.',
    heroImage: '/images/articles/cnc-vs-3d.png',
    bodyContent: (
      <>
        <p>
          Choosing the right process shapes speed, cost, and confidence. CNC and 3D printing both matter—use them where
          they shine.
        </p>
        <h2>Production Speed</h2>
        <p>
          3D printing can deliver visual models in hours for early design reviews. CNC often wins when you need
          production-like parts fast, especially with standard stock materials.
        </p>
        <h2>Material Capabilities</h2>
        <p>
          3D printers mainly cover plastics and some composites/metal options. CNC spans aluminum, stainless, brass,
          titanium, and engineering plastics like PEEK or Delrin—better for functional and load-bearing tests.
        </p>
        <h2>Surface Finish and Precision</h2>
        <p>
          CNC offers tight tolerances and smooth, production-grade finishes. Most printed parts need post-processing to
          match that fidelity.
        </p>
        <h2>Cost Considerations</h2>
        <p>
          Printing is cheapest for visuals and quick iterations. CNC becomes more cost-efficient when durability and
          accuracy reduce iteration count and post-processing.
        </p>
        <p>
          The best path is often hybrid: print to learn, machine to prove. Pick per-part based on tolerance, strength,
          finish, cost, and lead time.
        </p>
      </>
    ),
  },
];

export const slides: Slide[] = [
  {
    id: 'fast-tooling-1',
    title: 'Fast Tooling = Faster Feedback',
    description: 'Low-volume molds, printed jigs, and fixtures accelerate validation with minimal delay.',
    image: '/images/slide1.png',
  },
  {
    id: 'fast-tooling-2',
    title: 'Low-volume molds, printed jigs, fixtures',
    description: 'Iterate quickly with hybrid CNC and printed tooling tailored to your prototype runs.',
    image: '/images/slide2.png',
  },
];

export const siteContent: SiteContent = {
  hero,
  capabilities,
  highlights,
  articles,
  slides,
};

export function getArticleById(id: string): Article | undefined {
  return articles.find((article) => article.id === id);
}

export const fallbackContent = siteContent;

