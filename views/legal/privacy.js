import layout from "../layout"

const privacyPage = () => {
    return layout({ template: `
        <main>
            <h1>Terms of Use</h1>
            <div>
                ${errors ? 
                    `
                        <div>
                            <div>
                                ${getErrors(errors)}
                            </div>
                        </div>
                    `
                : ''}
            </div>
            <div></div>
        </main>
    ` })
}

export default privacyPage