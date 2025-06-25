const toggle = document.getElementById("mobile-toggle");
const mobileMenu = document.getElementById("mobile-menu");

toggle.addEventListener("click", function () {
  mobileMenu.classList.toggle("active");
});


// Chart
const ctx = document.getElementById("growthChart").getContext("2d");
new Chart(ctx, {
  type: "line",
  data: {
    labels: ["Q1", "Q2", "Q3", "Q4"],
    datasets: [
      {
        label: "Growth Rate (%)",
        data: [15, 25, 40, 55],
        borderColor: "#2c7be5",
        backgroundColor: "rgba(44, 123, 229, 0.1)",
        tension: 0.4,
        fill: true,
        pointRadius: 5,
        pointHoverRadius: 7,
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        labels: {
          color: "#333",
          font: {
            size: 14,
          },
        },
      },
    },
    scales: {
      x: {
        ticks: { color: "#666" },
        grid: { display: false },
      },
      y: {
        beginAtZero: true,
        ticks: { color: "#666" },
        grid: {
          color: "#eee",
        },
      },
    },
  },
});

// Testimonial
const track = document.getElementById("testimonial-track");
const dots = document.querySelectorAll("#testimonial-dots button");
let index = 0;

function showSlide(i) {
  track.style.transform = `translateX(-${i * 100}%)`;
  dots.forEach((dot) => dot.classList.remove("active"));
  dots[i].classList.add("active");
  index = i;
}

document.getElementById("next-testimonial").onclick = () => {
  index = (index + 1) % dots.length;
  showSlide(index);
};

document.getElementById("prev-testimonial").onclick = () => {
  index = (index - 1 + dots.length) % dots.length;
  showSlide(index);
};

dots.forEach((dot, i) => {
  dot.onclick = () => showSlide(i);
});

// Pricing Plans
function togglePricing(type) {
  var basic = document.getElementById("basic-price");
  var premium = document.getElementById("premium-price");
  var enterprise = document.getElementById("enterprise-price");

  var monthlyBtn = document.getElementById("monthlyBtn");
  var annualBtn = document.getElementById("annualBtn");

  if (type === "monthly") {
    basic.innerHTML = "$149/mo";
    premium.innerHTML = "$299/mo";
    enterprise.innerHTML = "$499/mo";
    monthlyBtn.className = "active";
    annualBtn.className = "";
  } else {
    basic.innerHTML = "$1,499/yr";
    premium.innerHTML = "$2,999/yr";
    enterprise.innerHTML = "$4,999/yr";
    annualBtn.className = "active";
    monthlyBtn.className = "";
  }
}


// Clear Form Input

// Override the form submit
document.querySelector('form').addEventListener('submit', function(event) {
  event.preventDefault(); // prevent actual form submission
  document.getElementById('popup-message').style.display = 'block';

  // Optionally auto-close after 5 seconds
  setTimeout(closePopup, 5000);
});

function closePopup() {
  document.getElementById('popup-message').style.display = 'none';
}

document.querySelector('form').addEventListener('submit', function(event) {
  event.preventDefault(); // prevent default form submission

  // Show the popup
  document.getElementById('popup-message').style.display = 'block';

  // Reset the form fields
  this.reset();

  // Auto-close popup after 5 seconds
  setTimeout(closePopup, 5000);
});

function closePopup() {
  document.getElementById('popup-message').style.display = 'none';
}


// Case Study Modal
  function openModal() {
    document.getElementById("caseModal").style.display = "block";
  }

  function closeModal() {
    document.getElementById("caseModal").style.display = "none";
  }

  // Optional: Close when clicking outside modal
  window.onclick = function (event) {
    const modal = document.getElementById("caseModal");
    if (event.target === modal) {
      modal.style.display = "none";
    }
  };

  
