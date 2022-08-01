import React from "react";
import { useState, useEffect } from "react";
import {
  Box,
  Heading,
  Wrap,
  WrapItem,
  Select,
  Tag,
  TagLabel,
} from "@chakra-ui/react";

const TwitterTrends = () => {
  const [trends, setTrends] = useState([]);
  const [woeid, setWoeid] = useState("1");
  const axios = require("axios").default;

  useEffect(() => {
    getTrends();
  }, [woeid]);

  const getTrends = () => {
    axios
      .get("https://us-central1-querylake.cloudfunctions.net/twitter_api", {
        params: {
          woeid: woeid,
        },
      })
      .then((response) => {
        // console.log(response.data);
        setTrends(response.data[0].trends);
        console.log(response.data[0].trends);
      })
      .catch((error) => console.log(error.message));
  };

  return (
    <div>
      <Box
        maxW="80%"
        margin="1em auto"
        rounded="2xl"
        boxShadow="2xl"
        padding={2}
      >
        <Heading margin={6}>Real-Time Global Twitter Trends</Heading>
        <Select
          name="trendingPlace"
          variant="filled"
          colorScheme="blue"
          maxW="60%"
          margin={6}
          onChange={(e) => setWoeid(e.target.value)}
        >
          <option value="1">Worldwide</option>
          <option value="23424748">Australia</option>
          <option value="23424757">Belgium</option>
          <option value="23424768">Brazil</option>
          <option value="23424794">Canada</option>
          <option value="23424856">Japan</option>
          <option value="23424950">Spain</option>
          <option value="23424977">United States</option>
          <option value="23424982">Venezuela</option>
        </Select>
        <Wrap margin={2} spacing={1} padding={4}>
          {trends.map((trend, index) => (
            <WrapItem>
              <Tag margin={1} size="lg">
                <TagLabel>{trend.name}&nbsp;&nbsp;</TagLabel>
                <Tag bgColor="blue.500">
                  <TagLabel color="white">
                    {trend.tweet_volume ? trend.tweet_volume : "N/A"}
                  </TagLabel>
                </Tag>
              </Tag>
            </WrapItem>
          ))}
        </Wrap>
        <div>
          {/* <ul>
            {trends.map((trend, index) => (
              <li key={index}>
                <a href={trend.url}>{trend.name}</a>
                {trend.tweet_volume && (
                  <span className="tweet-volume">{trend.tweet_volume}</span>
                )}
              </li>
            ))}
          </ul> */}
        </div>
      </Box>

      {/* <div className="content">{listTrends}</div> */}
    </div>
  );
};

export default TwitterTrends;
