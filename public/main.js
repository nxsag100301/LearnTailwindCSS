const topMenu = document.getElementById('nxs-top-menu-responsive')
const topMenuToggleIcon = document.getElementById('nxs-top-menu-toggle-icon')

document.addEventListener('click', function (event) {
  if (topMenuToggleIcon.contains(event.target)) {
    topMenu.classList.toggle('hidden')
    topMenu.classList.toggle('nxs-top-menu-mobile')
  } else if (topMenu.classList.contains('nxs-top-menu-mobile')) {
    topMenu.classList.add('hidden')
    topMenu.classList.remove('nxs-top-menu-mobile')
  }
})
