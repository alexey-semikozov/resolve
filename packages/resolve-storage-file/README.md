# `resolve-storage-file`

This package serves as a driver for `resolve-storage` to store events using a file.

## Usage

```js
import createDriver from 'resolve-storage-file';

const driver = createDriver({ pathToFile: './store.json' });
```
