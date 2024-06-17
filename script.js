let toastbox = document.getElementById("toast-box");
let succesmessage =
  '<i class="fa-solid fa-circle-check"></i> Successfully Submitted';
let ErrorMessage = '  <i class="fa-solid fa-xmark"></i> Please Fix Error!';
let InavlidMessage =
  '  <i class="fa-solid fa-exclamation"></i> Invalid Input, Check Again';

function ShowToast(msg) {
  let toast = document.createElement("div");
  toast.classList.add("toast");
  toast.innerHTML = msg;
  toastbox.appendChild(toast);

  if (msg.includes("Error")) {
    toast.classList.add("Error");
  }
  if (msg.includes("Invalid")) {
    toast.classList.add("Invalid");
  }

  setTimeout(() => {
    toast.remove();
  }, 6000);
}
