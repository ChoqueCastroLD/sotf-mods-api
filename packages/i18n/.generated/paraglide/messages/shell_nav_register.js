/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Shell_Nav_RegisterInputs */

const en_shell_nav_register = /** @type {(inputs: Shell_Nav_RegisterInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Register`)
};

const es_shell_nav_register = /** @type {(inputs: Shell_Nav_RegisterInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Registrarse`)
};

const de_shell_nav_register = /** @type {(inputs: Shell_Nav_RegisterInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Registrieren`)
};

const fr_shell_nav_register = /** @type {(inputs: Shell_Nav_RegisterInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inscription`)
};

const it_shell_nav_register = /** @type {(inputs: Shell_Nav_RegisterInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Registrati`)
};

const nl_shell_nav_register = /** @type {(inputs: Shell_Nav_RegisterInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Registreren`)
};

const pl_shell_nav_register = /** @type {(inputs: Shell_Nav_RegisterInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zarejestruj się`)
};

const pt_shell_nav_register = /** @type {(inputs: Shell_Nav_RegisterInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Registrar`)
};

const ru_shell_nav_register = /** @type {(inputs: Shell_Nav_RegisterInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Регистрация`)
};

const sv_shell_nav_register = /** @type {(inputs: Shell_Nav_RegisterInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Registrera dig`)
};

const tr_shell_nav_register = /** @type {(inputs: Shell_Nav_RegisterInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kayıt ol`)
};

const zh_shell_nav_register = /** @type {(inputs: Shell_Nav_RegisterInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`注册`)
};

const ja_shell_nav_register = /** @type {(inputs: Shell_Nav_RegisterInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`新規登録`)
};

/**
* | output |
* | --- |
* | "Register" |
*
* @param {Shell_Nav_RegisterInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const shell_nav_register = /** @type {((inputs?: Shell_Nav_RegisterInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Shell_Nav_RegisterInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_shell_nav_register(inputs)
	if (locale === "de") return de_shell_nav_register(inputs)
	if (locale === "fr") return fr_shell_nav_register(inputs)
	if (locale === "it") return it_shell_nav_register(inputs)
	if (locale === "nl") return nl_shell_nav_register(inputs)
	if (locale === "pl") return pl_shell_nav_register(inputs)
	if (locale === "pt") return pt_shell_nav_register(inputs)
	if (locale === "ru") return ru_shell_nav_register(inputs)
	if (locale === "sv") return sv_shell_nav_register(inputs)
	if (locale === "tr") return tr_shell_nav_register(inputs)
	if (locale === "zh") return zh_shell_nav_register(inputs)
	if (locale === "ja") return ja_shell_nav_register(inputs)
	return en_shell_nav_register(inputs)
});
