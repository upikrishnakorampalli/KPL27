/* =====================================================
   KPL27 CRICKET AUCTION
   COMPLETE AUCTION JAVASCRIPT
   ===================================================== */


/* ================= TEAMS ================= */

const teamData = {

    RCB: {
        name: "Royal Challengers Bengaluru",
        logo: "RCB",
        teamColor: "#d62839",
        purse: 100,
        players: []
    },

    SRH: {
        name: "Sunrisers Hyderabad",
        logo: "SRH",
        teamColor: "#ff8a3d",
        purse: 100,
        players: []
    },

    CSK: {
        name: "Chennai Super Kings",
        logo: "CSK",
        teamColor: "#f9d342",
        purse: 100,
        players: []
    },

    DC: {
        name: "Delhi Capitals",
        logo: "DC",
        teamColor: "#4da3ff",
        purse: 100,
        players: []
    },

    KKR: {
        name: "Kolkata Knight Riders",
        logo: "KKR",
        teamColor: "#8c6bff",
        purse: 100,
        players: []
    },

    RR: {
        name: "Rajasthan Royals",
        logo: "RR",
        teamColor: "#ff68c0",
        purse: 100,
        players: []
    },

    MI: {
        name: "Mumbai Indians",
        logo: "MI",
        teamColor: "#1f5ed6",
        purse: 100,
        players: []
    },

    GT: {
        name: "Gujarat Titans",
        logo: "GT",
        teamColor: "#222222",
        purse: 100,
        players: []
    }

};


/* ================= PLAYERS ================= */

/* ================= 150 PLAYER AUCTION POOL ================= */

