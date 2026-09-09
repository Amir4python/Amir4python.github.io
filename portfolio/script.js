// Renders index.html from the content in data.js.
// You should not need to edit this file — edit data.js instead.

function el(tag, className, html) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (html !== undefined) node.innerHTML = html;
  return node;
}

function renderProfile() {
  const p = siteData.profile;
  document.getElementById('sb-name').textContent = p.name;
  document.getElementById('sb-title').textContent = p.title;
  document.getElementById('about-name').textContent = p.name;
  document.getElementById('about-tagline').textContent = p.tagline;
  document.getElementById('about-meta').textContent = `${p.title} — ${p.location}`;
  document.title = `${p.name} — Portfolio`;

  const linksWrap = document.getElementById('sb-links');
  const linkDefs = [
    ['Email', p.email ? `mailto:${p.email}` : ''],
    ['GitHub', p.links.github],
    ['LinkedIn', p.links.linkedin],
    ['Resume', p.links.resume]
  ];
  linkDefs.forEach(([label, href]) => {
    if (!href) return;
    const a = el('a', '', label);
    a.href = href;
    if (!href.startsWith('mailto:')) { a.target = '_blank'; a.rel = 'noopener'; }
    linksWrap.appendChild(a);
  });

  document.getElementById('footer-text').textContent =
    `${p.name} — built with a static site, updated by hand.`;
}

function renderDegrees() {
  const wrap = document.getElementById('degrees-list');
  siteData.degrees.forEach(d => {
    const row = el('div', 'degree-row');
    row.innerHTML = `
      <div class="degree-main">
        <div class="degree-name">${d.degree}</div>
        <div class="degree-school">${d.school}</div>
      </div>
      <div class="degree-year">${d.year}</div>
    `;
    wrap.appendChild(row);
  });
}

function renderExperience() {
  const wrap = document.getElementById('experience-list');
  siteData.experience.forEach(e => {
    const item = el('div', 'timeline-item');
    item.innerHTML = `
      <div class="timeline-period">${e.period}</div>
      <div class="timeline-role">${e.role}</div>
      <div class="timeline-company">${e.company}</div>
      <div class="timeline-summary">${e.summary}</div>
    `;
    wrap.appendChild(item);
  });
}

function renderProjects(list, containerId, { showLink }) {
  const wrap = document.getElementById(containerId);
  list.forEach(proj => {
    const item = el('div', 'project-item');
    const stackHtml = (proj.stack || []).map(s => `<span>${s}</span>`).join('');
    const bulletsHtml = (proj.bullets || []).map(b => `<li>${b}</li>`).join('');
    item.innerHTML = `
      <div class="project-head">
        <div class="project-title">${proj.title}</div>
        <div class="project-period">${proj.period || ''}</div>
      </div>
      <ul class="project-bullets">${bulletsHtml}</ul>
      <div class="project-stack">${stackHtml}</div>
    `;
    if (showLink && proj.link) {
      const a = el('a', 'project-link', 'View code ↗');
      a.href = proj.link;
      a.target = '_blank';
      a.rel = 'noopener';
      item.appendChild(a);
    } else if (proj.note) {
      item.appendChild(el('div', 'project-note', proj.note));
    }
    wrap.appendChild(item);
  });
}

function renderCertifications() {
  const wrap = document.getElementById('certifications-list');
  siteData.certifications.forEach(c => {
    const tag = c.link ? 'a' : 'div';
    const item = document.createElement(tag);
    item.className = 'cert-tile';
    if (c.link) {
      item.href = c.link;
      item.target = '_blank';
      item.rel = 'noopener';
    }
    item.innerHTML = `
      <div class="cert-tile-image">
        <img src="${c.image}" alt="${c.name} certificate" loading="lazy">
      </div>
      <div class="cert-tile-body">
        <div class="cert-name">${c.name}</div>
        <div class="cert-issuer">${c.issuer}</div>
        <div class="cert-date">${c.date}</div>
      </div>
    `;
    wrap.appendChild(item);
  });
}

renderProfile();
renderDegrees();
renderExperience();
renderProjects(siteData.companyProjects, 'work-projects-list', { showLink: false });
renderProjects(siteData.personalProjects, 'personal-projects-list', { showLink: true });
renderCertifications();
