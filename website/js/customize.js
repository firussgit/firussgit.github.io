let colle_type
let main_part
let manche_part
let cotte_part
let jib_part
let print_part

function none() {
    document.getElementById('jib').src = ''
}

function v(a) {
    document.getElementById('cotte').src = ''
    document.getElementById('main').src = '/website/images/t-shirt/v/shirt.png'
    colle_type = a
}

function nrml(b) {
    document.getElementById('cotte').src = ''
    document.getElementById('main').src = '/website/images/t-shirt/nrml/shirt.png'
    colle_type = b
}

function print(c) {
    print_part = c
    submit()
}

function main(d) {
    main_part = d
    submit()
}

function manche(e) {
    manche_part = e
    submit()
}

function cotte(f) {
    cotte_part = f
    submit()
}

function jib(g) {
    jib_part = g
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
    if (print_part == "none") {
        document.getElementById('print').src = ''
    }
    if (print_part == "art") {
        document.getElementById('print').src = '/website/images/t-shirt/print/art.png'
    }
    if (print_part == "nature") {
        document.getElementById('print').src = '/website/images/t-shirt/print/nature.png'
    }
    if (print_part == "anime") {
        document.getElementById('print').src = '/website/images/t-shirt/print/anime.png'
    }
}