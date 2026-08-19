/* =============================================================
   GLOBAL PORTFOLIO ROLE SWITCHER
   -------------------------------------------------------------
   Reads roles from window.ROLE_ALIGNMENTS
   Injects a reusable role selector into any .navbar
   Persists role context across the portfolio
   ============================================================= */

document.addEventListener("DOMContentLoaded", () => {

  const roles =
    window.ROLE_ALIGNMENTS || {};

  const roleKeys =
    Object.keys(roles);

  if (!roleKeys.length) {
    return;
  }


  const STORAGE_KEY =
    "siyaPortfolioSelectedRole";


  const params =
    new URLSearchParams(window.location.search);


  const queryRole =
    params.get("role");


  const savedRole =
    localStorage.getItem(STORAGE_KEY);


  let selectedRole = "";


  if (queryRole && roles[queryRole]) {

    selectedRole =
      queryRole;

    localStorage.setItem(
      STORAGE_KEY,
      selectedRole
    );

  } else if (
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
    selectedRole
  );

});



/* =============================================================
   INJECT GLOBAL NAV COMPONENT
   ============================================================= */

function injectRoleSwitcher(
  roles,
  selectedRole,
  storageKey
) {

  const navbar =
    document.querySelector(".navbar");


  if (!navbar) {
    return;
  }


  /*
   * Prevent duplicate injection if this script
   * is loaded more than once.
   */
  if (
    document.getElementById(
      "portfolio-role-switcher"
    )
  ) {
    return;
  }


  const wrapper =
    document.createElement("div");


  wrapper.id =
    "portfolio-role-switcher";


  wrapper.className =
    "portfolio-role-switcher";


  const label =
    document.createElement("label");


  label.className =
    "portfolio-role-label";


  label.setAttribute(
    "for",
    "global-role-select"
  );


  label.textContent =
    "Tailor portfolio";


  const select =
    document.createElement("select");


  select.id =
    "global-role-select";


  select.className =
    "portfolio-role-select";


  select.setAttribute(
    "aria-label",
    "Tailor this portfolio to a specific role"
  );


  /* -----------------------------------------------------------
     GENERAL PORTFOLIO OPTION
     ----------------------------------------------------------- */

  const general =
    document.createElement("option");


  general.value =
    "";


  general.textContent =
    "General portfolio";


  select.appendChild(general);



  /* -----------------------------------------------------------
     ROLE OPTIONS
     ----------------------------------------------------------- */

  Object.entries(roles)
    .forEach(([key, role]) => {

      const option =
        document.createElement("option");


      option.value =
        key;


      option.textContent =
        `${role.company} · ${role.role}`;


      if (
        key === selectedRole
      ) {

        option.selected =
          true;

      }


      select.appendChild(option);

    });



  /* -----------------------------------------------------------
     ALIGNMENT BUTTON
     ----------------------------------------------------------- */

  const alignmentLink =
    document.createElement("a");


  alignmentLink.className =
    "portfolio-role-alignment-link";


  alignmentLink.textContent =
    "View alignment";


  updateAlignmentLink(
    alignmentLink,
    selectedRole
  );



  /* -----------------------------------------------------------
     SELECT BEHAVIOUR
     ----------------------------------------------------------- */

  select.addEventListener(
    "change",
    event => {

      const roleKey =
        event.target.value;


      if (!roleKey) {

        localStorage.removeItem(
          storageKey
        );


        window.location.href =
          getPortfolioRoot();


        return;

      }


      localStorage.setItem(
        storageKey,
        roleKey
      );


      window.location.href =
        `${getPortfolioRoot()}role-alignment.html?role=${encodeURIComponent(roleKey)}`;

    }
  );



  wrapper.appendChild(label);

  wrapper.appendChild(select);

  wrapper.appendChild(
    alignmentLink
  );


  navbar.appendChild(
    wrapper
  );

}



/* =============================================================
   UPDATE ALIGNMENT LINK
   ============================================================= */

function updateAlignmentLink(
  link,
  selectedRole
) {

  if (selectedRole) {

    link.href =
      `${getPortfolioRoot()}role-alignment.html?role=${encodeURIComponent(selectedRole)}`;


    link.hidden =
      false;

  } else {

    link.href =
      `${getPortfolioRoot()}role-alignment.html`;


    link.hidden =
      true;

  }

}



/* =============================================================
   OPTIONAL ROLE CONTEXT BANNER
   ============================================================= */

function renderRoleContext(
  roles,
  selectedRole
) {

  const container =
    document.getElementById(
      "portfolio-role-context"
    );


  if (!container) {
    return;
  }


  if (
    !selectedRole ||
    !roles[selectedRole]
  ) {

    container.hidden =
      true;

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
          View evidence alignment →
        </a>


        <button
          type="button"
          id="clear-role-context"
        >
          Clear
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
        "siyaPortfolioSelectedRole"
      );


      window.location.href =
        getPortfolioRoot();

    }
  );

}



/* =============================================================
   PORTFOLIO ROOT
   Works on GitHub Pages and local development
   ============================================================= */

function getPortfolioRoot() {

  const path =
    window.location.pathname;


  const repoSegment =
    "/customer-operations-transformation/";


  if (
    path.includes(repoSegment)
  ) {

    return repoSegment;

  }


  return "/";

}



/* =============================================================
   SAFE HTML
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
