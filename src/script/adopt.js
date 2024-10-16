// addeption start
function startCountdown(buttton) {
    const modal = document.getElementById("my_modal_7");
    const countdownText = document.getElementById("countdownText");
    modal.checked = true;
    let countdown = 3;
    const interval = setInterval(() => {
      countdownText.textContent = `${countdown}`;
      countdown--;
  
      if (countdown < 0) {
        clearInterval(interval);
        countdownText.textContent = " ";
  
        setTimeout(() => {
          modal.checked = false;
        }, 10);
  
        buttton.disabled = true;
        adoptButton.disabled = true;
        adoptButton.classList.add("btn-success");
      }
    }, 1000);
  }
  