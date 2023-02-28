let main_part
let cotte_part
let cap_part

function main(x) {
    main_part = x
    submit()
}

function cap(z) {
    cap_part = z
    submit()
}

function cotte(y) {
    cotte_part = y
    submit()
}

function submit() {
    if (main_part == "blue") {
        document.getElementById('main').src = '/website/images/body/01.png'
    }
    if (cap_part == "blue") {
        document.getElementById('cap').src = '/website/images/cap/01.png'
    }
    if (cotte_part == "blue") {
        document.getElementById('cotte').src = '/website/images/sleeve/01.png'
    }
    if (main_part == "red") {
        document.getElementById('main').src = '/website/images/body/02.png'
    }
    if (cap_part == "red") {
        document.getElementById('cap').src = '/website/images/cap/02.png'
    }
    if (cotte_part == "red") {
        document.getElementById('cotte').src = '/website/images/sleeve/02.png'
    }
    if (main_part == "green") {
        document.getElementById('main').src = '/website/images/body/03.png'
    }
    if (cap_part == "green") {
        document.getElementById('cap').src = '/website/images/cap/03.png'
    }
    if (cotte_part == "green") {
        document.getElementById('cotte').src = '/website/images/sleeve/03.png'
    }
}