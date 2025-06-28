export function persistDetails(node, key) {
    key = "details-"+key;
    
    node.addEventListener("toggle", toggle);

    function toggle() {
        if (node.open) {
            localStorage.setItem(key, true);
        } else {
            localStorage.removeItem(key);
        }
    }

    if (localStorage.getItem(key))
        node.open = true;

    return {
        destroy: () => {
            node.removeEventListener('toggle', toggle);
        }
    };
}