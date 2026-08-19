/* =============================================================
   ROLE ALIGNMENT ENGINE
   Reusable renderer for multiple role configurations
   ============================================================= */


document.addEventListener("DOMContentLoaded", () => {

  const roles =
    window.ROLE_ALIGNMENTS || {};


  const params =
    new URLSearchParams(window.location.search);


  const requestedRole =
    params.get("role");


  const roleKeys =
    Object.keys(roles);


  const fallbackRole =
    roleKeys[0];


  const currentKey =
    roles[requestedRole]
      ? requestedRole
      : fallbackRole;


  const role =
    roles[currentKey];


  if (!role) {

    renderEmptyState();

    return;

  }


  populateRoleSwitcher(
    roles,
    currentKey
  );


  renderRole(
    role
  );

});



/* =============================================================
   MAIN RENDER
   ============================================================= */

function renderRole(role) {

  setText(
    "role-title",
    `${role.role} · ${role.company}`
  );


  setText(
    "role-positioning",
    role.positioning
  );


  setText(
    "alignment-score",
    `${role.score}%`
  );


  setText(
    "alignment-headline",
    role.scoreHeadline
  );


  setText(
    "alignment-summary",
    role.scoreSummary
  );


  setText(
    "bridge-copy",
    role.bridge.copy
  );


  setText(
    "bridge-advantage-title",
    role.bridge.advantageTitle
  );


  setText(
    "bridge-advantage-copy",
    role.bridge.advantageCopy
  );


  setText(
    "value-title",
    role.valueTitle
  );


  setText(
    "closing-title",
    role.closing.title
  );


  setText(
    "closing-copy",
    role.closing.copy
  );


  setText(
    "footer-role",
    `${role.company} · ${role.role}`
  );


  document.title =
    `${role.role} · ${role.company} | Role Alignment | Siya Khanyi`;


  renderMeta(role);

  renderRequirements(
    role.requirements
  );

  renderMethod(
    role.method
  );

  renderProof(
    role.proof
  );

  renderBridgePath(
    role.bridge.path
  );

  renderGaps(
    role.gaps
  );

  renderValue(
    role.value
  );


  const featuredLink =
    document.getElementById(
      "featured-case-link"
    );


  const closingLink =
    document.getElementById(
      "closing-primary-link"
    );


  if (featuredLink) {

    featuredLink.href =
      role.featuredEvidence.href;

    featuredLink.textContent =
      role.featuredEvidence.label;

  }


  if (closingLink) {

    closingLink.href =
      role.featuredEvidence.href;

  }

}



/* =============================================================
   META
   ============================================================= */

function renderMeta(role) {

  const meta =
    document.getElementById(
      "role-meta"
    );


  meta.innerHTML = "";


  const values = [

    role.company,

    role.specialism,

    role.location,

    role.type

  ].filter(Boolean);


  values.forEach(value => {

    const item =
      document.createElement("span");

    item.textContent =
      value;

    meta.appendChild(item);

  });

}



/* =============================================================
   REQUIREMENTS
   ============================================================= */

function renderRequirements(items = []) {

  const grid =
    document.getElementById(
      "alignment-grid"
    );


  grid.innerHTML = "";


  items.forEach(item => {

    const card =
      document.createElement(
        "article"
      );


    card.className =
      "alignment-card";


    const statusClass =
      getStatusClass(
        item.status
      );


    card.innerHTML = `

      <div class="alignment-card-head">

        <h3>
          ${escapeHtml(item.requirement)}
        </h3>

        <span class="alignment-status ${statusClass}">
          ${escapeHtml(formatStatus(item.status))}
        </span>

      </div>


      <p>
        ${escapeHtml(item.summary)}
      </p>


      ${renderEvidenceList(item.evidence)}


      <div class="evidence-links">

        ${renderLinks(item.links)}

      </div>

    `;


    grid.appendChild(card);

  });

}



/* =============================================================
   METHOD
   ============================================================= */

function renderMethod(items = []) {

  const container =
    document.getElementById(
      "journey-strip"
    );


  container.innerHTML = "";


  items.forEach((item, index) => {

    const node =
      document.createElement(
        "article"
      );


    node.className =
      "journey-step";


    node.innerHTML = `

      <span class="journey-step-number">
        ${String(index + 1).padStart(2, "0")}
      </span>

      <strong>
        ${escapeHtml(item.title)}
      </strong>

      <span>
        ${escapeHtml(item.text)}
      </span>

    `;


    container.appendChild(node);

  });

}



/* =============================================================
   PROOF
   ============================================================= */

