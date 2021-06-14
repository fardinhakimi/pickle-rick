
import styled from 'styled-components'
import { space } from '@styled-system/space'
import { device } from 'styles/device'

export const StyledLocationTypeWrapper = styled.div`
    display: flex;
    overflow-x: scroll;
    ${space({ my: 4})}
    ::-webkit-scrollbar {
        display: none;
    }
`

export const StyledButton = styled.button`
    border: solid 1px transparent;
    border-radius: 15px;
    white-space: nowrap;
    background-color: ${(props) => props.theme.bg};
    color: ${(props) => props.theme.color};
    cursor: pointer;
    font-size: 14px;
    ${space({ px: '15px', py: '5px', mr: 3})}
`

export const StyledLocationContainer = styled.div`

    display: grid;

    @media ${device.md} {
        grid-template-columns: repeat(3, 1fr);
    }

    grid-gap: 20px;
`

export const StyledLoadMoreWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    ${space({ p: 4})};
    ${StyledButton}{
        align-self: center;
        font-size: 18px;
    }
`

export const StyledLocationInfoContainer = styled.div`

    display: grid;

    @media ${device.md} {
        grid-template-columns: repeat(2, 1fr);
    }

    grid-gap: 20px;
`

export const StyledLocationInfoTitle = styled.h2`
    > span {
        font-weight: normal;
        font-size: 16px;
    }
` 

export const StyledLocationPageWrapper = styled.div`
    ${space({ mb: 4})};
`