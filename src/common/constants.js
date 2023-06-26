const USERNAME = 'username';
const DEFAULT_USERNAME = 'Stranger';
const WELCOME_MSG = 'Welcome to the File Manager';
const THANK_MSG = 'Thank you for using File Manager';
const BYE_MSG = 'goodbye!';

export {
    WELCOME_MSG,
    THANK_MSG,
    BYE_MSG,
    USERNAME,
    DEFAULT_USERNAME,
};

//NAV
const LS = 'ls';
const UP = 'up';
const CD = 'cd';
const EXIT = '.exit';
//HELP
const HELP = 'help';
//HASH
const HASH = 'hash';
//FS
const CAT = 'cat';
const ADD = 'add';
const RM = 'rm';
const RN = 'rn';
const CP = 'cp';
const MV = 'mv';
//ZIP
const COMPRESS = 'compress';
const DECOMPRESS = 'decompress';

export { LS, UP, EXIT, CD, HELP, HASH, CAT, ADD, RM, RN, CP, MV, COMPRESS, DECOMPRESS };

const OS_EOL = 'os --EOL';
const OS_CPUS = 'os --cpus';
const OS_HOMEDIR = 'os --homedir';
const OS_USERNAME = 'os --username';
const OS_ARCHITECTURE = 'os --architecture';
export { OS_EOL, OS_CPUS, OS_HOMEDIR, OS_USERNAME, OS_ARCHITECTURE }