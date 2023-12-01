/* eslint-disable @typescript-eslint/no-unused-vars */

const noConsole = {
  log(..._: unknown[]) {},
  warn(..._: unknown[]) {},
  debug(..._: unknown[]) {},
  error(..._: unknown[]) {},
  table(..._: unknown[]) {},
  time(..._: unknown[]) {},
  profile(..._: unknown[]) {},
}

/** Console, but disabled in production mode */
export const logger =
  import.meta.env.MODE !== 'production' ? console : noConsole
