window.onload = () => {
  // get_navbar();
  toggle_views('overview');
};

const menu_items = document.querySelectorAll("[data-bs-toggle='pill']");
menu_items.forEach((item) => {
  item.onclick = () => {
    toggle_views(item.dataset.item);
  };
});

const toggle_views = (src) => {
  try {
    fetch(`./views/${src}.html`, {
      method: 'GET',
      headers: { 'Content-Type': 'text/html; charset=UTF-8' },
    })
      .then((res) => res.text())
      .then((data) => {
        document.querySelector(`#v-pills-${src}`).innerHTML = data;
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  } catch (err) {
    console.error(error);
  }
};

// const get_navbar = () => {
//   try {
//     fetch('../index.html', {
//       method: 'GET',
//       headers: { 'Content-Type': 'text/html; charset=UTF-8' },
//     })
//       .then((res) => res.text())
//       .then((data) => {
//         document.querySelector('#nav').innerHTML = data;
//       })
//       .catch((error) => {
//         console.error('Error:', error);
//       });
//   } catch (err) {
//     console.error(error);
//   }
// };

// overviewChart
// let ctx = document.querySelector('overviewChart');
// window.onload = () => console.log(ctx);

// let overviewChart = new Chart(ctx, {
//   type: 'bar',
//   data: {
//     labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//     datasets: [
//       {
//         label: '# of Votes',
//         data: [12, 19, 3, 5, 2, 3],
//         backgroundColor: [
//           'rgba(255, 99, 132, 0.2)',
//           'rgba(54, 162, 235, 0.2)',
//           'rgba(255, 206, 86, 0.2)',
//           'rgba(75, 192, 192, 0.2)',
//           'rgba(153, 102, 255, 0.2)',
//           'rgba(255, 159, 64, 0.2)',
//         ],
//         borderColor: [
//           'rgba(255, 99, 132, 1)',
//           'rgba(54, 162, 235, 1)',
//           'rgba(255, 206, 86, 1)',
//           'rgba(75, 192, 192, 1)',
//           'rgba(153, 102, 255, 1)',
//           'rgba(255, 159, 64, 1)',
//         ],
//         borderWidth: 1,
//       },
//     ],
//   },
//   options: {
//     scales: {
//       y: {
//         beginAtZero: true,
//       },
//     },
//   },
// });
