const data_cities = {
    "lima": {
        name: 'Lima',
        picture: "lima",
        embed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30329.155178144276!2d-77.12012067492047!3d-12.027447726161686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105cc3d52f51e01%3A0x1f75ae97fb12652c!2sAeropuerto%20Internacional%20Jorge%20Ch%C3%A1vez!5e0!3m2!1ses!2spe!4v1653776463632!5m2!1ses!2spe',
        cities: [
            ["Lima", 'Calle Filipinas #844']
        ],
        available: [
            'lim - first',
            'lim - second',
            'lim - three',
            'lim - four',
            'lim - five'
        ],
    },
    "junin": {
        name: 'Junín',
        picture: "junin",
        embed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3905.730122517947!2d-75.47781258321835!3d-11.784042817438857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x910ecc29a3280f25%3A0x3efd84d403423bf5!2sAeropuerto%20Francisco%20Carl%C3%A9!5e0!3m2!1ses!2spe!4v1653776965088!5m2!1ses!2spe',
        cities: [
            ["Huancayo", 'Calle Dinamarca #560'],
            ["La Merced", 'Av. Comandante #630']
        ],
        available: [
            'junin - first',
            'junin - second',
            'junin - three',
            'junin - four',
            'junin - five'
        ],
    },
    "piura": {
        name: 'Piura',
        picture: "piura",
        embed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3973.3569351196197!2d-80.62006398562887!3d-5.2064738539294195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x904a108dcd3939a1%3A0xd8a6f76d130774f0!2sAeropuerto%20Internacional%20Guillermo%20Concha%20Iberico!5e0!3m2!1ses!2spe!4v1653776874361!5m2!1ses!2spe',
        cities: [
            ["Piura", 'Calle Ayala #130']
        ],
        available: [
            'piura - first',
            'piura - second',
            'piura - three',
            'piura - four',
            'piura - five'
        ],
    },
    "lambayeque": {
        name: 'Lambayeque',
        picture: "lambayeque",
        embed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28237.340534309915!2d-79.8365646280019!3d-6.779841285320492!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x904ce8cceaa83e79%3A0x98562a51d30deef7!2sAeropuerto%20Internacional%20Jos%C3%A9%20Abelardo%20Qui%C3%B1ones!5e0!3m2!1ses!2spe!4v1653776665843!5m2!1ses!2spe',
        cities: [
            ["Chiclayo", 'Calle Las Rosas #790']
        ],
        available: [
            'lamb - first',
            'lamb - second',
            'lamb - three',
            'lamb - four',
            'lamb - five'
        ],
    },
    "la-libertad": {
        name: 'La Libertad',
        picture: "la-libertad",
        embed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18790.275749218847!2d-79.11699890251857!3d-8.08425334319539!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91ad3c0766af2a51%3A0x2d0c8b77c7b0a2f8!2sAeropuerto%20Internacional%20Capit%C3%A1n%20FAP%20Carlos%20Mart%C3%ADnez%20de%20Pinillos!5e0!3m2!1ses!2spe!4v1653776593755!5m2!1ses!2spe',
        cities: [
            ["Trujillo", 'Av. San Francisco #1560'],
            ["Chepén", 'Av. Esmeraldas #892'],
        ],
        available: [
            'lib - first',
            'lib - second',
            'lib - three',
            'lib - four',
            'lib - five'
        ],
    },
    "ancash": {
        name: 'Áncash',
        picture: "ancash",
        embed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25729.613659272938!2d-77.61410439791844!3d-9.350673371163957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91a96a8d3b6a9ac3%3A0xd3d9413a70b322a9!2sComandante%20FAP%20Germ%C3%A1n%20Arias%20Graziani%20Airport!5e0!3m2!1ses!2spe!4v1653776741510!5m2!1ses!2spe',
        cities: [
            ["Chimbote", 'Av. Amazonas #650']
        ],
        available: [
            'anc - first',
            'anc - second',
            'anc - three',
            'anc - four',
            'anc - five'
        ],
    },
    "cajamarca": {
        name: 'Cajamarca',
        picture: "cajamarca",
        embed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9415.783296122783!2d-78.49658369194911!3d-7.14342930527989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91b25ab8ff5917fb%3A0x3c1b222dc18d0474!2sAeropuerto%20Internacional%20Armando%20Revoredo%20Iglesias!5e0!3m2!1ses!2spe!4v1653776841059!5m2!1ses!2spe',
        cities: [
            ["Cajamarca", 'Jr. Incas #770']
        ],
        available: [
            'anc - first',
            'anc - second',
            'anc - three',
            'anc - four',
            'anc - five',
            'anc - six',
            'anc - seven',
            'anc - eight',
        ],
    }
}