---
layout: base.html
title: q1's history
---

<script>
    window.addEventListener("beforeprint", () => {
        for (let element of document.querySelectorAll("details")) {
            element.dataset.openBeforePrint = element.open;
            element.open = true;
        }
    })
    
    window.addEventListener("afterprint", () => {
        for (let element of document.querySelectorAll("details")) {
            element.open = element.dataset.openBeforePrint == "true" ? true : false;
        }
    })
</script>

<style>
    body {
        font-family: sans-serif;
    }

    .three-column, .three-column > div {
        display: flex;
        flex-direction: column;
        gap: 1em .5em;
    }

    details {
        height: fit-content;
    }

    ul {
        padding: 0;
    }

    ul ul {
        padding-left: 2.5em;
    }

    li {
        margin-bottom: 1em;
    }
    ul li::before {
        display: none;
    }

    nav {
        display: none;
    }

    @media (min-width: 50em), print {
        body {
            max-width: unset;
        }
        .three-column {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
        }
        .print-button {
            position: fixed; 
            right: var(--body-margin); 
            top: var(--body-margin);
        }
    }

    @media print {
        body {
            font-size: 11pt;
        }
        .print-button {
            display: none;
        }
    }
</style>

<div class="print-button" class="hide-on-print">
    <button onclick="print()">Download this CV!</button><br><br>
</div>

### Quewon "Q1" Chin

Currently based in Paris, France.

Email:&nbsp; [quewon.chin@gmail.com](mailto:quewon.chin@gmail.com)  
LinkedIn:&nbsp; [linkedin.com/in/quewon-chin](https://www.linkedin.com/in/quewon-chin/)  
GitHub:&nbsp; [github.com/quewon](https://github.com/quewon)  
Website:&nbsp; [quewon.github.io](/)

<div class="three-column">
<details open>
    <summary>Games</summary>

- 2024

    - [how to use the subway](https://frogmen.itch.io/subway)

- 2023

    - [drive](https://quewon.github.io/drive/)
    - [photograph of the sun](https://frogmen.itch.io/photograph-of-the-sun)

- 2022

    - [cat food](https://frogmen.itch.io/cat-food)
    - [gilga 길가](https://frogmen.itch.io/gilga), with Corey Hardt
    - [Tritris Orange](https://frogmen.itch.io/tritris-orange)
    - [RACCOON LAUNDERING](https://frogmen.itch.io/raccoon-laundering)

- 2021

    - deerdesk
    - [distant blues](https://frogmen.itch.io/distant-blues)
    - [the substitute](https://frogmen.itch.io/the-substitute), with Kev
    - [kidgame](https://frogmen.itch.io/kidgame)
    - [love under the robot junkyard](https://frogmen.itch.io/love-under-the-robot-junkyard)

- 2020

    - [whales and broken hearts](https://frogmen.itch.io/whales-and-broken-hearts)

</details>

<details open>
    <summary>Web Projects</summary>

- [Artist Portfolio Website](https://aylas-wip-portfolio.netlify.app/), 2025  
  Development, design
- [untitled social](/projects/2024-untitled-social), 2024–Present  
  Development, design
- [Korea Art Directors Association (KADA) Homepage](https://kada-art.org/), 2024  
  Development, design
- [Data Garden](/projects/2025-data-garden), 2024  
  Development
- [《가치의 재생》 Exhibition Website](https://dima-newcon.github.io/2023/), 2023  
  Development
- [NKTech Power Cylinders Catalogue Website](http://www.nkpt.com/), 2023  
  Development

</details>

<div>

<details open>
    <summary>Education</summary>

- Dong-ah Institute of Media and Arts  
  BA in Media Contents Production, 2024–2025  
  AA in New Media Contents, 2021–2024

</details>

<details open>
    <summary>Exhibitions</summary>

- *Play. Net : Zero-sum Game*, RnL Rosenlime Gallery, 2024
- (주)첨단메모리시스템, MatMul Gallery, 2024
- 가치의 재생, Gyeonggi Art Center, 2023
- 뉴미디어 유니버스, Gyeonggi Art Center, 2022
- *Dear Deer*, Dong-ah Institute of Media and Arts, 2021

</details>

<details open>
    <summary>Publications</summary>

- [Indiepocalypse #50](https://pizzapranks.itch.io/indiepocalypse-50), 2024
- [Paradise Digest](https://paradise-collab.itch.io), Summer 2024

</details>

</div>
</div>