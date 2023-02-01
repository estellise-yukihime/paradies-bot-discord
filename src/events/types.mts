
export interface Action {
    name: string,
    once?: boolean,
    execute(arg: unknown[]): void | Promise<void>
}
