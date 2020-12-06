import Base from 'api/Base';
import config from 'config/config';

export default class Actions extends Base {
    addAction (data, token) {
        return this.apiClient.post(config.actions, data, token);
    }
}
