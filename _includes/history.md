---
layout: base.html
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
    .three-column {
        margin-top: 2em;
    }
    .three-column, .three-column > div {
        display: flex;
        flex-direction: column;
        gap: 1em;
        height: fit-content;
    }

    h1 {
        font-size: 1.2em;
    }
    table, tr, td {
        font-family: var(--monospace);
        font-size: var(--monospace-size);
        padding: 0;
        border-collapse: collapse;
    }
    td:last-child {
        padding-left: 3ch;
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

{{ content }}

<script>
    var columnDiv = document.createElement("div");
    columnDiv.className = "three-column";
    document.body.appendChild(columnDiv);

    var currentElement = document.querySelector("h2");
    var currentDiv = document.createElement("div");
    columnDiv.appendChild(currentDiv);

    while (currentElement) {
        if (currentElement.tagName === "H2") {
            var details = document.createElement("details");
            details.setAttribute("open", true);
            var summary = document.createElement("summary");
            summary.textContent = currentElement.textContent;
            details.appendChild(summary);
            var list = currentElement.nextElementSibling;
            details.appendChild(list);
            currentDiv.appendChild(details);
        } else if (currentElement.tagName === "HR") {
            currentDiv = document.createElement("div");
            columnDiv.appendChild(currentDiv);
        } else {
            break;
        }
        var nextElement = currentElement.nextElementSibling;
        currentElement.remove();
        currentElement = nextElement;
    }
</script>