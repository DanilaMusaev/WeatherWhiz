import styled from 'styled-components';
import ScaleTabs from '../ScaleTabs';
import CityAutocomplete from '../CityAutocomplete';
import type { CityName, CityType } from '../../data/citiesList';
import type { ChangeEvent, KeyboardEvent } from 'react';

interface InputContainerProps {
    $width?: `${string}px` | `${string}vw` | `${string}%`;
    $maxWidth?: `${string}px` | `${string}vw` | `${string}%`;
    $borderRadius?: `${string}px` | `${string}%`;
    $borderWidth?: `${string}px`;
}

interface StyledInputProps {
    $borderRadius?: `${string}px` | `${string}%`;
    $padding?:
        | `${string}px`
        | `${string}px ${string}px`
        | `${string}px ${string}px ${string}px ${string}px`;
}

interface InputProps {
    width?: `${string}px` | `${string}vw` | `${string}%`;
    maxWidth?: `${string}px` | `${string}vw` | `${string}%`;
    borderRadius?: `${string}px` | `${string}%`;
    borderWidth?: `${string}px`;
    padding?:
        | `${string}px`
        | `${string}px ${string}px`
        | `${string}px ${string}px ${string}px ${string}px`;
    placeholder?: string;
    value?: string;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    onSelect: (city: CityName) => void;
    onKeyDownHandler?: (e: KeyboardEvent<HTMLInputElement>) => void;
    suggestions?: CityType[];
}

const InputContainer = styled.div<InputContainerProps>`
    margin-bottom: 40px;
    position: relative;
    padding: 5px 10px 5px 0px;
    width: ${({ $width }) => ($width ? $width : 'auto')};
    display: flex;
    column-gap: 30px;
    align-items: center;
    /* overflow: hidden; */

    &::before {
        content: '';
        position: absolute;
        inset: 0;
        background: ${({ theme }) => theme.inputBg};
        border-radius: ${({ $borderRadius }) =>
            $borderRadius ? $borderRadius : '0'};
        z-index: -1;
    }

    &::after {
        content: '';
        position: absolute;
        inset: 0;
        border-radius: ${({ $borderRadius }) =>
            $borderRadius ? $borderRadius : '0'};
        padding: ${({ $borderWidth }) => ($borderWidth ? $borderWidth : '1px')};
        background: ${({ theme }) => theme.InputBorder};
        -webkit-mask: linear-gradient(#ffffff 0 0) content-box,
            linear-gradient(#fff 0 0);
        mask: linear-gradient(#ffffff 0 0) content-box,
            linear-gradient(#fff 0 0);
        -webkit-mask-composite: xor;
        mask-composite: exclude;
        pointer-events: none;
        z-index: -1;
    }
`;

const StyledInput = styled.input.attrs({ type: 'text' })<StyledInputProps>`
    width: 100%;
    padding: ${({ $padding }) => ($padding ? $padding : '0')};
    background: transparent;
    border: none;
    outline: none;

    font-size: 20px;
    color: ${({ theme }) => theme.textColor};

    &::placeholder {
        color: ${({ theme }) => theme.placeholderColor};
    }
`;

export const InputComponent: React.FC<InputProps> = ({
    width,
    maxWidth,
    borderRadius,
    borderWidth,
    padding,
    placeholder,
    value,
    onChange,
    onSelect,
    onKeyDownHandler,
    suggestions,
}) => {
    return (
        <InputContainer
            $width={width}
            $maxWidth={maxWidth}
            $borderRadius={borderRadius}
            $borderWidth={borderWidth}
        >
            <StyledInput
                $padding={padding}
                $borderRadius={borderRadius}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                onKeyDown={onKeyDownHandler}
            />
            <ScaleTabs />
            <CityAutocomplete suggestions={suggestions} onSelect={onSelect}/>
        </InputContainer>
    );
};

export default InputComponent;
