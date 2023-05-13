import { FormValidator } from '../components/FormValidator.js';
import validationConfig from './validationConfig.js';
import {profileEditForm, photoCardCreateForm, changeAvatarForm} from './constants.js';

const profileEditFormValidator = new FormValidator(validationConfig, profileEditForm);
profileEditFormValidator.enableValidation();

const photoCardCreateFormValidator = new FormValidator(validationConfig, photoCardCreateForm);
photoCardCreateFormValidator.enableValidation();

const changeAvatarFormValidator = new FormValidator(validationConfig, changeAvatarForm);
changeAvatarFormValidator.enableValidation();

export {
  profileEditFormValidator,
  photoCardCreateFormValidator,
  changeAvatarFormValidator,
};
