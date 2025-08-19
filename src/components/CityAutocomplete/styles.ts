import styled from "styled-components";

export const StyledCityAutocomplete = styled.ul`
    position: absolute;
    top: 105%;
    z-index: 10;

    width: 100%;
    max-height: 150px;

    display: flex;
    flex-direction: column;
    overflow: hidden;
    overflow-y: auto;

    border-radius: 18px 18px 10px 10px;
    background-color: ${({ theme }) => theme.inputBg};
    -webkit-backdrop-filter: blur(4px);
    backdrop-filter: blur(4px);

    transition: all 0.3s ease-out;
`;

export const StyledCityACItem = styled.li`
    padding: 8px 25px;
    width: 100%;
    background-color: transparent;

    font-size: 20px;
    font-weight: 500;
    color: ${({ theme }) => theme.textColor};

    transition: background-color 0.15s ease-out;
    &:hover {
        background-color: ${({ theme }) => theme.bgColor}95;
        cursor: pointer;
    }
`;
