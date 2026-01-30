// const apps = [
//   { name: "Telegram", icon: "tg.png", link: "tg.exe" },
//   { name: "Discord", icon: "ds.png", link: "ds.exe" }
// ];

// const list = document.getElementById('app-list');

// apps.forEach(app => {
//   const li = document.createElement('li');
//   li.className = 'app-card';
//   li.innerHTML = `
//     <img src="${app.icon}" class="app-icon">
//     <div class="app-info">
//       <h3 class="app-title">${app.name}</h3>
//       <a href="${app.link}" download class="download-btn">Скачать</a>
//     </div>
//   `;
//   list.appendChild(li);
// });




document.addEventListener('DOMContentLoaded', () => {
  const apps = [
    { name: "Telegram", icon: "tg.png", description: "Telegram Virus Remod", link: "tg.exe" },
    { name: "Discord", icon: "ds.png", description: "Discord Virus Remod", link: "ds.exe" }
  ];

  const list = document.getElementById('app-list');

  // Теперь list точно не будет null
  if (list) {
    apps.forEach(app => {
      const li = document.createElement('li');
      li.className = 'app-card';
      li.innerHTML = `
        <img src="${app.icon}" class="app-icon">
        <div class="app-info">
          <h3 class="app-title">${app.name}</h3>
          <a class="app-description">${app.description}</a>
          <a href="${app.link}" download class="download-btn">Скачать</a>
        </div>
      `;
      list.appendChild(li);
    });
  } else {
    console.error("Элемент #app-list не найден в HTML!");
  }
});
