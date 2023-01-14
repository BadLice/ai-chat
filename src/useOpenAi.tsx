import { Configuration, OpenAIApi } from 'openai';
import { useCallback, useMemo, useState } from 'react';
import useApiKey from './useApiKey';

interface ResponseError extends Error {
	status: number;
}

const useOpenAi = () => {
	const [apiKey, setApiKey] = useApiKey();
	const separators = useMemo(() => ['&htxtmsg$:', '&rtxtmsg$:'], []); //[human is speaking indicator, robot is speaking indicator]
	const [transcriptList, setTrascriptList] = useState<string[]>([]);
	const [isThinking, setIsThinking] = useState(false);

	const talk = useCallback(
		async (prompt: string) => {
			if (apiKey) {
				setIsThinking(true);
				const configuration = new Configuration({
					apiKey,
				});
				const openai = new OpenAIApi(configuration);
				try {
					const response = await openai.createCompletion({
						model: 'text-davinci-003',
						prompt,
						temperature: 0.9,
						max_tokens: 150,
						top_p: 1,
						frequency_penalty: 0,
						presence_penalty: 0.6,
						stop: separators,
					});

					setIsThinking(false);
					setTrascriptList([...transcriptList, response.data.choices[0].text || '']);
					return response;
				} catch (error) {
					if ((error as Error).message === 'Request failed with status code 401') {
						setApiKey(null);
					}
					return null;
				}
			}
			return null;
		},
		[apiKey, separators, setApiKey, transcriptList]
	);

	return { talk, transcriptList, separators, isThinking, setApiKey, apiKey };
};

export default useOpenAi;
