import request from 'superagent';

const HttpClient = {
	get: (path) => new Promise((resolve, reject) => {
		request
		.get(path)
		.accept('application/json')
		.end((err, res) => {
			if (!err) {
				resolve(res.body);

			} else {
				if (err.status === 404) {
					resolve(null);
				} else {
					reject(err);
				}

			}
		});
	}),

	post: (path, data) => new Promise((resolve, reject) => {
		request
		.post(path)
		.send(data)
		.accept('application/json')
		.end((err, res) => {
			if (!err) {
				resolve(res.body);

			} else {
				reject(res.body);
			}
		});

	})
};

export default HttpClient;