const players = [

    // ================= BATTERS =================

    {name:"Virat Kohli",role:"Batter",category:"BATTER",country:"INDIA",age:37,style:"RIGHT HAND",base:2},
    {name:"Rohit Sharma",role:"Batter",category:"BATTER",country:"INDIA",age:39,style:"RIGHT HAND",base:2},
    {name:"Shubman Gill",role:"Batter",category:"BATTER",country:"INDIA",age:27,style:"RIGHT HAND",base:2},
    {name:"Yashasvi Jaiswal",role:"Batter",category:"BATTER",country:"INDIA",age:24,style:"LEFT HAND",base:2},
    {name:"Suryakumar Yadav",role:"Batter",category:"BATTER",country:"INDIA",age:36,style:"RIGHT HAND",base:2},
    {name:"Shreyas Iyer",role:"Batter",category:"BATTER",country:"INDIA",age:31,style:"RIGHT HAND",base:2},
    {name:"Ruturaj Gaikwad",role:"Batter",category:"BATTER",country:"INDIA",age:29,style:"RIGHT HAND",base:2},
    {name:"Rinku Singh",role:"Batter",category:"BATTER",country:"INDIA",age:28,style:"LEFT HAND",base:1},
    {name:"Tilak Varma",role:"Batter",category:"BATTER",country:"INDIA",age:24,style:"LEFT HAND",base:1},
    {name:"Abhishek Sharma",role:"Batter",category:"BATTER",country:"INDIA",age:26,style:"LEFT HAND",base:1},
    {name:"Rajat Patidar",role:"Batter",category:"BATTER",country:"INDIA",age:33,style:"RIGHT HAND",base:1},
    {name:"Devdutt Padikkal",role:"Batter",category:"BATTER",country:"INDIA",age:26,style:"LEFT HAND",base:1},
    {name:"Prithvi Shaw",role:"Batter",category:"BATTER",country:"INDIA",age:27,style:"RIGHT HAND",base:1},
    {name:"Sarfaraz Khan",role:"Batter",category:"BATTER",country:"INDIA",age:28,style:"RIGHT HAND",base:1},
    {name:"Shashank Singh",role:"Batter",category:"BATTER",country:"INDIA",age:35,style:"RIGHT HAND",base:0.75},
    {name:"Ayush Badoni",role:"Batter",category:"BATTER",country:"INDIA",age:27,style:"RIGHT HAND",base:0.75},
    {name:"Rahul Tripathi",role:"Batter",category:"BATTER",country:"INDIA",age:35,style:"RIGHT HAND",base:1},
    {name:"Manish Pandey",role:"Batter",category:"BATTER",country:"INDIA",age:37,style:"RIGHT HAND",base:0.75},
    {name:"Mayank Agarwal",role:"Batter",category:"BATTER",country:"INDIA",age:35,style:"RIGHT HAND",base:1},
    {name:"Karun Nair",role:"Batter",category:"BATTER",country:"INDIA",age:35,style:"RIGHT HAND",base:0.75},
    {name:"Ajinkya Rahane",role:"Batter",category:"BATTER",country:"INDIA",age:38,style:"RIGHT HAND",base:0.75},
    {name:"Devon Conway",role:"Batter",category:"BATTER",country:"NEW ZEALAND",age:35,style:"LEFT HAND",base:1.5},
    {name:"David Warner",role:"Batter",category:"BATTER",country:"AUSTRALIA",age:40,style:"LEFT HAND",base:1},
    {name:"Steve Smith",role:"Batter",category:"BATTER",country:"AUSTRALIA",age:37,style:"RIGHT HAND",base:1},
    {name:"Travis Head",role:"Batter",category:"BATTER",country:"AUSTRALIA",age:32,style:"LEFT HAND",base:2},
    {name:"Glenn Maxwell",role:"Batter",category:"BATTER",country:"AUSTRALIA",age:38,style:"RIGHT HAND",base:1.5},
    {name:"Mitchell Marsh",role:"All-Rounder",category:"ALL-ROUNDER",country:"AUSTRALIA",age:34,style:"RIGHT HAND",base:1.5},
    {name:"Faf du Plessis",role:"Batter",category:"BATTER",country:"SOUTH AFRICA",age:42,style:"RIGHT HAND",base:1},
    {name:"Quinton de Kock",role:"Wicketkeeper Batter",category:"WICKETKEEPER",country:"SOUTH AFRICA",age:33,style:"LEFT HAND",base:1.5},
    {name:"Aiden Markram",role:"All-Rounder",category:"ALL-ROUNDER",country:"SOUTH AFRICA",age:32,style:"RIGHT HAND",base:1.5},

    // ================= WICKETKEEPERS =================

    {name:"MS Dhoni",role:"Wicketkeeper Batter",category:"WICKETKEEPER",country:"INDIA",age:45,style:"RIGHT HAND",base:1},
    {name:"Rishabh Pant",role:"Wicketkeeper Batter",category:"WICKETKEEPER",country:"INDIA",age:29,style:"LEFT HAND",base:2},
    {name:"KL Rahul",role:"Wicketkeeper Batter",category:"WICKETKEEPER",country:"INDIA",age:34,style:"RIGHT HAND",base:1.5},
    {name:"Sanju Samson",role:"Wicketkeeper Batter",category:"WICKETKEEPER",country:"INDIA",age:31,style:"RIGHT HAND",base:1.5},
    {name:"Ishan Kishan",role:"Wicketkeeper Batter",category:"WICKETKEEPER",country:"INDIA",age:28,style:"LEFT HAND",base:1.5},
    {name:"Jitesh Sharma",role:"Wicketkeeper Batter",category:"WICKETKEEPER",country:"INDIA",age:33,style:"RIGHT HAND",base:1},
    {name:"Dhruv Jurel",role:"Wicketkeeper Batter",category:"WICKETKEEPER",country:"INDIA",age:25,style:"RIGHT HAND",base:0.75},
    {name:"Phil Salt",role:"Wicketkeeper Batter",category:"WICKETKEEPER",country:"ENGLAND",age:30,style:"RIGHT HAND",base:1.5},
    {name:"Jos Buttler",role:"Wicketkeeper Batter",category:"WICKETKEEPER",country:"ENGLAND",age:35,style:"RIGHT HAND",base:2},
    {name:"Nicholas Pooran",role:"Wicketkeeper Batter",category:"WICKETKEEPER",country:"WEST INDIES",age:30,style:"LEFT HAND",base:2},
    {name:"Heinrich Klaasen",role:"Wicketkeeper Batter",category:"WICKETKEEPER",country:"SOUTH AFRICA",age:35,style:"RIGHT HAND",base:2},
    {name:"Ryan Rickelton",role:"Wicketkeeper Batter",category:"WICKETKEEPER",country:"SOUTH AFRICA",age:29,style:"LEFT HAND",base:1},
    {name:"Jonny Bairstow",role:"Wicketkeeper Batter",category:"WICKETKEEPER",country:"ENGLAND",age:36,style:"RIGHT HAND",base:1},
    {name:"Rahmanullah Gurbaz",role:"Wicketkeeper Batter",category:"WICKETKEEPER",country:"AFGHANISTAN",age:24,style:"RIGHT HAND",base:1},

    // ================= ALL ROUNDERS =================

    {name:"Hardik Pandya",role:"All-Rounder",category:"ALL-ROUNDER",country:"INDIA",age:33,style:"RIGHT HAND",base:2},
    {name:"Ravindra Jadeja",role:"All-Rounder",category:"ALL-ROUNDER",country:"INDIA",age:37,style:"LEFT HAND",base:2},
    {name:"Axar Patel",role:"All-Rounder",category:"ALL-ROUNDER",country:"INDIA",age:32,style:"LEFT HAND",base:1.5},
    {name:"Washington Sundar",role:"All-Rounder",category:"ALL-ROUNDER",country:"INDIA",age:26,style:"LEFT HAND",base:1},
    {name:"Nitish Kumar Reddy",role:"All-Rounder",category:"ALL-ROUNDER",country:"INDIA",age:23,style:"RIGHT HAND",base:0.75},
    {name:"Shivam Dube",role:"All-Rounder",category:"ALL-ROUNDER",country:"INDIA",age:33,style:"LEFT HAND",base:1},
    {name:"Venkatesh Iyer",role:"All-Rounder",category:"ALL-ROUNDER",country:"INDIA",age:31,style:"LEFT HAND",base:1},
    {name:"Riyan Parag",role:"All-Rounder",category:"ALL-ROUNDER",country:"INDIA",age:25,style:"RIGHT HAND",base:1},
    {name:"Rahul Tewatia",role:"All-Rounder",category:"ALL-ROUNDER",country:"INDIA",age:33,style:"LEFT HAND",base:0.75},
    {name:"Krunal Pandya",role:"All-Rounder",category:"ALL-ROUNDER",country:"INDIA",age:35,style:"LEFT HAND",base:1},
    {name:"Deepak Hooda",role:"All-Rounder",category:"ALL-ROUNDER",country:"INDIA",age:31,style:"RIGHT HAND",base:0.75},
    {name:"Ravichandran Ashwin",role:"All-Rounder",category:"ALL-ROUNDER",country:"INDIA",age:40,style:"RIGHT HAND",base:1},
    {name:"Andre Russell",role:"All-Rounder",category:"ALL-ROUNDER",country:"WEST INDIES",age:38,style:"RIGHT HAND",base:1.5},
    {name:"Sunil Narine",role:"All-Rounder",category:"ALL-ROUNDER",country:"WEST INDIES",age:38,style:"LEFT HAND",base:1.5},
    {name:"Jason Holder",role:"All-Rounder",category:"ALL-ROUNDER",country:"WEST INDIES",age:34,style:"RIGHT HAND",base:1},
    {name:"Liam Livingstone",role:"All-Rounder",category:"ALL-ROUNDER",country:"ENGLAND",age:33,style:"RIGHT HAND",base:1.5},
    {name:"Moeen Ali",role:"All-Rounder",category:"ALL-ROUNDER",country:"ENGLAND",age:39,style:"LEFT HAND",base:1},
    {name:"Sam Curran",role:"All-Rounder",category:"ALL-ROUNDER",country:"ENGLAND",age:28,style:"LEFT HAND",base:1.5},
    {name:"Cameron Green",role:"All-Rounder",category:"ALL-ROUNDER",country:"AUSTRALIA",age:27,style:"RIGHT HAND",base:1.5},
    {name:"Marcus Stoinis",role:"All-Rounder",category:"ALL-ROUNDER",country:"AUSTRALIA",age:37,style:"RIGHT HAND",base:1},
    {name:"Marco Jansen",role:"All-Rounder",category:"ALL-ROUNDER",country:"SOUTH AFRICA",age:26,style:"LEFT HAND",base:1},
    {name:"Azmatullah Omarzai",role:"All-Rounder",category:"ALL-ROUNDER",country:"AFGHANISTAN",age:26,style:"RIGHT HAND",base:1},
    {name:"Mohammad Nabi",role:"All-Rounder",category:"ALL-ROUNDER",country:"AFGHANISTAN",age:41,style:"RIGHT HAND",base:0.75},
    {name:"Sikandar Raza",role:"All-Rounder",category:"ALL-ROUNDER",country:"ZIMBABWE",age:40,style:"RIGHT HAND",base:0.75},

    // ================= FAST BOWLERS =================

    {name:"Jasprit Bumrah",role:"Bowler",category:"BOWLER",country:"INDIA",age:32,style:"RIGHT ARM FAST",base:2},
    {name:"Mohammed Siraj",role:"Bowler",category:"BOWLER",country:"INDIA",age:32,style:"RIGHT ARM FAST",base:1.5},
    {name:"Arshdeep Singh",role:"Bowler",category:"BOWLER",country:"INDIA",age:27,style:"LEFT ARM FAST",base:1.5},
    {name:"Mohammed Shami",role:"Bowler",category:"BOWLER",country:"INDIA",age:36,style:"RIGHT ARM FAST",base:1.5},
    {name:"Bhuvneshwar Kumar",role:"Bowler",category:"BOWLER",country:"INDIA",age:36,style:"RIGHT ARM FAST",base:1},
    {name:"Avesh Khan",role:"Bowler",category:"BOWLER",country:"INDIA",age:29,style:"RIGHT ARM FAST",base:1},
    {name:"Mukesh Kumar",role:"Bowler",category:"BOWLER",country:"INDIA",age:32,style:"RIGHT ARM FAST",base:0.75},
    {name:"T Natarajan",role:"Bowler",category:"BOWLER",country:"INDIA",age:35,style:"LEFT ARM FAST",base:1},
    {name:"Umran Malik",role:"Bowler",category:"BOWLER",country:"INDIA",age:26,style:"RIGHT ARM FAST",base:0.75},
    {name:"Mayank Yadav",role:"Bowler",category:"BOWLER",country:"INDIA",age:24,style:"RIGHT ARM FAST",base:1},
    {name:"Khaleel Ahmed",role:"Bowler",category:"BOWLER",country:"INDIA",age:28,style:"LEFT ARM FAST",base:0.75},
    {name:"Akash Deep",role:"Bowler",category:"BOWLER",country:"INDIA",age:29,style:"RIGHT ARM FAST",base:0.75},
    {name:"Harshit Rana",role:"Bowler",category:"BOWLER",country:"INDIA",age:25,style:"RIGHT ARM FAST",base:1},
    {name:"Prasidh Krishna",role:"Bowler",category:"BOWLER",country:"INDIA",age:30,style:"RIGHT ARM FAST",base:1},
    {name:"Yash Dayal",role:"Bowler",category:"BOWLER",country:"INDIA",age:28,style:"LEFT ARM FAST",base:0.75},

    // ================= SPIN BOWLERS =================

    {name:"Kuldeep Yadav",role:"Bowler",category:"BOWLER",country:"INDIA",age:31,style:"LEFT ARM WRIST SPIN",base:1.5},
    {name:"Yuzvendra Chahal",role:"Bowler",category:"BOWLER",country:"INDIA",age:36,style:"RIGHT ARM LEG SPIN",base:1},
    {name:"Varun Chakravarthy",role:"Bowler",category:"BOWLER",country:"INDIA",age:35,style:"RIGHT ARM SPIN",base:1.5},
    {name:"Ravi Bishnoi",role:"Bowler",category:"BOWLER",country:"INDIA",age:26,style:"RIGHT ARM LEG SPIN",base:1},
    {name:"Rahul Chahar",role:"Bowler",category:"BOWLER",country:"INDIA",age:27,style:"RIGHT ARM LEG SPIN",base:0.75},
    {name:"Mayank Markande",role:"Bowler",category:"BOWLER",country:"INDIA",age:29,style:"RIGHT ARM LEG SPIN",base:0.75},
    {name:"Shahbaz Ahmed",role:"All-Rounder",category:"ALL-ROUNDER",country:"INDIA",age:31,style:"LEFT ARM SPIN",base:0.75},
    {name:"Sai Kishore",role:"Bowler",category:"BOWLER",country:"INDIA",age:30,style:"LEFT ARM SPIN",base:0.75},
    {name:"Keshav Maharaj",role:"Bowler",category:"BOWLER",country:"SOUTH AFRICA",age:36,style:"LEFT ARM SPIN",base:1},
    {name:"Tabraiz Shamsi",role:"Bowler",category:"BOWLER",country:"SOUTH AFRICA",age:36,style:"LEFT ARM WRIST SPIN",base:0.75},
    {name:"Adam Zampa",role:"Bowler",category:"BOWLER",country:"AUSTRALIA",age:34,style:"RIGHT ARM LEG SPIN",base:1},
    {name:"Rashid Khan",role:"Bowler",category:"BOWLER",country:"AFGHANISTAN",age:28,style:"RIGHT ARM LEG SPIN",base:2},
    {name:"Noor Ahmad",role:"Bowler",category:"BOWLER",country:"AFGHANISTAN",age:21,style:"LEFT ARM WRIST SPIN",base:1},
    {name:"Mujeeb Ur Rahman",role:"Bowler",category:"BOWLER",country:"AFGHANISTAN",age:25,style:"RIGHT ARM OFF SPIN",base:0.75},

    // ================= INTERNATIONAL PLAYERS =================

    {name:"Kane Williamson",role:"Batter",category:"BATTER",country:"NEW ZEALAND",age:36,style:"RIGHT HAND",base:1},
    {name:"Rachin Ravindra",role:"All-Rounder",category:"ALL-ROUNDER",country:"NEW ZEALAND",age:27,style:"LEFT HAND",base:1.5},
    {name:"Daryl Mitchell",role:"All-Rounder",category:"ALL-ROUNDER",country:"NEW ZEALAND",age:35,style:"RIGHT HAND",base:1},
    {name:"Glenn Phillips",role:"All-Rounder",category:"ALL-ROUNDER",country:"NEW ZEALAND",age:30,style:"RIGHT HAND",base:1},
    {name:"Tim David",role:"Batter",category:"BATTER",country:"AUSTRALIA",age:30,style:"RIGHT HAND",base:1},
    {name:"Jake Fraser-McGurk",role:"Batter",category:"BATTER",country:"AUSTRALIA",age:24,style:"RIGHT HAND",base:1},
    {name:"Rassie van der Dussen",role:"Batter",category:"BATTER",country:"SOUTH AFRICA",age:37,style:"RIGHT HAND",base:0.75},
    {name:"David Miller",role:"Batter",category:"BATTER",country:"SOUTH AFRICA",age:37,style:"LEFT HAND",base:1},
    {name:"Tristan Stubbs",role:"Batter",category:"BATTER",country:"SOUTH AFRICA",age:25,style:"RIGHT HAND",base:1},
    {name:"Reeza Hendricks",role:"Batter",category:"BATTER",country:"SOUTH AFRICA",age:36,style:"RIGHT HAND",base:0.75},
    {name:"Harry Brook",role:"Batter",category:"BATTER",country:"ENGLAND",age:27,style:"RIGHT HAND",base:1.5},
    {name:"Will Jacks",role:"All-Rounder",category:"ALL-ROUNDER",country:"ENGLAND",age:28,style:"RIGHT HAND",base:1},
    {name:"Phil Salt",role:"Wicketkeeper Batter",category:"WICKETKEEPER",country:"ENGLAND",age:30,style:"RIGHT HAND",base:1.5},
    {name:"Jofra Archer",role:"Bowler",category:"BOWLER",country:"ENGLAND",age:31,style:"RIGHT ARM FAST",base:1.5},
    {name:"Mark Wood",role:"Bowler",category:"BOWLER",country:"ENGLAND",age:36,style:"RIGHT ARM FAST",base:1},
    {name:"Adil Rashid",role:"Bowler",category:"BOWLER",country:"ENGLAND",age:38,style:"RIGHT ARM LEG SPIN",base:0.75},
    {name:"Reece Topley",role:"Bowler",category:"BOWLER",country:"ENGLAND",age:32,style:"LEFT ARM FAST",base:0.75},
    {name:"Shakib Al Hasan",role:"All-Rounder",category:"ALL-ROUNDER",country:"BANGLADESH",age:39,style:"LEFT HAND",base:1},
    {name:"Mustafizur Rahman",role:"Bowler",category:"BOWLER",country:"BANGLADESH",age:30,style:"LEFT ARM FAST",base:1},
    {name:"Taskin Ahmed",role:"Bowler",category:"BOWLER",country:"BANGLADESH",age:31,style:"RIGHT ARM FAST",base:0.75},
    {name:"Litton Das",role:"Wicketkeeper Batter",category:"WICKETKEEPER",country:"BANGLADESH",age:32,style:"RIGHT HAND",base:0.75},
    {name:"Pathum Nissanka",role:"Batter",category:"BATTER",country:"SRI LANKA",age:28,style:"RIGHT HAND",base:1},
    {name:"Kusal Mendis",role:"Wicketkeeper Batter",category:"WICKETKEEPER",country:"SRI LANKA",age:31,style:"RIGHT HAND",base:1},
    {name:"Wanindu Hasaranga",role:"All-Rounder",category:"ALL-ROUNDER",country:"SRI LANKA",age:29,style:"RIGHT HAND",base:1.5},
    {name:"Matheesha Pathirana",role:"Bowler",category:"BOWLER",country:"SRI LANKA",age:24,style:"RIGHT ARM FAST",base:1.5},
    {name:"Maheesh Theekshana",role:"Bowler",category:"BOWLER",country:"SRI LANKA",age:26,style:"RIGHT ARM OFF SPIN",base:1},
    {name:"Babar Azam",role:"Batter",category:"BATTER",country:"PAKISTAN",age:32,style:"RIGHT HAND",base:2},
    {name:"Mohammad Rizwan",role:"Wicketkeeper Batter",category:"WICKETKEEPER",country:"PAKISTAN",age:34,style:"RIGHT HAND",base:1.5},
    {name:"Shaheen Afridi",role:"Bowler",category:"BOWLER",country:"PAKISTAN",age:26,style:"LEFT ARM FAST",base:2},
    {name:"Shadab Khan",role:"All-Rounder",category:"ALL-ROUNDER",country:"PAKISTAN",age:27,style:"RIGHT HAND",base:1},
    {name:"Fakhar Zaman",role:"Batter",category:"BATTER",country:"PAKISTAN",age:36,style:"LEFT HAND",base:1},
    {name:"Mohammad Amir",role:"Bowler",category:"BOWLER",country:"PAKISTAN",age:34,style:"LEFT ARM FAST",base:0.75},
    {name:"Shimron Hetmyer",role:"Batter",category:"BATTER",country:"WEST INDIES",age:29,style:"LEFT HAND",base:1},
    {name:"Evin Lewis",role:"Batter",category:"BATTER",country:"WEST INDIES",age:35,style:"LEFT HAND",base:0.75},
    {name:"Rovman Powell",role:"All-Rounder",category:"ALL-ROUNDER",country:"WEST INDIES",age:32,style:"RIGHT HAND",base:1},
    {name:"Nicholas Pooran",role:"Wicketkeeper Batter",category:"WICKETKEEPER",country:"WEST INDIES",age:30,style:"LEFT HAND",base:2},
    {name:"Romario Shepherd",role:"All-Rounder",category:"ALL-ROUNDER",country:"WEST INDIES",age:31,style:"RIGHT HAND",base:0.75},
    {name:"Rahmanullah Gurbaz",role:"Wicketkeeper Batter",category:"WICKETKEEPER",country:"AFGHANISTAN",age:24,style:"RIGHT HAND",base:1},
    {name:"Ibrahim Zadran",role:"Batter",category:"BATTER",country:"AFGHANISTAN",age:24,style:"RIGHT HAND",base:0.75},
    {name:"Fazalhaq Farooqi",role:"Bowler",category:"BOWLER",country:"AFGHANISTAN",age:25,style:"LEFT ARM FAST",base:0.75}
];

