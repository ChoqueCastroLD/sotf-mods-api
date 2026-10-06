/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Auth_Field_Display_Name_HintInputs */

const en_auth_field_display_name_hint = /** @type {(inputs: Auth_Field_Display_Name_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The name other users see. You can change it later.`)
};

const es_auth_field_display_name_hint = /** @type {(inputs: Auth_Field_Display_Name_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`El nombre que ven otros usuarios. Puedes cambiarlo más tarde.`)
};

const de_auth_field_display_name_hint = /** @type {(inputs: Auth_Field_Display_Name_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Der Name, den andere Nutzer sehen. Du kannst ihn später ändern.`)
};

const fr_auth_field_display_name_hint = /** @type {(inputs: Auth_Field_Display_Name_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Le nom que voient les autres utilisateurs. Vous pourrez le changer plus tard.`)
};

const it_auth_field_display_name_hint = /** @type {(inputs: Auth_Field_Display_Name_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Il nome che vedono gli altri utenti. Puoi cambiarlo in seguito.`)
};

const nl_auth_field_display_name_hint = /** @type {(inputs: Auth_Field_Display_Name_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De naam die andere gebruikers zien. Je kunt dit later wijzigen.`)
};

const pl_auth_field_display_name_hint = /** @type {(inputs: Auth_Field_Display_Name_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nazwa widoczna dla innych użytkowników. Możesz ją później zmienić.`)
};

const pt_auth_field_display_name_hint = /** @type {(inputs: Auth_Field_Display_Name_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`O nome que outros usuários veem. Dá para mudar depois.`)
};

const ru_auth_field_display_name_hint = /** @type {(inputs: Auth_Field_Display_Name_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Имя, которое видят другие пользователи. Его можно изменить позже.`)
};

const sv_auth_field_display_name_hint = /** @type {(inputs: Auth_Field_Display_Name_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Namnet som andra användare ser. Du kan ändra det senare.`)
};

const tr_auth_field_display_name_hint = /** @type {(inputs: Auth_Field_Display_Name_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Diğer kullanıcıların gördüğü ad. Daha sonra değiştirebilirsin.`)
};

const zh_auth_field_display_name_hint = /** @type {(inputs: Auth_Field_Display_Name_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`其他用户看到的名字，之后可以修改。`)
};

const ja_auth_field_display_name_hint = /** @type {(inputs: Auth_Field_Display_Name_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ほかのユーザーに表示される名前です。あとから変更できます。`)
};

/**
* | output |
* | --- |
* | "The name other users see. You can change it later." |
*
* @param {Auth_Field_Display_Name_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const auth_field_display_name_hint = /** @type {((inputs?: Auth_Field_Display_Name_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Auth_Field_Display_Name_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_auth_field_display_name_hint(inputs)
	if (locale === "de") return de_auth_field_display_name_hint(inputs)
	if (locale === "fr") return fr_auth_field_display_name_hint(inputs)
	if (locale === "it") return it_auth_field_display_name_hint(inputs)
	if (locale === "nl") return nl_auth_field_display_name_hint(inputs)
	if (locale === "pl") return pl_auth_field_display_name_hint(inputs)
	if (locale === "pt") return pt_auth_field_display_name_hint(inputs)
	if (locale === "ru") return ru_auth_field_display_name_hint(inputs)
	if (locale === "sv") return sv_auth_field_display_name_hint(inputs)
	if (locale === "tr") return tr_auth_field_display_name_hint(inputs)
	if (locale === "zh") return zh_auth_field_display_name_hint(inputs)
	if (locale === "ja") return ja_auth_field_display_name_hint(inputs)
	return en_auth_field_display_name_hint(inputs)
});
