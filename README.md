## How to deploy
https://vitejs.dev/guide/static-deploy.html

## 参考
https://ics.media/entry/210129/

## Tips
- tailwindCSS はつかいたい。べんり。
- p5.js のインスタンスモードを調べると便利にコーディングできそう
- vite の multiple page app がまだ微妙そう...
  - なんか、tailwindCSS との相性悪そう...?
    - https://lealog.hateblo.jp/entry/2021/08/24/114324
  - いちいち、ページを追加するたびにビルドオプションいじらなきゃいけないの面倒すぎる
    - https://ja.vitejs.dev/guide/build.html#%E3%83%9E%E3%83%AB%E3%83%81%E3%83%9A%E3%83%BC%E3%82%B8%E3%82%A2%E3%83%97%E3%83%AA
- parcel の方が面倒少なくてよさそう...?
  - tailwindCSSもサポートしてくれてそう
    - 少してこづった
    - tailwindCSSがうまく動かずにはまりかけた
    - v1 と v2 が結構ちがうみたい 
      - v2はコッチ
        - https://parceljs.org/
        - https://parceljs.org/getting-started/webapp/
      - parcel-bundler は v1 みたい（普通に検索するとこっちがでてくる...）
        - https://ja.parceljs.org/
  - デプロイどうなるんやろか?
    - vercel が解決してくれた