/* ================= SHUFFLE ONCE ================= */

function shufflePlayers(array) {

    for (let i = array.length - 1; i > 0; i--) {

        const j = Math.floor(Math.random() * (i + 1));

        [array[i], array[j]] = [array[j], array[i]];

    }

    return array;

}

shufflePlayers(players);


/* =====================================================
   AUCTION VARIABLES
   ===================================================== */

let selectedTeam = null;

let currentPlayerIndex = 0;

let currentPlayer = null;

let soldPlayerNames = new Set();

let unsoldPlayerNames = new Set();

let currentBid = 0;

let highestBidder = null;

let auctionRunning = false;

let auctionPaused = false;

let timerValue = 30;

let timerInterval = null;

let aiBidTimeout = null;

let auctionHistory = [];


/* =====================================================
   ELEMENTS
   ===================================================== */

const teamSelection =
    document.getElementById("teamSelection");

const auctionApp =
    document.getElementById("auctionApp");

const selectionTeams =
    document.getElementById("selectionTeams");

const startAuctionBtn =
    document.getElementById("startAuctionBtn");

const selectedTeamName =
    document.getElementById("selectedTeamName");

const selectedTeamPurse =
    document.getElementById("selectedTeamPurse");

const selectedTeamSquad =
    document.getElementById("selectedTeamSquad");

