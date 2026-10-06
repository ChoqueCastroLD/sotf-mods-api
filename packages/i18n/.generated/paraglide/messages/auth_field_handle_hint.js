/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ url: NonNullable<unknown> }} Auth_Field_Handle_HintInputs */

const en_auth_field_handle_hint = /** @type {(inputs: Auth_Field_Handle_HintInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Your profile address: ${i?.url}. It can’t be changed later.`)
};

const es_auth_field_handle_hint = /** @type {(inputs: Auth_Field_Handle_HintInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`La dirección de tu perfil: ${i?.url}. No se puede cambiar después.`)
};

const de_auth_field_handle_hint = /** @type {(inputs: Auth_Field_Handle_HintInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Die Adresse deines Profils: ${i?.url}. Sie kann später nicht geändert werden.`)
};

const fr_auth_field_handle_hint = /** @type {(inputs: Auth_Field_Handle_HintInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`L’adresse de votre profil : ${i?.url}. Elle ne pourra plus être modifiée.`)
};

const it_auth_field_handle_hint = /** @type {(inputs: Auth_Field_Handle_HintInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`L’indirizzo del tuo profilo: ${i?.url}. Non potrai cambiarlo in seguito.`)
};

const nl_auth_field_handle_hint = /** @type {(inputs: Auth_Field_Handle_HintInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Het adres van je profiel: ${i?.url}. Dit kan later niet meer worden gewijzigd.`)
};

const pl_auth_field_handle_hint = /** @type {(inputs: Auth_Field_Handle_HintInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Adres Twojego profilu: ${i?.url}. Później nie da się go zmienić.`)
};

const pt_auth_field_handle_hint = /** @type {(inputs: Auth_Field_Handle_HintInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`O endereço do seu perfil: ${i?.url}. Não pode ser alterado depois.`)
};

const ru_auth_field_handle_hint = /** @type {(inputs: Auth_Field_Handle_HintInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Адрес вашего профиля: ${i?.url}. Изменить его потом будет нельзя.`)
};

const sv_auth_field_handle_hint = /** @type {(inputs: Auth_Field_Handle_HintInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Adressen till din profil: ${i?.url}. Den kan inte ändras senare.`)
};

const tr_auth_field_handle_hint = /** @type {(inputs: Auth_Field_Handle_HintInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Profil adresin: ${i?.url}. Daha sonra değiştirilemez.`)
};

const zh_auth_field_handle_hint = /** @type {(inputs: Auth_Field_Handle_HintInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`你的个人主页地址：${i?.url}。之后无法更改。`)
};

const ja_auth_field_handle_hint = /** @type {(inputs: Auth_Field_Handle_HintInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`プロフィールのアドレス：${i?.url}。あとから変更できません。`)
};

/**
* | output |
* | --- |
* | "Your profile address: {url}. It can’t be changed later." |
*
* @param {Auth_Field_Handle_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const auth_field_handle_hint = /** @type {((inputs: Auth_Field_Handle_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Auth_Field_Handle_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_auth_field_handle_hint(inputs)
	if (locale === "de") return de_auth_field_handle_hint(inputs)
	if (locale === "fr") return fr_auth_field_handle_hint(inputs)
	if (locale === "it") return it_auth_field_handle_hint(inputs)
	if (locale === "nl") return nl_auth_field_handle_hint(inputs)
	if (locale === "pl") return pl_auth_field_handle_hint(inputs)
	if (locale === "pt") return pt_auth_field_handle_hint(inputs)
	if (locale === "ru") return ru_auth_field_handle_hint(inputs)
	if (locale === "sv") return sv_auth_field_handle_hint(inputs)
	if (locale === "tr") return tr_auth_field_handle_hint(inputs)
	if (locale === "zh") return zh_auth_field_handle_hint(inputs)
	if (locale === "ja") return ja_auth_field_handle_hint(inputs)
	return en_auth_field_handle_hint(inputs)
});
