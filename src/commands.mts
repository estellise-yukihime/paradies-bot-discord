const Commands = {
    qoutes: {
        depressing: {
            name: "qoutes-depressing",
            description: "Reply with a depressing qoutes."
        }
    }
};

const GeneralCommands: { name: string, description: string }[] = [
    ...Object.values(Commands.qoutes)
]

export { Commands, GeneralCommands }