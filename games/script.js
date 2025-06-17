// Sound setup with Howler.js
const bgm = new Howl({
  src: ['/games/ost.mp3'],
  loop: true,
  volume: 0.5
});
bgm.play();

// Character select logic
const chars = document.querySelectorAll('.char');
let index = 0;

function updateSelection() {
  chars.forEach((char, i) => {
    char.classList.toggle('selected', i === index);
  });
}

updateSelection();

document.addEventListener('keydown', (e) => {
  const cols = 3;
  const total = chars.length;

  switch (e.key) {
    case 'ArrowRight':
      index = (index + 1) % total;
      break;
    case 'ArrowLeft':
      index = (index - 1 + total) % total;
      break;
    case 'ArrowUp':
      index = (index - cols + total) % total;
      break;
    case 'ArrowDown':
      index = (index + cols) % total;
      break;
    case 'Enter':
        const selectedChar = chars[index].dataset.name;
        const selectedNum = chars[index].dataset.index;
        document.getElementById('selected').textContent = `Selected: ${selectedChar}`;
        chars[selectedNum].click(); // this will trigger the click handler if one is attached
      break;
  }
  updateSelection();
});

// Mouse hover support
chars.forEach((char, i) => {
  char.addEventListener('mouseenter', () => {
    index = i;
    updateSelection();
  });

  char.addEventListener('click', () => {
    selectCharacter(i);
  });
});

function selectCharacter(i) {
  const selectedChar = chars[i].dataset.name;
  document.getElementById('selected').textContent = `Selected: ${selectedChar}`;
}
