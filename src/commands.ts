export const installWithYarn = (name: string, type?: string) => ({
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
