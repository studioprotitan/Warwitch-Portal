function startVerification() {
  const steps = ['step1', 'step2', 'step3'];
  const btn = document.querySelector('.action-btn');
  
  btn.disabled = true;
  btn.innerText = "VERIFICATION IN PROGRESS...";
  
  let currentStep = 0;
  
  const interval = setInterval(() => {
    if (currentStep < steps.length) {
      const el = document.getElementById(steps[currentStep]);
      el.innerText = "COMPLETED";
      el.style.color = "#fbbf24";
      currentStep++;
    } else {
      clearInterval(interval);
      document.querySelector('.pilot-name').innerText = "COMMANDER";
      document.querySelector('.pilot-status').innerText = "STATUS: VERIFIED";
      document.querySelector('.pilot-status').style.color = "#22c55e";
      btn.innerText = "ACCESS GRANTED";
      btn.style.background = "#22c55e";
    }
  }, 1000);
}