export const fetchApi = async (url, method) => {
	let instance = '';
	try {
		if (method && method === 'GET') {
			instance = await fetch( `https://rafmex.back-end.com.mx/api/v1/GET/${url}`, {
				method,
				headers: {
					apikey: '45e3d86c-4a3e-4309-94f6-6a7ab27e7217'
				}
			});
		}
        
		if (instance.status === 200) {
			const response = await instance.json();
			let { value } = response;
			return await value;
		} else {
			return await instance;
		}
	} catch (error) {
		throw new Error(`😱 ${error}`);
	}
};
