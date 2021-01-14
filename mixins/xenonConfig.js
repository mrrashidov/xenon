export default {
	data() {
		return {
			xenon: {},
		};
	},

	beforeMount() {
		const { xenon = {} } = this.$site.themeConfig;
		const { labels = {} } = xenon;

		this.xenon = {
			themes: xenon.colorThemes || ['blue', 'red', 'purple'],
			defaultColorTheme: xenon.defaultColorTheme || 'default',
			defaultDarkTheme: xenon.defaultDarkTheme || false,
			disableDarkTheme: xenon.disableDarkTheme || false,
			disableThemeIgnore: xenon.disableThemeIgnore || false,
			extraOptions: xenon.extraOptions || {},
			labels: {
				darkTheme: labels.darkTheme || "Tungi qiyofa?",
				forcedThemes: labels.forcedThemes || "Qifoyalarni taqiqlash?",
			},
		};

		this.xenon.hasThemes = Array.isArray(this.xenon.themes) && this.xenon.themes.length > 0;
	},
};