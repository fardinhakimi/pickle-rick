declare namespace Pickle {

    export type Character = {
        id: string
        name: string
        status: string
        species: string
        type: string
        gender: string
        image: string
        created: string
        origin: Location
    }

    export type Location = {
        id: string
        name: string
        type: string
        dimension: string
        residents: Array<Character>,
        created: string
    }

    export type Info = {
        count: number
        pages: number
        next: number
        prev: number
    }

    export type LocationFilterResult = {
        info: Info,
        results: Array<Location>
    }

    export type LocationType = { 
        name: string, 
        theme: { bg: string, color: string}
    }

    export type DimensionCode = 'RD' | 'UD' | 'MD' | 'MGD' | 'TD' | 'WP' | 'FTBD' | 'FSD' | 'UKN' | 'CHD' | 'PH' | 'D137' | 'D35' | 'D22' | 'D716' | 'DK22' | 'DB716' | 'TMD' | 'FAD'

}