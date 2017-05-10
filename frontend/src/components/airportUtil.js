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
        { abbr: 'CPH', name: 'Copenhagen, Kastrup (CPH), Denmark'},
        { abbr: 'LHR', name: 'London, Heathrow (LHR), Great Britain'},
        { abbr: 'LHR', name: 'London, Heathrow (LHR), Great Britain'}
    ]
}