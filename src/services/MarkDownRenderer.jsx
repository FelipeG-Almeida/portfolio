import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import PropTypes from 'prop-types';

export default function MarkdownRenderer({ filePath }) {
	const [markdown, setMarkdown] = useState('');

	useEffect(() => {
		fetch(filePath)
			.then((response) => response.text())
			.then((text) => setMarkdown(text));
	}, [filePath]);

	return (
		<ReactMarkdown rehypePlugins={[rehypeRaw]}>{markdown}</ReactMarkdown>
	);
}

MarkdownRenderer.propTypes = {
	filePath: PropTypes.string,
};
