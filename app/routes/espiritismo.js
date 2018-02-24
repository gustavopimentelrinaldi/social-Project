module.exports = function(application){
	application.get('/espiritismo', function(req, res){
		application.app.controllers.espiritismo.espiritismo(application, req, res);
	});
}