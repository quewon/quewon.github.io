const PAGENAME = location.pathname.replaceAll("/", "");

var detailsList = document.querySelectorAll("details");
for (let i=0; i<detailsList.length; i++) {
    const key = "details_" + PAGENAME + "_" + i;
    const element = detailsList[i];
    element.addEventListener("toggle", () => {
        if (element.open) {
            localStorage.setItem(key, true);
        } else {
            localStorage.removeItem(key);
        }
    });
    if (localStorage.getItem(key)) {
        element.open = true;
    }
}