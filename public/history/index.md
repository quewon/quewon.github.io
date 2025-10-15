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
    .three-column, .three-column > div {
        display: flex;
        flex-direction: column;
        gap: 1em;
    }

    ul {
        padding: 0;
    }
    ul ul {
        padding-left: 2.5em;
    }
    li {
        margin-bottom: calc(var(--line-height) / 2);
        list-style-type: none;
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
            font-size: 9pt;
            text-align: left;
        }
        .print-button {
            display: none;
        }
        a::after {
            content: none !important;
        }
    }
</style>

<div class="print-button">
    <button onclick="print()">Download this CV!</button><br><br>
</div>

### Quewon "Q1" Chin

Web & game developer currently based in Paris, France.

<div class="monospace">

    Email:&nbsp;&nbsp;&nbsp;&nbsp; [quewon.chin@gmail.com](mailto:quewon.chin@gmail.com)  
    GitHub:&nbsp;&nbsp;&nbsp; [github.com/quewon](https://github.com/quewon)  
    Website:&nbsp;&nbsp; [quewon.github.io](/)

</div>

<br>

<div class="three-column">
<details open>
    <summary>Games</summary>

- 2025

    - [10,000 rooms you could call home](https://frogmen.itch.io/10000-rooms-you-could-call-home)
    - [minecraft screenshots folder](https://frogmen.itch.io/minecraft-screenshots-folder)
    - [transitory thoughts](https://frogmen.itch.io/transitory-thoughts)

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
    <summary>Web</summary>

- [Artist Portfolio Website](https://aylas-wip-portfolio.netlify.app/), 2025  
  Development, design
- [untitled social](/projects/untitled%20social), 2024–Present  
  Development, design
- [Korea Art Directors Association (KADA) Homepage](https://kada-art.org/), 2024  
  Development, design
- [Data Garden](/projects/data%20garden), 2024  
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
  BA in Media Contents Production, 2021–2025

</details>

<details open>
    <summary>Exhibitions</summary>

- *Play. Net : Zero-sum Game*, RnL Rosenlime Gallery, 2024
- (주)첨단메모리시스템, MatMul Gallery, 2024
- 가치의 재생, Gyeonggi Art Center, 2023
- 뉴미디어 유니버스, Gyeonggi Art Center, 2022
- *Dear Deer*, Dong-ah Institute of Media and Arts, 2021

</details>

</div>
</div>