const permissionOverlay =
    document.getElementById("startPermission");

const confirmStart =
    document.getElementById("confirmStart");

const cancelStart =
    document.getElementById("cancelStart");


/* =====================================================
   TEAM SELECTION
   ===================================================== */

function renderTeamSelection() {

    selectionTeams.innerHTML = "";

    Object.keys(teamData).forEach(team => {

        const data = teamData[team];

        const card =
            document.createElement("div");

        card.className =
            "team-select-card";

        card.innerHTML = `

            <div
                class="team-logo"
                style="
                    background:
                    linear-gradient(
                        135deg,
                        ${data.teamColor},
                        rgba(255,255,255,0.10)
                    );

                    border-color:
                    ${data.teamColor};

                    box-shadow:
                    0 8px 20px
                    ${data.teamColor};
                "
            >
                ${data.logo}
            </div>

            <small>
                ${data.name}
            </small>

        `;

        card.onclick =
            () => selectTeam(team, card);

        selectionTeams.appendChild(card);

    });

}


/* =====================================================
   SELECT TEAM
   ===================================================== */

function selectTeam(team, card) {

    selectedTeam = team;

    document
        .querySelectorAll(".team-select-card")
        .forEach(c =>
            c.classList.remove("selected")
        );

    card.classList.add("selected");

    if (selectedTeamName) {

        selectedTeamName.textContent =
            team;

    }

    if (selectedTeamPurse) {

        selectedTeamPurse.textContent =
            "₹" +
            teamData[team].purse +
            " Cr";

    }

    if (selectedTeamSquad) {

        selectedTeamSquad.textContent =
            teamData[team].players.length +
            " / 25";

    }

    startAuctionBtn.disabled = false;

    startAuctionBtn.textContent =
        "START KPL27 AUCTION";

}


/* =====================================================
   START AUCTION PERMISSION
   ===================================================== */

startAuctionBtn.onclick = function () {

    if (!selectedTeam) {

        alert("Please select your team first.");

        return;

    }

    const permissionTeam =
        document.getElementById("permissionTeam");

    if (permissionTeam) {

        permissionTeam.textContent =
            selectedTeam;

    }

    if (permissionOverlay) {

        permissionOverlay.classList.remove("hidden");

    }

};


