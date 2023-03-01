const bits = [
  `<h1>currently thinking about...</h1>
        clones, goofy tile-based aliens, astigmatism, smartphone photographs and voice recordings, floating captions`,
  `<h1>faq</h1>
        Q: what does faq stand for?<br>
        A: frequently asked quewons`,
  `<div style="margin-top: 1rem; border: 1px solid var(--text); width: 100%; padding: 1rem; box-sizing: border-box;">please, don't turn off your adblock</div>`,
  `<h1><a onclick="window.location.href = links[links.length * Math.random() | 0].link">i'm feeling lucky!</a></h1>`
];

const category_names = {
  "game": "games",
  "prototype": "prototype shop",
  "experiment": "experiments",
  "writing": "words",
};

const collaborators = {
  "Corey Hardt": "https://coreyhardt.itch.io/",
  "kev": "https://twitter.com/shakespiel"
};

var links = [
  {
    name: "deerdesk",
    date: "2021/12/9",
    category: "game",
    link: "https://github.com/quewon/deerdesk",
    supplementary: {
      "soundtrack": "https://quewon.bandcamp.com/album/deerdesk"
    },
    tooltip: "a simple 3d game!! with scoreboards!! that i hosted for my school's two-day new media festival",
  },
  {
    name: "glasses and time anxiety",
    date: "2022/12/20",
    category: "writing",
    link: "https://cohost.org/fishfood/post/660690-empty"
  },
  {
    name: "인공지능_꿈일기",
    date: "2021/12/17",
    category: "experiment",
    link: "/ai-blue/",
    tooltip: "assignment for a class about color",
  },
  {
    name: "thoughts about you",
    date: "2021/1/28",
    category: "music",
    tooltip: "",
    link: "https://youtu.be/fy_C6yHbS9M",
  },
  {
    name: "새 같은 인간, 인간 같은 새",
    date: "2021/8/26",
    category: "music",
    link: "https://youtu.be/0pfaYAG76mc",
  },
  {
    name: "AFTER THE DAZZLE OF DAY",
    date: "2021/10/26",
    category: "video",
    link: "https://youtu.be/HZAlw9ky3uA",
    tooltip: "made in after effects for school, based on a Walt Whitman poem i found in a book i'm fond of, 'The Aurora County All Stars'",
  },
  {
    name: "song from a dream",
    date: "2022/1/31",
    category: "music",
    link: "https://youtu.be/s72DA0BTqfQ"
  },
  {
    name: "doodles of thumbelina",
    date: "2022/3/17",
    category: "music",
    link: "https://youtu.be/ouH_ZaQJ6tU"
  },
  {
    name: "in my bed",
    date: "2022/4/23",
    category: "music",
    link: "https://youtu.be/cJj0SwfckxU"
  },
  {
    name: "voice memos from this underground paprika garden",
    date: "2021/3/22",
    category: "music",
    link: "https://quewon.bandcamp.com/album/voice-memos-from-this-underground-paprika-garden"
  },
  {
    name: "flowertown",
    date: "2022/8/14",
    category: "music",
    link: "https://youtu.be/lKNOSNffSOI",
    supplementary: {
      "bandcamp": "https://quewon.bandcamp.com/album/flowertown"
    },
    tooltip: "4-track ep :)",
  },

  {
    name: "oxhi",
    date: "2020/2/4",
    category: "prototype",
    link: "/oxhi/"
  },
  {
    name: "warden",
    date: "2021/8/31",
    category: "prototype",
    link: "/warden/"
  },
  {
    name: "necromancy.club",
    date: "2020/8/16",
    category: "prototype",
    link: "/necromancy_club/"
  },
  {
    name: "petri",
    date: "2021/7/21",
    category: "experiment",
    link: "/petri/",
    tooltip: "based on Sebastian Lague's video on slime mold simulations",
  },
  {
    name: "ur stepping on my toast",
    date: "2021/7/13",
    category: "experiment",
    link: "/subway/"
  },
  {
    name: "abandoned alchemy game",
    date: "2021/8/9",
    category: "prototype",
    link: "/mor/"
  },
  {
    name: "sunflower emoji",
    date: "2020/11/16",
    category: "experiment",
    link: "/haebaragi/"
  },
  {
    name: "ascii-tilt",
    date: "2023/2/25",
    category: "experiment",
    link: "/ascii-tilt/"
  },
  {
    name: "drive",
    date: "2023/2/28",
    category: "game",
    link: "/drive/",
    featured: true,
    tooltip: "made for a 3 hour game jam (i took a day and a half)",
  },
  {
    name: "ghost club blues",
    date: "2021/1/13",
    category: "prototype",
    link: "/ghost-king/"
  },
  {
    name: "whales and broken hearts",
    date: "2020/11/18",
    category: "game",
    link: "/whales%20and%20broken%20hearts",
    supplementary: {
      "itch.io": "https://frogmen.itch.io/whales-and-broken-hearts"
    }
  },
  {
    name: "love under the robot junkyard",
    date: "2021/4/25",
    category: "game",
    link: "/love-under-the-robot-junkyard/",
    supplementary: {
      "itch.io": "https://frogmen.itch.io/love-under-the-robot-junkyard",
      "ldjam.com": "https://ldjam.com/events/ludum-dare/48/love-under-the-robot-junkyard",
      "soundtrack": "https://quewon.bandcamp.com/track/love-under-the-robot-junkyard"
    },
    tooltip: "made in 48 hours for ludum dare",
  },
  {
    name: "kidgame",
    date: "2021/5/23",
    category: "game",
    link: "/kid/",
    supplementary: {
      "itch.io": "https://frogmen.itch.io/kidgame"
    },
    tooltip: "made for pancelor's Memory Jam"
  },
  {
    name: "the substitute",
    date: "2021/6/13",
    category: "game",
    link: "/sub/",
    supplementary: {
      "itch.io": "https://frogmen.itch.io/the-substitute",
      "soundtrack": "https://quewon.bandcamp.com/track/the-sub"
    },
    with: ["kev"],
    tooltip: "made in 48 hours for the gmtk game jam",
  },
  {
    name: "egoware",
    date: "2021/9/7",
    category: "game",
    link: "/egoware",
    supplementary: {
      "itch.io": "https://frogmen.itch.io/egoware"
    }
  },
  {
    name: "distant blues",
    date: "2021/10/10",
    category: "game",
    link: "https://frogmen.itch.io/distant-blues"
  },
  {
    name: "raccoon laundering",
    date: "2022/1/25",
    category: "game",
    link: "https://frogmen.itch.io/raccoon-laundering"
  },
  {
    name: "who's afraid of repetition",
    date: "2022/5/8",
    category: "writing",
    link: "https://frogmen.itch.io/whos-afraid-of-repetition"
  },
  {
    name: "Tritris Orange",
    date: "2022/6/19",
    category: "game",
    link: "https://frogmen.itch.io/tritris-orange",
    supplementary: {
      "Goel's original Tritris": "https://leognon.com/tritris/",
      "lexaloffle.com": "https://www.lexaloffle.com/bbs/?tid=48219"
    }
  },
  {
    name: "gilga (길가)",
    date: "2022/7/17",
    category: "game",
    link: "https://frogmen.itch.io/gilga",
    with: ["Corey Hardt"],
    supplementary: {
      "soundtrack": "https://quewon.bandcamp.com/track/gilga"
    },
    tooltip: "made in 48 hours for the gmtk game jam",
  },
  {
    name: "nonexistence",
    date: "2022/8/29",
    category: "game",
    link: "https://frogmen.itch.io/nonexistence",
  },
  {
    name: "cat food",
    date: "2022/11/18",
    category: "game",
    link: "/cat-food",
    supplementary: {
      "itch.io": "https://frogmen.itch.io/cat-food"
    },
    tooltip: "made for Sylvie's Jam",
  },
  {
    name: "photograph of the sun",
    date: "2023/2/6",
    category: "game",
    link: "https://frogmen.itch.io/photograph-of-the-sun"
  },
];