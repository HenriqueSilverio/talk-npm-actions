const logger = require('./logger')

const custom = logger({ name: 'Custom' })

test('logger() output type', () => {
  expect(custom).toHaveProperty('info')
})

test('logger.info() output format', () => {
  const spy = jest.spyOn(console, 'info').mockImplementation(() => {})
  const output = '{"name":"Custom","message":"Some useful message to read"}'
  custom.info('Some useful message to read')
  expect(spy).toHaveBeenCalledWith(output)
  spy.mockRestore()
})
