function addPerson() {
  let peopleDiv = document.querySelector("#div-of-people");

  for (let customer of customers) {
    let div = document.createElement("div");
    peopleDiv.appendChild(div);
    div.setAttribute("class", "person-div");
    let person = document.querySelector(".person-div");
    let img = document.createElement("img");
    img.src = customer.picture.large;
    peopleDiv.lastElementChild.appendChild(img);
    let h2 = document.createElement("h2");
    peopleDiv.lastElementChild.appendChild(h2);
    h2.innerText = customer.name.first + " " + customer.name.last;
    let p = document.createElement("p");
    peopleDiv.lastElementChild.appendChild(p);
    p.innerText = customer.email;
  }
}

addPerson();
