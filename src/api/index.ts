import axios from 'axios';

// AuthContextを使ってAuthデータを取得する
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000', // RailsサーバのURL
});

// axiosのリクエストをインターセプトして、認証ヘッダーを設定する
axiosInstance.interceptors.request.use((config) => {
  const { accessToken, client, uid } = useContext(AuthContext);
  config.headers['access-token'] = accessToken;
  config.headers['client'] = client;
  config.headers['uid'] = uid;
  return config;
});

export const addFavoriteStation = async (userId: number, stationId: string, auth: { accessToken: string, client: string, uid: string }) => {
    const response = await axiosInstance.post(`/favorite_stations`, {
      user_id: userId,
      station_id: stationId,
    }, {
      headers: {
        'access-token': auth.accessToken,
        'client': auth.client,
        'uid': auth.uid,
      },
    });
    return response.data;
  };
