// * ———————————————————————————————————————————————————————— * //
// * 	/get_theme_by_name endpoint
// * ———————————————————————————————————————————————————————— * //
var add_part_endpoint = function () {}

add_part_endpoint.prototype.init = function (app) {
	app.get('/theme_manager/get_theme_by_name/:theme_name', (req, res) => {

		var theme_name = req.params.theme_name

		theme_manager.increase_downloads_by_theme_name(theme_name)

		enduro.flat.load('global/theme_manager/themes')
			.then((themes) => {
				var theme = _.find(themes.themes, { name: theme_name })
				if (themes) {
					res.send({ found: true, theme_info: theme })
				} else {
					res.send({ found: false })
				}
			})

	})
}

module.exports = new add_part_endpoint()
