function validarUsuarioArea() {
	
	var testarValidacao;
	
	var botaoAcao = document.getElementById('botaoAcao').value;
	var descricao = document.getElementById('descricao').value;
	
	if (descricao == ""){
		alert ("Informe a descrição!");
		document.getElementById('descricao').focus();
		return false;
	}
	
	if (trim(botaoAcao) == "Cadastrar")
		testarValidacao = confirm("Deseja confirmar o cadastro?");
	else
		if (trim(botaoAcao) == "Alterar")
			testarValidacao = confirm("Deseja confirmar a alteração dos dados?");

	if(testarValidacao)
		return true;
	else
		return false;
}

function excluirUsuarioArea(){
	var id_usuario_area = document.formUsuarioArea.id_usuario_area.value;
	var testarExcluir  = confirm("Deseja confirmar a exclusão?");

	if(testarExcluir)
		location.href = "index.php?area=" + encode64("seguranca/usuario_area/usuario_area_exe.php") + "&id_usuario_area=" + id_usuario_area + "&botaoAcao=Excluir";
		
}