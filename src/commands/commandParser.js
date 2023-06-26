export const parseCommand = async (command) => {
    const quotesRegExp = new RegExp('(["\'])', 'gmi');
    const argRegExp = new RegExp(
        '(([^"\\s]*"[^"]+"[^"\\s]*)+|([^\'\\s]*\'[^\']+\'[^\'\\s]*)+|[^\\s"]+)',
        'gmi'
    );

    const matches = command.match(argRegExp).map(match => match.replaceAll(quotesRegExp, ''));

    const parsedCommand = {
        name: matches[0].toString(),
        arguments: matches.slice(1),
    };

    return parsedCommand;
};
