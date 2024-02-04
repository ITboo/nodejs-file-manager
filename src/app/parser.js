export const parseInput = (line) => {
    const trimmedInput = line.trim();
    const [command] = trimmedInput.split(' ');
    let inputParams = trimmedInput.slice(command.length).trim();

    try {
        const params = [...separateParams(inputParams)];
        return { command, params };
    } catch {
        return { command, params: [] };
    }
};

const separateParams = (paramsLine) => {
    let params = [];

    const lineTrimmed = paramsLine.trim();

    if (!lineTrimmed.length) return params;

    const firstSymbol = lineTrimmed.slice(0, 1);

    if (firstSymbol === "'" || firstSymbol === '"') {
        const paramEnd = lineTrimmed.indexOf(firstSymbol, 1);

        if (paramEnd === -1) {
            throw new Error('Invalid param');
        }

        const param = lineTrimmed.slice(1, paramEnd);

        if (param.includes('"') || param.includes("'")) {
            throw new Error('Invalid param');
        }

        const rest = lineTrimmed.slice(paramEnd + 1);
        params.push(param, ...separateParams(rest));
    } else {
        const [param] = lineTrimmed.split(' ');

        if (param.includes('"') || param.includes("'")) {
            throw new Error('Invalid param');
        }

        params.push(param, ...separateParams(lineTrimmed.slice(param.length)));
    }

    return params;
};