let projects = document.querySelector('aside ul')
// projectCount adjusted to account for items being added
let projectCount = (projects.children.length) * 2

for (let i = 2; i < projectCount; i += 3) {
  let newItem = document.createElement("LI")
  let hr = document.createElement('HR')

  newItem.appendChild(hr);
  projects.insertBefore(newItem, projects.childNodes[i])
}
