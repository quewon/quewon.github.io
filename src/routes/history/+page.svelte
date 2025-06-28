<script>
    import { getContext } from 'svelte';
	getContext('shared').title = undefined;

    import { persistDetails } from '$lib/actions/persistDetails.js';
    import { onMount } from 'svelte';
    import LinkCard from '$lib/components/LinkCard.svelte';

    function beforePrint() {
        const detailsList = document.querySelectorAll("details");
        for (let i=0; i<detailsList.length; i++) {
            const element = detailsList[i];
            element.dataset.openBeforePrint = element.open;
            element.open = true;
        }
    }

    function afterPrint() {
        const detailsList = document.querySelectorAll("details");
        for (let i=0; i<detailsList.length; i++) {
            const element = detailsList[i];
            element.open = element.dataset.openBeforePrint == "true" ? true : false;
        }
    }

    onMount(() => {
        document.body.classList.add('history-page');

        document.querySelectorAll("details").forEach((node, i) => {
            const action = persistDetails(node, i);            
            node._persistAction = action;
        });
        
        return () => {
            document.querySelectorAll("details").forEach(node => {
                if (node._persistAction?.destroy) {
                    node._persistAction.destroy();
                }
            });
            document.body.classList.remove('history-page');
        };
    });
</script>

<style>
    @media (min-width: 50em), print {
        :global(body.history-page) {
            max-width: unset;
        }
        main {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 1em;
        }
    }

    @media print {
        :global(body.history-page) {
            font-size: 8pt;
        }
    }

    ul {
        padding: 0;
    }

    ul ul {
        padding-left: 2.5em;
    }

    li {
        margin-bottom: .5em;
    }
    li::before {
        display: none;
    }
</style>

<svelte:window onbeforeprint={beforePrint} onafterprint={afterPrint}></svelte:window>

<p>
    <b>Quewon "Q1" Chin</b><br>
    Web & Game Developer
</p>

<p>
    <b>Web</b> <a href="https://quewon.github.io/">quewon.github.io</a><br>
    <b>Email</b> <a href="mailto:quewon.chin@gmail.com">quewon.chin@gmail.com</a>
</p>

<p>
    <b>Born</b> Suwon, South Korea, 2002<br>
    <b>Lives</b> Paris, France
</p>

<main>
    <details>
        <summary>Games</summary>

        <ul>
            <li>
                <p>2024</p>
                <ul>
                    <LinkCard><a href="https://frogmen.itch.io/subway" target="_blank">how to use the subway</a></LinkCard>
                </ul>
            </li>
            <li>
                <p>2023</p>
                <ul>
                    <LinkCard><a href="https://quewon.github.io/drive/" target="_blank">drive</a></LinkCard>
                    <LinkCard><a href="https://frogmen.itch.io/photograph-of-the-sun" target="_blank">photograph of the sun</a></LinkCard>
                </ul>
            </li>
            <li>
                <p>2022</p>
                <ul>
                    <LinkCard><a href="https://frogmen.itch.io/cat-food" target="_blank">cat food</a></LinkCard>
                    <LinkCard><a href="https://frogmen.itch.io/nonexistence" target="_blank">nonexistence</a></LinkCard>
                    <LinkCard><a href="https://frogmen.itch.io/gilga" target="_blank">gilga 길가</a>, with Corey Hardt</LinkCard>
                    <LinkCard><a href="https://frogmen.itch.io/tritris-orange" target="_blank">Tritris Orange</a></LinkCard>
                    <LinkCard><a href="https://frogmen.itch.io/raccoon-laundering" target="_blank">RACCOON LAUNDERING</a></LinkCard>
                </ul>
            </li>
            <li>
                <p>2021</p>
                <ul>
                    <li>deerdesk</li>
                    <LinkCard><a href="https://frogmen.itch.io/distant-blues" target="_blank">distant blues</a></LinkCard>
                    <LinkCard><a href="https://frogmen.itch.io/egoware" target="_blank">egoware</a></LinkCard>
                    <LinkCard><a href="https://frogmen.itch.io/the-substitute" target="_blank">the substitute</a>, with Kev</LinkCard>
                    <LinkCard><a href="https://frogmen.itch.io/kidgame" target="_blank">kidgame</a></LinkCard>
                    <LinkCard><a href="https://frogmen.itch.io/love-under-the-robot-junkyard" target="_blank">love under the robot junkyard</a></LinkCard>
                </ul>
            </li>
            <li>
                <p>2020</p>
                <ul>
                    <LinkCard><a href="https://frogmen.itch.io/whales-and-broken-hearts" target="_blank">whales and broken hearts</a></LinkCard>
                </ul>
            </li>
        </ul>
    </details>

    <details>
        <summary>Selected Web Projects</summary>

        <ul>
            <LinkCard>
                <a href="https://aylas-wip-portfolio.netlify.app/" target="_blank">Gülşah Ayla Bayrak</a>, artist portfolio website<br>
                Development, design
            </LinkCard>

            <LinkCard>
                <a href="/projects/2024-untitled-social">untitled social</a>, an alternative social media platform<br>
                Development, design
            </LinkCard>
        
            <LinkCard>
                <a href="https://kada-art.org/" target="_blank">Korea Art Directors Association (KADA) Homepage</a><br>
                Development, design
            </LinkCard>

            <LinkCard>
                <a href="/projects/2025-data-garden">Data Garden</a>, media art installation<br>
                Development
            </LinkCard>

            <LinkCard>
                <a href="https://dima-newcon.github.io/2023/">가치의 재생</a>, exhibition website<br>
                Development
            </LinkCard>
        
            <LinkCard>
                <a href="http://www.nkpt.com/" target="_blank">NKTech Power Cylinders</a>, catalogue website<br>
                Development
            </LinkCard>
        </ul>
    </details>

    <details>
        <summary>Education</summary>

        <ul>
            <li>
                Dong-ah Institute of Media and Arts<br>
                B.A. in Media Contents Production, 2024-2025<br>
                A.A. in New Media Contents, 2021–2024
            </li>
        </ul>
    </details>

    <details>
        <summary>Exhibitions</summary>

        <ul>
            <li><i>Play. Net : Zero-sum Game</i>, RnL Rosenlime Gallery, 2024</li>
            <li>(주)첨단메모리시스템, MatMul Gallery, 2024</li>
            <li>가치의 재생, Gyeonggi Art Center, 2023</li>
            <li>뉴미디어 유니버스, Gyeonggi Art Center, 2022</li>
            <li><i>Dear Deer</i>, Dong-ah Institute of Media and Arts, 2021</li>
        </ul>
    </details>

    <details>
        <summary>Publications</summary>

        <ul>
            <LinkCard><a href="https://pizzapranks.itch.io/indiepocalypse-50" target="_blank">Indiepocalypse #50</a>, 2024</LinkCard>
            <LinkCard><a href="https://paradise-collab.itch.io" target="_blank">Paradise Digest</a>, Summer 2024</LinkCard>
        </ul>
    </details>
</main>