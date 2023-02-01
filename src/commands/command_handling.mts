import * as commands from './index.mjs';

const GeneralCommands = Object.values(commands) as Array<typeof commands[keyof typeof commands]>;
const GeneralCommandsJson = GeneralCommands.map(e => e.data.toJSON());

export { GeneralCommands, GeneralCommandsJson };