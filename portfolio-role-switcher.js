/* =============================================================
   GLOBAL PORTFOLIO ROLE SWITCHER
   -------------------------------------------------------------
   Responsibilities:
   - Read available roles from ROLE_ALIGNMENTS
   - Persist selected role in localStorage
   - Inject a global role selector into the navbar
   - Show active role context
   - Tailor homepage evidence dynamically
   - Keep role-specific evidence reusable
   ============================================================= */


document.addEventListener(
  "DOMContentLoaded",
  () => {

    const roles =
      window.ROLE_ALIGNMENTS || {};


    const evidenceLibrary =
      window.PORTFOLIO_EVIDENCE || {};


    const roleKeys =
      Object.keys(roles);


    /*
     * If no roles exist yet,
     * leave the general portfolio untouched.
     */
    if (!roleKeys.length) {
      return;
    }


    const STORAGE_KEY =
      "siyaPortfolioSelectedRole";


    const params =
      new URLSearchParams(
        window.location.search
      );


    const queryRole =
      params.get("role");


    const savedRole =
      localStorage.getItem(
        STORAGE_KEY
      );


    let selectedRole =
      "";


    /*
     * Query-string role takes priority.
     */
    if (
      queryRole &&
      roles[queryRole]
    ) {

      selectedRole =
        queryRole;


      localStorage.setItem(
        STORAGE_KEY,
        selectedRole
      );

    }


    /*
     * Otherwise use previously selected role.
     */
    else if (
      savedRole &&
      roles[savedRole]
    ) {

      selectedRole =
        savedRole;

    }


    injectRoleSwitcher(
      roles,
      selectedRole,
      STORAGE_KEY
    );


    renderRoleContext(
      roles,
      selectedRole,
      STORAGE_KEY
    );


    renderTailoredHomepage(
      roles,
      evidenceLibrary,
      selectedRole
    );

  }
);



/* =============================================================
   GLOBAL NAVIGATION ROLE SWITCHER
   ============================================================= */

function injectRoleSwitcher(
  roles,
  selectedRole,
  storageKey
) {

  const navbar =
    document.querySelector(
      ".navbar"
    );


  /*
   * Only inject where the portfolio
   * already contains its standard navbar.
   */
  if (!navbar) {
    return;
  }


  /*
   * Prevent duplicate controls.
   */
  if (
    document.getElementById(
      "portfolio-role-switcher"
    )
  ) {
    return;
  }


  const wrapper =
    document.createElement(
      "div"
    );


  wrapper.id =
    "portfolio-role-switcher";


  wrapper.className =
    "portfolio-role-switcher";



  /* -----------------------------------------------------------
     LABEL
     ----------------------------------------------------------- */

  const label =
    document.createElement(
      "label"
    );


  label.className =
    "portfolio-role-label";


  label.setAttribute(
    "for",
    "global-role-select"
  );


  label.textContent =
    "Tailor portfolio";



  /* -----------------------------------------------------------
     SELECT
     ----------------------------------------------------------- */

  const select =
    document.createElement(
      "select"
    );


  select.id =
    "global-role-select";


  select.className =
    "portfolio-role-select";


  select.setAttribute(
    "aria-label",
    "Tailor this portfolio to a specific role"
  );



  /* -----------------------------------------------------------
     GENERAL PORTFOLIO
     ----------------------------------------------------------- */

  const general =
    document.createElement(
      "option"
    );


  general.value =
    "";


  general.textContent =
    "General portfolio";


  general.selected =
    selectedRole === "";


  select.appendChild(
    general
  );



  /* -----------------------------------------------------------
     ROLE OPTIONS
     ----------------------------------------------------------- */

  Object.entries(roles)
    .forEach(
      ([key, role]) => {

        const option =
          document.createElement(
            "option"
          );


        option.value =
          key;


        option.textContent =
          `${role.company} · ${role.role}`;


        option.selected =
          key === selectedRole;


        select.appendChild(
          option
        );

      }
    );



  /* -----------------------------------------------------------
     VIEW ALIGNMENT BUTTON
     ----------------------------------------------------------- */

  const alignmentLink =
    document.createElement(
      "a"
    );


  alignmentLink.className =
    "portfolio-role-alignment-link";


  alignmentLink.textContent =
    "View alignment";


  if (selectedRole) {

    alignmentLink.href =
      `${getPortfolioRoot()}role-alignment.html?role=${encodeURIComponent(selectedRole)}`;


    alignmentLink.hidden =
      false;

  }

  else {

    alignmentLink.href =
      `${getPortfolioRoot()}role-alignment.html`;


    alignmentLink.hidden =
      true;

  }



  /* -----------------------------------------------------------
     CHANGE ROLE
     ----------------------------------------------------------- */

  select.addEventListener(
    "change",
    event => {

      const roleKey =
        event.target.value;


      /*
       * Return to general portfolio.
       */
      if (!roleKey) {

        localStorage.removeItem(
          storageKey
        );


        window.location.href =
          getPortfolioRoot();


        return;

      }


      /*
       * Save active role.
       */
      localStorage.setItem(
        storageKey,
        roleKey
      );


      /*
       * If already on the homepage,
       * stay there and reload it with role context.
       *
       * This is what makes the homepage itself
       * dynamically tailor rather than immediately
       * throwing the visitor into role alignment.
       */
      if (isPortfolioHomepage()) {

        window.location.href =
          `${getPortfolioRoot()}?role=${encodeURIComponent(roleKey)}`;

      }

      else {

        /*
         * On deeper portfolio pages,
         * selecting another role takes the visitor
         * into that role's evidence mapping.
         */
        window.location.href =
          `${getPortfolioRoot()}role-alignment.html?role=${encodeURIComponent(roleKey)}`;

      }

    }
  );



  /* -----------------------------------------------------------
     BUILD COMPONENT
     ----------------------------------------------------------- */

  wrapper.appendChild(
    label
  );


  wrapper.appendChild(
    select
  );


  wrapper.appendChild(
    alignmentLink
  );


  navbar.appendChild(
    wrapper
  );

}



