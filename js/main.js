const categories = document.querySelectorAll(".category");

categories.forEach(category => {
  category.addEventListener("click", categoryClickHandler);
});

function categoryClickHandler() {
  this.firstElementChild.checked = true;
  const siblingElements = getSiblings(this);
  siblingElements.forEach(siblingElement => {
    siblingElement.classList.remove("checked");
  });
  this.classList.add("checked");
}

const getSiblings = function(elem) {
  // Setup siblings array and get the first sibling
  const siblings = [];
  let sibling = elem.parentNode.firstChild;

  // Loop through each sibling and push to the array
  while (sibling) {
    if (sibling.nodeType === 1 && sibling !== elem) {
      siblings.push(sibling);
    }
    sibling = sibling.nextSibling;
  }

  return siblings;
};
