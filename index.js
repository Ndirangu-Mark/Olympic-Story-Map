const map = L.map('map').setView([0, 0], 2);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

const olympicsData = [
  { year: 2000, city: "Sydney", country: "Australia", highlights: "First appearance of triathlon.", latitude: -33.8688, longitude: 151.2093, media: "images/sydney.avif" },
  { year: 2004, city: "Athens", country: "Greece", highlights: "Return to Athens after 108 years.", latitude: 37.9838, longitude: 23.7275, media: "images/athens.jpg" },
  { year: 2008, city: "Beijing", country: "China", highlights: "Notable for its grand opening ceremony and high-tech infrastructure.", latitude: 39.9042, longitude: 116.4074, media: "images/beijing.jpeg" },
  { year: 2012, city: "London", country: "United Kingdom", highlights: "The opening ceremony, directed by Boyle, celebrated British culture.", latitude: 51.5072, longitude: -0.1276 , media: "images/London2.jpeg" },
  { year: 2016, city: "Rio de Janeiro", country: "Brazil", highlights: "The first Olympics held in South America.", latitude: -22.9068, longitude: -43.1729 , media: "images/rio.avif" },
  { year: 2020, city: "Tokyo", country: "Japan", highlights: "Held in 2021 due to COVID-19 pandemic.", latitude: 35.6764, longitude: 139.6500, media: "images/tokyo.jpg" },
  { year: 2024, city: "Paris", country: "France", highlights: "Breakdancing makes its Olympic debut.", latitude: 48.8575, longitude: 2.3514, media: "images/paris.jpg" },
];

olympicsData.forEach(event => {
  const marker = L.marker([event.latitude, event.longitude]).addTo(map);
  marker.on('click', () => {
    document.getElementById('story-content').innerHTML = `
      <h2>${event.year} Olympics - ${event.city}</h2>
      <p>${event.highlights}</p>
      <img src="${event.media}" alt="${event.city}" />
    `;
    map.setView([event.latitude, event.longitude], 5);
  });
});