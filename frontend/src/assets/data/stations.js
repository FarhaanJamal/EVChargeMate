import stationImg01 from "../images/station-img01.png";
import stationImg02 from "../images/station-img02.png";
import stationImg03 from "../images/station-img03.png";

export const stations = [
  {
    id: "01",
    name: "station_name1",
    photo: stationImg01,
    address: "Mount Adora address, Sylhet.",
    price: "₹₹",
    type: ["Level-1 AC", "Level-1 DC", "Level-2 AC", "Level-3 AC", "Level-3 DC"],
    slot: [2, 1, 4, 1, 2],
    bio: "dxfcgvhjklnmbv dfxcgvhbjknm cfcuijnk m cvbhjn"
  },
  {
    id: "02",
    name: "station_name2",
    photo: stationImg02,
    address: "Mount Adora address, Sylhet.",
    price: "₹₹₹",
    type: ["Level-1 AC", "Level-2 AC"]
  },
  {
    id: "03",
    name: "station_name3",
    photo: stationImg03,
    address: "Mount Adora Hospital, Sylhet.",
    price: "₹",
    type: ["Level-1 AC", "Level-3 AC", "Level-3 DC"]
  },
];
