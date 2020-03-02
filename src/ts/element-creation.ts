const createElement = (element: string, cssClasses?: string[], innerText?: string) => {
  const e = document.createElement(element);

  if (cssClasses) {
    e.classList.add(...cssClasses);
  }

  if (innerText) {
    e.innerText = innerText;
  }

  return e;
}

export default createElement;