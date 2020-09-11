import AES from 'crypto-js/aes';
import Base64 from 'crypto-js/enc-base64';
import Utf8 from 'crypto-js/enc-utf8';


const PREFIX = 'PASSLINK:';


const Base64URL = {
    stringify(bin) {
        return (
            Base64.stringify(bin)
                .replace(/\+/, '-')
                .replace(/\//g, '_')
        );
    },
    parse(base64) {
        return Base64.parse(
            base64.replace(/-/, '+')
                .replace(/_/g, '/')
        );
    },
};


const PathFormatter = {
    stringify({ iv, salt, ciphertext }) {
        return [
            iv.toString(Base64URL),
            salt.toString(Base64URL),
            ciphertext.toString(Base64URL),
        ].join('/');
    },
    parse(path) {
        const [iv, salt, ciphertext] = path.split('/');
        return {
            ciphertext: Base64URL.parse(ciphertext),
            iv: Base64URL.parse(iv),
            salt: Base64URL.parse(salt),
        };
    },
};


export function encrypt(text: string, password: string): string {
    return AES.encrypt(PREFIX + text, password).toString(PathFormatter);
}


export function decrypt(data: string, password: string): string {
    const dec = AES.decrypt(data, password, { format: PathFormatter }).toString(Utf8);

    if (!dec.startsWith(PREFIX)) {
        throw new Error('incorrect password');
    }

    return dec.slice(PREFIX.length);
}
