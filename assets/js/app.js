const btnD = document.getElementById("canDrive");
const btnN = document.getElementById("note");
const btnS = document.getElementById("stringS");
const btnNu = document.getElementById("numberS");
const modalD = document.getElementById("modalDrive");
const modalN = document.getElementById("modalNote");
const modalS = document.getElementById("modalString");
const modalNu = document.getElementById("modalNumber");
const formD = document.getElementById("driveForm");
const formN = document.getElementById("noteForm");
const formS = document.getElementById("stringForm");
const formNu = document.getElementById("numberForm");
const close = document.querySelectorAll(".closes");
const closeNotification = document.getElementById("closeNotification");
const closeNoti1 = document.getElementById("closeNoti");
const closeNoti2 = document.getElementById("closeNoti2");
const closeNoti3 = document.getElementById("closeNoti3");
const noti = document.getElementById("notification");
const noti1 = document.getElementById("noti");
const noti2 = document.getElementById("noti2");
const noti3 = document.getElementById("noti3");

let textArray = [];
let numberArray = [];

btnD.addEventListener("click", () => {
  modalD.classList.add("is-active");
  formD.reset();
  noti.classList.add("is-hidden");
});
btnN.addEventListener("click", () => {
  modalN.classList.add("is-active");
  formN.reset();
  noti1.classList.add("is-hidden");
});
btnS.addEventListener("click", () => {
  modalS.classList.add("is-active");
  formS.reset();
  noti2.classList.add("is-hidden");
});
btnNu.addEventListener("click", () => {
  modalNu.classList.add("is-active");
  formNu.reset();
  noti3.classList.add("is-hidden");
});

close.forEach((btn) => {
  btn.addEventListener("click", () => {
    modalN.classList.remove("is-active");
    modalS.classList.remove("is-active");
    modalD.classList.remove("is-active");
    modalNu.classList.remove("is-active");
    textArray = [];
    numberArray = [];
  });
});

closeNotification.addEventListener("click", () => {
  noti.classList.add("is-hidden");
});
closeNoti1.addEventListener("click", () => {
  noti1.classList.add("is-hidden");
});
closeNoti2.addEventListener("click", () => {
  noti2.classList.add("is-hidden");
});
closeNoti3.addEventListener("click", () => {
  noti3.classList.add("is-hidden");
});

function canDrive(yearsO) {
  noti.classList.remove("is-success", "is-danger");
  const notiMessa = noti.querySelector("span");
  if (yearsO >= 18) {
    noti.classList.remove("is-hidden");
    noti.classList.add("is-success");
    notiMessa.textContent = "Tienes la edad necesaria para manejar";
  } else {
    noti.classList.remove("is-hidden");
    noti.classList.add("is-danger");
    notiMessa.textContent = "No cuentas con la edad necesaria para manejar";
  }
}

function notesFinal(note) {
  noti1.classList.remove(
    "is-success",
    "is-primary",
    "is-info",
    "is-warning",
    "is-danger"
  );
  const notiMessa = noti1.querySelector("span");
  if (note >= 9 && note <= 10) {
    noti1.classList.remove("is-hidden");
    noti1.classList.add("is-success");
    notiMessa.textContent = `Sobresaliente tienes: ${note}`;
  } else if (note >= 7 && note < 9) {
    noti1.classList.remove("is-hidden");
    noti1.classList.add("is-primary");
    notiMessa.textContent = `Notable tienes: ${note}`;
  } else if (note >= 6 && note < 7) {
    noti1.classList.remove("is-hidden");
    noti1.classList.add("is-info");
    notiMessa.textContent = `Bien tienes: ${note}`;
  } else if (note >= 5 && note < 6) {
    noti1.classList.remove("is-hidden");
    noti1.classList.add("is-warning");
    notiMessa.textContent = `Suficiente tienes: ${note}`;
  } else if (note >= 3 && note < 5) {
    noti1.classList.remove("is-hidden");
    noti1.classList.add("is-danger");
    notiMessa.textContent = `Insuficiente tienes: ${note}`;
  } else {
    noti1.classList.remove("is-hidden");
    noti1.classList.add("is-danger");
    notiMessa.textContent = `Muy deficiente tienes: ${note}`;
  }
}

formD.addEventListener("submit", (e) => {
  e.preventDefault();
  const years = formD.elements["yearsO"].value;
  canDrive(years);
  formD.reset();
});

formN.addEventListener("submit", (e) => {
  e.preventDefault();
  const note = formN.elements["notes"].value;
  notesFinal(note);
  formN.reset();
});

formS.addEventListener("submit", (e) => {
  e.preventDefault();
  const strC = formS.elements["str"].value.trim();
  if (strC) {
    textArray.push(strC);
  }
  formS.reset();
});

const cancelBtn = formS.querySelector(".button.is-danger");
cancelBtn.addEventListener("click", (e) => {
  e.preventDefault();
  showString();
});

function showString() {
  const notiMessa = noti2.querySelector("span");
  if (textArray.length > 0) {
    notiMessa.textContent = textArray.join(" - ");
  } else {
    notiMessa.textContent = "No hay textos guardado";
  }
  noti2.classList.remove("is-hidden");
}

formNu.addEventListener("submit", (e) => {
  e.preventDefault();
  const numC = formNu.elements["nUmber"].value.trim();
  if (!isNaN(numC) && numC !== "") {
    numberArray.push(Number(numC));
  } else {
    textArray.push(numC);
    alert("No es un numero");
  }
  formNu.reset();
});

const canNumBtn = formNu.querySelector(".button.is-danger");
canNumBtn.addEventListener("click", (e) => {
  e.preventDefault();
  showNumber();
});

function sumArray(array) {
  return array.reduce((acc, num) => acc + num, 0);
}

function showNumber() {
  const notiMessa = noti3.querySelector("span");
  const totalSum = sumArray(numberArray);
  if (numberArray.length > 0) {
    notiMessa.textContent = totalSum;
  } else {
    notiMessa.textContent = "No numeros guardados";
  }
  noti3.classList.remove("is-hidden");
}
