import { FC } from 'react';


type Props = {
    show: boolean;
}


const CopiedIndicator: FC<Props> = ({ show }) => (
    <div className={show ? 'show' : undefined}>
        Copied!

        <style jsx>{`
            margin: 4px;
            padding: 4px 8px;
            color: #eee;
            visibility: hidden;
            transition: .3s box-shadow, .3s color, .3s visibility;

            .show {
                color: inherit;
                visibility: unset;
                box-shadow:  3px  3px 4px #ddd,
                            -3px -3px 4px #ddd inset,
                             3px  3px 4px #fff inset,
                            -3px -3px 4px #fff;
            }
        `}</style>
    </div>
);


export default CopiedIndicator;
