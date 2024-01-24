const $stepText = $('#step-text')
const $stepDescription = $('#step-description')
const $stepOne = $('.step.one')
const $stepTwo = $('.step.two')
const $stepThree = $('.step.three')

const $inputNome = $("#nome")
const $inputSobrenome = $("#sobrenome")
const $inputDataDeNascimento = $('#dataNascimento')
function init() {
    $stepText.text("Passo 1 de 3 dados pessoais")
    $stepDescription.text("Descreava seus dados para que possamos te conhecer melhor.")
    $stepTwo.hide();
    $stepThree.hide();


    $inputNome.keyup(function(){
        const closest =  $(this).closest(".input-data");
        if(!this.value || this.value.trim().length < 2 ){
            return closest.addClass('error')
        }else{
            return closest.removeClass('error')
        }
    })

    $inputSobrenome.keyup(function(){
        console.log("entrou")
        const closest =  $(this).closest(".input-data");
        if(!this.value || this.value.trim().length < 2){
            return closest.addClass("error")
        }else{
            return closest.removeClass("error")
        }
    })

    $inputDataDeNascimento.on('focus',function(){
        this.type = 'date';
    })

    $inputDataDeNascimento.on('blur',function(){
        if(!this.value){
            this.type = 'text'
        }
    })

}

init()