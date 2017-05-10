export let styles = {
    item: {
        padding: '2px 6px',
        cursor: 'default'
    },

    highlightedItem: {
        color: 'white',
        background: 'hsl(200, 50%, 50%)',
        padding: '2px 6px',
        cursor: 'default'
    },

    menu: {
        border: 'solid 1px #ccc'
    }
}


export function matchAirportToTerm(state, value) {
    return (
        state.name.toLowerCase().indexOf(value.toLowerCase()) !== -1 ||
        state.abbr.toLowerCase().indexOf(value.toLowerCase()) !== -1
    )
}

/**
 * An example of how to implement a relevancy-based sorting method. airports are
 * sorted based on the location of the match - For example, a search for "or"
 * will return "Oregon" before "North Carolina" even though "North Carolina"
 * would normally sort above Oregon. Strings where the match is in the same
 * location (or there is no match) will be sorted alphabetically - For example,
 * a search for "or" would return "North Carolina" above "North Dakota".
 */
export function sortAirports(a, b, value) {
    const aLower = a.name.toLowerCase()
    const bLower = b.name.toLowerCase()
    const valueLower = value.toLowerCase()
    const queryPosA = aLower.indexOf(valueLower)
    const queryPosB = bLower.indexOf(valueLower)
    if (queryPosA !== queryPosB) {
        return queryPosA - queryPosB
    }
    return aLower < bLower ? -1 : 1
}

export function fakeRequest(value, cb) {
    if (value === '')
        return getAirports()
    const items = getAirports().filter((state) => {
        return matchAirportToTerm(state, value)
    })
    setTimeout(() => {
        cb(items)
    }, 500)
}

