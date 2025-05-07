const latitude = 46.853;
const longitude = 9.530;
const slider = document.getElementById('uvSlider');
const emoji = document.getElementById('emoji');
const uvText = document.getElementById('uvIndexText');

let uvValues = [];

async function fetchUV() {
  try {
    const res = await fetch(`https://currentuvindex.com/api/v1/uvi?latitude=${latitude}&longitude=${longitude}`);
    const data = await res.json();

    if (data.ok) {
      uvValues = [data.now, ...data.forecast.slice(0, 5)];
      updateUI(0);
    } else {
      uvText.textContent = 'Fehler beim Laden des UV-Index: ' + data.message;
    }
  } catch (error) {
    uvText.textContent = 'Fehler beim Laden des UV-Index';
    console.error(error);
  }
}

function updateUI(index) {
  const uvData = uvValues[index];
  const uv = uvData.uvi;
  uvText.textContent = `UV-Index: ${uv}`;

  if (uv <= 2) emoji.src = 'images/face0.png';
  else if (uv <= 5) emoji.src = 'images/face1.png';
  else if (uv <= 7) emoji.src = 'images/face2.png';
  else if (uv <= 10) emoji.src = 'images/face3.png';
  else emoji.src = 'images/face4.png';

  const percent = (index / (uvValues.length - 1)) * 100;
  slider.style.backgroundSize = `${percent}% 100%`;
}

slider.addEventListener('input', (e) => {
  const value = parseInt(e.target.value);
  updateUI(value);
});

fetchUV();
