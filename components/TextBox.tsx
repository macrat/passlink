import { FC } from 'react';


type Props = {
    placeholder?: string;
    value: string;
    onChange: (text: string) => void;
    isPassword?: boolean;
    autoFocus?: boolean;
};


const TextBox: FC<Props> = ({ placeholder, value, onChange, isPassword=false, autoFocus=false }) => (
    <>
        <input
            type={isPassword ? 'password' : 'text'}
            placeholder={placeholder}
            value={value}
            onChange={ev => onChange(ev.target.value ?? '')}
            autoFocus={autoFocus}
        />

        <style jsx>{`
            background-color: #eee;
            border: none;
            font-size: inherit;
            margin: 8px;
            padding: 8px;
            width: 50%;
            max-width: 80em;
            box-shadow:  2px  2px 4px #fff,
                        -2px -2px 4px #fff inset,
                        -2px -2px 4px #ddd,
                         2px  2px 4px #ddd inset;
            transition: box-shadow .2s;

            :active, :focus {
                outline: none;
                box-shadow:  4px  4px 4px #fff,
                            -4px -4px 4px #fff inset,
                            -4px -4px 4px #ddd,
                             4px  4px 4px #ddd inset;
            }
        `}</style>
    </>
);


export default TextBox;