/* =====================================================
   CANCEL START
   ===================================================== */

if (cancelStart) {

    cancelStart.onclick = function () {

        permissionOverlay.classList.add("hidden");

    };

}


/* =====================================================
   CONFIRM START
   ===================================================== */

if (confirmStart) {

    confirmStart.onclick = function () {

        permissionOverlay.classList.add("hidden");

        teamSelection.classList.add("hidden");

        auctionApp.classList.remove("hidden");

        backToTeamsBtn.classList.remove("hidden");

        document.getElementById("myTeamName")
            .textContent =
            selectedTeam;

        renderTeamsDashboard();

        renderPlayersDashboard();

        renderHistory();

        currentPlayerIndex = 0;

        loadPlayer();

    };

}


const backToTeamsBtn =
    document.getElementById("backToTeamsBtn");

if (backToTeamsBtn) {

    backToTeamsBtn.onclick = function () {

        clearInterval(timerInterval);

        clearTimeout(aiBidTimeout);

        auctionRunning = false;

        auctionPaused = false;

        backToTeamsBtn.classList.add("hidden");

        teamSelection.classList.remove("hidden");

        auctionApp.classList.add("hidden");

        document.getElementById("bidMessage")
            .textContent =
            "Auction is ready.";

        document.getElementById("auctionStatus")
            .textContent =
            "● AUCTION READY";

        document.getElementById("biddingIndicator")
            .textContent =
            "READY";

        selectedTeamName.textContent =
            selectedTeam || "SELECT A TEAM";

        selectedTeamPurse.textContent = selectedTeam
            ? "₹" + teamData[selectedTeam].purse + " Cr"
            : "₹100 Cr";

        selectedTeamSquad.textContent = selectedTeam
            ? teamData[selectedTeam].players.length + " / 25"
            : "0 / 25";

        currentPlayerIndex = 0;

        currentPlayer = null;

        highestBidder = null;

        currentBid = 0;

        updateBidDisplay();

    };

}


/* =====================================================
   LOAD NEXT UNSOLD PLAYER
   ===================================================== */

function loadPlayer() {

    clearInterval(timerInterval);

    clearTimeout(aiBidTimeout);

    /*
       IMPORTANT FIX

       Keep moving forward until we find
       a player who has NOT already been sold
       or marked unsold.
    */

    while (

        currentPlayerIndex <
        players.length &&

        (
            soldPlayerNames.has(
                players[currentPlayerIndex].name
            )

            ||

            unsoldPlayerNames.has(
                players[currentPlayerIndex].name
            )
        )

    ) {

        currentPlayerIndex++;

    }


    /*
       ALL 150 PLAYERS COMPLETED
    */

    if (
        currentPlayerIndex >=
        players.length
    ) {

        finishAuction();

        return;

    }


    /*
       LOAD PLAYER
    */

    currentPlayer =
        players[currentPlayerIndex];


    currentBid =
        currentPlayer.base;

    highestBidder =
        null;

    timerValue =
        30;

    auctionRunning =
        true;

    auctionPaused =
        false;


    updatePlayerUI();

    updateBidDisplay();


    document.getElementById("timer")
        .textContent =
        timerValue;


    const status =
        document.getElementById(
            "auctionStatus"
        );

    if (status) {

        status.textContent =
            "● LIVE";

    }


    const indicator =
        document.getElementById(
            "biddingIndicator"
        );

    if (indicator) {

        indicator.textContent =
            "AI BIDDING";

    }


    const message =
        document.getElementById(
            "bidMessage"
        );

    if (message) {

        message.textContent =
            "AI teams are bidding. You can join anytime.";

    }


    enableButtons(true);

    startTimer();

    aiResponse();

}


/* =====================================================
   PLAYER UI
   ===================================================== */

function updatePlayerUI() {

    if (!currentPlayer) return;

    const p =
        currentPlayer;


    const number =
        document.getElementById(
            "playerNumber"
        );

    if (number) {

        number.textContent =
            currentPlayerIndex + 1;

    }


    const name =
        document.getElementById(
            "playerName"
        );

    if (name) {

        name.textContent =
            p.name;

    }


    const role =
        document.getElementById(
            "playerRole"
        );

    if (role) {

        role.textContent =
            p.role;

    }


    const category =
        document.getElementById(
            "playerCategory"
        );

    if (category) {

        category.textContent =
            p.category;

    }


    const country =
        document.getElementById(
            "playerCountry"
        );

    if (country) {

        country.textContent =
            p.country;

    }


    const age =
        document.getElementById(
            "playerAge"
        );

    if (age) {

        age.textContent =
            p.age;

    }


    const style =
        document.getElementById(
            "playerStyle"
        );

    if (style) {

        style.textContent =
            p.style;

    }


    const position =
        document.getElementById(
            "playerPosition"
        );

    if (position) {

        position.textContent =
            p.category;

    }


    const basePrice =
        document.getElementById(
            "basePrice"
        );

    if (basePrice) {

        basePrice.textContent =
            formatPrice(p.base);

    }


    /*
       DEFAULT ROLE ICON
    */

    const icon =
        document.getElementById(
            "roleIcon"
        );

    if (icon) {

        if (
            p.category ===
            "BATTER"
        ) {

            icon.textContent =
                "🏏";

        }

        else if (
            p.category ===
            "BOWLER"
        ) {

            icon.textContent =
                "⚡";

        }

        else if (
            p.category ===
            "ALL-ROUNDER"
        ) {

            icon.textContent =
                "🏏⚡";

        }

        else {

            icon.textContent =
                "🧤";

        }

    }

}


/* =====================================================
   PRICE FORMAT
   ===================================================== */

function formatPrice(cr) {

    if (cr < 1) {

        return (
            "₹" +
            Math.round(cr * 100) +
            " L"
        );

    }

    return (
        "₹" +
        cr.toFixed(2) +
        " Cr"
    );

}


/* =====================================================
   BID INCREMENT
   ===================================================== */

function getIncrement() {

    /*
       ₹25 lakh increments
       until ₹2.50 Cr

       After ₹2.50 Cr
       ₹50 lakh increments
    */

    if (currentBid < 2.5) {

        return 0.25;

    }

    return 0.5;

}


/* =====================================================
   BID DISPLAY
   ===================================================== */

function updateBidDisplay() {

    const current =
        document.getElementById(
            "currentBid"
        );

    if (current) {

        current.textContent =
            formatPrice(currentBid);

    }


    const big =
        document.getElementById(
            "bigCurrentBid"
        );

    if (big) {

        big.textContent =
            formatPrice(currentBid);

    }


    const bidder =
        document.getElementById(
            "highestBidder"
        );

    if (bidder) {

        bidder.textContent =
            highestBidder ||
            "NO BID";

    }


    const increment =
        document.getElementById(
            "bidIncrement"
        );

    if (increment) {

        increment.textContent =
            "+ " +
            formatPrice(
                getIncrement()
            );

    }

}


