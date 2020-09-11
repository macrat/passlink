import { FC } from 'react';


const NotFound: FC = () => (
    <div>
        <h1>404</h1>
        <span>not found</span>

        <style jsx>{`
            div {
                text-align: center;
                box-shadow:  3px  3px 3px #fff,
                            -3px -3px 3px #fff inset,
                             3px  3px 3px #ddd inset,
                            -3px -3px 3px #ddd;
            }
            h1 {
                font-size: 1200%;
                margin: -38px 32px;
                filter: drop-shadow(6px 6px 3px #ddd) drop-shadow(-6px -6px 3px #fff);
                color: #eee;
            }
            span {
                display: inline-block;
                font-size: 200%;
                color: #aaa;
                margin: 0 0 16px;
            }
        `}</style>
    </div>
);


export default NotFound;
