function updateTime() {
  const currentTimeUTC = document.getElementById("currentTimeUTC");
  const currentDay = document.getElementById("currentDay");

  const now = new Date();
  const utcTime = now.toUTCString().split(" ")[4];
  const dayOfWeek = now.toUTCString().split(",")[0];

  currentTimeUTC.textContent = utcTime;
  currentDay.textContent = dayOfWeek;
}

updateTime();
setInterval(updateTime, 1000);
