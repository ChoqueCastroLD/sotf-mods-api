/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Auth_Register_SubmitInputs */

const en_auth_register_submit = /** @type {(inputs: Auth_Register_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Register`)
};

const es_auth_register_submit = /** @type {(inputs: Auth_Register_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Registrarse`)
};

const de_auth_register_submit = /** @type {(inputs: Auth_Register_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Registrieren`)
};

const fr_auth_register_submit = /** @type {(inputs: Auth_Register_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`S’inscrire`)
};

const it_auth_register_submit = /** @type {(inputs: Auth_Register_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Registrati`)
};

const nl_auth_register_submit = /** @type {(inputs: Auth_Register_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Registreren`)
};

const pl_auth_register_submit = /** @type {(inputs: Auth_Register_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zarejestruj się`)
};

const pt_auth_register_submit = /** @type {(inputs: Auth_Register_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Registrar`)
};

const ru_auth_register_submit = /** @type {(inputs: Auth_Register_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Зарегистрироваться`)
};

const sv_auth_register_submit = /** @type {(inputs: Auth_Register_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Registrera`)
};

const tr_auth_register_submit = /** @type {(inputs: Auth_Register_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kayıt ol`)
};

const zh_auth_register_submit = /** @type {(inputs: Auth_Register_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`注册`)
};

const ja_auth_register_submit = /** @type {(inputs: Auth_Register_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`新規登録`)
};

/**
* | output |
* | --- |
* | "Register" |
*
* @param {Auth_Register_SubmitInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const auth_register_submit = /** @type {((inputs?: Auth_Register_SubmitInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Auth_Register_SubmitInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_auth_register_submit(inputs)
	if (locale === "de") return de_auth_register_submit(inputs)
	if (locale === "fr") return fr_auth_register_submit(inputs)
	if (locale === "it") return it_auth_register_submit(inputs)
	if (locale === "nl") return nl_auth_register_submit(inputs)
	if (locale === "pl") return pl_auth_register_submit(inputs)
	if (locale === "pt") return pt_auth_register_submit(inputs)
	if (locale === "ru") return ru_auth_register_submit(inputs)
	if (locale === "sv") return sv_auth_register_submit(inputs)
	if (locale === "tr") return tr_auth_register_submit(inputs)
	if (locale === "zh") return zh_auth_register_submit(inputs)
	if (locale === "ja") return ja_auth_register_submit(inputs)
	return en_auth_register_submit(inputs)
});