/* =====================================================
   ENABLE / DISABLE BUTTONS
   ===================================================== */

function enableButtons(enable) {

    const bid =
        document.getElementById(
            "bidBtn"
        );

    const pass =
        document.getElementById(
            "passBtn"
        );


    if (bid) {

        bid.disabled =
            !enable;

    }


    if (pass) {

        pass.disabled =
            !enable;

    }

}


/* =====================================================
   TIMER
   ===================================================== */

function startTimer() {

    clearInterval(timerInterval);

    timerInterval =
        setInterval(() => {

            if (
                !auctionRunning ||
                auctionPaused
            ) {

                return;

            }


            timerValue--;


            const timer =
                document.getElementById(
                    "timer"
                );

            if (timer) {

                timer.textContent =
                    timerValue;

            }


            if (
                timerValue <= 0
            ) {

                clearInterval(
                    timerInterval
                );

                sellPlayer();

            }

        }, 1000);

}


/* =====================================================
   HUMAN BID
   ===================================================== */

const bidButton =
    document.getElementById(
        "bidBtn"
    );

if (bidButton) {

    bidButton.onclick =
        humanBid;

}


function humanBid() {

    if (!currentPlayer) return;

    if (auctionPaused) {

        return;

    }


    /*
       First BID starts auction
    */

    if (!auctionRunning) {

        auctionRunning =
            true;

        const status =
            document.getElementById(
                "auctionStatus"
            );

        if (status) {

            status.textContent =
                "● LIVE";

        }


        const indicator =
            document.getElementById(
                "biddingIndicator"
            );

        if (indicator) {

            indicator.textContent =
                "LIVE";

        }

    }


    const newBid =
        currentBid +
        getIncrement();


    const myTeam =
        teamData[selectedTeam];


    /*
       CHECK PURSE
    */

    if (
        newBid >
        myTeam.purse
    ) {

        document.getElementById(
            "bidMessage"
        ).textContent =
            "Not enough purse for this bid.";

        return;

    }


    /*
       PLACE BID
    */

    currentBid =
        newBid;

    highestBidder =
        selectedTeam;

    timerValue =
        10;


    updateBidDisplay();


    document.getElementById(
        "timer"
    ).textContent =
        timerValue;


    document.getElementById(
        "bidMessage"
    ).textContent =
        selectedTeam +
        " placed a bid!";


    /*
       AI RESPONSE
    */

    aiResponse();

}


/* =====================================================
   AI BIDDING
   ===================================================== */

function aiResponse() {

    if (
        !auctionRunning ||
        auctionPaused
    ) {

        return;

    }


    const eligibleTeams =
        Object.keys(teamData)
            .filter(team =>

                team !==
                selectedTeam

                &&

                teamData[team]
                    .players.length < 25

            );


    if (
        eligibleTeams.length === 0
    ) {

        return;

    }


    const highValue =
        currentBid >= 2.5;


    const delay =
        highValue

            ?

            3200 +
            Math.random() *
            2000

            :

            2200 +
            Math.random() *
            1500;


    const bidChance =
        highValue
            ? 0.35
            : 0.55;


    clearTimeout(
        aiBidTimeout
    );


    aiBidTimeout =
        setTimeout(() => {


            if (
                !auctionRunning ||
                auctionPaused
            ) {

                return;

            }


            const randomTeam =
                eligibleTeams[
                    Math.floor(
                        Math.random() *
                        eligibleTeams.length
                    )
                ];


            const increment =
                getIncrement();


            const newBid =
                currentBid +
                increment;


            /*
               TEAM HAS NO MONEY
            */

            if (
                newBid >
                teamData[randomTeam].purse
            ) {

                aiResponse();

                return;

            }


            /*
               AI BIDS
            */

            if (
                Math.random() <
                bidChance
            ) {

                currentBid =
                    newBid;

                highestBidder =
                    randomTeam;

                timerValue =
                    10;


                updateBidDisplay();


                document.getElementById(
                    "timer"
                ).textContent =
                    timerValue;


                document.getElementById(
                    "bidMessage"
                ).textContent =
                    randomTeam +
                    " entered the bidding!";


                aiResponse();

                return;

            }


            /*
               AI PASSED
            */

            document.getElementById(
                "bidMessage"
            ).textContent =
                randomTeam +
                " passed on this player.";


            aiResponse();


        }, delay);

}


/* =====================================================
   PASS PLAYER
   ===================================================== */

const passButton =
    document.getElementById(
        "passBtn"
    );

if (passButton) {

    passButton.onclick =
        passPlayer;

}


function passPlayer() {

    clearInterval(
        timerInterval
    );

    clearTimeout(
        aiBidTimeout
    );


    /*
       If there is already a highest bidder,
       player goes to that team.
    */

    if (highestBidder) {

        auctionRunning =
            false;

        sellPlayer();

        return;

    }


    /*
       Nobody bid = UNSOLD
    */

    auctionRunning =
        false;

    auctionPaused =
        false;


    enableButtons(false);


    unsoldPlayerNames.add(
        currentPlayer.name
    );


    auctionHistory.push({

        player:
            currentPlayer.name,

        team:
            "UNSOLD",

        price:
            0

    });


    renderHistory();

    renderPlayersDashboard();


    showUnsoldAnimation(
        currentPlayer.name
    );

}


/* =====================================================
   PAUSE / RESUME
   ===================================================== */

const pauseButton =
    document.getElementById(
        "pauseBtn"
    );

if (pauseButton) {

    pauseButton.onclick =
        togglePause;

}


function togglePause() {

    if (!auctionRunning) {

        return;

    }


    auctionPaused =
        !auctionPaused;


    const btn =
        document.getElementById(
            "pauseBtn"
        );


    if (auctionPaused) {

        if (btn) {

            btn.textContent =
                "▶ RESUME";

        }


        const indicator =
            document.getElementById(
                "biddingIndicator"
            );

        if (indicator) {

            indicator.textContent =
                "PAUSED";

        }


        document.getElementById(
            "bidMessage"
        ).textContent =
            "Auction paused.";

    }

    else {

        if (btn) {

            btn.textContent =
                "⏸ PAUSE";

        }


        const indicator =
            document.getElementById(
                "biddingIndicator"
            );

        if (indicator) {

            indicator.textContent =
                "LIVE";

        }


        document.getElementById(
            "bidMessage"
        ).textContent =
            "Auction resumed.";

        /*
           Continue AI after resume
        */

        aiResponse();

    }

}


/* =====================================================
   NEXT PLAYER
   ===================================================== */

const nextButton =
    document.getElementById(
        "nextPlayerBtn"
    );

if (nextButton) {

    nextButton.onclick =
        function () {

            if (!currentPlayer) return;


            /*
               If someone already bid,
               sell the player.
            */

            if (highestBidder) {

                sellPlayer();

                return;

            }


            /*
               Otherwise mark UNSOLD.
            */

            unsoldPlayerNames.add(
                currentPlayer.name
            );


            auctionHistory.push({

                player:
                    currentPlayer.name,

                team:
                    "UNSOLD",

                price:
                    0

            });


            currentPlayerIndex++;

            loadPlayer();

        };

}


