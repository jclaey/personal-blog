export const getErrors = errors => {
    const renderedErrors = () => {
        return errors.array({ onlyFirstError: true }).map(error => {
          return `<span class="error"> ${error.msg}</span>`
        })
      }
  
      return `
        <div>
          <h5>
            <i class="material-icons orange-text text-darken-3">warning</i>
            Error!
          </h5>
          ${renderedErrors()}
        </div>
      `
}