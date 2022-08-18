module.exports = {
  // siteMetadata: {
  //   siteUrl: `https://www.yourdomain.tld`,
  // },
  plugins: [
    {
			resolve: '@directus/gatsby-source-directus',
			options: {
				url: `https://w66rlzai.directus.app/`, // Fill with your Directus instance address
				auth: {
					token: 'fJQVIN_Z7bgwwPpOtIwTwijampfpPm_7', // You can use a static token from an user

					// Or you can use the credentials of an user
					// email: 'admin@gmail.com',
					// password: '12345678',
				},
			},
		},
  ],
}
