strongPws = (_element) => {

  const rulerBoxTemplat = '<div class="ruler-box""><span></span><span></span><span></span><span></span></div>';
  const rulerCheckListTemplat = '<div class="ruler-check-list" style="display: none;><span class="check-list-label">A senha deve conter:</span><span class="check-list-item-1" >8 digitos</span><span class="check-list-item-2" >Letra maiúscula</span><span class="check-list-item-3" >Letra minúscula</span><span class="check-list-item-4" >Número</span><span class="check-list-item-5" >Caracter especial</span></div>';
  const rulerStrTemplat = '<div class="ruler-str"></div>';
  const rulerContainerTemplat = '<div class="ruler-container">'+rulerBoxTemplat+rulerStrTemplat+rulerCheckListTemplat+'</div>';
  const rulerContainerTemplatHtml = new DOMParser().parseFromString(rulerContainerTemplat, "text/html")
  const rulerNoteTemplat = document.querySelector('.note');
  
  rulerNoteTemplat.append(rulerContainerTemplatHtml.documentElement);
  
  const regexCaracterLow = new RegExp(/[a-z]/);
  const regexCaracterUper = new RegExp(/[A-Z]/);
  const regexCaracterSpecial = new RegExp(/[@!#$%^&*()/\\]/);
  const regexNumber = new RegExp(/[0-9]/);
  
  const $ = jQuery;
  
  let rulerBoxClassElement = document.querySelector('.ruler-box');
  let inputElement = document.getElementById(_element);
  let rulerCheckListElement = $('.ruler-check-list');

  inputElement.onblur = () =>{
      
      let pws = inputElement.value;
      inputConfirmElement.value = pws;
      showHideBox(validValueCount(pws) && validCaracterLow(pws,regexCaracterLow) && validCaracterUper(pws,regexCaracterUper) && validNumber(pws,regexNumber) && validCaracterSpecial(pws,regexCaracterSpecial))
  }

  inputElement.onfocus = () =>{
      
      let pws = inputElement.value;
      showHideBox(validValueCount(pws) && validCaracterLow(pws,regexCaracterLow) && validCaracterUper(pws,regexCaracterUper) && validNumber(pws,regexNumber) && validCaracterSpecial(pws,regexCaracterSpecial))

  }
  inputElement.oninput = () => {

      let pws = inputElement.value;

      rulerBoxTemplatCuston(pws);
      validValueCount(pws);
      validCaracterLow(pws,regexCaracterLow);
      validCaracterUper(pws,regexCaracterUper);
      validNumber(pws,regexNumber);
      validCaracterSpecial(pws,regexCaracterSpecial);
      showHideBox(validValueCount(pws) && validCaracterLow(pws,regexCaracterLow) && validCaracterUper(pws,regexCaracterUper) && validNumber(pws,regexNumber) && validCaracterSpecial(pws,regexCaracterSpecial));
  };

  rulerBoxTemplatCuston = (pws) =>{
      switch (true) {
          case pws.length <= 0:
              rulerBoxClassElement.className = "ruler-box"
              document.querySelector('.ruler-str').innerHTML = ''
              break;
          case pws.length <= 4:
              rulerBoxClassElement.className = "ruler-box pws-Weak"
              document.querySelector('.ruler-str').innerHTML = 'Senha fraca'
              break;
          case pws.length < 8:
              rulerBoxClassElement.className = "ruler-box pws-Average"
              document.querySelector('.ruler-str').innerHTML = 'Senha fraca'
              break;
          case pws.length <= 12 && validCaracterLow(pws,regexCaracterLow) && validCaracterUper(pws,regexCaracterUper) && validNumber(pws,regexNumber) && validCaracterSpecial(pws,regexCaracterSpecial):
              rulerBoxClassElement.className = "ruler-box pws-Strong"
              document.querySelector('.ruler-str').innerHTML = 'Senha boa'
              break;
          case pws.length > 18 || (pws.length > 12 && validCaracterLow(pws,regexCaracterLow) && validCaracterUper(pws,regexCaracterUper) && validNumber(pws,regexNumber) && validCaracterSpecial(pws,regexCaracterSpecial)):
              rulerBoxClassElement.className = "ruler-box pws-Very-strong"
             document.querySelector('.ruler-str').innerHTML = 'Senha forte'
              break;
          default:
              break;
      };
  }

  showHideBox = (maius, minus, number, caracter, count) =>{
      console.log(maius+' '+ minus+' '+ number+' '+ caracter+' '+ count)
      if (maius && minus && number && caracter && count) {
          rulerCheckListElement.hide(750)
      }else{
          rulerCheckListElement.show(750)
      }

  }
  validValueCount = (pws) =>{
      if (pws.length >= 8) {
          document.querySelector('.check-list-item-1').className = "check-list-item-1 valid";
          return true
      } else {
          document.querySelector('.check-list-item-1').classList.remove("valid");
          return false
      }
  }

  validCaracterUper = (pws,regex) =>{
      if (regex.test(pws)) {
          document.querySelector('.check-list-item-2').className = "check-list-item-2 valid";
          return true
      } else {
          document.querySelector('.check-list-item-2').classList.remove("valid");
          return false
      }
  }

  validCaracterLow = (pws,regex) =>{
      if (regex.test(pws)) {
          document.querySelector('.check-list-item-3').className = "check-list-item-3 valid";
          return true
      } else {
          document.querySelector('.check-list-item-3').classList.remove("valid");
          return false
      }
  }

  validNumber = (pws,regex) =>{
      if (regex.test(pws)) {
          document.querySelector('.check-list-item-4').className = "check-list-item-4 valid";
          return true
      } else {
          document.querySelector('.check-list-item-4').classList.remove("valid");
          return false
      }
  }
  
  validCaracterSpecial = (pws,regex) =>{
      if (regex.test(pws)) {
          document.querySelector('.check-list-item-5').className = "check-list-item-5 valid";
          return true
      } else {
          document.querySelector('.check-list-item-5').classList.remove("valid");
          return false
      }
  }
}