/* =============================================================
   ACTIVE ROLE CONTEXT BANNER
   ============================================================= */

function renderRoleContext(
  roles,
  selectedRole,
  storageKey
) {

  const container =
    document.getElementById(
      "portfolio-role-context"
    );


  /*
   * Some deep pages may not contain
   * the context banner. That's fine.
   */
  if (!container) {
    return;
  }


  /*
   * General portfolio mode.
   */
  if (
    !selectedRole ||
    !roles[selectedRole]
  ) {

    container.hidden =
      true;


    container.innerHTML =
      "";


    return;

  }


  const role =
    roles[selectedRole];


  container.hidden =
    false;


  container.innerHTML = `

    <div class="role-context-inner">

      <div class="role-context-copy">

        <span class="role-context-kicker">
          Portfolio tailored for
        </span>


        <strong>
          ${escapeRoleHtml(role.company)}
          ·
          ${escapeRoleHtml(role.role)}
        </strong>


        ${
          role.specialism
            ? `
              <span>
                ${escapeRoleHtml(role.specialism)}
              </span>
            `
            : ""
        }

      </div>


      <div class="role-context-actions">

        <a
          href="${getPortfolioRoot()}role-alignment.html?role=${encodeURIComponent(selectedRole)}"
        >
          View full alignment →
        </a>


        <button
          type="button"
          id="clear-role-context"
        >
          Clear tailoring
        </button>

      </div>

    </div>

  `;


  const clearButton =
    document.getElementById(
      "clear-role-context"
    );


  clearButton?.addEventListener(
    "click",
    () => {

      localStorage.removeItem(
        storageKey
      );


      window.location.href =
        getPortfolioRoot();

    }
  );

}



/* =============================================================
   TAILORED HOMEPAGE
   ============================================================= */

