import { exec } from 'child_process'
import ora from 'ora'
import { Command, Log } from './types.js'
import { existYarn, log } from './utils.js'

export const installWithYarn = (name: string, type?: string): Command => ({
  cmd: 'yarn',
  args: ['create', 'next-app', name, type && `--${type}`],
  msg: 'Installing with yarn...',
  success: 'Project created successfully!',
  err: 'Project installation failed',
})

export const installWithNpm = (name: string, type?: string) => ({
  cmd: 'npx',
  args: ['create-next-app', name, type && `--${type}`],
  msg: 'Installing with npm...',
  success: 'Create next app successfully installed!',
  err: 'Create next app installation failed',
})

export const createProject = (name: string, type?: string): Command => {
  return existYarn ? installWithYarn(name, type) : installWithNpm(name, type)
}

// funcion que ejecutara el comando en el directorio actual
// en el que se encuentre el usuario
export const cmd = ({ args, cmd, err, msg, success }: Command) => {
  const cwd = process.cwd()
  const cmdStr = `${cmd} ${args.join(' ')}`
  const initMessage: Log = { message: msg, title: 'creating', color: 'blue' }
  const spinner = ora(initMessage.message).start()
  exec(cmdStr, { cwd }, error => {
    if (error) {
      spinner.fail(err)
      log({ message: err, title: 'error', color: 'red' })
    } else {
      spinner.succeed(success)
      log({ message: success, title: 'success', color: 'green' })
    }
  })
}
