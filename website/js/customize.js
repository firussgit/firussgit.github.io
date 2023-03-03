let colle_type
let main_part
let manche_part
let cotte_part
let jib_part

function none() {
    document.getElementById('jib').src = ''
}

function v(f) {
    document.getElementById('cotte').src = ''
    document.getElementById('main').src = '/website/images/t-shirt/v/shirt.png'
    colle_type = f
}

function nrml(e) {
    document.getElementById('cotte').src = ''
    document.getElementById('main').src = '/website/images/t-shirt/nrml/shirt.png'
    colle_type = e
}

function art() {
    document.getElementById('print').src = '/website/images/t-shirt/print/art.png'
}

function nature() {
    document.getElementById('print').src = '/website/images/t-shirt/print/nature.png'
}

function anime() {
    document.getElementById('print').src = '/website/images/t-shirt/print/anime.png'
}

function main(a) {
    main_part = a
    submit()
}

function manche(b) {
    manche_part = b
    submit()
}

function cotte(c) {
    cotte_part = c
    submit()
}

function jib(d) {
    jib_part = d
    submit()
}

function submit() {
    if (main_part == "cyan") {
        document.getElementById('main').src = '/website/images/t-shirt/v/cyan/shirt.png'
    }
    if (main_part == "cyan" && colle_type == "nrml") {
        document.getElementById('main').src = '/website/images/t-shirt/nrml/cyan/shirt.png'
    }
    if (manche_part == "cyan") {
        document.getElementById('manche').src = '/website/images/t-shirt/v/cyan/manches.png'
    }
    if (jib_part == "cyan") {
        document.getElementById('jib').src = '/website/images/t-shirt/v/cyan/jib.png'
    }
    if (cotte_part == "cyan") {
        document.getElementById('cotte').src = '/website/images/t-shirt/v/cyan/cottes.png'
    }
    if (cotte_part == "cyan" && colle_type == "nrml") {
        document.getElementById('cotte').src = '/website/images/t-shirt/nrml/cyan/cottes.png'
    }
    if (main_part == "red") {
        document.getElementById('main').src = '/website/images/t-shirt/v/red/shirt.png'
    }
    if (main_part == "red" && colle_type == "nrml") {
        document.getElementById('main').src = '/website/images/t-shirt/nrml/red/shirt.png'
    }
    if (manche_part == "red") {
        document.getElementById('manche').src = '/website/images/t-shirt/v/red/manches.png'
    }
    if (jib_part == "red") {
        document.getElementById('jib').src = '/website/images/t-shirt/v/red/jib.png'
    }
    if (cotte_part == "red") {
        document.getElementById('cotte').src = '/website/images/t-shirt/v/red/cottes.png'
    }
    if (cotte_part == "red" && colle_type == "nrml") {
        document.getElementById('cotte').src = '/website/images/t-shirt/nrml/red/cottes.png'
    }
    if (main_part == "green") {
        document.getElementById('main').src = '/website/images/t-shirt/v/green/shirt.png'
    }
    if (main_part == "green" && colle_type == "nrml") {
        document.getElementById('main').src = '/website/images/t-shirt/nrml/green/shirt.png'
    }
    if (manche_part == "green") {
        document.getElementById('manche').src = '/website/images/t-shirt/v/green/manches.png'
    }
    if (jib_part == "green") {
        document.getElementById('jib').src = '/website/images/t-shirt/v/green/jib.png'
    }
    if (cotte_part == "green") {
        document.getElementById('cotte').src = '/website/images/t-shirt/v/green/cottes.png'
    }
    if (cotte_part == "green" && colle_type == "nrml") {
        document.getElementById('cotte').src = '/website/images/t-shirt/nrml/green/cottes.png'
    }
}