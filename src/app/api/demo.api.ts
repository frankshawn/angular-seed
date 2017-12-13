import { HttpUtils } from '../shared/util-plugins/http/http.utils'
import { AppConfig } from '../config/app.config'

export class DemoApi {
    static getServerURL (path) {
        return AppConfig.serverURL + path
    }

    static post (url: string, params: Object) {
        return HttpUtils.post(url, params)
    }

    static queryXXList () {
        return DemoApi.post(DemoApi.getServerURL('queryXXList'), {})
    }
}