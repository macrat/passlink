import { FC } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';


type Props = {
    children: string;
    onCopy: () => void;
};


const LinkThumbnail: FC<Props> = ({ children, onCopy }) => (
    <CopyToClipboard text={children} onCopy={onCopy}>
        <button>
            <pre>{children}</pre>

            <style jsx>{`
                button {
                    display: inline-block;
                    box-sizing: border-box;
                    margin: 8px;
                    padding: 4px;
                    max-width: 80%;
                    border: none;
                    cursor: pointer;
                    box-shadow:  3px  3px 3px #fff,
                                -3px -3px 3px #fff inset,
                                 3px  3px 3px #ddd inset,
                                -3px -3px 3px #ddd;
                }
                button:focus {
                    outline: none;
                    box-shadow:  4px  4px 4px #fff,
                                -4px -4px 4px #fff inset,
                                 4px  4px 4px #ddd inset,
                                -4px -4px 4px #ddd;
                }
                button:hover pre, button:focus pre {
                    box-shadow:  1px  1px 3px #ddd,
                                -1px -1px 3px #ddd inset,
                                 1px  1px 3px #fff inset,
                                -1px -1px 3px #fff;
                }
                button:active pre {
                    box-shadow: none;
                }
                pre {
                    display: inline-block;
                    width: 100%;
                    padding: 4px 16px;
                    margin: 0;
                    box-sizing: border-box;
                    user-select: text;
                    overflow: hidden;
                    box-shadow:  2px  2px 3px #ddd,
                                -2px -2px 3px #ddd inset,
                                 2px  2px 3px #fff inset,
                                -2px -2px 3px #fff;
                }
            `}</style>
        </button>
    </CopyToClipboard>
);


export default LinkThumbnail;
