import { isPromise, noop } from '.'
export function callInterceptor(options) {
  var interceptor = options.interceptor
  var args = options.args
  var done = options.done

  if (interceptor) {
    var returnVal = interceptor.apply(void 0, args)

    if (isPromise(returnVal)) {
      returnVal.then(function(value) {
        if (value) {
          done()
        }
      }).catch(noop)
    } else if (returnVal) {
      done()
    }
  } else {
    done()
  }
}
