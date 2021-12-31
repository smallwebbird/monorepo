import webpack from 'webpack';
import path from 'path';

interface IConfig extends webpack.Configuration {

}

export default function (config: IConfig): webpack.Configuration {
  return {
    entry: "index.js",
    output: {
      path: path.join(process.cwd(), 'dist'),
      filename: "bundle.js",
    },
    ...config
  }
}
