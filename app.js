// Initialize the Scrollama instance
const scroller = scrollama();

scroller
  .setup({
    step: ".step",
    offset: 0.5,
    debug: false,
  })
  .onStepEnter((response) => {
    const { index, element } = response;
    updateContent(index);
  });

function updateContent(index) {
  switch (index) {
    case 0:
      showIntroduction();
      break;
    case 1:
      showRainierValley();
      break;
    case 2:
      showTukwila();
      break;
    case 3:
      showPolicyInterventions();
      break;
    case 4:
      showSafety();
      break;
    case 5:
      showRefugeeIncidents();
      break;
    case 6:
      showLivability();
      break;
    case 7:
      showAffordability();
      break;
    case 8:
      showAccommodations();
      break;
    case 9:
      showReligiousDuties();
      break;
    case 10:
      showCulturalAccommodations();
      break;
    case 11:
      showConclusions();
      break;
  }
}

// Leaflet map initialization
const map = L.map("map").setView([47.6062, -122.3321], 11);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

function showIntroduction() {
  map.setView([47.6062, -122.3321], 11);
  L.marker([47.6062, -122.3321]).addTo(map).bindPopup("Seattle").openPopup();

  // Example: Refugee immigration statistics
  const chart = c3.generate({
    bindto: "#chart",
    data: {
      columns: [
        ["Refugees", 500, 1000, 1500, 2000, 2500, 3000],
        ["Year", "2015", "2016", "2017", "2018", "2019", "2020"],
      ],
      type: "bar",
    },
    axis: {
      x: {
        type: "category",
        categories: ["2015", "2016", "2017", "2018", "2019", "2020"],
      },
    },
  });
}

function showRainierValley() {
  map.setView([47.539, -122.273], 14);
  L.marker([47.539, -122.273])
    .addTo(map)
    .bindPopup("Rainier Valley")
    .openPopup();

  // Example: Diversity chart
  const chart = c3.generate({
    bindto: "#chart",
    data: {
      columns: [
        ["Somalia", 30],
        ["Vietnam", 20],
        ["Ethiopia", 15],
        ["Other", 35],
      ],
      type: "pie",
    },
  });
}

function showTukwila() {
  map.setView([47.478, -122.272], 14);
  L.marker([47.478, -122.272]).addTo(map).bindPopup("Tukwila").openPopup();

  // Example: Refugee services map
  const refugeeServices = [
    {
      lat: 47.478,
      lng: -122.272,
      name: "Riverton Park United Methodist Church",
    },
    { lat: 47.476, lng: -122.274, name: "Tukwila Community Center" },
  ];

  refugeeServices.forEach((service) => {
    L.marker([service.lat, service.lng])
      .addTo(map)
      .bindPopup(service.name)
      .openPopup();
  });

  // Example: Financial stability chart
  const chart = c3.generate({
    bindto: "#chart",
    data: {
      columns: [
        ["Income Level", 10000, 20000, 30000, 40000, 50000],
        ["Year", "2015", "2016", "2017", "2018", "2019", "2020"],
      ],
      type: "line",
    },
    axis: {
      x: {
        type: "category",
        categories: ["2015", "2016", "2017", "2018", "2019", "2020"],
      },
    },
  });
}

function showPolicyInterventions() {
  const chart = c3.generate({
    bindto: "#chart",
    data: {
      columns: [
        ["Affordable Housing", 30, 200, 100, 400, 150, 250],
        ["Community Support", 50, 20, 10, 40, 15, 25],
      ],
      type: "bar",
    },
    bar: {
      width: {
        ratio: 0.5,
      },
    },
  });
}

function showSafety() {
  map.setView([47.6062, -122.3321], 11);
  L.marker([47.6062, -122.3321]).addTo(map).bindPopup("Seattle").openPopup();

  // Example: Crime rate comparison chart
  const chart = c3.generate({
    bindto: "#chart",
    data: {
      columns: [
        ["Crime Rate", 20, 30, 40, 10, 50],
        ["Year", "2015", "2016", "2017", "2018", "2019"],
      ],
      type: "bar",
    },
    axis: {
      x: {
        type: "category",
        categories: ["2015", "2016", "2017", "2018", "2019"],
      },
    },
  });
}

function showRefugeeIncidents() {
  map.setView([47.6062, -122.3321], 11);

  // Example: Refugee-related incidents map
  const incidents = [
    { lat: 47.611, lng: -122.337, description: "Incident 1" },
    { lat: 47.621, lng: -122.351, description: "Incident 2" },
  ];

  incidents.forEach((incident) => {
    L.marker([incident.lat, incident.lng])
      .addTo(map)
      .bindPopup(incident.description)
      .openPopup();
  });
}

function showLivability() {
  map.setView([47.6062, -122.3321], 11);
  // Example: Livability factors chart
  const chart = c3.generate({
    bindto: "#chart",
    data: {
      columns: [
        ["Housing", 30, 200, 100, 400, 150, 250],
        ["Employment", 50, 20, 10, 40, 15, 25],
      ],
      type: "bar",
    },
  });
}

function showAffordability() {
  map.setView([47.6062, -122.3321], 11);
  // Example: Housing price trends chart
  const chart = c3.generate({
    bindto: "#chart",
    data: {
      columns: [
        ["Median House Price", 300000, 320000, 340000, 360000, 380000, 400000],
        ["Year", "2015", "2016", "2017", "2018", "2019", "2020"],
      ],
      type: "line",
    },
    axis: {
      x: {
        type: "category",
        categories: ["2015", "2016", "2017", "2018", "2019", "2020"],
      },
    },
  });
}

function showAccommodations() {
  map.setView([47.6062, -122.3321], 11);
  // Example: Services availability chart
  const chart = c3.generate({
    bindto: "#chart",
    data: {
      columns: [
        ["Healthcare", 10, 20, 30, 40, 50],
        ["Education", 15, 25, 35, 45, 55],
      ],
      type: "bar",
    },
  });
}

function showReligiousDuties() {
  map.setView([47.6062, -122.3321], 11);

  // Example: Places of worship map
  const placesOfWorship = [
    { lat: 47.611, lng: -122.337, name: "Mosque" },
    { lat: 47.621, lng: -122.351, name: "Church" },
  ];

  placesOfWorship.forEach((place) => {
    L.marker([place.lat, place.lng])
      .addTo(map)
      .bindPopup(place.name)
      .openPopup();
  });
}

function showCulturalAccommodations() {
  map.setView([47.6062, -122.3321], 11);
  // Example: Cultural centers chart
  const chart = c3.generate({
    bindto: "#chart",
    data: {
      columns: [
        ["Cultural Centers", 5, 10, 15, 20, 25],
        ["Year", "2015", "2016", "2017", "2018", "2019", "2020"],
      ],
      type: "bar",
    },
  });
}

function showConclusions() {
  map.setView([47.6062, -122.3321], 11);
  L.marker([47.6062, -122.3321]).addTo(map).bindPopup("Seattle").openPopup();
}
