import styled from 'styled-components'

interface  Props {
    value: string;
    xPlaying: boolean
}
const StyledScore = styled.span`
    width: 100%;
    text-align: center;
    padding: 1rem 0rem;
    color: ${(props: Props) => props.value === "X" ? 'red' : 'rgb(44, 135, 255)'};
    border-bottom:5px solid ${(props: Props) => props.value === "X" ? 'red' : 'rgb(44, 135, 255)'};
    border-radius: ${(props: Props) => props.value === "X" ? '0.5rem 0rem 0rem 0.5rem' : '0rem 0.5rem 0.5rem 0rem'};
    border-bottom: 5px solid ${(props: Props) => { 
        if (!props.xPlaying)
            return 'transparent';
    }};
`;

export default StyledScore;