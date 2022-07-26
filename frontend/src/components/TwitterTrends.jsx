import React from "react";
import { FaCrosshairs } from "react-icons/fa";
import { useState, useEffect } from "react";
import {
  Box,
  Heading,
  useRangeSlider,
  Button,
  Input,
  MenuProvider,
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
      .get("/api/trends", {
        params: {
          woeid: woeid,
        },
      })
      .then((response) => {
        // console.log(response.data);
        setTrends(response.data[0].trends);
      })
      .catch((error) => console.log(error.message));
  };

  const handleLocation = () => {
    alert("handle location");
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
          <option value="2459115">New York, USA</option>
          <option value="2442047">Los Angeles, USA</option>
          <option value="1105779">Sydney, Australia</option>
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
