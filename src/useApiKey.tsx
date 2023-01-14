import { useState } from 'react';

const useApiKey = (): [string | null, (value: string | null) => void] => {
	const [apiKey, setApiKey] = useState<string | null>(localStorage.getItem('openAiApiKey'));

	const handleSetApiKey = (value: string | null) => {
		value ? localStorage.setItem('openAiApiKey', value) : localStorage.clear();
		setApiKey(value);
	};

	return [apiKey, handleSetApiKey];
};

export default useApiKey;
