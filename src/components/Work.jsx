import { useState, useEffect } from 'react';

const PROJECTS = [
  {
    id: 1,
    number: '(01)',
    title: 'Athena Fitness & Gym',
    subtitle: 'Full-stack fitness club platform & membership experience',
    category: 'Full-Stack / Web App',
    description:
      'A high-performance gym web application featuring interactive training program schedules, membership pricing calculators, trainer portfolios, and interactive facility gallery.',
    features: [
      'Interactive tiered membership pricing matrix',
      'Dynamic trainer profiles and training program showcase',
      'Interactive facility photo gallery with smooth transitions',
      'Mobile-optimized responsive layouts with fast load times',
      'Deployed on Netlify Edge',
    ],
    tags: ['React', 'Vite', 'CSS3', 'Node.js', 'Netlify'],
    liveUrl: 'https://gymlandi.netlify.app/',
    coverType: 'image',
    mainImage: '/projects/gym/facility-interior.jpg',
    images: [
      { url: '/projects/gym/facility-interior.jpg', caption: 'State-of-the-Art Training Facility' },
      { url: '/projects/gym/gym-mission.jpg', caption: 'Functional Strength & Conditioning Zone' },
      { url: '/projects/gym/trainer-female.jpg', caption: 'Certified Fitness & Wellness Trainers' },
      { url: '/projects/gym/trainer-male.jpg', caption: 'Performance & Strength Coaching' },
    ],
    status: 'LIVE ↗',
  },
  {
    id: 2,
    number: '(02)',
    title: 'Athena Hotel & Resort',
    subtitle: 'Luxury hospitality, room exploration & booking management',
    category: 'Hospitality / Booking',
    description:
      'A modern, elegant hotel management and guest booking platform. Enables visitors to explore luxury suites, view room amenities, check real-time availability, and manage reservations seamlessly.',
    features: [
      'Interactive room & suite exploration with detailed amenity breakdowns',
      'Live booking flow with pricing and room selection parameters',
      'Clean editorial typography and high-end aesthetic layout',
      'Fast responsive navigation with mobile drawer support',
      'Deployed on Netlify Edge',
    ],
    tags: ['React', 'Vite', 'Responsive UX', 'Booking Flow', 'Netlify'],
    liveUrl: 'https://athenahot.netlify.app/',
    coverType: 'image',
    mainImage: '/projects/hotel/hotel-hero.png',
    images: [
      { url: '/projects/hotel/hotel-hero.png', caption: 'Athena Hotel — Luxury Suite Discovery & Online Reservation Flow' },
    ],
    status: 'LIVE ↗',
  },
  {
    id: 3,
    number: '(03)',
    title: 'Notely — Notes App',
    subtitle: 'Fast, minimal note taking & productivity workspace engine',
    category: 'Productivity / Web App',
    description:
      'A dark, distraction-free note-taking workspace built for fast thought capture. Features clean typography, markdown formatting, instant search, tag organization, and persistent state.',
    features: [
      'Dark, distraction-free writing environment built for speed',
      'Instant markdown-supported note editing with live preview',
      'Category & tag filtering system for rapid organization',
      'Persistent local and cloud state syncing',
      'Deployed on Netlify',
    ],
    tags: ['React', 'JavaScript', 'State Mgmt', 'Vite', 'Netlify'],
    liveUrl: 'https://notely7755.netlify.app/',
    coverType: 'image',
    mainImage: '/projects/notely/notely-hero.png',
    images: [
      { url: '/projects/notely/notely-hero.png', caption: 'Notely — Think Clearly, Write Freely Workspace' },
    ],
    status: 'LIVE ↗',
  },
  {
    id: 4,
    number: '(04)',
    title: 'Quiz Master Platform',
    subtitle: 'Full-stack interactive quiz & trivia testing engine',
    category: 'Full-Stack Platform',
    description:
      'A dynamic full-stack quiz application featuring timed question challenges, categorized question banks, automated score evaluation algorithms, and persistent scoring backend.',
    features: [
      'Real-time timer countdowns with instant answer evaluation',
      'Modular question pools spanning tech, general knowledge, and logic',
      'Automated results scorecard and performance analysis',
      'Full-stack architecture with REST API endpoints',
      'GitHub open-source repository',
    ],
    tags: ['React', 'Node.js', 'Express', 'Full-stack', 'REST API'],
    liveUrl: 'https://quizzlif.netlify.app/',
    coverType: 'image',
    mainImage: '/projects/quiz/quiz-hero.png',
    images: [
      {
        url: '/projects/quiz/quiz-hero.png',
        caption: 'QUIZ.IO — Next-Gen Interactive Assessment Platform & Live Exam Chamber',
      },
    ],
    status: 'LIVE ↗',
  },
];

