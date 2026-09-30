/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Auth_Field_HandleInputs */

const en_auth_field_handle = /** @type {(inputs: Auth_Field_HandleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Handle`)
};

const es_auth_field_handle = /** @type {(inputs: Auth_Field_HandleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nombre de usuario`)
};

const de_auth_field_handle = /** @type {(inputs: Auth_Field_HandleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Handle`)
};

const fr_auth_field_handle = /** @type {(inputs: Auth_Field_HandleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Identifiant`)
};

const it_auth_field_handle = /** @type {(inputs: Auth_Field_HandleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Handle`)
};

const nl_auth_field_handle = /** @type {(inputs: Auth_Field_HandleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Handle`)
};

const pl_auth_field_handle = /** @type {(inputs: Auth_Field_HandleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nazwa użytkownika`)
};

const pt_auth_field_handle = /** @type {(inputs: Auth_Field_HandleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nome de usuário`)
};

const ru_auth_field_handle = /** @type {(inputs: Auth_Field_HandleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Имя пользователя`)
};

const sv_auth_field_handle = /** @type {(inputs: Auth_Field_HandleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Användarnamn`)
};

const tr_auth_field_handle = /** @type {(inputs: Auth_Field_HandleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kullanıcı adı`)
};

const zh_auth_field_handle = /** @type {(inputs: Auth_Field_HandleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`用户名`)
};

const ja_auth_field_handle = /** @type {(inputs: Auth_Field_HandleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ハンドル`)
};

/**
* | output |
* | --- |
* | "Handle" |
*
* @param {Auth_Field_HandleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const auth_field_handle = /** @type {((inputs?: Auth_Field_HandleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Auth_Field_HandleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_auth_field_handle(inputs)
	if (locale === "de") return de_auth_field_handle(inputs)
	if (locale === "fr") return fr_auth_field_handle(inputs)
	if (locale === "it") return it_auth_field_handle(inputs)
	if (locale === "nl") return nl_auth_field_handle(inputs)
	if (locale === "pl") return pl_auth_field_handle(inputs)
	if (locale === "pt") return pt_auth_field_handle(inputs)
	if (locale === "ru") return ru_auth_field_handle(inputs)
	if (locale === "sv") return sv_auth_field_handle(inputs)
	if (locale === "tr") return tr_auth_field_handle(inputs)
	if (locale === "zh") return zh_auth_field_handle(inputs)
	if (locale === "ja") return ja_auth_field_handle(inputs)
	return en_auth_field_handle(inputs)
});
