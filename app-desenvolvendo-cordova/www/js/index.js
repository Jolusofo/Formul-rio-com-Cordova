var nome = document.getElementById("nome").value;
var email = document.getElementById("email").value;
var endereco = document.getElementById("endereco").value;
var telefone = document.getElementById("telefone").value;
var cidade = document.getElementById("cidade").value;
var fax = document.getElementById("fax").value;
var cep = document.getElementById("cep").value;
var sexo = document.getElementById("sexo").value; 

function confirmar(){

        
        
        

        

    try{



        if(nome == " ")throw "Informe o nome completo";
        else
        if(email == " ")throw "Informe informe o email";
        else
        if(endereco == " ")throw "Informe informe o Endereço";
        else
        if(cidade == " ")throw "Informe a Cidade";
        else
        if(fax == " ")throw "Informe o Numero do Fax";
        else
        if(telefone == " ")throw "Informe o Numero do Telefone";
        else
        if(cep == " ")throw "Informe o Numero do CEP";
        else
        if(isNaN(fax))throw "Informe em numero o Fax";
        else
        if(isNaN(cep))throw "Informe em numero o CEP";
        else
         if(isNaN(telefone))throw "Informe em numero o Telefone";
        
         if(document.getElementById("estados").selectedIndex="") 
         {
            alert("escolha um estado por favor");
            document.getElementById("estados").focus();
            return false;
    
        }
        
         if (document.getElementById("radio")[0].checked == false
         && document.getElementById("radio")[1].checked == false) {
            alert('Por favor, selecione o Tipo de Endereço.');
            return false;
          }
          return true;





       
        

        

        

 }
 
 


 catch(erro) {
    document.getElementById("msg").innerHTML="Erro: " +erro ;
 }
 finally
 {
 alert("Cadastro Efetuado com Sucesso");
 alert("João Lucas Souza da Fonseca | RA:115243");
 }
 




}


function limpar()
{
  
    if(document.getElementById('dolar').value!="" && document.getElementById('cotacao').value!="" && document.getElementById('real').value!="")
     {
    document.getElementById('nome').value="";
    document.getElementById('email').value="";
    document.getElementById('endereco').value="";
    document.getElementById('telefone').value="";
    document.getElementById('fax').value="";
    document.getElementById('cidade').value="";
    document.getElementById('cep').value="";
    }
}




document.getElementById("fechar").onclick = function()
{
    window.close();
}


