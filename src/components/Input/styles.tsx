import styled from 'styled-components';

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
    onChange?: () => void;
}

const InputContainer = styled.div<InputContainerProps>`
    position: relative;
    width: ${({ $width }) => ($width ? $width : 'auto')};

    &::before {
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
    }
`;

const StyledInput = styled.input.attrs({ type: 'text' })<StyledInputProps>`
    width: 100%;
    padding: ${({ $padding }) => ($padding ? $padding : '0')};
    font-size: 20px;
    background: ${({ theme }) => theme.inputBg};
    border: none;
    border-radius: 8px;
    color: ${({ theme }) => theme.textColor};
    outline: none;

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
            />
        </InputContainer>
    );
};

export default InputComponent;
