/**@jsx jsx */
import {
	Box,
	Button,
	Flex,
	Icon,
	IconButton,
	Input,
	InputGroup,
	InputLeftElement,
	InputRightElement,
	SimpleGrid,
	Spinner,
	Text,
} from "@chakra-ui/core";
import useScript from "@charlietango/use-script";
import { jsx } from "@emotion/core";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import useSWR from "swr";
import { MessageCard } from "../../components/Common";
import { Footer } from "../../components/Footer";
import MainHeading from "../../components/MainHeading";
import SubHeading from "../../components/SubHeading";
import { SermonMessageModel } from "../../services/providers/api-models";
import { GetApiProvider } from "../../services/providers/api-provider";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const API_URL = "https://hog-website.herokuapp.com";

const useUpdateEffect = (effect, dependencies = []) => {
	const isInitialMount = React.useRef(true);

	React.useEffect(() => {
		if (isInitialMount.current) {
			isInitialMount.current = false;
		} else {
			effect();
		}
	}, dependencies);
};

interface SermonsProps {
	sermons: SermonMessageModel[];
	page: number;
	totalPages: number;
	[prop: string]: any;
}

function Sermons(props: SermonsProps) {
	const { sermons, page, totalPages } = props;
	const router = useRouter();

	const [isSearching, setIsSearching] = useState(false);
	const [searchQuery, setSearchQuery] = useState("");

	const apiUrl = `${GetApiProvider().messages().getUrl()}?_q=${searchQuery}`;

	const { data: searchResult, error } = useSWR(apiUrl, fetcher);
	const loading = !searchResult && !error;

	useUpdateEffect(() => {
		if (searchQuery === "") {
			setIsSearching(false);
		}
	}, [searchQuery]);

	const showPagination = totalPages > 1;

	// TODO: what does this do?
	const [ready] = useScript("https://www.vidlive.co/embed/2844/embed.js");

	return (
		<Box maxWidth="100%">
			<Box
				backgroundImage="url(/assets/sermons.jpg) "
				backgroundSize="cover"
				paddingY={["60px", "110px", "120px"]}
				backgroundColor="gray.700"
				style={{ backgroundBlendMode: "overlay" }}
			>
				<Box textAlign="center" color="white">
					<SubHeading
						color="#3AC7B1"
						fontSize={["18px", "18px", "26px", "26px"]}
					>
						RCCG House of Grace
					</SubHeading>
					<MainHeading fontSize={["36px", "36px", "48px", "60px"]}>
						SERMONS
					</MainHeading>
				</Box>
			</Box>

			<Box
				py="80px"
				margin="auto"
				maxWidth="1600px"
				mx="auto"
				textAlign="left"
				paddingX={["40px", "40px", "80px"]}
			>
				<Box mb="80px">
					<MainHeading
						textTransform="uppercase"
						fontSize={["24px", "24px", "36px"]}
						marginBottom="28px"
					>
						Watch our Live Service
					</MainHeading>

					<Box>
						<div
							id="vidlive-embed-2844"
							css={{
								"#vidlive-placeholder": {
									width: "100%",
									margin: "0 auto",
								},
							}}
						/>
						{!ready ? (
							<Flex align="center" justify="center" h="634px" bg="gray.50">
								<Spinner />
								Loading...
							</Flex>
						) : null}
					</Box>
				</Box>

				<Flex
					justifyContent="space-between"
					alignItems="left"
					direction={["column", "column", "row"]}
				>
					<Box>
						<SubHeading color="#3AC7B1" marginBottom="16px">
							Sermon Archive
						</SubHeading>
						<MainHeading
							fontSize={["24px", "24px", "36px"]}
							marginBottom="28px"
						>
							MESSAGES
						</MainHeading>
					</Box>

					<InputGroup zIndex={0}>
						<InputLeftElement
							children={<Icon name="search" color="#3AC7B1" />}
						/>
						<Input
							placeholder="Find Sermons"
							focusBorderColor="#3AC7B1"
							value={searchQuery}
							onChange={(e) => {
								if (e.target.value.length > 2) {
									setIsSearching(true);
								}
								setSearchQuery(e.target.value);
							}}
						/>
						{searchQuery.length > 0 && (
							<InputRightElement
								children={
									<IconButton
										aria-label="close"
										onClick={() => {
											setSearchQuery("");
										}}
										size="xs"
										icon="close"
									/>
								}
							/>
						)}
					</InputGroup>
				</Flex>

				{isSearching && loading && <Box>Loading...</Box>}

				<SimpleGrid
					hidden={!isSearching}
					columns={[1, 1, 3]}
					spacing={10}
					py={5}
					px={["12px", "12px", "0px"]}
				>
					{searchResult?.length > 0 ? (
						searchResult.map((message) => (
							<Link href={`/messages/${message.id}`}>
								<MessageCard
									src={message.Video_url}
									topic={message.Topic}
									date={message.Date}
									minister={message.Preacher}
								/>
							</Link>
						))
					) : (
						<Box>No sermons found for {searchQuery}</Box>
					)}
				</SimpleGrid>

				<Box hidden={isSearching}>
					<SimpleGrid
						columns={[1, 1, 3]}
						spacing={10}
						py={5}
						px={["12px", "12px", "0px"]}
					>
						{sermons.map((message) => (
							<Link href={`/messages/${message.id}`}>
								<MessageCard
									src={message.Video_url}
									topic={message.Topic}
									date={message.Date}
									minister={message.Preacher}
								/>
							</Link>
						))}
					</SimpleGrid>

					<Flex
						hidden={!showPagination}
						justifyContent="space-between"
						align="center"
					>
						<Button
							onClick={() => router.push(`/messages?page=${page - 1}`)}
							isDisabled={page <= 1}
						>
							Previous
						</Button>
						<Text>
							Page {page} / {totalPages}
						</Text>
						<Button
							onClick={() => router.push(`/messages?page=${page + 1}`)}
							isDisabled={page >= totalPages}
						>
							Next
						</Button>
					</Flex>
				</Box>
			</Box>

			<Footer />
		</Box>
	);
}

export async function getServerSideProps(ctx) {
	const page = ctx.query?.page ?? 1;
	const perPage = 6;

	const start = +page === 1 ? 0 : (+page - 1) * perPage;

	const apiProvider = GetApiProvider();
	const sermons = await apiProvider.messages().getMessages({
		limit: perPage,
		start: start,
		sort: "updated_at:DESC",
	});

	const count = await apiProvider.messages().getCount();
	const totalPages = Math.ceil(count / perPage);

	// Pass data to the page via props
	return {
		props: {
			sermons,
			page: +page,
			totalPages,
		},
	};
}

export default Sermons;
