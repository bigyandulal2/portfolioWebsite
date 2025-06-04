const heroParagraph = document.getElementById("hero-para");
let count = 0;
let data = "I am a web developer";

function fetchData() {
  heroParagraph.textContent = `${data.slice(0, count + 1)} |`;
  count++;

  if (count <= data.length) {
    setTimeout(fetchData, 400);
  } else {
    setTimeout(() => {
      count = 0;
      heroParagraph.textContent = "";
      fetchData();
    }, 2000); // delay before restarting
  }
}

fetchData();
