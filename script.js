const latitude = 46.8508;
const longitude = 9.5310;
const slider = document.getElementById('uv-slider');
const emoji = document.getElementById('emoji');
const uvText = document.getElementById('uv-text');
const uvValue = document.getElementById("uv-value");
const uvTime = document.getElementById("uv-time");
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
  uvValue.textContent = Math.round(uv);
  const timeObj = new Date(uvData.time);
  const hours = timeObj.getHours().toString().padStart(2, '0');
  const timeStr = `${hours}:00`;
  uvTime.textContent = timeStr;

  if (uv <= 2) emoji.src = 'images/face0.PNG';
  else if (uv <= 5) emoji.src = 'images/face1.PNG';
  else if (uv <= 7) emoji.src = 'images/face2.PNG';
  else if (uv <= 10) emoji.src = 'images/face3.PNG';
  else emoji.src = 'images/face4.PNG';

  const percent = (index / (uvValues.length - 1)) * 100;
  slider.style.backgroundSize = `50px 50px, 50px 50px, ${percent}% 100%`;
}

slider.addEventListener('input', (e) => {
  const value = parseInt(e.target.value);
  updateUI(value);
});

fetchUV();

// Touch/Click Toggle nur für Geräte ohne Hover (z. B. Smartphones)
let uvVisible = false;

if (window.matchMedia("(hover: none)").matches) {
  emoji.addEventListener("click", () => {
    uvVisible = !uvVisible;
    const box = document.getElementById("uvInfoBox");

    const shift = window.innerWidth < 600 ? -80 : -150;

    if (uvVisible) {
      emoji.style.transform = `translateX(${shift}px)`;
      box.style.opacity = "1";
      box.style.pointerEvents = "auto";
    } else {
      emoji.style.transform = "translateX(0)";
      box.style.opacity = "0";
      box.style.pointerEvents = "none";
    }
  });
}