/**@jsx jsx */
import { jsx } from "@emotion/core";
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
  Text,
} from "@chakra-ui/core";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import useSWR from "swr";
import { MessageCard } from "../../components/Common";
import { Footer } from "../../components/Footer";
import MainHeading from "../../components/MainHeading";
import SubHeading from "../../components/SubHeading";

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

function Sermons(props) {
  const { sermons, page, totalPages } = props;
  const router = useRouter();

  const [isSearching, setIsSearching] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const apiUrl = `${API_URL}/sermons?_q=${searchQuery}`;

  const { data: searchResult, error } = useSWR(apiUrl, fetcher);
  const loading = !searchResult && !error;

  useUpdateEffect(() => {
    if (searchQuery === "") {
      setIsSearching(false);
    }
  }, [searchQuery]);

  const showPagination = totalPages > 1;

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

      <Box py="80px" margin="auto" maxWidth="1100px" mx="auto" textAlign="left">
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
              VIEW MESSAGES
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
            searchResult.map((sermon) => (
              <Link href={`/sermons/${sermon.id}`}>
                <MessageCard
                  src={sermon.Video_url}
                  topic={sermon.Topic}
                  date={sermon.Date}
                  minister={sermon.Preacher}
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
            {sermons.map((sermon) => (
              <Link href={`/sermons/${sermon.id}`}>
                <MessageCard
                  src={sermon.Video_url}
                  topic={sermon.Topic}
                  date={sermon.Date}
                  minister={sermon.Preacher}
                  // day={sermon.Day}
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
              onClick={() => router.push(`/sermons?page=${page - 1}`)}
              isDisabled={page <= 1}
            >
              Previous
            </Button>
            <Text>
              Page {page} / {totalPages}
            </Text>
            <Button
              onClick={() => router.push(`/sermons?page=${page + 1}`)}
              isDisabled={page >= totalPages}
            >
              Next
            </Button>
          </Flex>
        </Box>
      </Box>

      <Box
        backgroundImage="url(/assets/weekly_services.jpg) "
        backgroundSize="cover"
        backgroundColor="gray.600"
        style={{ backgroundBlendMode: "overlay" }}
      >
        <Box
          py="80px"
          margin={["0 40px", "0 40px", "0 80px"]}
          color="white"
          maxWidth="500px"
        >
          <SubHeading color="#3AC7B1" marginBottom="16px">
            Get to know about our weekly activites
          </SubHeading>
          <MainHeading fontSize={["24px", "24px", "36px"]} marginBottom="28px">
            OUR WEEKLY SERVICES{" "}
          </MainHeading>
          <Box>
            <Text py={4}>
              While going to a church meeting on a Sunday is helpful, we can
              grow much deeper in the Christian life through regular fellowship
              with other brethren.
            </Text>
            <Text py={4}>
              While going to a church meeting on a Sunday is helpful, we can
              grow much deeper in the Christian life through regular fellowship
              with other brethren.
            </Text>
            <Link href="/services">
              <Button
                type="submit"
                height={["44px", "44px", "55px"]}
                px={["20px", "20px", "30px"]}
                bg="#3AC7B1"
                _hover={{ bg: "#1FBDA5" }}
                _focus="teal.800"
                fontSize={["16px", "16px", "21px"]}
                fontWeight="400"
                color="white"
                children="VIEW SERVICES"
                my={10}
              />
            </Link>
          </Box>
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

  const sermonsResponse = await fetch(
    `${API_URL}/sermons?_limit=${perPage}&_start=${start}`
  );
  const sermons = await sermonsResponse.json();

  const countResponse = await fetch(`${API_URL}/sermons/count`);
  const count = await countResponse.json();

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
