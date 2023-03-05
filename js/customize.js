let colle_type
let main_part
let manche_part
let cotte_part
let jib_part
let print_part

function none() {
    document.getElementById('jib').src = ''
    document.getElementById('five').value = 'None'
}

function v(a) {
    document.getElementById('cotte').src = ''
    document.getElementById('main').src = '/images/t-shirt/v/shirt.png'
    document.getElementById('one').value = 'V'
    colle_type = a
}

function nrml(b) {
    document.getElementById('cotte').src = ''
    document.getElementById('main').src = '/images/t-shirt/nrml/shirt.png'
    document.getElementById('one').value = 'Normal'
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
        document.getElementById('main').src = '/images/t-shirt/v/cyan/shirt.png'
        document.getElementById('two').value = 'Cyan'
    }
    if (main_part == "cyan" && colle_type == "nrml") {
        document.getElementById('main').src = '/images/t-shirt/nrml/cyan/shirt.png'
        document.getElementById('two').value = 'Cyan'
    }
    if (manche_part == "cyan") {
        document.getElementById('manche').src = '/images/t-shirt/v/cyan/manches.png'
        document.getElementById('three').value = 'Cyan'
    }
    if (jib_part == "cyan") {
        document.getElementById('jib').src = '/images/t-shirt/v/cyan/jib.png'
        document.getElementById('five').value = 'Cyan'
    }
    if (cotte_part == "cyan") {
        document.getElementById('cotte').src = '/images/t-shirt/v/cyan/cottes.png'
        document.getElementById('four').value = 'Cyan'
    }
    if (cotte_part == "cyan" && colle_type == "nrml") {
        document.getElementById('cotte').src = '/images/t-shirt/nrml/cyan/cottes.png'
        document.getElementById('four').value = 'Cyan'
    }
    if (main_part == "red") {
        document.getElementById('main').src = '/images/t-shirt/v/red/shirt.png'
        document.getElementById('two').value = 'Red'
    }
    if (main_part == "red" && colle_type == "nrml") {
        document.getElementById('main').src = '/images/t-shirt/nrml/red/shirt.png'
        document.getElementById('two').value = 'Red'
    }
    if (manche_part == "red") {
        document.getElementById('manche').src = '/images/t-shirt/v/red/manches.png'
        document.getElementById('three').value = 'Red'
    }
    if (jib_part == "red") {
        document.getElementById('jib').src = '/images/t-shirt/v/red/jib.png'
        document.getElementById('five').value = 'Red'
    }
    if (cotte_part == "red") {
        document.getElementById('cotte').src = '/images/t-shirt/v/red/cottes.png'
        document.getElementById('four').value = 'Red'
    }
    if (cotte_part == "red" && colle_type == "nrml") {
        document.getElementById('cotte').src = '/images/t-shirt/nrml/red/cottes.png'
        document.getElementById('four').value = 'Red'
    }
    if (main_part == "green") {
        document.getElementById('main').src = '/images/t-shirt/v/green/shirt.png'
        document.getElementById('two').value = 'Green'
    }
    if (main_part == "green" && colle_type == "nrml") {
        document.getElementById('main').src = '/images/t-shirt/nrml/green/shirt.png'
        document.getElementById('two').value = 'Green'
    }
    if (manche_part == "green") {
        document.getElementById('manche').src = '/images/t-shirt/v/green/manches.png'
        document.getElementById('three').value = 'Green'
    }
    if (jib_part == "green") {
        document.getElementById('jib').src = '/images/t-shirt/v/green/jib.png'
        document.getElementById('five').value = 'Green'
    }
    if (cotte_part == "green") {
        document.getElementById('cotte').src = '/images/t-shirt/v/green/cottes.png'
        document.getElementById('four').value = 'Green'
    }
    if (cotte_part == "green" && colle_type == "nrml") {
        document.getElementById('cotte').src = '/images/t-shirt/nrml/green/cottes.png'
        document.getElementById('four').value = 'Green'
    }
    if (print_part == "none") {
        document.getElementById('print').src = ''
        document.getElementById('six').value = 'None'
    }
    if (print_part == "art") {
        document.getElementById('print').src = '/images/t-shirt/print/art.png'
        document.getElementById('six').value = 'Art'
    }
    if (print_part == "nature") {
        document.getElementById('print').src = '/images/t-shirt/print/nature.png'
        document.getElementById('six').value = 'Nature'
    }
    if (print_part == "anime") {
        document.getElementById('print').src = '/images/t-shirt/print/anime.png'
        document.getElementById('six').value = 'Anime'
    }
}