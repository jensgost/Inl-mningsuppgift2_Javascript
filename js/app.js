// instantiate classes//

const ft = new Fetch();
const ui = new UI();

// add event listeners //

const search = document.getElementById("csearch");
const button = document.getElementById("csubmit");

button.addEventListener("click", () => {
    const currentVal = search.value;

    ft.getCurrent(currentVal).then((data) => {
        // call an UI method //
        ui.populateUI(data);
    });
});