/* =====================================================
   SELL PLAYER
   ===================================================== */

function sellPlayer() {

    clearInterval(
        timerInterval
    );

    clearTimeout(
        aiBidTimeout
    );


    auctionRunning =
        false;

    auctionPaused =
        false;


    enableButtons(false);


    const playerName =
        currentPlayer.name;


    let buyer =
        highestBidder;


    /*
       NO BID
    */

    if (!buyer) {

        unsoldPlayerNames.add(
            playerName
        );


        auctionHistory.push({

            player:
                playerName,

            team:
                "UNSOLD",

            price:
                0

        });


        renderHistory();

        showUnsoldAnimation(
            playerName
        );

        return;

    }


    const team =
        teamData[buyer];


    /*
       SQUAD FULL
    */

    if (
        team.players.length >= 25
    ) {

        document.getElementById(
            "bidMessage"
        ).textContent =
            buyer +
            " squad is full.";

        currentPlayerIndex++;

        loadPlayer();

        return;

    }


    /*
       NOT ENOUGH MONEY
    */

    if (
        currentBid >
        team.purse
    ) {

        document.getElementById(
            "bidMessage"
        ).textContent =
            buyer +
            " does not have enough purse.";

        currentPlayerIndex++;

        loadPlayer();

        return;

    }


    /*
       ==========================================
       IMPORTANT:
       PLAYER IS NOW PERMANENTLY SOLD
       ==========================================
    */

    soldPlayerNames.add(
        playerName
    );


    /*
       REMOVE FROM UNSOLD IF NEEDED
    */

    unsoldPlayerNames.delete(
        playerName
    );


    /*
       DEDUCT PURSE
    */

    team.purse -=
        currentBid;


    /*
       ADD PLAYER TO TEAM
    */

    team.players.push({

        name:
            playerName,

        role:
            currentPlayer.role,

        category:
            currentPlayer.category,

        price:
            currentBid

    });


    /*
       ADD AUCTION HISTORY
    */

    auctionHistory.push({

        player:
            playerName,

        team:
            buyer,

        price:
            currentBid

    });


    /*
       UPDATE EVERYTHING
    */

    renderTeamsDashboard();

    renderPlayersDashboard();

    renderHistory();

    updateMyTeamStats();


    /*
       SHOW SOLD SCREEN
    */

    showSoldAnimation(

        playerName,

        buyer,

        currentBid

    );

}


/* =====================================================
   SOLD ANIMATION
   ===================================================== */

function showSoldAnimation(
    player,
    team,
    price
) {

    const playerName =
        document.getElementById(
            "soldPlayerName"
        );

    const teamName =
        document.getElementById(
            "soldTeamName"
        );

    const soldPrice =
        document.getElementById(
            "soldPrice"
        );


    if (playerName) {

        playerName.textContent =
            player.toUpperCase();

    }


    if (teamName) {

        teamName.textContent =
            "SOLD TO " +
            team;

    }


    if (soldPrice) {

        soldPrice.textContent =
            formatPrice(price);

    }


    const overlay =
        document.getElementById(
            "soldOverlay"
        );


    if (!overlay) {

        /*
           If animation element doesn't exist,
           continue directly.
        */

        currentPlayerIndex++;

        loadPlayer();

        return;

    }


    overlay.classList.remove(
        "hidden"
    );


    setTimeout(() => {

        overlay.classList.add(
            "hidden"
        );


        /*
           MOVE TO NEXT PLAYER
        */

        currentPlayerIndex++;


        loadPlayer();


    }, 2200);

}


/* =====================================================
   UNSOLD ANIMATION
   ===================================================== */

function showUnsoldAnimation(
    player
) {

    const playerName =
        document.getElementById(
            "soldPlayerName"
        );

    const teamName =
        document.getElementById(
            "soldTeamName"
        );

    const soldPrice =
        document.getElementById(
            "soldPrice"
        );


    if (playerName) {

        playerName.textContent =
            player.toUpperCase();

    }


    if (teamName) {

        teamName.textContent =
            "UNSOLD";

    }


    if (soldPrice) {

        soldPrice.textContent =
            "NO BID";

    }


    const overlay =
        document.getElementById(
            "soldOverlay"
        );


    /*
       NO OVERLAY
    */

    if (!overlay) {

        currentPlayerIndex++;

        loadPlayer();

        return;

    }


    overlay.classList.remove(
        "hidden"
    );


    setTimeout(() => {

        overlay.classList.add(
            "hidden"
        );


        currentPlayerIndex++;


        loadPlayer();


    }, 1800);

}


/* =====================================================
   TEAM DASHBOARD
   ===================================================== */

function renderTeamsDashboard() {

    const container =
        document.getElementById(
            "teamsDashboard"
        );


    if (!container) return;


    container.innerHTML = "";


    Object.keys(teamData)
        .forEach(team => {


            const data =
                teamData[team];


            const spent =
                100 -
                data.purse;


            const card =
                document.createElement(
                    "div"
                );


            card.className =
                "team-dashboard-card";


            card.innerHTML = `

                <div class="team-dashboard-top">

                    <div
                        class="small-team-logo"
                        style="
                            background:
                            linear-gradient(
                                135deg,
                                ${data.teamColor},
                                rgba(255,255,255,0.12)
                            );

                            border-color:
                            ${data.teamColor};
                        "
                    >
                        ${data.logo}
                    </div>

                    <div>

                        <h3>
                            ${team}
                        </h3>

                        <small>
                            ${data.name}
                        </small>

                    </div>

                </div>


                <div class="team-dashboard-stats">

                    <div>
                        <span>PURSE</span>

                        <strong>
                            ₹${data.purse.toFixed(2)} Cr
                        </strong>
                    </div>


                    <div>
                        <span>SQUAD</span>

                        <strong>
                            ${data.players.length} / 25
                        </strong>
                    </div>


                    <div>
                        <span>SPENT</span>

                        <strong>
                            ₹${spent.toFixed(2)} Cr
                        </strong>
                    </div>


                    <div>
                        <span>STATUS</span>

                        <strong>
                            ${
                                team === selectedTeam
                                    ? "YOU"
                                    : "AI"
                            }
                        </strong>
                    </div>

                </div>

            `;


            card.onclick =
                () =>
                    openTeamModal(team);


            container.appendChild(
                card
            );

        });

}


/* =====================================================
   TEAM MODAL
   ===================================================== */

