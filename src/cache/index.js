import { Mutex } from 'async-mutex';

class Cache {
	constructor () {
		this.cache = new Map();
		this.mutex = new Mutex();
	}

	async get (k) {
		const release = await this.mutex.acquire();
		try {
			const res = this.cache.get(k);
			console.log((res ? 'HIT' : 'MISS') + ` -- ${k}`);
			return res;
		} finally {
			release();
		}
	}

	async set (k, v) {
		const release = await this.mutex.acquire();
		try {
			this.cache.set(k, v);
			console.log(this.cache);
			return true;
		} finally {
			release();
		}
	}
}

export default new Cache();
