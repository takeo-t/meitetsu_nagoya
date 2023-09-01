1. プロジェクト名：乗車位置チェッカーof名鉄名古屋駅

2. 概要
  2.1. アプリケーションの概要  
  ・本アプリケーションは名鉄名古屋駅（名古屋鉄道）の乗車位置表示をユーザーが入力した駅名に応じて表示し、  
  適切な乗車位置表示を案内します。  
  2.2. 主要機能  
  ・乗車位置表示機能  
  ・DB内に登録された駅の検索機能  
  2.3. アプリケーション開発の背景  
  ・本アプリケーションの対象ユーザーは名鉄名古屋駅を初めて利用するまたはそれに相当する方としています。  
  ・名鉄名古屋駅は上下線合わせて２本の線路から多数の方面へ走る列車が発着します。そのため行き先に応じて乗車位置表示が色分けされています。  
  適切な乗車位置で列車の到着を待てば予定の列車に乗車することができますが、探す方法は駅の電光掲示板を確認するか駅員に問い合わせる方法に限られていました。  
  そこでスマートフォンからスムーズに乗車位置表示情報をユーザーに提供できる本アプリケーションを開発いたしました。  

3. セットアップ

  3.1. ローカルにセットアップする手順  
  ```bash
  git clone https://github.com/takeo-t/meitetsu_nagoya/repository.git
  cd meitetsu_nagoya
  ```

  3.2. 依存関係  
  ```package.json
  {
  "name": "meitetsu_nagoya",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "@chakra-ui/icons": "^2.0.19",
    "@chakra-ui/react": "^2.7.1",
    "@emotion/react": "^11.11.1",
    "@emotion/styled": "^11.11.0",
    "@testing-library/jest-dom": "^5.16.5",
    "@testing-library/react": "^13.4.0",
    "@testing-library/user-event": "^13.5.0",
    "@types/axios": "^0.14.0",
    "@types/jest": "^27.5.2",
    "@types/node": "^16.18.36",
    "@types/react": "^18.2.13",
    "@types/react-dom": "^18.2.6",
    "axios": "^1.4.0",
    "framer-motion": "^10.12.16",
    "node-sass": "^7.0.3",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.13.0",
    "react-scripts": "5.0.1",
    "sass": "^1.63.6",
    "typescript": "^4.9.5",
    "web-vitals": "^2.1.4"
  },
  "scripts": {
    "start": "PORT=3001 react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  },
  "devDependencies": {
    "@babel/plugin-proposal-private-property-in-object": "^7.21.11"
  }
}
  ```

  3.3. 実行コマンド
  ```
  npm install
  npm start
  ```
4. 駅データについて
  4.1. 駅データはRails APIで製作したアプリケーション(my_station)からfetchします。  
  ```
  https://github.com/takeo-t/my_station
  ```
5. デプロイ手順

5.1. 前提条件: 例：Node.js, npmがインストールされていることを確認し、ない場合はそれらをインストールする。  
5.2. プロジェクトのクローン: Gitレポジトリからプロジェクトをクローンする  
```
git clone https://github.com/takeo-t/meitetsu_nagoya/repository.git
```
5.3. 依存関係のインストール: プロジェクトのディレクトリに移動し、npm installコマンドを実行することで依存関係をインストールする。  
```
cd meitetsu_nagoya
npm install
```
5.4. ビルド: npm run buildコマンドを実行して、プロジェクトをビルドする。  
```
npm run build
```
5.5. FTPクライアントの設定: 適切なFTPクライアント（例：Cyberduck）を使用して、ローカルサーバーへの接続を設定する。必要な情報（サーバーアドレス、ユーザー名、パスワードなど）を提供する。  
5.6. アプリケーションのアップロード: FTPクライアントを使用して、ビルドされたアプリケーション（通常はbuildディレクトリ内のすべてのファイル）を外部サーバー(レンタルサーバーやクラウドサーバー)にアップロードする。  
5.7. アクセスと確認: デプロイされたアプリケーションにアクセスして、正しく動作することを確認する。  

6. 作者情報  
   Taiki Takeo  
   X(Twitter) @118satellite  
   E-mail takeo-t@118satellite.com  


