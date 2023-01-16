export default (config, env, helpers) => {
  if (!env.production) {
    console.log('dev')
    config.output.publicPath = '/';
  } else {
    config.output.publicPath = '/plateup-leaderboard/';
  }

  // use the public path in your app as 'process.env.PUBLIC_PATH'
  config.plugins.push(
    new helpers.webpack.DefinePlugin({
      'process.env.PUBLIC_PATH': JSON.stringify(config.output.publicPath || '/')
    })
  );
};