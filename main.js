!function(){"use strict";var e={985:function(e,t,s){e.exports=s.p+"e088b9c2b0e20d3d6643.jpg"},981:function(e,t,s){e.exports=s.p+"6375425f487119d7448b.jpg"},61:function(e,t,s){e.exports=s.p+"23fbb82482b84852617d.jpg"},494:function(e,t,s){e.exports=s.p+"696b9f7bd3b2ecc362a2.jpg"},690:function(e,t,s){e.exports=s.p+"e9f6c8ef9dc157dba240.jpg"},403:function(e,t,s){e.exports=s.p+"01fa60276274f4b0d5f6.jpg"}},t={};function s(i){var n=t[i];if(void 0!==n)return n.exports;var r=t[i]={exports:{}};return e[i](r,r.exports,s),r.exports}s.m=e,s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s.b=document.baseURI||self.location.href,function(){class e{constructor(e){let{popupSelector:t}=e;this._popupElement=document.querySelector(t)}open(){this._popupElement.classList.add("modal_opened"),this.setEventListeners()}close(){this._popupElement.classList.remove("modal_opened"),this.deleteEventListeners()}_handleEscapeClose=e=>{"Escape"===e.key&&this.close()};_handleClose=e=>{(e.target.classList.contains("modal__close-button")||e.target.classList.contains("modal_opened"))&&this.close()};setEventListeners(){document.addEventListener("keydown",this._handleEscapeClose),this._popupElement.addEventListener("click",this._handleClose)}deleteEventListeners(){document.removeEventListener("keydown",this._handleEscapeClose),this._popupElement.removeEventListener("click",this._handleClose)}}class t extends e{constructor(e,t){super({popupSelector:e}),this._popupForm=this._popupElement.querySelector(".form"),this._handleFormSubmit=t}_getInputValues(){const e=[...this._popupForm.querySelectorAll(".form__input")],t={};for(const s of e)t[s.name]=s.value;return t}setInputValues=e=>{[...this._popupForm.querySelectorAll(".form__input")].forEach(((t,s)=>{t.value=e[s]}))};resetForm(){this._popupForm.reset()}_handleSubmit=e=>{const t=this._getInputValues();e.preventDefault(),this._handleFormSubmit(t)};setEventListeners(){super.setEventListeners(),this._popupForm.addEventListener("submit",this._handleSubmit)}deleteEventListeners(){super.deleteEventListeners(),this._popupForm.removeEventListener("submit",this._handleSubmit)}}class i{constructor(e,t,s){let{title:i,link:n}=e;this._title=i,this._link=n,this._cardElement=s.content.querySelector(".card"),this._handlePreviewImage=t}_deleteCard=()=>{this._element.remove(),this._element=null};_likeImageToggle=()=>{this._cardHeartButton.classList.toggle("card__heart-button_liked")};_setEventListeners=()=>{this._cardImageElement.addEventListener("click",(()=>{const e={title:this._title,link:this._link};this._handlePreviewImage(e)})),this._cardDeleteElement.addEventListener("click",this._deleteCard),this._cardHeartButton.addEventListener("click",this._likeImageToggle)};_cloneTemplate=()=>this._cardElement.cloneNode(!0);_setImageValues=()=>{this._cardImageElement.src=this._link,this._cardImageElement.alt=this._title,this._cardCaption.textContent=this._title};generateCard(){return this._element=this._cloneTemplate(),this._cardImageElement=this._element.querySelector(".card__image"),this._cardCaption=this._element.querySelector(".card__caption"),this._cardDeleteElement=this._element.querySelector(".card__trash-button"),this._cardHeartButton=this._element.querySelector(".card__heart-button"),this._setImageValues(),this._setEventListeners(),this._element}getName(){return this._title}getLink(){return this._link}}class n{constructor(e,t){this._data=t,this._formElement=document.forms[e],this._inputElements=[...this._formElement.querySelectorAll(this._data.inputSelector)],this._submitButton=this._formElement.querySelector(".form__submit")}_checkValidity(e){const t=this._formElement.querySelector(`#${e.id}-error`);e.validity.valid?this._hideError(e,t):this._showError(e,t)}_toggleButtonState(){this._hasInvalidInput()?this.disableSubmit():this.enableSubmit()}_setEventListeners(){this._inputElements.forEach((e=>{e.addEventListener("input",(()=>{this._checkValidity(e),this._toggleButtonState()}))}))}_showError(e,t){e.classList.add(this._data.inputErrorClass),t.textContent=e.validationMessage,t.classList.add(this._data.errorVisibleClass)}_hideError(e,t){e.classList.remove(this._data.inputErrorClass),t.textContent="",t.classList.remove(this._data.errorVisibleClass)}_hasInvalidInput(){return this._inputElements.some((e=>!e.validity.valid))}enableSubmit(){this._submitButton.classList.remove(this._data.inactiveButtonClass),this._submitButton.disabled=!1}disableSubmit(){this._submitButton.classList.add(this._data.inactiveButtonClass),this._submitButton.disabled=!0}resetValidation(){this._toggleButtonState(),this._inputElements.forEach((e=>{this._checkValidity(e)}))}enableValidation(){this._setEventListeners()}}const r=[{title:"Great Cormorant",link:new URL(s(61),s.b)},{title:"Kingfisher",link:new URL(s(690),s.b)},{title:"Green Parakeet",link:new URL(s(494),s.b)},{title:"Pelican",link:new URL(s(403),s.b)},{title:"Black Crow",link:new URL(s(981),s.b)},{title:"Canada Goose",link:new URL(s(985),s.b)}],o={formSelector:".form",inputSelector:".form__input",submitButtonSelector:".form__submit",editFormId:"#profile-edit-form",cardFormId:"#card-add-form",nameId:"#form-name",descriptionId:"#form-job",titleId:"#form-title",linkId:"#form-link",inactiveButtonClass:"form__submit_inactive",inputErrorClass:"form__input_type_error",errorVisibleClass:"form__error_visible"},l=document.querySelector(".profile"),a=l.querySelector(".profile__button_type_edit"),c=l.querySelector(".profile__button_type_add"),_=document.querySelector(".template"),d=e=>{const t=new i(e,(e=>{let{title:t,link:s}=e;f.open(t,s)}),_);u.addItem(t.generateCard())},m=new class{constructor(e){this._profileElement=document.querySelector(e),this._nameElement=this._profileElement.querySelector(".profile__name"),this._jobElement=this._profileElement.querySelector(".profile__job")}getUserInfo(){return{name:this._nameElement.textContent,job:this._jobElement.textContent}}setUserInfo(e){let{name:t,job:s}=e;this._nameElement.textContent=t,this._jobElement.textContent=s}}(".profile"),u=new class{constructor(e,t){let{data:s,renderer:i}=e;this._items=s,this._renderer=i,this._container=document.querySelector(t)}renderItems(){this._items.forEach((e=>this._renderer(e)))}addItem(e){this._container.prepend(e)}clear(){this._container.innerHTML=""}}({data:r,renderer:d},".page__cards"),h=new n("profile-edit-form",o);h.enableValidation();const p=new t(".modal_type_edit",(e=>{m.setUserInfo(e),h.disableSubmit(),p.close()}));a.addEventListener("click",(()=>{const e=m.getUserInfo();p.setInputValues(Object.values(e)),p.open()}));const E=new n("card-add-form",o);E.enableValidation();const b=new t(".modal_type_card",(e=>{d(e),E.disableSubmit(),b.resetForm(),b.close()}));c.addEventListener("click",(()=>{b.open()}));const f=new class extends e{constructor(e){super({popupSelector:e}),this._image=this._popupElement.querySelector(".modal__image"),this._caption=this._popupElement.querySelector(".modal__caption")}setSource(e,t){this._image.src=t,this._image.alt=e,this._caption.textContent=e}open(e,t){super.open(),this.setSource(e,t)}}(".modal_type_preview");u.clear(),u.renderItems()}()}();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoib1pBQ0lBLEVBQTJCLENBQUMsRUFHaEMsU0FBU0MsRUFBb0JDLEdBRTVCLElBQUlDLEVBQWVILEVBQXlCRSxHQUM1QyxRQUFxQkUsSUFBakJELEVBQ0gsT0FBT0EsRUFBYUUsUUFHckIsSUFBSUMsRUFBU04sRUFBeUJFLEdBQVksQ0FHakRHLFFBQVMsQ0FBQyxHQU9YLE9BSEFFLEVBQW9CTCxHQUFVSSxFQUFRQSxFQUFPRCxRQUFTSixHQUcvQ0ssRUFBT0QsT0FDZixDQUdBSixFQUFvQk8sRUFBSUQsRUN6QnhCTixFQUFvQlEsRUFBSSxTQUFTQyxFQUFLQyxHQUFRLE9BQU9DLE9BQU9DLFVBQVVDLGVBQWVDLEtBQUtMLEVBQUtDLEVBQU8sRUNBdEdWLEVBQW9CZSxFQUFJLEdDQXhCZixFQUFvQmdCLEVBQUlDLFNBQVNDLFNBQVdDLEtBQUtDLFNBQVNDLEssV0NBM0MsTUFBTUMsRUFDbkJDLFdBQUFBLENBQVdDLEdBQW9CLElBQW5CLGNBQUVDLEdBQWVELEVBQzNCRSxLQUFLQyxjQUFnQlYsU0FBU1csY0FBY0gsRUFDOUMsQ0FFQUksSUFBQUEsR0FDRUgsS0FBS0MsY0FBY0csVUFBVUMsSUFBSSxnQkFDakNMLEtBQUtNLG1CQUNQLENBRUFDLEtBQUFBLEdBQ0VQLEtBQUtDLGNBQWNHLFVBQVVJLE9BQU8sZ0JBQ3BDUixLQUFLUyxzQkFDUCxDQUVBQyxtQkFBc0JDLElBQ0YsV0FBZEEsRUFBTUMsS0FDUlosS0FBS08sT0FDUCxFQUdGTSxhQUFnQkYsS0FFWkEsRUFBTUcsT0FBT1YsVUFBVVcsU0FBUyx3QkFDaENKLEVBQU1HLE9BQU9WLFVBQVVXLFNBQVMsa0JBRWhDZixLQUFLTyxPQUNQLEVBR0ZELGlCQUFBQSxHQUNFZixTQUFTeUIsaUJBQWlCLFVBQVdoQixLQUFLVSxvQkFDMUNWLEtBQUtDLGNBQWNlLGlCQUFpQixRQUFTaEIsS0FBS2EsYUFDcEQsQ0FFQUosb0JBQUFBLEdBQ0VsQixTQUFTMEIsb0JBQW9CLFVBQVdqQixLQUFLVSxvQkFDN0NWLEtBQUtDLGNBQWNnQixvQkFBb0IsUUFBU2pCLEtBQUthLGFBQ3ZELEVDcENhLE1BQU1LLFVBQXNCdEIsRUFDekNDLFdBQUFBLENBQVlFLEVBQWVvQixHQUN6QkMsTUFBTSxDQUFFckIsa0JBQ1JDLEtBQUtxQixXQUFhckIsS0FBS0MsY0FBY0MsY0FBYyxTQUNuREYsS0FBS3NCLGtCQUFvQkgsQ0FDM0IsQ0FFQUksZUFBQUEsR0FDRSxNQUFNQyxFQUFZLElBQUl4QixLQUFLcUIsV0FBV0ksaUJBQWlCLGlCQUNqREMsRUFBYyxDQUFDLEVBQ3JCLElBQUssTUFBTUMsS0FBU0gsRUFDbEJFLEVBQVlDLEVBQU1DLE1BQVFELEVBQU1FLE1BRWxDLE9BQU9ILENBQ1QsQ0FFQUksZUFBa0JDLElBQ00sSUFBSS9CLEtBQUtxQixXQUFXSSxpQkFBaUIsaUJBQzdDTyxTQUFRLENBQUNDLEVBQWNDLEtBQ25DRCxFQUFhSixNQUFRRSxFQUFZRyxFQUFNLEdBQ3ZDLEVBR0pDLFNBQUFBLEdBQ0VuQyxLQUFLcUIsV0FBV2UsT0FDbEIsQ0FFQUMsY0FBaUIxQixJQUNmLE1BQU0yQixFQUFTdEMsS0FBS3VCLGtCQUVwQlosRUFBTTRCLGlCQUNOdkMsS0FBS3NCLGtCQUFrQmdCLEVBQU8sRUFHaENoQyxpQkFBQUEsR0FDRWMsTUFBTWQsb0JBQ05OLEtBQUtxQixXQUFXTCxpQkFBaUIsU0FBVWhCLEtBQUtxQyxjQUNsRCxDQUVBNUIsb0JBQUFBLEdBQ0VXLE1BQU1YLHVCQUNOVCxLQUFLcUIsV0FBV0osb0JBQW9CLFNBQVVqQixLQUFLcUMsY0FDckQsRUM1Q2EsTUFBTUcsRUFDbkIzQyxXQUFBQSxDQUFXQyxFQUFrQjJDLEVBQW9CQyxHQUFpQixJQUF0RCxNQUFFQyxFQUFLLEtBQUVDLEdBQU05QyxFQUN6QkUsS0FBSzZDLE9BQVNGLEVBQ2QzQyxLQUFLOEMsTUFBUUYsRUFDYjVDLEtBQUsrQyxhQUFlTCxFQUFnQk0sUUFBUTlDLGNBQWMsU0FDMURGLEtBQUtpRCxvQkFBc0JSLENBQzdCLENBRUFTLFlBQWNBLEtBQ1psRCxLQUFLbUQsU0FBUzNDLFNBQ2RSLEtBQUttRCxTQUFXLElBQUksRUFHdEJDLGlCQUFtQkEsS0FDakJwRCxLQUFLcUQsaUJBQWlCakQsVUFBVWtELE9BQU8sMkJBQTJCLEVBR3BFQyxtQkFBcUJBLEtBQ25CdkQsS0FBS3dELGtCQUFrQnhDLGlCQUFpQixTQUFTLEtBQy9DLE1BQU1zQixFQUFTLENBQUVLLE1BQU8zQyxLQUFLNkMsT0FBUUQsS0FBTTVDLEtBQUs4QyxPQUNoRDlDLEtBQUtpRCxvQkFBb0JYLEVBQU8sSUFFbEN0QyxLQUFLeUQsbUJBQW1CekMsaUJBQWlCLFFBQVNoQixLQUFLa0QsYUFDdkRsRCxLQUFLcUQsaUJBQWlCckMsaUJBQWlCLFFBQVNoQixLQUFLb0QsaUJBQWlCLEVBR3hFTSxlQUFpQkEsSUFDRjFELEtBQUsrQyxhQUFhWSxXQUFVLEdBSTNDQyxnQkFBa0JBLEtBQ2hCNUQsS0FBS3dELGtCQUFrQkssSUFBTTdELEtBQUs4QyxNQUNsQzlDLEtBQUt3RCxrQkFBa0JNLElBQU05RCxLQUFLNkMsT0FDbEM3QyxLQUFLK0QsYUFBYUMsWUFBY2hFLEtBQUs2QyxNQUFNLEVBRzdDb0IsWUFBQUEsR0FhRSxPQVpBakUsS0FBS21ELFNBQVduRCxLQUFLMEQsaUJBQ3JCMUQsS0FBS3dELGtCQUFvQnhELEtBQUttRCxTQUFTakQsY0FBYyxnQkFDckRGLEtBQUsrRCxhQUFlL0QsS0FBS21ELFNBQVNqRCxjQUFjLGtCQUNoREYsS0FBS3lELG1CQUFxQnpELEtBQUttRCxTQUFTakQsY0FDdEMsdUJBRUZGLEtBQUtxRCxpQkFBbUJyRCxLQUFLbUQsU0FBU2pELGNBQWMsdUJBRXBERixLQUFLNEQsa0JBRUw1RCxLQUFLdUQscUJBRUV2RCxLQUFLbUQsUUFDZCxDQUVBZSxPQUFBQSxHQUNFLE9BQU9sRSxLQUFLNkMsTUFDZCxDQUVBc0IsT0FBQUEsR0FDRSxPQUFPbkUsS0FBSzhDLEtBQ2QsRUMzRGEsTUFBTXNCLEVBQ25CdkUsV0FBQUEsQ0FBWXdFLEVBQWNDLEdBQ3hCdEUsS0FBS3VFLE1BQVFELEVBQ2J0RSxLQUFLd0UsYUFBZWpGLFNBQVNrRixNQUFNSixHQUNuQ3JFLEtBQUswRSxlQUFpQixJQUNqQjFFLEtBQUt3RSxhQUFhL0MsaUJBQWlCekIsS0FBS3VFLE1BQU1JLGdCQUVuRDNFLEtBQUs0RSxjQUFnQjVFLEtBQUt3RSxhQUFhdEUsY0FBYyxnQkFDdkQsQ0FFQTJFLGNBQUFBLENBQWU1QyxHQUNiLE1BQU02QyxFQUFlOUUsS0FBS3dFLGFBQWF0RSxjQUNwQyxJQUFHK0IsRUFBYThDLFlBRWQ5QyxFQUFhK0MsU0FBU0MsTUFHekJqRixLQUFLa0YsV0FBV2pELEVBQWM2QyxHQUY5QjlFLEtBQUttRixXQUFXbEQsRUFBYzZDLEVBSWxDLENBRUFNLGtCQUFBQSxHQUNNcEYsS0FBS3FGLG1CQUNQckYsS0FBS3NGLGdCQUVMdEYsS0FBS3VGLGNBRVQsQ0FFQWhDLGtCQUFBQSxHQUNFdkQsS0FBSzBFLGVBQWUxQyxTQUFTQyxJQUMzQkEsRUFBYWpCLGlCQUFpQixTQUFTLEtBQ3JDaEIsS0FBSzZFLGVBQWU1QyxHQUNwQmpDLEtBQUtvRixvQkFBb0IsR0FDekIsR0FFTixDQUVBRCxVQUFBQSxDQUFXbEQsRUFBYzZDLEdBQ3ZCN0MsRUFBYTdCLFVBQVVDLElBQUlMLEtBQUt1RSxNQUFNaUIsaUJBQ3RDVixFQUFhZCxZQUFjL0IsRUFBYXdELGtCQUN4Q1gsRUFBYTFFLFVBQVVDLElBQUlMLEtBQUt1RSxNQUFNbUIsa0JBQ3hDLENBRUFSLFVBQUFBLENBQVdqRCxFQUFjNkMsR0FDdkI3QyxFQUFhN0IsVUFBVUksT0FBT1IsS0FBS3VFLE1BQU1pQixpQkFDekNWLEVBQWFkLFlBQWMsR0FDM0JjLEVBQWExRSxVQUFVSSxPQUFPUixLQUFLdUUsTUFBTW1CLGtCQUMzQyxDQUVBTCxnQkFBQUEsR0FDRSxPQUFPckYsS0FBSzBFLGVBQWVpQixNQUFNMUQsSUFDdkJBLEVBQWErQyxTQUFTQyxPQUVsQyxDQUdBTSxZQUFBQSxHQUNFdkYsS0FBSzRFLGNBQWN4RSxVQUFVSSxPQUFPUixLQUFLdUUsTUFBTXFCLHFCQUMvQzVGLEtBQUs0RSxjQUFjaUIsVUFBVyxDQUNoQyxDQUNBUCxhQUFBQSxHQUNFdEYsS0FBSzRFLGNBQWN4RSxVQUFVQyxJQUFJTCxLQUFLdUUsTUFBTXFCLHFCQUM1QzVGLEtBQUs0RSxjQUFjaUIsVUFBVyxDQUNoQyxDQUVBQyxlQUFBQSxHQUNFOUYsS0FBS29GLHFCQUNMcEYsS0FBSzBFLGVBQWUxQyxTQUFTQyxJQUMzQmpDLEtBQUs2RSxlQUFlNUMsRUFBYSxHQUVyQyxDQUdBOEQsZ0JBQUFBLEdBQ0UvRixLQUFLdUQsb0JBQ1AsRUM1RUYsTUFVYXlDLEVBQVksQ0FDdkIsQ0FDRXJELE1BQU8sa0JBQ1BDLEtBYm1CLElBQUlxRCxJQUN6QixZQWNBLENBQ0V0RCxNQUFPLGFBQ1BDLEtBYmUsSUFBSXFELElBQUksYUFlekIsQ0FDRXRELE1BQU8saUJBQ1BDLEtBaEJrQixJQUFJcUQsSUFBSSxhQWtCNUIsQ0FDRXRELE1BQU8sVUFDUEMsS0FuQlksSUFBSXFELElBQUksYUFxQnRCLENBQ0V0RCxNQUFPLGFBQ1BDLEtBdEJjLElBQUlxRCxJQUFJLGFBd0J4QixDQUNFdEQsTUFBTyxlQUNQQyxLQXpCZ0IsSUFBSXFELElBQUksY0E2QmZDLEVBQVcsQ0FDdEI3QixhQUFjLFFBQ2RNLGNBQWUsZUFDZndCLHFCQUFzQixnQkFDdEJDLFdBQVkscUJBQ1pDLFdBQVksaUJBQ1pDLE9BQVEsYUFDUkMsY0FBZSxZQUNmQyxRQUFTLGNBQ1RDLE9BQVEsYUFDUmIsb0JBQXFCLHdCQUNyQkosZ0JBQWlCLHlCQUNqQkUsa0JBQW1CLHVCQ3RDZmdCLEVBQVVuSCxTQUFTVyxjQUFjLFlBQ2pDeUcsRUFBYUQsRUFBUXhHLGNBQWMsOEJBQ25DMEcsRUFBYUYsRUFBUXhHLGNBQWMsNkJBRW5Dd0MsRUFBa0JuRCxTQUFTVyxjQUFjLGFBR3pDMkcsRUFBY0MsSUFDbEIsTUFBTUMsRUFBTyxJQUFJdkUsRUFDZnNFLEdBQ0FoSCxJQUFxQixJQUFwQixNQUFFNkMsRUFBSyxLQUFFQyxHQUFNOUMsRUFDZGtILEVBQWE3RyxLQUFLd0MsRUFBT0MsRUFBSyxHQUVoQ0YsR0FHRnVFLEVBQVNDLFFBQVFILEVBQUs5QyxlQUFlLEVBS2pDa0QsRUFBa0IsSUNoQ1QsTUFDYnRILFdBQUFBLENBQVl1SCxHQUNWcEgsS0FBS3FILGdCQUFrQjlILFNBQVNXLGNBQWNrSCxHQUM5Q3BILEtBQUtzSCxhQUFldEgsS0FBS3FILGdCQUFnQm5ILGNBQWMsa0JBQ3ZERixLQUFLdUgsWUFBY3ZILEtBQUtxSCxnQkFBZ0JuSCxjQUFjLGdCQUN4RCxDQUVBc0gsV0FBQUEsR0FDRSxNQUFPLENBQ0w1RixLQUFNNUIsS0FBS3NILGFBQWF0RCxZQUN4QnlELElBQUt6SCxLQUFLdUgsWUFBWXZELFlBRTFCLENBRUEwRCxXQUFBQSxDQUFXNUgsR0FBZ0IsSUFBZixLQUFFOEIsRUFBSSxJQUFFNkYsR0FBSzNILEVBQ3ZCRSxLQUFLc0gsYUFBYXRELFlBQWNwQyxFQUNoQzVCLEtBQUt1SCxZQUFZdkQsWUFBY3lELENBQ2pDLEdEZW1DLFlBRy9CUixFQUFXLElFbkNGLE1BQ2JwSCxXQUFBQSxDQUFXQyxFQUFxQjZILEdBQW1CLElBQXZDLEtBQUVyRCxFQUFJLFNBQUVzRCxHQUFVOUgsRUFDNUJFLEtBQUs2SCxPQUFTdkQsRUFDZHRFLEtBQUs4SCxVQUFZRixFQUNqQjVILEtBQUsrSCxXQUFheEksU0FBU1csY0FBY3lILEVBQzNDLENBRUFLLFdBQUFBLEdBQ0VoSSxLQUFLNkgsT0FBTzdGLFNBQVM4RSxHQUFTOUcsS0FBSzhILFVBQVVoQixJQUMvQyxDQUVBSSxPQUFBQSxDQUFRZSxHQUNOakksS0FBSytILFdBQVdHLFFBQVFELEVBQzFCLENBRUFFLEtBQUFBLEdBQ0VuSSxLQUFLK0gsV0FBV0ssVUFBWSxFQUM5QixHRm1CQSxDQUNFOUQsS0FBTTBCLEVBQ040QixTQUFVZixHQUVaLGdCQUlJd0IsRUFBb0IsSUFBSWpFLEVBQWUsb0JBQXFCOEIsR0FDbEVtQyxFQUFrQnRDLG1CQUVsQixNQUFNdUMsRUFBWSxJQUFJcEgsRUFBYyxvQkFBcUJvQixJQUN2RDZFLEVBQWdCTyxZQUFZcEYsR0FDNUIrRixFQUFrQi9DLGdCQUNsQmdELEVBQVUvSCxPQUFPLElBR25Cb0csRUFBVzNGLGlCQUFpQixTQUFTLEtBQ25DLE1BQU11SCxFQUFZcEIsRUFBZ0JLLGNBQ2xDYyxFQUFVeEcsZUFBZTdDLE9BQU9xRCxPQUFPaUcsSUFDdkNELEVBQVVuSSxNQUFNLElBSWxCLE1BQU1xSSxFQUFvQixJQUFJcEUsRUFBZSxnQkFBaUI4QixHQUM5RHNDLEVBQWtCekMsbUJBRWxCLE1BQU0wQyxFQUFZLElBQUl2SCxFQUFjLG9CQUFxQm9CLElBQ3ZEdUUsRUFBV3ZFLEdBQ1hrRyxFQUFrQmxELGdCQUNsQm1ELEVBQVV0RyxZQUNWc0csRUFBVWxJLE9BQU8sSUFHbkJxRyxFQUFXNUYsaUJBQWlCLFNBQVMsS0FDbkN5SCxFQUFVdEksTUFBTSxJQUlsQixNQUFNNkcsRUFBZSxJR3pFTixjQUE2QnBILEVBQzFDQyxXQUFBQSxDQUFZRSxHQUNWcUIsTUFBTSxDQUFFckIsa0JBQ1JDLEtBQUswSSxPQUFTMUksS0FBS0MsY0FBY0MsY0FBYyxpQkFDL0NGLEtBQUsySSxTQUFXM0ksS0FBS0MsY0FBY0MsY0FBYyxrQkFDbkQsQ0FFQTBJLFNBQUFBLENBQVVqRyxFQUFPQyxHQUNmNUMsS0FBSzBJLE9BQU83RSxJQUFNakIsRUFDbEI1QyxLQUFLMEksT0FBTzVFLElBQU1uQixFQUNsQjNDLEtBQUsySSxTQUFTM0UsWUFBY3JCLENBQzlCLENBRUF4QyxJQUFBQSxDQUFLd0MsRUFBT0MsR0FDVnhCLE1BQU1qQixPQUNOSCxLQUFLNEksVUFBVWpHLEVBQU9DLEVBQ3hCLEdIeURzQyx1QkFFeENxRSxFQUFTa0IsUUFDVGxCLEVBQVNlLGEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zZV9wcm9qZWN0X2Fyb3VuZHRoZXVzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3NlX3Byb2plY3RfYXJvdW5kdGhldXMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9zZV9wcm9qZWN0X2Fyb3VuZHRoZXVzL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3NlX3Byb2plY3RfYXJvdW5kdGhldXMvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vc2VfcHJvamVjdF9hcm91bmR0aGV1cy8uL3NyYy9jb21wb25lbnRzL1BvcHVwLmpzIiwid2VicGFjazovL3NlX3Byb2plY3RfYXJvdW5kdGhldXMvLi9zcmMvY29tcG9uZW50cy9Qb3B1cFdpdGhGb3JtLmpzIiwid2VicGFjazovL3NlX3Byb2plY3RfYXJvdW5kdGhldXMvLi9zcmMvY29tcG9uZW50cy9DYXJkLmpzIiwid2VicGFjazovL3NlX3Byb2plY3RfYXJvdW5kdGhldXMvLi9zcmMvY29tcG9uZW50cy9Gb3JtVmFsaWRhdGlvbi5qcyIsIndlYnBhY2s6Ly9zZV9wcm9qZWN0X2Fyb3VuZHRoZXVzLy4vc3JjL3V0aWxzL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly9zZV9wcm9qZWN0X2Fyb3VuZHRoZXVzLy4vc3JjL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovL3NlX3Byb2plY3RfYXJvdW5kdGhldXMvLi9zcmMvY29tcG9uZW50cy9Vc2VySW5mby5qcyIsIndlYnBhY2s6Ly9zZV9wcm9qZWN0X2Fyb3VuZHRoZXVzLy4vc3JjL2NvbXBvbmVudHMvU2VjdGlvbi5qcyIsIndlYnBhY2s6Ly9zZV9wcm9qZWN0X2Fyb3VuZHRoZXVzLy4vc3JjL2NvbXBvbmVudHMvUG9wdXBXaXRoSW1hZ2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmosIHByb3ApIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApOyB9IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHQxNzk6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQb3B1cCB7XHJcbiAgY29uc3RydWN0b3IoeyBwb3B1cFNlbGVjdG9yIH0pIHtcclxuICAgIHRoaXMuX3BvcHVwRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IocG9wdXBTZWxlY3Rvcik7XHJcbiAgfVxyXG5cclxuICBvcGVuKCkge1xyXG4gICAgdGhpcy5fcG9wdXBFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJtb2RhbF9vcGVuZWRcIik7XHJcbiAgICB0aGlzLnNldEV2ZW50TGlzdGVuZXJzKCk7XHJcbiAgfVxyXG5cclxuICBjbG9zZSgpIHtcclxuICAgIHRoaXMuX3BvcHVwRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwibW9kYWxfb3BlbmVkXCIpO1xyXG4gICAgdGhpcy5kZWxldGVFdmVudExpc3RlbmVycygpO1xyXG4gIH1cclxuXHJcbiAgX2hhbmRsZUVzY2FwZUNsb3NlID0gKGV2ZW50KSA9PiB7XHJcbiAgICBpZiAoZXZlbnQua2V5ID09PSBcIkVzY2FwZVwiKSB7XHJcbiAgICAgIHRoaXMuY2xvc2UoKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBfaGFuZGxlQ2xvc2UgPSAoZXZlbnQpID0+IHtcclxuICAgIGlmIChcclxuICAgICAgZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcIm1vZGFsX19jbG9zZS1idXR0b25cIikgfHxcclxuICAgICAgZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcIm1vZGFsX29wZW5lZFwiKVxyXG4gICAgKSB7XHJcbiAgICAgIHRoaXMuY2xvc2UoKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBzZXRFdmVudExpc3RlbmVycygpIHtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHRoaXMuX2hhbmRsZUVzY2FwZUNsb3NlKTtcclxuICAgIHRoaXMuX3BvcHVwRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5faGFuZGxlQ2xvc2UpO1xyXG4gIH1cclxuXHJcbiAgZGVsZXRlRXZlbnRMaXN0ZW5lcnMoKSB7XHJcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB0aGlzLl9oYW5kbGVFc2NhcGVDbG9zZSk7XHJcbiAgICB0aGlzLl9wb3B1cEVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuX2hhbmRsZUNsb3NlKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IFBvcHVwIGZyb20gXCIuL1BvcHVwLmpzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb3B1cFdpdGhGb3JtIGV4dGVuZHMgUG9wdXAge1xyXG4gIGNvbnN0cnVjdG9yKHBvcHVwU2VsZWN0b3IsIGhhbmRsZUZvcm1TdWJtaXQpIHtcclxuICAgIHN1cGVyKHsgcG9wdXBTZWxlY3RvciB9KTtcclxuICAgIHRoaXMuX3BvcHVwRm9ybSA9IHRoaXMuX3BvcHVwRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvcm1cIik7XHJcbiAgICB0aGlzLl9oYW5kbGVGb3JtU3VibWl0ID0gaGFuZGxlRm9ybVN1Ym1pdDtcclxuICB9XHJcblxyXG4gIF9nZXRJbnB1dFZhbHVlcygpIHtcclxuICAgIGNvbnN0IGlucHV0TGlzdCA9IFsuLi50aGlzLl9wb3B1cEZvcm0ucXVlcnlTZWxlY3RvckFsbChcIi5mb3JtX19pbnB1dFwiKV07XHJcbiAgICBjb25zdCBpbnB1dE9iamVjdCA9IHt9O1xyXG4gICAgZm9yIChjb25zdCBpbnB1dCBvZiBpbnB1dExpc3QpIHtcclxuICAgICAgaW5wdXRPYmplY3RbaW5wdXQubmFtZV0gPSBpbnB1dC52YWx1ZTtcclxuICAgIH1cclxuICAgIHJldHVybiBpbnB1dE9iamVjdDtcclxuICB9XHJcblxyXG4gIHNldElucHV0VmFsdWVzID0gKGlucHV0VmFsdWVzKSA9PiB7XHJcbiAgICBjb25zdCBpbnB1dEVsZW1lbnRzID0gWy4uLnRoaXMuX3BvcHVwRm9ybS5xdWVyeVNlbGVjdG9yQWxsKFwiLmZvcm1fX2lucHV0XCIpXTtcclxuICAgIGlucHV0RWxlbWVudHMuZm9yRWFjaCgoaW5wdXRFbGVtZW50LCBpbmRleCkgPT4ge1xyXG4gICAgICBpbnB1dEVsZW1lbnQudmFsdWUgPSBpbnB1dFZhbHVlc1tpbmRleF07XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICByZXNldEZvcm0oKSB7XHJcbiAgICB0aGlzLl9wb3B1cEZvcm0ucmVzZXQoKTtcclxuICB9XHJcblxyXG4gIF9oYW5kbGVTdWJtaXQgPSAoZXZlbnQpID0+IHtcclxuICAgIGNvbnN0IHZhbHVlcyA9IHRoaXMuX2dldElucHV0VmFsdWVzKCk7XHJcblxyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIHRoaXMuX2hhbmRsZUZvcm1TdWJtaXQodmFsdWVzKTtcclxuICB9O1xyXG5cclxuICBzZXRFdmVudExpc3RlbmVycygpIHtcclxuICAgIHN1cGVyLnNldEV2ZW50TGlzdGVuZXJzKCk7XHJcbiAgICB0aGlzLl9wb3B1cEZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCB0aGlzLl9oYW5kbGVTdWJtaXQpO1xyXG4gIH1cclxuXHJcbiAgZGVsZXRlRXZlbnRMaXN0ZW5lcnMoKSB7XHJcbiAgICBzdXBlci5kZWxldGVFdmVudExpc3RlbmVycygpO1xyXG4gICAgdGhpcy5fcG9wdXBGb3JtLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgdGhpcy5faGFuZGxlU3VibWl0KTtcclxuICB9XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FyZCB7XHJcbiAgY29uc3RydWN0b3IoeyB0aXRsZSwgbGluayB9LCBoYW5kbGVQcmV2aWV3SW1hZ2UsIHRlbXBsYXRlRWxlbWVudCkge1xyXG4gICAgdGhpcy5fdGl0bGUgPSB0aXRsZTtcclxuICAgIHRoaXMuX2xpbmsgPSBsaW5rO1xyXG4gICAgdGhpcy5fY2FyZEVsZW1lbnQgPSB0ZW1wbGF0ZUVsZW1lbnQuY29udGVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcmRcIik7XHJcbiAgICB0aGlzLl9oYW5kbGVQcmV2aWV3SW1hZ2UgPSBoYW5kbGVQcmV2aWV3SW1hZ2U7XHJcbiAgfVxyXG5cclxuICBfZGVsZXRlQ2FyZCA9ICgpID0+IHtcclxuICAgIHRoaXMuX2VsZW1lbnQucmVtb3ZlKCk7XHJcbiAgICB0aGlzLl9lbGVtZW50ID0gbnVsbDtcclxuICB9O1xyXG5cclxuICBfbGlrZUltYWdlVG9nZ2xlID0gKCkgPT4ge1xyXG4gICAgdGhpcy5fY2FyZEhlYXJ0QnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoXCJjYXJkX19oZWFydC1idXR0b25fbGlrZWRcIik7XHJcbiAgfTtcclxuXHJcbiAgX3NldEV2ZW50TGlzdGVuZXJzID0gKCkgPT4ge1xyXG4gICAgdGhpcy5fY2FyZEltYWdlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICBjb25zdCB2YWx1ZXMgPSB7IHRpdGxlOiB0aGlzLl90aXRsZSwgbGluazogdGhpcy5fbGluayB9O1xyXG4gICAgICB0aGlzLl9oYW5kbGVQcmV2aWV3SW1hZ2UodmFsdWVzKTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5fY2FyZERlbGV0ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuX2RlbGV0ZUNhcmQpO1xyXG4gICAgdGhpcy5fY2FyZEhlYXJ0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLl9saWtlSW1hZ2VUb2dnbGUpO1xyXG4gIH07XHJcblxyXG4gIF9jbG9uZVRlbXBsYXRlID0gKCkgPT4ge1xyXG4gICAgY29uc3QgY2FyZCA9IHRoaXMuX2NhcmRFbGVtZW50LmNsb25lTm9kZSh0cnVlKTtcclxuICAgIHJldHVybiBjYXJkO1xyXG4gIH07XHJcblxyXG4gIF9zZXRJbWFnZVZhbHVlcyA9ICgpID0+IHtcclxuICAgIHRoaXMuX2NhcmRJbWFnZUVsZW1lbnQuc3JjID0gdGhpcy5fbGluaztcclxuICAgIHRoaXMuX2NhcmRJbWFnZUVsZW1lbnQuYWx0ID0gdGhpcy5fdGl0bGU7XHJcbiAgICB0aGlzLl9jYXJkQ2FwdGlvbi50ZXh0Q29udGVudCA9IHRoaXMuX3RpdGxlO1xyXG4gIH07XHJcblxyXG4gIGdlbmVyYXRlQ2FyZCgpIHtcclxuICAgIHRoaXMuX2VsZW1lbnQgPSB0aGlzLl9jbG9uZVRlbXBsYXRlKCk7XHJcbiAgICB0aGlzLl9jYXJkSW1hZ2VFbGVtZW50ID0gdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcmRfX2ltYWdlXCIpO1xyXG4gICAgdGhpcy5fY2FyZENhcHRpb24gPSB0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FyZF9fY2FwdGlvblwiKTtcclxuICAgIHRoaXMuX2NhcmREZWxldGVFbGVtZW50ID0gdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICBcIi5jYXJkX190cmFzaC1idXR0b25cIlxyXG4gICAgKTtcclxuICAgIHRoaXMuX2NhcmRIZWFydEJ1dHRvbiA9IHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYXJkX19oZWFydC1idXR0b25cIik7XHJcblxyXG4gICAgdGhpcy5fc2V0SW1hZ2VWYWx1ZXMoKTtcclxuXHJcbiAgICB0aGlzLl9zZXRFdmVudExpc3RlbmVycygpO1xyXG5cclxuICAgIHJldHVybiB0aGlzLl9lbGVtZW50O1xyXG4gIH1cclxuXHJcbiAgZ2V0TmFtZSgpIHtcclxuICAgIHJldHVybiB0aGlzLl90aXRsZTtcclxuICB9XHJcblxyXG4gIGdldExpbmsoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fbGluaztcclxuICB9XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9ybVZhbGlkYXRpb24ge1xyXG4gIGNvbnN0cnVjdG9yKGZvcm1TZWxlY3RvciwgZGF0YSkge1xyXG4gICAgdGhpcy5fZGF0YSA9IGRhdGE7XHJcbiAgICB0aGlzLl9mb3JtRWxlbWVudCA9IGRvY3VtZW50LmZvcm1zW2Zvcm1TZWxlY3Rvcl07XHJcbiAgICB0aGlzLl9pbnB1dEVsZW1lbnRzID0gW1xyXG4gICAgICAuLi50aGlzLl9mb3JtRWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKHRoaXMuX2RhdGEuaW5wdXRTZWxlY3RvciksXHJcbiAgICBdO1xyXG4gICAgdGhpcy5fc3VibWl0QnV0dG9uID0gdGhpcy5fZm9ybUVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb3JtX19zdWJtaXRcIik7XHJcbiAgfVxyXG5cclxuICBfY2hlY2tWYWxpZGl0eShpbnB1dEVsZW1lbnQpIHtcclxuICAgIGNvbnN0IGVycm9yRWxlbWVudCA9IHRoaXMuX2Zvcm1FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgIGAjJHtpbnB1dEVsZW1lbnQuaWR9LWVycm9yYFxyXG4gICAgKTtcclxuICAgIGlmICghaW5wdXRFbGVtZW50LnZhbGlkaXR5LnZhbGlkKSB7XHJcbiAgICAgIHRoaXMuX3Nob3dFcnJvcihpbnB1dEVsZW1lbnQsIGVycm9yRWxlbWVudCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLl9oaWRlRXJyb3IoaW5wdXRFbGVtZW50LCBlcnJvckVsZW1lbnQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgX3RvZ2dsZUJ1dHRvblN0YXRlKCkge1xyXG4gICAgaWYgKHRoaXMuX2hhc0ludmFsaWRJbnB1dCgpKSB7XHJcbiAgICAgIHRoaXMuZGlzYWJsZVN1Ym1pdCgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5lbmFibGVTdWJtaXQoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIF9zZXRFdmVudExpc3RlbmVycygpIHtcclxuICAgIHRoaXMuX2lucHV0RWxlbWVudHMuZm9yRWFjaCgoaW5wdXRFbGVtZW50KSA9PiB7XHJcbiAgICAgIGlucHV0RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuX2NoZWNrVmFsaWRpdHkoaW5wdXRFbGVtZW50KTtcclxuICAgICAgICB0aGlzLl90b2dnbGVCdXR0b25TdGF0ZSgpO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgX3Nob3dFcnJvcihpbnB1dEVsZW1lbnQsIGVycm9yRWxlbWVudCkge1xyXG4gICAgaW5wdXRFbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy5fZGF0YS5pbnB1dEVycm9yQ2xhc3MpO1xyXG4gICAgZXJyb3JFbGVtZW50LnRleHRDb250ZW50ID0gaW5wdXRFbGVtZW50LnZhbGlkYXRpb25NZXNzYWdlO1xyXG4gICAgZXJyb3JFbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy5fZGF0YS5lcnJvclZpc2libGVDbGFzcyk7XHJcbiAgfVxyXG5cclxuICBfaGlkZUVycm9yKGlucHV0RWxlbWVudCwgZXJyb3JFbGVtZW50KSB7XHJcbiAgICBpbnB1dEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLl9kYXRhLmlucHV0RXJyb3JDbGFzcyk7XHJcbiAgICBlcnJvckVsZW1lbnQudGV4dENvbnRlbnQgPSBcIlwiO1xyXG4gICAgZXJyb3JFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5fZGF0YS5lcnJvclZpc2libGVDbGFzcyk7XHJcbiAgfVxyXG5cclxuICBfaGFzSW52YWxpZElucHV0KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2lucHV0RWxlbWVudHMuc29tZSgoaW5wdXRFbGVtZW50KSA9PiB7XHJcbiAgICAgIHJldHVybiAhaW5wdXRFbGVtZW50LnZhbGlkaXR5LnZhbGlkO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvL2ZvciB1c2UgYnkgYWRkIGltYWdlIGZvcm1cclxuICBlbmFibGVTdWJtaXQoKSB7XHJcbiAgICB0aGlzLl9zdWJtaXRCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSh0aGlzLl9kYXRhLmluYWN0aXZlQnV0dG9uQ2xhc3MpO1xyXG4gICAgdGhpcy5fc3VibWl0QnV0dG9uLmRpc2FibGVkID0gZmFsc2U7XHJcbiAgfVxyXG4gIGRpc2FibGVTdWJtaXQoKSB7XHJcbiAgICB0aGlzLl9zdWJtaXRCdXR0b24uY2xhc3NMaXN0LmFkZCh0aGlzLl9kYXRhLmluYWN0aXZlQnV0dG9uQ2xhc3MpO1xyXG4gICAgdGhpcy5fc3VibWl0QnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIHJlc2V0VmFsaWRhdGlvbigpIHtcclxuICAgIHRoaXMuX3RvZ2dsZUJ1dHRvblN0YXRlKCk7XHJcbiAgICB0aGlzLl9pbnB1dEVsZW1lbnRzLmZvckVhY2goKGlucHV0RWxlbWVudCkgPT4ge1xyXG4gICAgICB0aGlzLl9jaGVja1ZhbGlkaXR5KGlucHV0RWxlbWVudCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8vY2FsbCBmcm9tIHdpdGhpbiB0aGUgb3BlbmVkIGZvcm1cclxuICBlbmFibGVWYWxpZGF0aW9uKCkge1xyXG4gICAgdGhpcy5fc2V0RXZlbnRMaXN0ZW5lcnMoKTtcclxuICB9XHJcbn1cclxuIiwiY29uc3QgZ3JlYXRDb3Jtb3JhbnQgPSBuZXcgVVJMKFxyXG4gIFwiLi4vaW1hZ2VzL2dyZWF0LWNvcm1vcmFudC5qcGdcIixcclxuICBpbXBvcnQubWV0YS51cmxcclxuKTtcclxuY29uc3Qga2luZ0Zpc2hlciA9IG5ldyBVUkwoXCIuLi9pbWFnZXMva2luZ2Zpc2hlci5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcclxuY29uc3QgZ3JlZW5QYXJha2VldCA9IG5ldyBVUkwoXCIuLi9pbWFnZXMvZ3JlZW4tcGFyYWtlZXQuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XHJcbmNvbnN0IHBlbGljYW4gPSBuZXcgVVJMKFwiLi4vaW1hZ2VzL3BlbGljYW4uanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XHJcbmNvbnN0IGJsYWNrQ3JvdyA9IG5ldyBVUkwoXCIuLi9pbWFnZXMvY3Jvdy5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcclxuY29uc3QgY2FuYWRhR29vc2UgPSBuZXcgVVJMKFwiLi4vaW1hZ2VzL2NhbmFkYS1nb29zZS5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcclxuXHJcbmV4cG9ydCBjb25zdCBpbml0Q2FyZHMgPSBbXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiR3JlYXQgQ29ybW9yYW50XCIsXHJcbiAgICBsaW5rOiBncmVhdENvcm1vcmFudCxcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIktpbmdmaXNoZXJcIixcclxuICAgIGxpbms6IGtpbmdGaXNoZXIsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJHcmVlbiBQYXJha2VldFwiLFxyXG4gICAgbGluazogZ3JlZW5QYXJha2VldCxcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIlBlbGljYW5cIixcclxuICAgIGxpbms6IHBlbGljYW4sXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJCbGFjayBDcm93XCIsXHJcbiAgICBsaW5rOiBibGFja0Nyb3csXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJDYW5hZGEgR29vc2VcIixcclxuICAgIGxpbms6IGNhbmFkYUdvb3NlLFxyXG4gIH0sXHJcbl07XHJcblxyXG5leHBvcnQgY29uc3QgZm9ybURhdGEgPSB7XHJcbiAgZm9ybVNlbGVjdG9yOiBcIi5mb3JtXCIsXHJcbiAgaW5wdXRTZWxlY3RvcjogXCIuZm9ybV9faW5wdXRcIixcclxuICBzdWJtaXRCdXR0b25TZWxlY3RvcjogXCIuZm9ybV9fc3VibWl0XCIsXHJcbiAgZWRpdEZvcm1JZDogXCIjcHJvZmlsZS1lZGl0LWZvcm1cIixcclxuICBjYXJkRm9ybUlkOiBcIiNjYXJkLWFkZC1mb3JtXCIsXHJcbiAgbmFtZUlkOiBcIiNmb3JtLW5hbWVcIixcclxuICBkZXNjcmlwdGlvbklkOiBcIiNmb3JtLWpvYlwiLFxyXG4gIHRpdGxlSWQ6IFwiI2Zvcm0tdGl0bGVcIixcclxuICBsaW5rSWQ6IFwiI2Zvcm0tbGlua1wiLFxyXG4gIGluYWN0aXZlQnV0dG9uQ2xhc3M6IFwiZm9ybV9fc3VibWl0X2luYWN0aXZlXCIsXHJcbiAgaW5wdXRFcnJvckNsYXNzOiBcImZvcm1fX2lucHV0X3R5cGVfZXJyb3JcIixcclxuICBlcnJvclZpc2libGVDbGFzczogXCJmb3JtX19lcnJvcl92aXNpYmxlXCIsXHJcbn07XHJcbiIsImltcG9ydCBcIi4vaW5kZXguY3NzXCI7XHJcbmltcG9ydCBQb3B1cFdpdGhGb3JtIGZyb20gXCIuLi9jb21wb25lbnRzL1BvcHVwV2l0aEZvcm1cIjtcclxuaW1wb3J0IFBvcHVwV2l0aEltYWdlIGZyb20gXCIuLi9jb21wb25lbnRzL1BvcHVwV2l0aEltYWdlXCI7XHJcbmltcG9ydCBTZWN0aW9uIGZyb20gXCIuLi9jb21wb25lbnRzL1NlY3Rpb25cIjtcclxuaW1wb3J0IENhcmQgZnJvbSBcIi4uL2NvbXBvbmVudHMvQ2FyZC5qc1wiO1xyXG5pbXBvcnQgRm9ybVZhbGlkYXRpb24gZnJvbSBcIi4uL2NvbXBvbmVudHMvRm9ybVZhbGlkYXRpb24uanNcIjtcclxuaW1wb3J0IHsgaW5pdENhcmRzLCBmb3JtRGF0YSB9IGZyb20gXCIuLi91dGlscy9jb25zdGFudHMuanNcIjtcclxuaW1wb3J0IFVzZXJJbmZvIGZyb20gXCIuLi9jb21wb25lbnRzL1VzZXJJbmZvXCI7XHJcblxyXG4vL3NlYXJjaCBET01cclxuLy9wcm9maWxlIGNvbnN0YW50c1xyXG5jb25zdCBwcm9maWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9maWxlXCIpO1xyXG5jb25zdCBlZGl0QnV0dG9uID0gcHJvZmlsZS5xdWVyeVNlbGVjdG9yKFwiLnByb2ZpbGVfX2J1dHRvbl90eXBlX2VkaXRcIik7XHJcbmNvbnN0IGNhcmRCdXR0b24gPSBwcm9maWxlLnF1ZXJ5U2VsZWN0b3IoXCIucHJvZmlsZV9fYnV0dG9uX3R5cGVfYWRkXCIpO1xyXG5cclxuY29uc3QgdGVtcGxhdGVFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50ZW1wbGF0ZVwiKTtcclxuXHJcbi8vIGZ1bmN0aW9uc1xyXG5jb25zdCByZW5kZXJDYXJkID0gKGl0ZW0pID0+IHtcclxuICBjb25zdCBjYXJkID0gbmV3IENhcmQoXHJcbiAgICBpdGVtLFxyXG4gICAgKHsgdGl0bGUsIGxpbmsgfSkgPT4ge1xyXG4gICAgICBwcmV2aWV3UG9wdXAub3Blbih0aXRsZSwgbGluayk7XHJcbiAgICB9LFxyXG4gICAgdGVtcGxhdGVFbGVtZW50XHJcbiAgKTtcclxuXHJcbiAgY2FyZExpc3QuYWRkSXRlbShjYXJkLmdlbmVyYXRlQ2FyZCgpKTtcclxufTtcclxuXHJcbi8vY3JlYXRlIG9iamVjdHNcclxuLy9wcm9maWxlIHNlY3Rpb25cclxuY29uc3QgdXNlckluZm9ybWF0aW9uID0gbmV3IFVzZXJJbmZvKFwiLnByb2ZpbGVcIik7XHJcblxyXG4vL2NhcmRzIHNlY3Rpb25cclxuY29uc3QgY2FyZExpc3QgPSBuZXcgU2VjdGlvbihcclxuICB7XHJcbiAgICBkYXRhOiBpbml0Q2FyZHMsXHJcbiAgICByZW5kZXJlcjogcmVuZGVyQ2FyZCxcclxuICB9LFxyXG4gIFwiLnBhZ2VfX2NhcmRzXCJcclxuKTtcclxuXHJcbi8vZWRpdCBmb3JtXHJcbmNvbnN0IGVkaXRGb3JtVmFsaWRhdG9yID0gbmV3IEZvcm1WYWxpZGF0aW9uKFwicHJvZmlsZS1lZGl0LWZvcm1cIiwgZm9ybURhdGEpO1xyXG5lZGl0Rm9ybVZhbGlkYXRvci5lbmFibGVWYWxpZGF0aW9uKCk7XHJcblxyXG5jb25zdCBlZGl0UG9wdXAgPSBuZXcgUG9wdXBXaXRoRm9ybShcIi5tb2RhbF90eXBlX2VkaXRcIiwgKHZhbHVlcykgPT4ge1xyXG4gIHVzZXJJbmZvcm1hdGlvbi5zZXRVc2VySW5mbyh2YWx1ZXMpO1xyXG4gIGVkaXRGb3JtVmFsaWRhdG9yLmRpc2FibGVTdWJtaXQoKTtcclxuICBlZGl0UG9wdXAuY2xvc2UoKTtcclxufSk7XHJcblxyXG5lZGl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgY29uc3QgbmV3VmFsdWVzID0gdXNlckluZm9ybWF0aW9uLmdldFVzZXJJbmZvKCk7XHJcbiAgZWRpdFBvcHVwLnNldElucHV0VmFsdWVzKE9iamVjdC52YWx1ZXMobmV3VmFsdWVzKSk7XHJcbiAgZWRpdFBvcHVwLm9wZW4oKTtcclxufSk7XHJcblxyXG4vL2NhcmQgZm9ybVxyXG5jb25zdCBjYXJkRm9ybVZhbGlkYXRvciA9IG5ldyBGb3JtVmFsaWRhdGlvbihcImNhcmQtYWRkLWZvcm1cIiwgZm9ybURhdGEpO1xyXG5jYXJkRm9ybVZhbGlkYXRvci5lbmFibGVWYWxpZGF0aW9uKCk7XHJcblxyXG5jb25zdCBjYXJkUG9wdXAgPSBuZXcgUG9wdXBXaXRoRm9ybShcIi5tb2RhbF90eXBlX2NhcmRcIiwgKHZhbHVlcykgPT4ge1xyXG4gIHJlbmRlckNhcmQodmFsdWVzKTtcclxuICBjYXJkRm9ybVZhbGlkYXRvci5kaXNhYmxlU3VibWl0KCk7XHJcbiAgY2FyZFBvcHVwLnJlc2V0Rm9ybSgpO1xyXG4gIGNhcmRQb3B1cC5jbG9zZSgpO1xyXG59KTtcclxuXHJcbmNhcmRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICBjYXJkUG9wdXAub3BlbigpO1xyXG59KTtcclxuXHJcbi8vcHJldmlldyBpbWFnZVxyXG5jb25zdCBwcmV2aWV3UG9wdXAgPSBuZXcgUG9wdXBXaXRoSW1hZ2UoXCIubW9kYWxfdHlwZV9wcmV2aWV3XCIpO1xyXG5cclxuY2FyZExpc3QuY2xlYXIoKTtcclxuY2FyZExpc3QucmVuZGVySXRlbXMoKTtcclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXNlckluZm8ge1xyXG4gIGNvbnN0cnVjdG9yKHByb2ZpbGVTZWxlY3Rvcikge1xyXG4gICAgdGhpcy5fcHJvZmlsZUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHByb2ZpbGVTZWxlY3Rvcik7XHJcbiAgICB0aGlzLl9uYW1lRWxlbWVudCA9IHRoaXMuX3Byb2ZpbGVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvZmlsZV9fbmFtZVwiKTtcclxuICAgIHRoaXMuX2pvYkVsZW1lbnQgPSB0aGlzLl9wcm9maWxlRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2ZpbGVfX2pvYlwiKTtcclxuICB9XHJcblxyXG4gIGdldFVzZXJJbmZvKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbmFtZTogdGhpcy5fbmFtZUVsZW1lbnQudGV4dENvbnRlbnQsXHJcbiAgICAgIGpvYjogdGhpcy5fam9iRWxlbWVudC50ZXh0Q29udGVudCxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBzZXRVc2VySW5mbyh7IG5hbWUsIGpvYiB9KSB7XHJcbiAgICB0aGlzLl9uYW1lRWxlbWVudC50ZXh0Q29udGVudCA9IG5hbWU7XHJcbiAgICB0aGlzLl9qb2JFbGVtZW50LnRleHRDb250ZW50ID0gam9iO1xyXG4gIH1cclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTZWN0aW9uIHtcclxuICBjb25zdHJ1Y3Rvcih7IGRhdGEsIHJlbmRlcmVyIH0sIGNvbnRhaW5lclNlbGVjdG9yKSB7XHJcbiAgICB0aGlzLl9pdGVtcyA9IGRhdGE7XHJcbiAgICB0aGlzLl9yZW5kZXJlciA9IHJlbmRlcmVyO1xyXG4gICAgdGhpcy5fY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihjb250YWluZXJTZWxlY3Rvcik7XHJcbiAgfVxyXG5cclxuICByZW5kZXJJdGVtcygpIHtcclxuICAgIHRoaXMuX2l0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHRoaXMuX3JlbmRlcmVyKGl0ZW0pKTtcclxuICB9XHJcblxyXG4gIGFkZEl0ZW0oZWxlbWVudCkge1xyXG4gICAgdGhpcy5fY29udGFpbmVyLnByZXBlbmQoZWxlbWVudCk7XHJcbiAgfVxyXG5cclxuICBjbGVhcigpIHtcclxuICAgIHRoaXMuX2NvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgUG9wdXAgZnJvbSBcIi4vUG9wdXAuanNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvcHVwV2l0aEltYWdlIGV4dGVuZHMgUG9wdXAge1xyXG4gIGNvbnN0cnVjdG9yKHBvcHVwU2VsZWN0b3IpIHtcclxuICAgIHN1cGVyKHsgcG9wdXBTZWxlY3RvciB9KTtcclxuICAgIHRoaXMuX2ltYWdlID0gdGhpcy5fcG9wdXBFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxfX2ltYWdlXCIpO1xyXG4gICAgdGhpcy5fY2FwdGlvbiA9IHRoaXMuX3BvcHVwRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsX19jYXB0aW9uXCIpO1xyXG4gIH1cclxuXHJcbiAgc2V0U291cmNlKHRpdGxlLCBsaW5rKSB7XHJcbiAgICB0aGlzLl9pbWFnZS5zcmMgPSBsaW5rO1xyXG4gICAgdGhpcy5faW1hZ2UuYWx0ID0gdGl0bGU7XHJcbiAgICB0aGlzLl9jYXB0aW9uLnRleHRDb250ZW50ID0gdGl0bGU7XHJcbiAgfVxyXG5cclxuICBvcGVuKHRpdGxlLCBsaW5rKSB7XHJcbiAgICBzdXBlci5vcGVuKCk7XHJcbiAgICB0aGlzLnNldFNvdXJjZSh0aXRsZSwgbGluayk7XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18iLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwibW9kdWxlSWQiLCJjYWNoZWRNb2R1bGUiLCJ1bmRlZmluZWQiLCJleHBvcnRzIiwibW9kdWxlIiwiX193ZWJwYWNrX21vZHVsZXNfXyIsIm0iLCJvIiwib2JqIiwicHJvcCIsIk9iamVjdCIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsInAiLCJiIiwiZG9jdW1lbnQiLCJiYXNlVVJJIiwic2VsZiIsImxvY2F0aW9uIiwiaHJlZiIsIlBvcHVwIiwiY29uc3RydWN0b3IiLCJfcmVmIiwicG9wdXBTZWxlY3RvciIsInRoaXMiLCJfcG9wdXBFbGVtZW50IiwicXVlcnlTZWxlY3RvciIsIm9wZW4iLCJjbGFzc0xpc3QiLCJhZGQiLCJzZXRFdmVudExpc3RlbmVycyIsImNsb3NlIiwicmVtb3ZlIiwiZGVsZXRlRXZlbnRMaXN0ZW5lcnMiLCJfaGFuZGxlRXNjYXBlQ2xvc2UiLCJldmVudCIsImtleSIsIl9oYW5kbGVDbG9zZSIsInRhcmdldCIsImNvbnRhaW5zIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJQb3B1cFdpdGhGb3JtIiwiaGFuZGxlRm9ybVN1Ym1pdCIsInN1cGVyIiwiX3BvcHVwRm9ybSIsIl9oYW5kbGVGb3JtU3VibWl0IiwiX2dldElucHV0VmFsdWVzIiwiaW5wdXRMaXN0IiwicXVlcnlTZWxlY3RvckFsbCIsImlucHV0T2JqZWN0IiwiaW5wdXQiLCJuYW1lIiwidmFsdWUiLCJzZXRJbnB1dFZhbHVlcyIsImlucHV0VmFsdWVzIiwiZm9yRWFjaCIsImlucHV0RWxlbWVudCIsImluZGV4IiwicmVzZXRGb3JtIiwicmVzZXQiLCJfaGFuZGxlU3VibWl0IiwidmFsdWVzIiwicHJldmVudERlZmF1bHQiLCJDYXJkIiwiaGFuZGxlUHJldmlld0ltYWdlIiwidGVtcGxhdGVFbGVtZW50IiwidGl0bGUiLCJsaW5rIiwiX3RpdGxlIiwiX2xpbmsiLCJfY2FyZEVsZW1lbnQiLCJjb250ZW50IiwiX2hhbmRsZVByZXZpZXdJbWFnZSIsIl9kZWxldGVDYXJkIiwiX2VsZW1lbnQiLCJfbGlrZUltYWdlVG9nZ2xlIiwiX2NhcmRIZWFydEJ1dHRvbiIsInRvZ2dsZSIsIl9zZXRFdmVudExpc3RlbmVycyIsIl9jYXJkSW1hZ2VFbGVtZW50IiwiX2NhcmREZWxldGVFbGVtZW50IiwiX2Nsb25lVGVtcGxhdGUiLCJjbG9uZU5vZGUiLCJfc2V0SW1hZ2VWYWx1ZXMiLCJzcmMiLCJhbHQiLCJfY2FyZENhcHRpb24iLCJ0ZXh0Q29udGVudCIsImdlbmVyYXRlQ2FyZCIsImdldE5hbWUiLCJnZXRMaW5rIiwiRm9ybVZhbGlkYXRpb24iLCJmb3JtU2VsZWN0b3IiLCJkYXRhIiwiX2RhdGEiLCJfZm9ybUVsZW1lbnQiLCJmb3JtcyIsIl9pbnB1dEVsZW1lbnRzIiwiaW5wdXRTZWxlY3RvciIsIl9zdWJtaXRCdXR0b24iLCJfY2hlY2tWYWxpZGl0eSIsImVycm9yRWxlbWVudCIsImlkIiwidmFsaWRpdHkiLCJ2YWxpZCIsIl9oaWRlRXJyb3IiLCJfc2hvd0Vycm9yIiwiX3RvZ2dsZUJ1dHRvblN0YXRlIiwiX2hhc0ludmFsaWRJbnB1dCIsImRpc2FibGVTdWJtaXQiLCJlbmFibGVTdWJtaXQiLCJpbnB1dEVycm9yQ2xhc3MiLCJ2YWxpZGF0aW9uTWVzc2FnZSIsImVycm9yVmlzaWJsZUNsYXNzIiwic29tZSIsImluYWN0aXZlQnV0dG9uQ2xhc3MiLCJkaXNhYmxlZCIsInJlc2V0VmFsaWRhdGlvbiIsImVuYWJsZVZhbGlkYXRpb24iLCJpbml0Q2FyZHMiLCJVUkwiLCJmb3JtRGF0YSIsInN1Ym1pdEJ1dHRvblNlbGVjdG9yIiwiZWRpdEZvcm1JZCIsImNhcmRGb3JtSWQiLCJuYW1lSWQiLCJkZXNjcmlwdGlvbklkIiwidGl0bGVJZCIsImxpbmtJZCIsInByb2ZpbGUiLCJlZGl0QnV0dG9uIiwiY2FyZEJ1dHRvbiIsInJlbmRlckNhcmQiLCJpdGVtIiwiY2FyZCIsInByZXZpZXdQb3B1cCIsImNhcmRMaXN0IiwiYWRkSXRlbSIsInVzZXJJbmZvcm1hdGlvbiIsInByb2ZpbGVTZWxlY3RvciIsIl9wcm9maWxlRWxlbWVudCIsIl9uYW1lRWxlbWVudCIsIl9qb2JFbGVtZW50IiwiZ2V0VXNlckluZm8iLCJqb2IiLCJzZXRVc2VySW5mbyIsImNvbnRhaW5lclNlbGVjdG9yIiwicmVuZGVyZXIiLCJfaXRlbXMiLCJfcmVuZGVyZXIiLCJfY29udGFpbmVyIiwicmVuZGVySXRlbXMiLCJlbGVtZW50IiwicHJlcGVuZCIsImNsZWFyIiwiaW5uZXJIVE1MIiwiZWRpdEZvcm1WYWxpZGF0b3IiLCJlZGl0UG9wdXAiLCJuZXdWYWx1ZXMiLCJjYXJkRm9ybVZhbGlkYXRvciIsImNhcmRQb3B1cCIsIl9pbWFnZSIsIl9jYXB0aW9uIiwic2V0U291cmNlIl0sInNvdXJjZVJvb3QiOiIifQ==