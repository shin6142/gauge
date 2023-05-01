# gauge
```
git clone git@github.com:shin6142/gauge.git
```

.env.sampleをコピーし.envを作成します
```
cd ~/gauge
cp .env.sample .env
```

.envの中でこのプロジェクト(gauge)への絶対Pathを定義します。
```
cd ~/gauge
vi .env
```

依存ライブラリをインストールします
```
cd ~/gauge
npm install
```

specファイルを実行します
```
cd ~/gauge
gauge run specs/api/v1/stamp/index.spec
```