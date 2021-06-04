const val = document.querySelector('div');
(async function fetchEmployee() {
    const response = await fetch('https://randomuser.me/api/?results=5')
    const { results } = await response.json();
    console.log(results)

    results.forEach(employee => {
        val.innerHTML += render(employee)

    })
})();

function render(employee) {
    return `
    <img src="${employee.picture.large}" />
    <p>${employee.name.title} ${employee.name.first} ${employee.name.last}  </p>
    <p>Phone: ${employee.phone} </p>
   <p>email: ${employee.email} </p>
   
    `
}
const refersh = document.querySelector('button')
refersh.addEventListener('click', refreshPage)

function refreshPage() {
    window.location.reload();
}
