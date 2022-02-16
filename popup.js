onload = () => {
    document.body.addEventListener("click", ev => {
        let { target } = ev;
        let dataset = target.dataset;
        if (dataset.url) {
            open(dataset.url);
        }
    })
}
