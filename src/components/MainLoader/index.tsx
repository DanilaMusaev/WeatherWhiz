import styled from "styled-components";

const StyledLoader = styled.div`
    padding: 50px;
    text-align: center;
    font-size: 24;
    font-weight: 500;
`

const MainLoader = () => {
    return ( <StyledLoader>The Data for Weather is Loading</StyledLoader> );
}
 
export default MainLoader;