/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Auth_Art_LabelInputs */

const en_auth_art_label = /** @type {(inputs: Auth_Art_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Why sign in`)
};

const es_auth_art_label = /** @type {(inputs: Auth_Art_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Por qué iniciar sesión`)
};

const de_auth_art_label = /** @type {(inputs: Auth_Art_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Warum anmelden`)
};

const fr_auth_art_label = /** @type {(inputs: Auth_Art_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pourquoi se connecter`)
};

const it_auth_art_label = /** @type {(inputs: Auth_Art_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Perché accedere`)
};

const nl_auth_art_label = /** @type {(inputs: Auth_Art_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Waarom inloggen`)
};

const pl_auth_art_label = /** @type {(inputs: Auth_Art_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Po co się logować`)
};

const pt_auth_art_label = /** @type {(inputs: Auth_Art_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Por que entrar`)
};

const ru_auth_art_label = /** @type {(inputs: Auth_Art_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Зачем входить`)
};

const sv_auth_art_label = /** @type {(inputs: Auth_Art_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Varför logga in`)
};

const tr_auth_art_label = /** @type {(inputs: Auth_Art_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Neden giriş yapmalı`)
};

const zh_auth_art_label = /** @type {(inputs: Auth_Art_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`为什么要登录`)
};

const ja_auth_art_label = /** @type {(inputs: Auth_Art_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ログインするメリット`)
};

/**
* | output |
* | --- |
* | "Why sign in" |
*
* @param {Auth_Art_LabelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const auth_art_label = /** @type {((inputs?: Auth_Art_LabelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Auth_Art_LabelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_auth_art_label(inputs)
	if (locale === "de") return de_auth_art_label(inputs)
	if (locale === "fr") return fr_auth_art_label(inputs)
	if (locale === "it") return it_auth_art_label(inputs)
	if (locale === "nl") return nl_auth_art_label(inputs)
	if (locale === "pl") return pl_auth_art_label(inputs)
	if (locale === "pt") return pt_auth_art_label(inputs)
	if (locale === "ru") return ru_auth_art_label(inputs)
	if (locale === "sv") return sv_auth_art_label(inputs)
	if (locale === "tr") return tr_auth_art_label(inputs)
	if (locale === "zh") return zh_auth_art_label(inputs)
	if (locale === "ja") return ja_auth_art_label(inputs)
	return en_auth_art_label(inputs)
});
