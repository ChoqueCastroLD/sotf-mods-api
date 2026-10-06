/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Auth_Meta_Register_TitleInputs */

const en_auth_meta_register_title = /** @type {(inputs: Auth_Meta_Register_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Register`)
};

const es_auth_meta_register_title = /** @type {(inputs: Auth_Meta_Register_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Registrarse`)
};

const de_auth_meta_register_title = /** @type {(inputs: Auth_Meta_Register_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Registrieren`)
};

const fr_auth_meta_register_title = /** @type {(inputs: Auth_Meta_Register_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inscription`)
};

const it_auth_meta_register_title = /** @type {(inputs: Auth_Meta_Register_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Registrazione`)
};

const nl_auth_meta_register_title = /** @type {(inputs: Auth_Meta_Register_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Registreren`)
};

const pl_auth_meta_register_title = /** @type {(inputs: Auth_Meta_Register_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rejestracja`)
};

const pt_auth_meta_register_title = /** @type {(inputs: Auth_Meta_Register_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Registrar`)
};

const ru_auth_meta_register_title = /** @type {(inputs: Auth_Meta_Register_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Регистрация`)
};

const sv_auth_meta_register_title = /** @type {(inputs: Auth_Meta_Register_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Registrera`)
};

const tr_auth_meta_register_title = /** @type {(inputs: Auth_Meta_Register_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kayıt ol`)
};

const zh_auth_meta_register_title = /** @type {(inputs: Auth_Meta_Register_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`注册`)
};

const ja_auth_meta_register_title = /** @type {(inputs: Auth_Meta_Register_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`新規登録`)
};

/**
* | output |
* | --- |
* | "Register" |
*
* @param {Auth_Meta_Register_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const auth_meta_register_title = /** @type {((inputs?: Auth_Meta_Register_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Auth_Meta_Register_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_auth_meta_register_title(inputs)
	if (locale === "de") return de_auth_meta_register_title(inputs)
	if (locale === "fr") return fr_auth_meta_register_title(inputs)
	if (locale === "it") return it_auth_meta_register_title(inputs)
	if (locale === "nl") return nl_auth_meta_register_title(inputs)
	if (locale === "pl") return pl_auth_meta_register_title(inputs)
	if (locale === "pt") return pt_auth_meta_register_title(inputs)
	if (locale === "ru") return ru_auth_meta_register_title(inputs)
	if (locale === "sv") return sv_auth_meta_register_title(inputs)
	if (locale === "tr") return tr_auth_meta_register_title(inputs)
	if (locale === "zh") return zh_auth_meta_register_title(inputs)
	if (locale === "ja") return ja_auth_meta_register_title(inputs)
	return en_auth_meta_register_title(inputs)
});
