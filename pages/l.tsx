import { FC, useState, useEffect, createRef } from 'react';
import Router from 'next/router';

import { decrypt } from '~/lib/cipher';

import TextBox from '~/components/TextBox';
import LinkButton from '~/components/LinkButton';


const Decrypt = () => {
    const [password, setPassword_] = useState('');
    const [url, setURL] = useState('');
    const link = createRef<HTMLAnchorElement>();

    useEffect(() => {
        if (!location.hash.slice(1)) {
            Router.replace('/');
        }
    }, []);

    const setPassword = (password: string) => {
        setPassword_(password);

        try {
            setURL(decrypt(location.hash.slice(1), password));
        } catch {
            setURL('');
        }
    };

    const onKeyDown = (ev) => {
        if (ev.key === 'Enter' && url !== '') {
            link.current?.click();
        }
    };

    return (
        <>
            <span onKeyDown={onKeyDown}>
                <TextBox
                    placeholder="password"
                    isPassword
                    autoFocus
                    value={password}
                    onChange={setPassword}
                />
                <LinkButton href={url} ref={link}>GO</LinkButton>
            </span>

            {password !== '' && url === '' ? (
                <p>incorrect password</p>
            ) : <p></p>}

            <style jsx>{`
                span {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                p {
                    height: 1em;
                    margin: 0;
                }
            `}</style>
        </>
    );
};


export default Decrypt;
