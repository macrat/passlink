import { ForwardRefRenderFunction, forwardRef } from 'react';


type Props = {
    children: string;
    href: string;
};


const LinkButton = forwardRef<HTMLAnchorElement, Props>(({ children, href }, ref) => (
    <a
        href={href}
        className={href !== '' ? 'enabled' : ''}
        onClick={() => {
            if (href === '') {
                event.preventDefault();
            }
        }}
        rel="noopener"
        ref={ref}
    >
        {children}

        <style jsx>{`
            display: inline-block;
            color: inherit;
            text-decoration: none;
            padding: 6px 8px;

            box-shadow:  1px  1px 5px #fff,
                        -1px -1px 5px #fff inset,
                        -1px -1px 5px #ddd,
                         1px  1px 5px #ddd inset;

            transition: box-shadow .2s;

            .enabled {
                box-shadow:  2px  2px 3px #ddd,
                            -2px -2px 3px #ddd inset,
                            -2px -2px 3px #fff,
                             2px  2px 3px #fff inset;
            }
            .enabled:hover, .enabled:focus {
                outline: none;
                box-shadow:  3px  3px 3px #ddd,
                            -3px -3px 3px #ddd inset,
                            -3px -3px 3px #fff,
                             3px  3px 3px #fff inset;
            }
            .enabled:active {
                box-shadow:  1px  1px 3px #ddd,
                            -1px -1px 3px #ddd inset,
                            -1px -1px 3px #fff,
                             1px  1px 3px #fff inset;
            }
        `}</style>
    </a>
));


export default LinkButton;
