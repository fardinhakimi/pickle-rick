
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


export enum Species {
    ALIEN = 'Alien',
    HUMAN = 'Human',
    ROBOT = 'Robot'
}

export enum CharacterStatus {
    DEAD = 'Dead',
    Alive = 'Alive'
}

const groupbyNonResidents = (guests: Array<Pickle.Character>) => {

	const nonResidents: { humans: number, robots: number, aliens: number} = guests.reduce( (stats, character) => {

        if(character.species === Species.HUMAN) {
            return {
                ...stats,
                humans: stats.humans +1
            }
        }
        if(character.species === Species.ALIEN) {
            return {
                ...stats,
                aliens: stats.aliens + 1
            }
        }
        if(character.species === Species.ROBOT) {
            return {
                ...stats,
                robots: stats.robots + 1
            }
        }
        return stats

    }, {
        humans: 0,
        robots: 0,
        aliens: 0
    })

    return nonResidents

}


const calculatePercentage= (total: number, number: number) => {
    if(number <= 0 || total <= 0) return 0
    return Math.round((100 * number) / total)
}

export const calculateStats = (location: Pickle.Location) => {

    const aliveResidents = location.residents.filter( item => item.status === CharacterStatus.Alive).length
	const deadResidents = location.residents.filter( item => item.status === CharacterStatus.DEAD).length
	const robots = location.residents.filter( item => item.species === Species.ROBOT)
	const aliens = location.residents.filter( item => item.species === Species.ALIEN)
	const humans = location.residents.filter( item => item.species === Species.HUMAN)
    const guests = location.residents.filter ( item => item.origin.id !== location.id)

    const groupedGuests = groupbyNonResidents(guests)

    const numberOfRobots = robots.length  - groupedGuests.robots
    const numberOfAliens = aliens.length  - groupedGuests.aliens 
    const numberOfHumans = humans.length  - groupedGuests.humans

    const totalResidentPopulation = numberOfRobots + numberOfAliens + numberOfHumans

    return {
        aliveResidents,
        deadResidents,
        numberOfGuests: guests.length,
        humans: {
            total: numberOfHumans,
            percentage: calculatePercentage(totalResidentPopulation, numberOfHumans)
        },
        aliens: {
            total: numberOfAliens,
            percentage: calculatePercentage(totalResidentPopulation, numberOfAliens)
        },
        robots: {
            total: numberOfRobots,
            percentage: calculatePercentage(totalResidentPopulation, numberOfRobots)
        }
    }
}