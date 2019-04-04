$(document).ready(function() {
	
var utilisateurs = [ {
	"id" : 1,
	"nom" : "patient@un",
	"mdp" : "mdppatientun",
	"type" : "patient"
}, {
	"id" : 2,
	"nom" : "praticien@un",
	"mdp" : "mdppraticienun",
	"type" : "praticien"
}, {
	"id" : 3,
	"nom" : "anonyme@un",
	"mdp" : "mdpanonymeun",
	"type" : "anonyme"
} ];
	
	this.reload = function(utilisateur) {
		if (utilisateur.type === "praticien"){
		$("#menu").append("<div class='left'><ul><a href='ModificationPraticien.html' style='text-decoration:none'><li class='item-menu'><span class='fas fa-user-md fa-2x'></span><span class='menu'>Gérer son profil</span></li></a><a href='#' style='text-decoration:none'><li class='item-menu'><span class='fas fa-search-plus fa-2x'></span><span class='menu'>Rechercher un patient</span></li></a><a href='#' style='text-decoration:none'><li class='item-menu'><span class='fas fa-stethoscope fa-2x'></span><span class='menu'>Gérer ses RDV</span></li></a><a href='' style='text-decoration:none'><li class='item-menu'><span class='fas fa-history fa-2x'></span><span class='menu'>Historique des RDV</span></li></a></ul></div>");
		}
		else if (utilisateur.type === "patient"){
		$("#menu").append("<div class='left'><ul><a href='ModificationPatient.html' style='text-decoration:none'><li class='item-menu'><span class='fas fa-user-circle fa-2x'></span><span class='menu'>Gérer son profil</span></li></a><a href='#' style='text-decoration:none'><li class='item-menu'><span class='fas fa-search-plus fa-2x'></span><span class='menu'>Rechercher un RDV</span></li></a><a href='#'  style='text-decoration:none'><li class='item-menu'><span class='far fa-calendar-alt fa-2x'></span><span class='menu'>Mes RDV</span></li></a></ul></div>");
		}
	}

	
	this.reload(utilisateurs[0]);
	
});


	