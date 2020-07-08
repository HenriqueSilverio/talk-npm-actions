const logger = ({ name }) => ({
  info (message) {
    const output = JSON.stringify({ name, message })
    console.info(output)
  }
})

module.exports = logger
