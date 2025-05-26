const latitude = 46.8508;
const longitude = 9.5310;
const slider = document.getElementById('uvSlider');
const emoji = document.getElementById('emoji');
const uvText = document.getElementById('uvIndexText');

let uvValues = [];

async function fetchUV() {
  try {
    const res = await fetch(`https://currentuvindex.com/api/v1/uvi?latitude=${latitude}&longitude=${longitude}`);
    const data = await res.json();

    if (data.ok) {
      const forecast = [data.now, ...data.forecast];
      forecast.sort((a, b) => new Date(a.time) - new Date(b.time));
      uvValues = forecast.slice(0, 6);
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
  document.getElementById("uvValue").textContent = Math.round(uv);
  const timeObj = new Date(uvData.time);
  const hours = timeObj.getHours().toString().padStart(2, '0');
  const timeStr = `${hours}:00`;
  document.getElementById("uvTime").textContent = timeStr;

  if (uv <= 2) emoji.src = 'images/face0.png';
  else if (uv <= 5) emoji.src = 'images/face1.png';
  else if (uv <= 7) emoji.src = 'images/face2.png';
  else if (uv <= 10) emoji.src = 'images/face3.png';
  else emoji.src = 'images/face4.png';

  const percent = (index / (uvValues.length - 1)) * 100;
  slider.style.backgroundSize = `50px 50px, 50px 50px, ${percent}% 100%`;
}

slider.addEventListener('input', (e) => {
  const value = parseInt(e.target.value);
  updateUI(value);
});

fetchUV();
