import mongoDbDriver from 'resolve-storage-mongo';
import createStorage from 'resolve-storage';

import config from './config';

const TYPES = config.GENERATED_EVENT_TYPES;

export default function worker(eventsCount, reportObj) {
    const store = createStorage({
        driver: mongoDbDriver({
            url: config.MONGODB_CONNECTION_URL,
            collection: config.MONGODB_COLLECTION_NAME
        })
    });

    return store.loadEventsByTypes(TYPES, () => reportObj.value++);
}
