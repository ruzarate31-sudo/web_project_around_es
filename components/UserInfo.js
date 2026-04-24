export default class UserInfo {
 constructor({ nameSelector, jobSelector }) {

  this._nameElement = document.querySelector(nameSelector);
  this._jobElement = document.querySelector(jobSelector);

   if (!this._nameElement || !this._jobElement) {
  console.error("Elementos de usuario no encontrados");
  }
 }

  getUserInfo() {
  return {
  name: this._nameElement.textContent,
  job: this._jobElement.textContent
 };
  }
  setUserInfo({ name, job }) {
  this._nameElement.textContent = name;
  this._jobElement.textContent = job;
 }
}