export default function Work() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedProject(null);
      }
    };
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedProject]);

  const openPreview = (project) => {
    setSelectedProject(project);
    setActiveImageIndex(0);
  };

  return (
    <section id="work" className="work">
      <div className="wrap">
        <div className="section-label">
          <h2>(01) Selected work</h2>
          <span>
            Explore featured web applications and platforms. Click any card to view photos, architecture details, and live builds.
          </span>
        </div>

        <div className="work-grid">
          {PROJECTS.map((project) => (
            <article key={project.id} className="project">
              <div
                className={`cover ${project.coverType === 'graphic' ? project.graphicClass : 'cover-image-card'}`}
                onClick={() => openPreview(project)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && openPreview(project)}
              >
                {project.coverType === 'image' ? (
                  <div className="cover-img-wrapper">
                    <img src={project.mainImage} alt={project.title} className="cover-bg-image" />
                    <div className="cover-img-overlay">
                      <div className="preview-cta-pill">View Photos & Details ↗</div>
                    </div>
                  </div>
                ) : (
                  <div className="graphic-cover-content">
                    <div className="preview-cta-pill">View Project Details ↗</div>
                  </div>
                )}

                <strong className="cover-project-title">{project.title}</strong>

                <div className="tags">
                  {project.tags.slice(0, 3).map((tag, idx) => (
                    <span key={idx} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="project-meta">
                <div>
                  <h3 onClick={() => openPreview(project)} style={{ cursor: 'pointer' }}>
                    {project.title}
                  </h3>
                  <p>{project.subtitle}</p>
                </div>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="project-live-btn"
                  title="Open live link"
                >
                  <time>{project.status}</time>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Interactive Project Preview Modal */}
      {selectedProject && (
        <div className="modal-backdrop" onClick={() => setSelectedProject(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div className="modal-header-info">
                <span className="eyebrow">{selectedProject.number} {selectedProject.category}</span>
                <h2>{selectedProject.title}</h2>
              </div>
              <button
                type="button"
                className="modal-close-btn"
                onClick={() => setSelectedProject(null)}
                aria-label="Close modal"
              >
                ✕
              </button>
            </div>

            <div className="modal-body">
              {/* Image & Photo Gallery Viewer */}
              {selectedProject.coverType === 'image' && selectedProject.images.length > 0 ? (
                <div className="gallery-container">
                  <div className="gallery-main-view">
                    <img
                      src={selectedProject.images[activeImageIndex].url}
                      alt={selectedProject.images[activeImageIndex].caption}
                      className="gallery-active-img"
                    />
                    <div className="gallery-caption">
                      <span>{selectedProject.images[activeImageIndex].caption}</span>
                      {selectedProject.images.length > 1 && (
                        <span className="gallery-counter">
                          {activeImageIndex + 1} / {selectedProject.images.length}
                        </span>
                      )}
                    </div>
                  </div>

                  {selectedProject.images.length > 1 && (
                    <div className="gallery-thumbnails">
                      {selectedProject.images.map((img, idx) => (
                        <button
                          key={idx}
                          type="button"
                          className={`thumbnail-btn ${activeImageIndex === idx ? 'active' : ''}`}
                          onClick={() => setActiveImageIndex(idx)}
                        >
                          <img src={img.url} alt={img.caption} />
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <div className="graphic-preview-banner">
                  <div className="graphic-preview-inner">
                    <span className="eyebrow">{selectedProject.category}</span>
                    <h3>{selectedProject.title}</h3>
                    <p>{selectedProject.subtitle}</p>
                    <div className="graphic-preview-tags">
                      {selectedProject.tags.map((tag, idx) => (
                        <span key={idx} className="tag">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Project Deep Dive Details */}
              <div className="modal-details-grid">
                <div className="modal-overview">
                  <h3>Overview</h3>
                  <p>{selectedProject.description}</p>

                  <div className="modal-tags-list">
                    {selectedProject.tags.map((tag, idx) => (
                      <span key={idx} className="tech-badge">{tag}</span>
                    ))}
                  </div>
                </div>

                <div className="modal-features">
                  <h3>Key Highlights & Architecture</h3>
                  <ul>
                    {selectedProject.features.map((feat, idx) => (
                      <li key={idx}>
                        <i className="feature-check">✓</i>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="modal-footer">
              <a
                href={selectedProject.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="modal-action-btn primary"
              >
                Launch Live Site ↗
              </a>
              <button
                type="button"
                className="modal-action-btn secondary"
                onClick={() => setSelectedProject(null)}
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
