import type { FC } from "react";
import { Blockquote, Image, List, ListItem, Text, Title } from "@mantine/core";
import ReactMarkdown, { type Components } from "react-markdown";
import remarkGfm from "remark-gfm";

const renderers: Components = {
	h1: ({ children }) => <Title order={1}>{children}</Title>,
	h2: ({ children }) => <Title order={2}>{children}</Title>,
	h3: ({ children }) => <Title order={3}>{children}</Title>,
	h4: ({ children }) => <Title order={4}>{children}</Title>,
	h5: ({ children }) => <Title order={5}>{children}</Title>,
	h6: ({ children }) => <Title order={6}>{children}</Title>,

	p: ({ children }) => <Text>{children}</Text>,
	blockquote: ({ children }) => <Blockquote>{children}</Blockquote>,

	ul: ({ children }) => <List withPadding>{children}</List>,
	ol: ({ children }) => (
		<List type="ordered" withPadding>
			{children}
		</List>
	),
	li: ({ children }) => <ListItem>{children}</ListItem>,

	img: ({ src, alt }) => <Image src={src} alt={alt} />,

	strong: ({ children }) => (
		<Text fw={700} component="span">
			{children}
		</Text>
	),
	em: ({ children }) => (
		<Text fs="italic" component="span">
			{children}
		</Text>
	),
};

const MarkdownRenderer: FC<{ content: string }> = ({ content }) => {
	const formattedContent = content.replace("\\n", "  ");

	return (
		<ReactMarkdown remarkPlugins={[remarkGfm]} components={renderers}>
			{formattedContent}
		</ReactMarkdown>
	);
};

export default MarkdownRenderer;