export function getAirports() {
    return [
        { abbr: 'XNB', name:'Dubai, Dubai Airport (XNB), Forenede Arabiske Emirater'},
        { abbr: 'YRO', name:'Ottawa, Rockcliffe St (YRO), Ontario, Canada'},
        { abbr: 'EIL', name:'Fairbanks, Eielson Afb (EIL), Alaska, USA'},
        { abbr: 'NZY', name:'San Diego, North Island Nas (NZY), California, USA'},
        { abbr: 'LOS', name:'Lagos (LOS), Nigeria'},
        { abbr: 'AAE', name:'Annaba (AAE), Algeriet'},
        { abbr: 'BXL', name:'Blue Lagoon (BXL), Fiji'},
        { abbr: 'MHP', name:'Minsk, Minsk 1 International (MHP), Hviderusland'},
        { abbr: 'OUL', name:'Oulu (OUL), Finland'},
        { abbr:'PRG', name: 'Prag (PRG), Tjekkiet'},
        { abbr:'QUF', name: 'Tallinn, Pirita Harbor (QUF), Estland'},
        { abbr:'ZAG', name: 'Zagreb (ZAG), Kroatien'},
        { abbr:'RSC', name: 'Riga, Skulte (RSC), Letland'},
        { abbr:'DAM', name: 'Damaskus (DAM), Syrien'},
        { abbr:'TAS', name: 'Tashkent (TAS), Usbekistan'},
        { abbr:'SKG', name: 'Thessaloniki (SKG), Grækenland'},
        { abbr:'ATH', name: 'Athen (ATH), Grækenland'},
        { abbr:'ULU', name: 'Gulu (ULU), Uganda'},
        { abbr:'HRE', name: 'Harare (HRE), Zimbabwe'},
        { abbr:'TRD', name: 'Trondheim (TRD), Norge'},
        { abbr:'SHE', name: 'Shenyang (SHE), Kina'},
        { abbr:'PVG', name: 'Shanghai, Pu Dong (PVG), Kina'},
        { abbr:'KBL', name: 'Kabul (KBL), Afghanistan'},
        { abbr:'MVD', name: 'Montevideo (MVD), Uruguay'},
        { abbr:'SZB', name: 'Kuala Lumpur, Sultan Abdul Aziz Shah (SZB), Malaysia'},
        { abbr:'KWI', name: 'Kuwait (KWI), Kuwait'},
        { abbr:'ASU', name: 'Asuncion (ASU), Paraguay'},
        { abbr:'UIO', name: 'Quito (UIO), Ecuador'},
        { abbr:'DET', name: 'Detroit, Detroit City (DET), Michigan, USA'},
        { abbr:'BUF', name: 'Buffalo (BUF), New York, USA'},
        { abbr:'NYT', name: 'Nai Pyi Taw (NYT), Myanmar'},
        { abbr:'ALA', name: 'Almaty (ALA), Kasakhstan'},
        { abbr:'RML', name: 'Colombo, Ratmalana (RML), Sri Lanka'},
        { abbr:'ODE', name: 'Odense (ODE), Danmark'},
        { abbr:'GSE', name: 'Göteborg, Saeve (GSE), Sverige'},
        { abbr:'MON', name: 'Mount Cook (MON), New Zealand'},
        { abbr:'MST', name: 'Maastricht (MST), Holland'},
        { abbr:'RTM', name: 'Rotterdam (RTM), Holland'},
        { abbr:'MRI', name: 'Anchorage, Merrill Field (MRI), Alaska, USA'},
        { abbr:'RNN', name: 'Bornholm (RNN), Danmark'},
        { abbr:'KYA', name: 'Konya (KYA), Tyrkiet'},
        { abbr:'ESB', name: 'Ankara, Esenboga (ESB), Tyrkiet'},
        { abbr:'AYT', name: 'Antalya (AYT), Tyrkiet'},
        { abbr:'MGQ', name: 'Mogadishu (MGQ), Somalia'},
        { abbr:'VVO', name: 'Vladivostok (VVO), Rusland'},
        { abbr:'NCL', name: 'Newcastle (NCL), Storbritannien'},
        { abbr:'LPL', name: 'Liverpool (LPL), Storbritannien'},
        { abbr:'PIK', name: 'Glasgow, Prestwick (PIK), Storbritannien'},
        { abbr:'OTP', name: 'Bukarest, Otopeni Intl (OTP), Rumænien'},
        { abbr:'BGW', name: 'Bagdad (BGW), Irak'},
        { abbr:'KTM', name: 'Kathmandu (KTM), Nepal'},
        { abbr:'DMK', name: 'Bangkok, Don Muang (DMK), Thailand'},
        { abbr:'BKK', name: 'Bangkok, Suvarnabhumi (BKK), Thailand'},
        { abbr:'UKB', name: 'Osaka, Kobe (UKB), Japan'},
        { abbr:'HND', name: 'Tokyo, Haneda (HND), Japan'},
        { abbr:'OKO', name: 'Tokyo, Yokota Afb (OKO), Japan'},
        { abbr:'MCT', name: 'Muscat (MCT), Oman'},
        { abbr:'KBP', name: 'Kiev, Borispol (KBP), Ukraine'},
        { abbr:'JED', name: 'Jeddah (JED), Saudi-Arabien'},
        { abbr:'KRT', name: 'Khartoum (KRT), Sudan'},
        { abbr:'GMP', name: 'Seoul, Gimpo Intl (GMP), Sydkorea'},
        { abbr:'ZRH', name: 'Zürich (ZRH), Schweiz'},
        { abbr:'GVA', name: 'Genève (GVA), Schweiz'},
        { abbr:'CRL', name: 'Bruxelles, Charleroi Bru South (CRL), Belgien'},
        { abbr:'VDD', name: 'Wien, Danubepier Hov (VDD), Østrig'},
        { abbr:'SDV', name: 'Tel Aviv, Sde Dov (SDV), Israel'},
        { abbr:'EIN', name: 'Eindhoven (EIN), Holland'},
        { abbr:'AMS', name: 'Amsterdam (AMS), Holland'},
        { abbr:'LYS', name: 'Lyon, Saint Exupery (LYS), Frankrig'},
        { abbr:'ORY', name: 'Paris, Orly (ORY), Frankrig'},
        { abbr:'AGP', name: 'Malaga (AGP), Spanien'},
        { abbr:'BCN', name: 'Barcelona (BCN), Spanien'},
        { abbr:'CMN', name: 'Casablanca, Mohammed V (CMN), Marokko'},
        { abbr:'RAK', name: 'Marrakech (RAK), Marokko'},
        { abbr:'RVH', name: 'Skt. Petersborg, Rzhevka (RVH), Rusland'},
        { abbr:'DME', name: 'Moskva, Domodedovo (DME), Rusland'},
        { abbr:'WMI', name: 'Warszawa, Modlin (WMI), Polen'},
        { abbr:'FLR', name: 'Firenze (FLR), Italien'},
        { abbr:'NAP', name: 'Napoli (NAP), Italien'},
        { abbr:'TSF', name: 'Venedig, Venedig Treviso (TSF), Italien'},
        { abbr:'KEF', name: 'Reykjavik, Keflavik Intl (KEF), Island'},
        { abbr:'CWL', name: 'Cardiff (CWL), Storbritannien'},
        { abbr:'NCE', name: 'Nice (NCE), Frankrig'},
        { abbr:'TOJ', name: 'Madrid, Torrejon Afb (TOJ), Spanien'},
        { abbr:'PMF', name: 'Milano, Parma (PMF), Italien'},
        { abbr:'FCO', name: 'Rom, Fiumicino (FCO), Italien'},
        { abbr:'CIA', name: 'Rom, Ciampino (CIA), Italien'},
        { abbr:'IAH', name: 'Houston, G.Bush Intercont (IAH), Texas, USA'},
        { abbr:'SAW', name: 'Istanbul, Sabiha Gokcen (SAW), Tyrkiet'},
        { abbr:'DCA', name: 'Washington DC, R Reagan Nat (DCA), District Of Columbia, USA'},
        { abbr:'MCO', name: 'Orlando, Orlando Intl (MCO), Florida, USA'},
        { abbr:'EWR', name: 'New York, Newark Liberty Intl (EWR), New Jersey, USA'},
        { abbr:'AEP', name: 'Buenos Aires, J. Newbery (AEP), Buenos Aires, Argentina'},
        { abbr:'HHN', name: 'Frankfurt, Hahn Airport (HHN), Tyskland'},
        { abbr:'AGB', name: 'München, Augsburg Muehlhausen (AGB), Tyskland'},
        { abbr:'BOG', name: 'Bogotá (BOG), Colombia'},
        { abbr:'CAI', name: 'Cairo (CAI), Egypten'},
        { abbr:'GOH', name: 'Nuuk (GOH), Grønland'},
        { abbr:'DUB', name: 'Dublin (DUB), Irland'},
        { abbr:'MAN', name: 'Manchester (MAN), Storbritannien'},
        { abbr:'LCY', name: 'London, London City Airport (LCY), Storbritannien'},
        { abbr:'LGW', name: 'London, Gatwick (LGW), Storbritannien'},
        { abbr:'BVA', name: 'Paris, Beauvais Tille (BVA), Frankrig'},
        { abbr:'HEL', name: 'Helsinki (HEL), Finland'},
        { abbr:'RYG', name: 'Oslo, Rygge/Oslo (RYG), Norge'},
        { abbr:'SXF', name: 'Berlin, Schönefeld (SXF), Tyskland'},
        { abbr:'TXL', name: 'Berlin, Tegel (TXL), Tyskland'},
        { abbr:'IKA', name: 'Teheran, Imam Khomeini Intl (IKA), Iran'},
        { abbr:'YYZ', name: 'Toronto, Pearson Intl (YYZ), Ontario, Canada'},
        { abbr:'YTO', name: 'Toronto (YTO), Ontario, Canada'},
        { abbr:'GIG', name: 'Rio De Janeiro, Rio Janeiro Intl (GIG), Rio De Janeiro, Brasilien'},
        { abbr:'GCJ', name: 'Johannesburg, Grand Central (GCJ), Sydafrika'},
        { abbr:'MHB', name: 'Auckland, Mechanics Bay (MHB), New Zealand'},
        { abbr:'FNJ', name: 'Pyongyang International Airport (FNJ), Nord Korea'},
        { abbr:'PEK', name: 'Beijing, Capital Airport (PEK), Kina'},
        { abbr:'DEL', name: 'New Delhi (DEL), Indien'},
        { abbr:'SWZ', name: 'Sydney, Sydney West (SWZ), New South Wales, Australien'},
        { abbr:'ULC', name: 'Santiago, Los Cerrillos (ULC), Chile'},
        { abbr:'TLC', name: 'Mexico City, Toluca (TLC), Mexico'},
        { abbr:'WIL', name: 'Nairobi, Wilson (WIL), Kenya'},
        { abbr:'ZIA', name: 'Moskva, Zhukovsky International Airport (ZIA), Rusland'},
        { abbr:'ARN', name: 'Stockholm, Arlanda (ARN), Sverige'},
        { abbr:'AAL', name: 'Aalborg (AAL), Danmark'},
        { abbr:'AAR', name: 'Aarhus (AAR), Danmark'},
        { abbr:'OPO', name: 'Porto (OPO), Portugal'},
        { abbr:'BLL', name: 'Billund (BLL), Danmark'},
        { abbr:'LIS', name: 'Lissabon (LIS), Portugal'},
        { abbr:'TMB', name: 'Miami, Tamiami (TMB), Florida, USA'},
        { abbr:'ORD', name: 'Chicago, O\'Hare Intl (ORD), Illinois, USA'},
        { abbr:'BFI', name: 'Seattle, Boeing Fld Intl (BFI), Washington, USA'},
        { abbr:'CDG', name: 'Paris, Charles De Gaulle (CDG), Frankrig'},
        { abbr:'SJC', name: 'San Jose (SJC), California, USA'},
        { abbr:'IAD', name: 'Washington DC, Dulles Intl (IAD), District Of Columbia, USA'},
        { abbr:'JFK', name: 'New York, John F Kennedy (JFK), New York, USA'},
        { abbr:'SAN', name: 'San Diego (SAN), California, USA'},
        { abbr: 'LAX', name: 'Los Angeles (LAX), California, USA'},
        { abbr: 'CPH', name: 'Copenhagen, Kastrup (CPH), Denmark'},
        { abbr: 'LHR', name: 'London, Heathrow (LHR), Great Britain'},
        { abbr: 'LHR', name: 'London, Heathrow (LHR), Great Britain'}
    ]
}