function openTeamModal(team) {

    const data =
        teamData[team];


    const logo =
        document.getElementById(
            "modalTeamLogo"
        );

    if (logo) {

        logo.textContent =
            data.logo;

    }


    const name =
        document.getElementById(
            "modalTeamName"
        );

    if (name) {

        name.textContent =
            team;

    }


    const purse =
        document.getElementById(
            "modalPurse"
        );

    if (purse) {

        purse.textContent =
            "₹" +
            data.purse.toFixed(2) +
            " Cr";

    }


    const squad =
        document.getElementById(
            "modalSquad"
        );

    if (squad) {

        squad.textContent =
            data.players.length;

    }


    const spent =
        document.getElementById(
            "modalSpent"
        );

    if (spent) {

        spent.textContent =
            "₹" +
            (
                100 -
                data.purse
            ).toFixed(2) +
            " Cr";

    }


    const list =
        document.getElementById(
            "modalPlayers"
        );


    if (!list) return;


    list.innerHTML = "";


    if (
        data.players.length === 0
    ) {

        list.innerHTML = `

            <div class="empty-history">

                No players purchased yet.

            </div>

        `;

    }

    else {

        data.players.forEach(
            player => {

                const row =
                    document.createElement(
                        "div"
                    );


                row.className =
                    "modal-player";


                row.innerHTML = `

                    <strong>
                        ${player.name}
                    </strong>

                    <span>
                        ${formatPrice(player.price)}
                    </span>

                `;


                list.appendChild(
                    row
                );

            }
        );

    }


    const modal =
        document.getElementById(
            "teamModal"
        );


    if (modal) {

        modal.classList.remove(
            "hidden"
        );

    }

}


/* =====================================================
   CLOSE MODAL
   ===================================================== */

const closeModal =
    document.getElementById(
        "closeModal"
    );


if (closeModal) {

    closeModal.onclick =
        function () {

            document
                .getElementById(
                    "teamModal"
                )
                .classList.add(
                    "hidden"
                );

        };

}


const teamModal =
    document.getElementById(
        "teamModal"
    );


if (teamModal) {

    teamModal.onclick =
        function (e) {

            if (
                e.target.id ===
                "teamModal"
            ) {

                e.currentTarget
                    .classList.add(
                        "hidden"
                    );

            }

        };

}


/* =====================================================
   PLAYER DASHBOARD
   ===================================================== */

function renderPlayersDashboard(
    filter = ""
) {

    const container =
        document.getElementById(
            "playersDashboard"
        );


    if (!container) return;


    container.innerHTML = "";


    const filtered =
        players.filter(
            player =>

                player.name
                    .toLowerCase()
                    .includes(
                        filter.toLowerCase()
                    )
        );


    filtered.forEach(
        player => {


            const card =
                document.createElement(
                    "div"
                );


            card.className =
                "player-list-card";


            let status =
                "AVAILABLE";


            if (
                soldPlayerNames.has(
                    player.name
                )
            ) {

                status =
                    "SOLD";

            }

            else if (
                unsoldPlayerNames.has(
                    player.name
                )
            ) {

                status =
                    "UNSOLD";

            }


            card.innerHTML = `

                <strong>
                    ${player.name}
                </strong>

                <span>
                    ${player.category}
                </span>

                <span class="player-price">
                    Base:
                    ${formatPrice(player.base)}
                </span>

                <span class="player-status">
                    ${status}
                </span>

            `;


            container.appendChild(
                card
            );

        }
    );

}


/* =====================================================
   PLAYER SEARCH
   ===================================================== */

const playerSearch =
    document.getElementById(
        "playerSearch"
    );


if (playerSearch) {

    playerSearch.addEventListener(
        "input",
        function (e) {

            renderPlayersDashboard(
                e.target.value
            );

        }
    );

}


/* =====================================================
   AUCTION HISTORY
   ===================================================== */

function renderHistory() {

    const container =
        document.getElementById(
            "historyDashboard"
        );


    const count =
        document.getElementById(
            "historyCount"
        );


    if (count) {

        count.textContent =
            auctionHistory.length +
            " SOLD/UNSOLD";

    }


    if (!container) return;


    if (
        auctionHistory.length === 0
    ) {

        container.innerHTML = `

            <div class="empty-history">

                No auction history yet.

            </div>

        `;

        return;

    }


    container.innerHTML = "";


    auctionHistory
        .slice()
        .reverse()
        .forEach(
            (item, index) => {


                const row =
                    document.createElement(
                        "div"
                    );


                row.className =
                    "history-row";


                row.innerHTML = `

                    <div class="history-number">

                        #${
                            auctionHistory.length -
                            index
                        }

                    </div>


                    <strong>

                        ${item.player}

                    </strong>


                    <div class="history-team">

                        ${item.team}

                    </div>


                    <div class="history-price">

                        ${
                            item.price > 0
                                ? formatPrice(
                                    item.price
                                  )
                                : "NO BID"
                        }

                    </div>

                `;


                container.appendChild(
                    row
                );

            }
        );

}


/* =====================================================
   MY TEAM STATS
   ===================================================== */

function updateMyTeamStats() {

    if (!selectedTeam) return;


    const data =
        teamData[selectedTeam];


    const purse =
        document.getElementById(
            "myTeamPurse"
        );


    if (purse) {

        purse.textContent =
            "₹" +
            data.purse.toFixed(2) +
            " Cr";

    }


    if (selectedTeamPurse) {

        selectedTeamPurse.textContent =
            "₹" +
            data.purse.toFixed(2) +
            " Cr";

    }


    if (selectedTeamSquad) {

        selectedTeamSquad.textContent =
            data.players.length +
            " / 25";

    }

}


/* =====================================================
   TABS
   ===================================================== */

document
    .querySelectorAll(".tab-btn")
    .forEach(button => {

        button.addEventListener(
            "click",
            function () {


                document
                    .querySelectorAll(
                        ".tab-btn"
                    )
                    .forEach(btn => {

                        btn.classList.remove(
                            "active"
                        );

                    });


                document
                    .querySelectorAll(
                        ".tab-content"
                    )
                    .forEach(tab => {

                        tab.classList.remove(
                            "active"
                        );

                    });


                button.classList.add(
                    "active"
                );


                const tab =
                    document.getElementById(
                        button.dataset.tab
                    );


                if (tab) {

                    tab.classList.add(
                        "active"
                    );

                }

            }
        );

    });


/* =====================================================
   FINISH AUCTION
   ===================================================== */

function finishAuction() {

    clearInterval(
        timerInterval
    );

    clearTimeout(
        aiBidTimeout
    );


    auctionRunning =
        false;

    auctionPaused =
        false;


    enableButtons(false);


    const status =
        document.getElementById(
            "auctionStatus"
        );


    if (status) {

        status.textContent =
            "● AUCTION COMPLETE";

    }


    const indicator =
        document.getElementById(
            "biddingIndicator"
        );


    if (indicator) {

        indicator.textContent =
            "COMPLETE";

    }


    const message =
        document.getElementById(
            "bidMessage"
        );


    if (message) {

        message.textContent =
            "🎉 KPL27 AUCTION COMPLETED!";

    }


    renderTeamsDashboard();

    renderPlayersDashboard();

    renderHistory();

    updateMyTeamStats();


    alert(
        "🏆 KPL27 AUCTION COMPLETED!\n\n" +
        "All 150 players have been processed."
    );

}


/* =====================================================
   INITIALIZE
   ===================================================== */

renderTeamSelection();

renderHistory();

renderPlayersDashboard();
