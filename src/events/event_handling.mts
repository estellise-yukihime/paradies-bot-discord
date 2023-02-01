import * as events from './index.mjs';

const GeneralEvents = Object.values(events) as Array<typeof events[keyof typeof events]>;

export { GeneralEvents };