export default function toId(string) {
    const regex = /[^\w-_]/g;
    return string.replace(regex, '');
}