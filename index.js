{
  const buyButtons = document.querySelectorAll('.buy-btn'),
    modal = document.querySelector('.modal')
  buyTicketModal = document.querySelector('.buy-ticket-modal')

  buyButtons.forEach((element) => {
    element.onclick = () => {
      modal.classList.add('display-flex')
    }
  })

  const closeButton = document.querySelector('.close-btn')

  closeButton.onclick = () => {
    modal.classList.remove('display-flex')
  }

  modal.onclick = () => {
    modal.classList.remove('display-flex')
  }

  buyTicketModal.addEventListener('click', (event) => {
    event.stopPropagation()
  })
}

{
  const subMenu = document.querySelector('.subnav')
  const moreButton = document.querySelector('.nav-more')
  moreButton.onclick = () => {
    var isSubOpen = window.getComputedStyle(subMenu).display === 'block'
    if(isSubOpen) {
      subMenu.style.display = 'none'
    } else {
      subMenu.style.display = 'block'
    }
  }
}

{
  const main = document.getElementById('main')
  const header = document.getElementById('header')
  const subMenu = document.querySelector('.subnav')
  const menuIcon = document.querySelector('.subnav-icon')
  const selectOptions = document.querySelectorAll('#nav a[href*="#"]')
  var heightMenu = header.clientHeight
  menuIcon.onclick = () => {
    var isClosed = header.clientHeight === heightMenu
    if (isClosed) {
      header.style.height = 'auto'
    } else {
      header.style.height = null
    }
  }

  main.onclick = (e) => {
    if(!header.contains(e.target)) {
      header.style.height = null
      subMenu.style.display = 'none'
    }
  }

  selectOptions.forEach((selectOption) => {
    selectOption.onclick = () => {
        header.style.height = null
    }
  })

}

