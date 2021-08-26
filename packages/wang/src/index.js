import WIcon from '../packages/icon'
import { version } from '../package.json'
import { setupGlobalOptions } from './composables/globalConfig'
const components = [WIcon];
const install = (app, opts = {}) => {
    app.use(setupGlobalOptions(opts))

    components.forEach((component) => {
        app.use(component)
    })

    //applyOptions(app)
}

function applyOptions(app) {
    /* app.config.globalProperties.$loading = ElLoading.service */
}

const wang = {
    version,
    install
}
export {
    version,
    WIcon
}

export default wang