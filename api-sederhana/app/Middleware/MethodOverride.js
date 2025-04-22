'use strict'

class MethodOverride {
  async handle ({ request }, next) {
    const method = request.input('_method')
    
    if (method && ['PUT', 'PATCH', 'DELETE'].includes(method.toUpperCase())) {
      request.method = method.toUpperCase()
    }
    
    await next()
  }
}

module.exports = MethodOverride