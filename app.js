const teams = {
  u15: [
    "김희승",
    "박지성",
    "윤지환",
    "이우주",
    "김용진",
    "권태하",
    "이한겸",
    "박건하",
    "이도윤",
    "조정민",
    "김주엽",
    "김지한",
    "전온유",
    "김성윤",
    "황지후",
    "임익수",
    "이은찬",
    "김근우",
    "장민기",
    "박정우",
    "김도겸",
    "금민준",
    "남건율",
    "김규민",
    "우준우",
    "이성민",
    "권윤우",
    "이상원",
    "최은혁",
    "강규민",
  ],
  u18: ["김단우", "김승훈", "문동연", "하정우", "박서휘", "전현준", "이찬원", "김민준"],
};

const grid = document.querySelector("#players-grid");
const teamTitle = document.querySelector("#team-title");
const teamCount = document.querySelector("#team-count");
const tabs = document.querySelectorAll(".tab");
const menuToggle = document.querySelector(".menu-toggle");
const gnb = document.querySelector("#gnb");

function renderTeam(teamKey) {
  const players = teams[teamKey];
  grid.innerHTML = players
    .map(
      (name, index) => `
        <article class="player-card">
          <strong>${name}</strong>
          <span>${String(index + 1).padStart(2, "0")}</span>
        </article>
      `,
    )
    .join("");

  teamTitle.textContent = `구미SC ${teamKey.toUpperCase()}`;
  teamCount.textContent = `${players.length}명`;
}

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((item) => {
      item.classList.remove("active");
      item.setAttribute("aria-selected", "false");
    });
    tab.classList.add("active");
    tab.setAttribute("aria-selected", "true");
    renderTeam(tab.dataset.team);
  });
});

menuToggle.addEventListener("click", () => {
  const isOpen = gnb.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

gnb.addEventListener("click", (event) => {
  if (event.target.matches("a")) {
    gnb.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  }
});

renderTeam("u15");
