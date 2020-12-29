let environment = {
  plugins: [
    require('tailwindcss'),
    require('postcss-import'),
    require('postcss-flexbugs-fixes'),
    require('postcss-preset-env')({
      autoprefixer: {
        flexbox: 'no-2009'
      },
      stage: 3
    }),
		process.env.NODE_ENV === 'production' && require('@fullhuman/postcss-purgecss')({
			content: ["./app/**/*.html.erb"],
			defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
		})
  ]
};

module.exports = environment;
