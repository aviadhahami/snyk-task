import { Mutex } from 'async-mutex';

class Cache {
	constructor () {
		this.cache = {};
		this.mutex = new Mutex();
	}

	async get (k) {
		const release = await this.mutex.acquire();
		try {
			const res = this.cache[k];
			console.log((res ? 'HIT' : 'MISS') + ` -- ${k}`);
		} finally {
			release();
		}
	}

	async set (k, v) {
		const release = await this.mutex.acquire();
		try {
			this.cache[k] = v;
			return true;
		} finally {
			release();
		}
	}
}

export default new Cache();