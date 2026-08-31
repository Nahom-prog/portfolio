import { useState } from 'react';

export default function Contact() {
  const [copiedKey, setCopiedKey] = useState(null);

  const handleCopy = (text, key) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const contactMethods = [
    {
      id: 'email',
      eyebrow: 'Primary Channel',
      title: 'Email',
      value: 'abiynahom570@gmail.com',
      description: 'Best for project inquiries, technical specs, and async discussions.',
      href: 'mailto:abiynahom570@gmail.com',
      actionText: 'Send Email ↗',
      copyable: true,
      highlight: true,
    },
    {
      id: 'phone',
      eyebrow: 'Direct Line & Telegram',
      title: 'Phone',
      value: '0970759578',
      description: 'Direct mobile line for quick calls, Telegram, and instant chats.',
      href: 'tel:0970759578',
      actionText: 'Call Now ↗',
      copyable: true,
      highlight: false,
    },
    {
      id: 'github',
      eyebrow: 'Open Source & Repos',
      title: 'GitHub',
      value: 'github.com/nahom-prog',
      description: 'Explore code repositories, architectural experiments, and open-source work.',
      href: 'https://github.com/nahom-prog',
      actionText: 'View GitHub ↗',
      copyable: false,
      highlight: false,
    },
    {
      id: 'twitter',
      eyebrow: 'Social & Thoughts (X)',
      title: 'Twitter / X',
      value: '@glitter86004316',
      description: 'Follow updates on web engineering, product experiments, and tech thoughts.',
      href: 'https://x.com/glitter86004316',
      actionText: 'Follow on X ↗',
      copyable: false,
      highlight: false,
    },
    {
      id: 'instagram',
      eyebrow: 'Visuals & Lifestyle',
      title: 'Instagram',
      value: 'nah._.jsx',
      description: 'Behind the scenes, design experiments, and visual creative updates.',
      href: 'https://instagram.com/nah._.jsx',
      actionText: 'View Instagram ↗',
      copyable: false,
      highlight: false,
    },
  ];

  return (
    <section id="contact" className="contact-section">
      <div className="wrap">
        <div className="section-label">
          <h2>(04) Contact</h2>
          <span>
            Have a project in mind, a question, or want to collaborate? Reach out directly via any channel below.
          </span>
        </div>

        <div className="contact-grid">
          {contactMethods.map((method) => (
            <article
              key={method.id}
              className={`contact-card ${method.highlight ? 'highlight' : ''}`}
            >
              <div>
                <div className="contact-card-top">
                  <span className="eyebrow">{method.eyebrow}</span>
                  {method.copyable && (
                    <button
                      type="button"
                      className="copy-btn"
                      onClick={() => handleCopy(method.value, method.id)}
                      title="Copy to clipboard"
                    >
                      {copiedKey === method.id ? 'Copied ✓' : 'Copy'}
                    </button>
                  )}
                </div>
                <h3>{method.value}</h3>
                <p>{method.description}</p>
              </div>

              <div className="contact-card-footer">
                <a
                  href={method.href}
                  target={method.href.startsWith('http') ? '_blank' : undefined}
                  rel={method.href.startsWith('http') ? 'noreferrer' : undefined}
                  className="contact-action-link"
                >
                  {method.actionText}
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="contact-status-bar">
          <div className="status-item">
            <span className="dot"></span>
            <span><strong>Status:</strong> Available for select client work & full-time roles</span>
          </div>
          <div className="status-item">
            <span><strong>Response Time:</strong> Typically under 24 hours</span>
          </div>
        </div>
      </div>
    </section>
  );
}
