import { FC, useState, useEffect } from 'react';

import { encrypt, decrypt } from '~/lib/cipher';

import TextBox from '~/components/TextBox';
import LinkThumbnail from '~/components/LinkThumbnail';
import CopiedIndicator from '~/components/CopiedIndicator';


const Index: FC = () => {
    const [url, setURL] = useState('');
    const [password, setPassword] = useState('');
    const [encURL, setEncURL] = useState('');
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        if (url && password) {
            setEncURL(`${location.origin}/l#${encrypt(url, password)}`);
        } else {
            setEncURL('');
        }
    }, [url, password]);

    useEffect(() => {
        if (copied) {
            setTimeout(() => {
                setCopied(false);
            }, 3000);
        }
    }, [copied]);

    return (
        <>
            <TextBox
                placeholder="https://..."
                value={url}
                onChange={(u) => setURL(u)}
                autoFocus
            />
            <TextBox
                placeholder="password"
                value={password}
                onChange={(p) => setPassword(p)}
            />
            {encURL !== '' ? (
                <LinkThumbnail onCopy={() => setCopied(true)}>{encURL}</LinkThumbnail>
            ) : (
                <span>please input URL and password above</span>
            )}

            <CopiedIndicator show={copied} />

            <style jsx>{`
                span {
                    margin: 16px;
                }
            `}</style>
        </>
    );
};


export default Index;
