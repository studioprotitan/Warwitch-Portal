let currentLoadout = {
  primary: null,
  secondary: null,
  melee: null
};

function selectWeapon(weaponName) {
  // Simple logic to fill slots sequentially for demo purposes
  if (!currentLoadout.primary) {
    currentLoadout.primary = weaponName;
    document.getElementById('primary-weapon').innerText = weaponName;
  } else if (!currentLoadout.secondary) {
    currentLoadout.secondary = weaponName;
    document.getElementById('secondary-weapon').innerText = weaponName;
  } else {
    currentLoadout.melee = weaponName;
    document.getElementById('melee-weapon').innerText = weaponName;
  }
}

function confirmLoadout() {
  const statusEl = document.getElementById('tactical-status');
  const deployBtn = document.getElementById('deploy-btn');
  
  statusEl.innerText = "✅ LOADOUT LOCKED & READY";
  statusEl.style.color = "#22c55e";
  
  deployBtn.disabled = false;
}

function deployToMission() {
  alert("DEPLOYING TO COMBAT ZONE... GOOD LUCK, SOLDIER.");
}