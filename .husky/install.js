const { spawnSync } = require('child_process')
const isCI = require('is-ci')

if (!isCI) {
  spawnSync('husky', ['install'], {
    stdio: 'inherit',
    shell: true
  })
}