function renderTailoredHomepage(
  roles,
  evidenceLibrary,
  selectedRole
) {

  const section =
    document.getElementById(
      "tailored-evidence"
    );


  /*
   * Only the homepage currently has
   * the tailored evidence section.
   */
  if (!section) {
    return;
  }


  /*
   * General portfolio mode.
   */
  if (
    !selectedRole ||
    !roles[selectedRole]
  ) {

    section.hidden =
      true;


    return;

  }


  const role =
    roles[selectedRole];


  const context =
    role.homepageContext || {};


  /* -----------------------------------------------------------
     SECTION COPY
     ----------------------------------------------------------- */

  setRoleText(
    "tailored-eyebrow",
    context.eyebrow ||
    "Role-Specific Evidence"
  );


  setRoleText(
    "tailored-title",
    context.title ||
    `${role.role} evidence`
  );


  setRoleText(
    "tailored-summary",
    context.summary ||
    role.positioning
  );



  /* -----------------------------------------------------------
     EVIDENCE GRID
     ----------------------------------------------------------- */

  const grid =
    document.getElementById(
      "tailored-evidence-grid"
    );


  if (!grid) {
    return;
  }


  grid.innerHTML =
    "";


  const priorities =
    role.priorityEvidence || [];


  priorities.forEach(
    (evidenceId, index) => {

      const evidence =
        evidenceLibrary[evidenceId];


      /*
       * Ignore accidental references
       * to evidence that does not exist.
       */
      if (!evidence) {
        return;
      }


      const card =
        document.createElement(
          "article"
        );


      card.className =
        "tailored-evidence-card";


      const tags =
        (evidence.tags || [])
          .map(
            tag => `
              <span>
                ${escapeRoleHtml(tag)}
              </span>
            `
          )
          .join("");


      card.innerHTML = `

        <div class="tailored-evidence-head">

          <span class="tailored-evidence-number">
            ${String(index + 1).padStart(2, "0")}
          </span>


          <span class="tailored-evidence-type">
            ${escapeRoleHtml(evidence.category)}
          </span>

        </div>


        <h3>
          ${escapeRoleHtml(evidence.title)}
        </h3>


        <span class="evidence-provenance">
          ${escapeRoleHtml(evidence.provenance)}
        </span>


        <p>
          ${escapeRoleHtml(evidence.description)}
        </p>


        <div class="tailored-evidence-tags">
          ${tags}
        </div>


        <a
          href="${escapeRoleHtml(resolveEvidenceHref(evidence.href))}"
        >
          ${escapeRoleHtml(evidence.cta)}
          →
        </a>

      `;


      grid.appendChild(
        card
      );

    }
  );



  /* -----------------------------------------------------------
     FULL ALIGNMENT CTA
     ----------------------------------------------------------- */

  const fullAlignmentLink =
    document.getElementById(
      "tailored-alignment-link"
    );


  if (fullAlignmentLink) {

    fullAlignmentLink.href =
      `${getPortfolioRoot()}role-alignment.html?role=${encodeURIComponent(selectedRole)}`;

  }


  section.hidden =
    false;

}



/* =============================================================
   DETECT HOMEPAGE
   ============================================================= */

function isPortfolioHomepage() {

  const pathname =
    window.location.pathname;


  const repoRoot =
    "/customer-operations-transformation/";


  return (

    pathname === "/" ||

    pathname.endsWith(
      "/index.html"
    ) ||

    pathname ===
      repoRoot ||

    pathname.endsWith(
      "/customer-operations-transformation/index.html"
    )

  );

}



/* =============================================================
   RESOLVE EVIDENCE LINKS
   ============================================================= */

function resolveEvidenceHref(
  href
) {

  if (!href) {
    return "#";
  }


  /*
   * External link.
   */
  if (
    href.startsWith(
      "http://"
    ) ||
    href.startsWith(
      "https://"
    )
  ) {

    return href;

  }


  /*
   * Same-page anchor.
   */
  if (
    href.startsWith("#")
  ) {

    return href;

  }


  /*
   * Already absolute.
   */
  if (
    href.startsWith("/")
  ) {

    return href;

  }


  /*
   * Repository-relative evidence.
   */
  return (
    getPortfolioRoot() +
    href
  );

}



/* =============================================================
   PORTFOLIO ROOT
   Supports GitHub Pages and local development
   ============================================================= */

function getPortfolioRoot() {

  const pathname =
    window.location.pathname;


  const repoSegment =
    "/customer-operations-transformation/";


  if (
    pathname.includes(
      repoSegment
    )
  ) {

    return repoSegment;

  }


  return "/";

}



/* =============================================================
   TEXT HELPER
   ============================================================= */

function setRoleText(
  id,
  value
) {

  const element =
    document.getElementById(
      id
    );


  if (element) {

    element.textContent =
      value || "";

  }

}



/* =============================================================
   HTML SAFETY
   ============================================================= */

function escapeRoleHtml(
  value = ""
) {

  return String(value)

    .replaceAll(
      "&",
      "&amp;"
    )

    .replaceAll(
      "<",
      "&lt;"
    )

    .replaceAll(
      ">",
      "&gt;"
    )

    .replaceAll(
      '"',
      "&quot;"
    )

    .replaceAll(
      "'",
      "&#039;"
    );

}
