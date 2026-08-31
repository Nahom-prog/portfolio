import { Fragment } from 'react';

const TECH_STACK = [
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
  'PostgreSQL',
  'REST APIs',
  'Cloud',
  'Docker',
];

export default function Marquee() {
  return (
    <div className="marquee" aria-label="Technology stack">
      <div className="marquee-track">
        <div className="marquee-group">
          {TECH_STACK.map((tech, index) => (
            <Fragment key={`stack-1-${index}`}>
              <b>{tech}</b>
              <i></i>
            </Fragment>
          ))}
        </div>
        <div className="marquee-group" aria-hidden="true">
          {TECH_STACK.map((tech, index) => (
            <Fragment key={`stack-2-${index}`}>
              <b>{tech}</b>
              <i></i>
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
