function login() {
  window.location.href = "dashboard.html";
}

function classifyImage() {
  const result = document.getElementById("result");

  const data = [
    "🌱 Ramah Lingkungan",
    "⚠️ Kurang Ramah Lingkungan",
    "❌ Tidak Ramah Lingkungan"
  ];

  const random = data[Math.floor(Math.random() * data.length)];
  result.innerHTML = "Hasil Klasifikasi: <b>" + random + "</b>";
}