function renderProof(items = []) {

  const grid =
    document.getElementById(
      "proof-grid"
    );


  grid.innerHTML = "";


  items.forEach(item => {

    const card =
      document.createElement(
        "article"
      );


    card.className =
      "proof-card";


    card.innerHTML = `

      <h3>
        ${escapeHtml(item.title)}
      </h3>

      <p>
        ${escapeHtml(item.description)}
      </p>

      <a href="${escapeAttribute(item.href)}">
        Explore evidence →
      </a>

    `;


    grid.appendChild(card);

  });

}



/* =============================================================
   CAREER BRIDGE
   ============================================================= */

function renderBridgePath(items = []) {

  const container =
    document.getElementById(
      "bridge-path"
    );


  container.innerHTML = "";


  items.forEach((item, index) => {

    const node =
      document.createElement(
        "div"
      );


    node.className =
      "bridge-node";


    node.textContent =
      `${String(index + 1).padStart(2, "0")} · ${item}`;


    container.appendChild(node);

  });

}



/* =============================================================
   GAPS
   ============================================================= */

function renderGaps(items = []) {

  const grid =
    document.getElementById(
      "gaps-grid"
    );


  grid.innerHTML = "";


  items.forEach(item => {

    const card =
      document.createElement(
        "article"
      );


    card.className =
      "gap-card";


    card.innerHTML = `

      <h3>
        ${escapeHtml(item.title)}
      </h3>

      <p>
        ${escapeHtml(item.text)}
      </p>

    `;


    grid.appendChild(card);

  });

}



/* =============================================================
   VALUE
   ============================================================= */

function renderValue(items = []) {

  const grid =
    document.getElementById(
      "value-grid"
    );


  grid.innerHTML = "";


  items.forEach(item => {

    const card =
      document.createElement(
        "article"
      );


    card.className =
      "compact-card";


    card.innerHTML = `

      <h3>
        ${escapeHtml(item.title)}
      </h3>

      <p>
        ${escapeHtml(item.text)}
      </p>

    `;


    grid.appendChild(card);

  });

}



/* =============================================================
   ROLE SWITCHER
   ============================================================= */

function populateRoleSwitcher(
  roles,
  selectedKey
) {

  const select =
    document.getElementById(
      "role-select"
    );


  select.innerHTML = "";


  Object.entries(roles)
    .forEach(([key, role]) => {

      const option =
        document.createElement(
          "option"
        );


      option.value =
        key;


      option.textContent =
        `${role.company} — ${role.role}`;


      option.selected =
        key === selectedKey;


      select.appendChild(option);

    });


  select.addEventListener(
    "change",
    event => {

      const nextRole =
        event.target.value;


      const url =
        new URL(
          window.location.href
        );


      url.searchParams.set(
        "role",
        nextRole
      );


      window.location.href =
        url.toString();

    }
  );

}



/* =============================================================
   SMALL RENDER HELPERS
   ============================================================= */

function renderEvidenceList(
  evidence = []
) {

  if (!evidence.length) {
    return "";
  }


  return `

    <ul class="evidence-list">

      ${evidence
        .map(item => `
          <li>
            ${escapeHtml(item)}
          </li>
        `)
        .join("")}

    </ul>

  `;

}



function renderLinks(
  links = []
) {

  return links
    .map(link => `

      <a
        class="evidence-link"
        href="${escapeAttribute(link.href)}"
      >
        ${escapeHtml(link.label)}
      </a>

    `)
    .join("");

}



/* =============================================================
   STATUS
   ============================================================= */

function getStatusClass(status) {

  switch (status) {

    case "strong":
      return "status-strong";


    case "transferable":
      return "status-transferable";


    case "developing":
      return "status-developing";


    default:
      return "";

  }

}



function formatStatus(status) {

  switch (status) {

    case "strong":
      return "Direct";


    case "transferable":
      return "Transferable";


    case "developing":
      return "Ramp";


    default:
      return status || "";

  }

}



/* =============================================================
   EMPTY STATE
   ============================================================= */

function renderEmptyState() {

  const main =
    document.getElementById(
      "main-content"
    );


  main.innerHTML = `

    <section class="panel empty-state">

      <h2>
        No role alignment is configured yet.
      </h2>

      <p>
        Add a role object to
        <code>role-alignment-data.js</code>.
      </p>

    </section>

  `;

}



/* =============================================================
   UTILITIES
   ============================================================= */

function setText(
  id,
  value
) {

  const element =
    document.getElementById(id);


  if (element) {

    element.textContent =
      value || "";

  }

}



function escapeHtml(value = "") {

  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

}



function escapeAttribute(value = "") {

  return escapeHtml(value);

}
