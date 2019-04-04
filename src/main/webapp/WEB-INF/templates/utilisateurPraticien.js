$(document).ready(function() {
	
	var self = this;
	var spe = 1;

	this.utilisateur = {
		"id" : 1,
		"mail":"adri.chataigneau@gmail.com",
		"password":"AdriBG",
		"nom" : "Chataigneau",
		"prenom" : "Adrien",
		"specialites": ["Proctologue","Gynécologue","Spécialiste des adducteurs"],
		"tel":"06 47 13 40 45",
		"duree":"30 min"
	};
	
	this.addSpe = function() {
		$("#specialites_div").append("<input id='specialite"+spe+"' type='text' class='form-control'/>");
		spe+=1;
		console.log(spe);
	};
	
	this.removeSpe = function() {
		if (spe>1){
			spe-=1
			$("#specialite"+spe).remove();
		}
	};
	
	this.mode = "";

	this.edit = function(id) {
		this.mode = "edit";
		var utilisateur = this.utilisateur;
		let specialites=utilisateur.specialites;
		$("#nom").val(utilisateur.nom);
		$("#prenom").val(utilisateur.prenom);
		$("#specialite0").val(utilisateur.specialites[0]);
		for (let i = 1; i<specialites.length;i++){
			self.addSpe();
			$("#specialite"+i).val(utilisateur.specialites[i]);
		}
		$("#mail").val(utilisateur.mail);
		$("#tel").val(utilisateur.tel);
		$("#duree").val(utilisateur.duree);
	};

	this.save = function() {
		this.utilisateur.nom = $("#nom").val();
		this.utilisateur.prenom = $("#prenom").val();
		for (let i = 0; i<spe;i++){
			this.utilisateur.specialites[i]=$("#specialite"+i).val();
		}
		this.utilisateur.mail = $("#mail").val();
		this.utilisateur.tel = $("#tel").val();
		this.utilisateur.duree = $("#duree").val();
		
		self.reload();
		
		self.cancel();
	};

	this.cancel = function() {
		this.mode = "";
		var utilisateur = this.utilisateur;
		let specialites=utilisateur.specialites;
		$("#id").prop("readonly",false);
		$("#nom").val(utilisateur.nom);
		$("#prenom").val(utilisateur.prenom);
		$("#specialite0").val(utilisateur.specialites[0]);
		for (let i = 1; i<specialites.length;i++){
			$("#specialite"+i).val(utilisateur.specialites[i]);
		}
		while (spe>specialites.length){
			this.removeSpe();
		}
		$("#mail").val(utilisateur.mail);
		$("#tel").val(utilisateur.tel);
		$("#duree").val(utilisateur.duree);
	};

	
	this.load = function() {
		var utilisateur = this.utilisateur;
		let specialites=utilisateur.specialites;
		$("#nom").val(utilisateur.nom);
		$("#prenom").val(utilisateur.prenom);
		$("#specialite0").val(utilisateur.specialites[0]);
		spe=1;
		for (let i = 1; i<specialites.length;i++){
			self.addSpe();
			$("#specialite"+i).val(utilisateur.specialites[i]);
		}
		$("#mail").val(utilisateur.mail);
		$("#tel").val(utilisateur.tel);
		$("#duree").val(utilisateur.duree);
	};
	
	this.reload = function() {
		var utilisateur = this.utilisateur;
		let specialites=utilisateur.specialites;
		$("#nom").val(utilisateur.nom);
		$("#prenom").val(utilisateur.prenom);
		$("#specialite0").val(utilisateur.specialites[0]);
		for (let i = 1; i<specialites.length;i++){
			$("#specialite"+i).val(utilisateur.specialites[i]);
		}
		$("#mail").val(utilisateur.mail);
		$("#tel").val(utilisateur.tel);
		$("#duree").val(utilisateur.duree);
	};
	
	this.load();	
});
