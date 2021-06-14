
export const dimensions: Record<Pickle.DimensionCode, string>  = {
    'RD': 'Replacement Dimension',
    'UD': 'Unknown dimension',
    'MD':  'Merged Dimension',
    'MGD': 'Magic Dimension',
    'TD': 'Tusk Dimension',
    'WP': 'WASP Dimension',
    'FTBD': 'Fascist Teddy Bear Dimension',
    'FSD':  'Fascist Shrimp Dimension',
    'UKN': 'unknown',
    'CHD': 'Chair Dimension',
    'PH': 'Phone Dimension',
    'D137': 'Dimension C-137',
    'FAD': 'Fantasy Dimension',
    'TMD': 'Testicle Monster Dimension',
    'DB716': 'Dimension D716-B',
    'DK22': 'Dimension K-22',
    'D716': 'Dimension D716-C',
    'D22': 'Dimension J-22',
    'D35': 'Dimension C-35'
}


export const getAllDimensions = () => {
    const items: Array<{ name: string, code: string}> = []
    for (const [key, value] of Object.entries(dimensions)) {
      items.push({ name: value, code: key })
    }
    return items
}

export const getDimensionByCode = (code: Pickle.DimensionCode = 'RD') => dimensions[code]


export const getValueFromQuery = (query: Record<string , string | Array<string>> ,key: string) => {
    const item = query[key]
    return Array.isArray(item) ? item[0] : item
}

export const getValueFromParams = getValueFromQuery

const getRandomisedTheme = () => {
    const colors = [
        {
            bg: 'var(--black-lighten)',
            color: 'var(--white)',
        },
        {
            bg: 'var(--blue-darken)', 
            color: 'var(--white)'
        },
        {
            bg:  'var(--blue-lighten)',
            color: 'var(--white)'
        } ,
        {
            bg: 'var(--orange-lighten)',
            color: 'var(--white)'
        },
        {
            bg: 'var(--pink-lighten)',
            color: 'var(--white)'
        },
        {
            bg: 'var(--purple-lighten)',
            color: 'var(--white)'
        } 
    ]
    return colors[Math.floor(Math.random()*colors.length)]
}

export const getLocationsTypes = () => {
    return [
        {
            name: 'Planet',
            theme: getRandomisedTheme()
        },
        {
            name: 'Cluster',
            theme: getRandomisedTheme()
        },
        {
            name: 'Space station',
            theme: getRandomisedTheme()

        },
        {
            name:    'Microverse',
            theme: getRandomisedTheme()
        },
        {
            name:     'TV',
            theme: getRandomisedTheme()
        },
        {
            name:    'Resort',
            theme: getRandomisedTheme()
        },
        {
            name:  'Fantasy town',
            theme: getRandomisedTheme()
        },
        {
            name:  'Space Station',
            theme: getRandomisedTheme()
        },
        {
            name: 'Dimension',
            theme: getRandomisedTheme()
        },
        {
            name: 'unknown',
            theme: getRandomisedTheme()
        },
        {
            name:  'Menagerie',
            theme: getRandomisedTheme()
        },
        {
            name:  'Game',
            theme: getRandomisedTheme()
        },
        {
            name: 'Customs',
            theme: getRandomisedTheme()
        },
        {
            name:  'Daycare',
            theme: getRandomisedTheme()

        },
        {
            name: 'Miniverse',
            theme: getRandomisedTheme()
        },
        {
            name: 'Box',
            theme: getRandomisedTheme()
        },
        {
            name: 'Spacecraft',
            theme: getRandomisedTheme()
        },
        {
            name: 'Spa',
            theme: getRandomisedTheme()
        },
        {
            name: 'Dream',
            theme: getRandomisedTheme()
        },
        {
            name: 'Arcade',
            theme: getRandomisedTheme()
        },
        {
            name: 'Machine',
            theme: getRandomisedTheme()
        },
        {
            name: 'Nightmare',
            theme: getRandomisedTheme()
        },
        {
            name: 'Diegesis',
            theme: getRandomisedTheme()
        },
        {
            name: 'Woods', 
            theme: getRandomisedTheme()
        },
        {
            name: 'Mount', 
            theme: getRandomisedTheme()
        },
        {
            name: 'Convention',
            theme: getRandomisedTheme()
        },
        {
            name: 'Quasar',
            theme: getRandomisedTheme()

        },
        {
            name: 'Asteroid',
            theme: getRandomisedTheme()
        },
        {
            name: 'Acid Plant',
            theme: getRandomisedTheme()
        },
        {
            name: 'Reality',
            theme: getRandomisedTheme()
        },
        {
            name: 'Death Star',
            theme: getRandomisedTheme()
        }, 
        {
            name: 'Base',
            theme: getRandomisedTheme()
        }
    ]
}