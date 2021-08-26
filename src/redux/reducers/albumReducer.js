import { db } from "../../db";
import { ActionTypes } from "../constants/actionTypes";

const initialState = [
  {
    id: "1",
    artist: "A.R. Rahman",
    album_title: "Mix",
    album_cover: "https://picsum.photos/id/336/1600/1060",
    songs: ["Maa_Tujhe_Salam", "Tere_Bina", "Chal_Chhaiyya_Chhaiya", "Jai_Ho"],
  },
  {
    id: "2",
    artist: "A.R. Rahman",
    album_title: "RockStar",
    album_cover:
      "https://i.picsum.photos/id/1071/3000/1996.jpg?hmac=rPo94Qr1Ffb657k6R7c9Zmfgs4wc4c1mNFz7ND23KnQ",
    songs: ["kun_faya_kun", "Tum_Ho", "Nadaan_Parindey", "Hawa_Hawa"],
  },
  {
    id: "3",
    artist: "A.R. Rahman",
    album_title: "Tamasha",
    album_cover:
      "https://i.picsum.photos/id/129/4910/3252.jpg?hmac=g1KzJMIp75lG_scR48R1baC6TjhVmkEyygSyngKYRsg",
    songs: [
      "Agar_Tum_Sath_Ho",
      "Matargashti",
      "Heer to badi sad hai",
      "wat wat wat",
    ],
  },
  {
    id: "4",
    artist: "A.R. Rahman",
    album_title: "Delhi-6",
    album_cover: "https://picsum.photos/id/249/3000/2000",
    songs: ["Masakkali", "Rehna Tu", "Genda Fool", "Arziyan"],
  },
];
export const albumReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_ALBUM:
      return [...state, payload];

    case ActionTypes.DELETE_ALBUM:
      const data = state.filter((elem) => {
        return elem.id !== payload.id;
      });
      console.log("data", data);
      console.log("payload", payload.id);
      return data;

    default:
      return state;
  }
};

export const selectedAlbumReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECTED_ALBUM:
      return { ...state, ...payload };
    case ActionTypes.REMOVE_ALBUM:
      return {};

    default:
      return state;
  }
};
