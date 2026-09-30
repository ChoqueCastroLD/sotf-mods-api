/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Kitsocial_Sign_In_RequiredInputs */

const en_kitsocial_sign_in_required = /** @type {(inputs: Kitsocial_Sign_In_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sign in to follow kits.`)
};

const es_kitsocial_sign_in_required = /** @type {(inputs: Kitsocial_Sign_In_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inicia sesión para seguir kits.`)
};

const de_kitsocial_sign_in_required = /** @type {(inputs: Kitsocial_Sign_In_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Melde dich an, um Kits zu folgen.`)
};

const fr_kitsocial_sign_in_required = /** @type {(inputs: Kitsocial_Sign_In_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Connectez-vous pour suivre des kits.`)
};

const it_kitsocial_sign_in_required = /** @type {(inputs: Kitsocial_Sign_In_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Accedi per seguire i kit.`)
};

const nl_kitsocial_sign_in_required = /** @type {(inputs: Kitsocial_Sign_In_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Log in om kits te volgen.`)
};

const pl_kitsocial_sign_in_required = /** @type {(inputs: Kitsocial_Sign_In_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zaloguj się, aby obserwować zestawy.`)
};

const pt_kitsocial_sign_in_required = /** @type {(inputs: Kitsocial_Sign_In_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Entre para seguir kits.`)
};

const ru_kitsocial_sign_in_required = /** @type {(inputs: Kitsocial_Sign_In_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Войдите, чтобы подписываться на наборы.`)
};

const sv_kitsocial_sign_in_required = /** @type {(inputs: Kitsocial_Sign_In_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Logga in för att följa kits.`)
};

const tr_kitsocial_sign_in_required = /** @type {(inputs: Kitsocial_Sign_In_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kitleri takip etmek için giriş yap.`)
};

const zh_kitsocial_sign_in_required = /** @type {(inputs: Kitsocial_Sign_In_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`登录后才能关注套件。`)
};

const ja_kitsocial_sign_in_required = /** @type {(inputs: Kitsocial_Sign_In_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`キットをフォローするにはログインしてください。`)
};

/**
* | output |
* | --- |
* | "Sign in to follow kits." |
*
* @param {Kitsocial_Sign_In_RequiredInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kitsocial_sign_in_required = /** @type {((inputs?: Kitsocial_Sign_In_RequiredInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kitsocial_Sign_In_RequiredInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kitsocial_sign_in_required(inputs)
	if (locale === "de") return de_kitsocial_sign_in_required(inputs)
	if (locale === "fr") return fr_kitsocial_sign_in_required(inputs)
	if (locale === "it") return it_kitsocial_sign_in_required(inputs)
	if (locale === "nl") return nl_kitsocial_sign_in_required(inputs)
	if (locale === "pl") return pl_kitsocial_sign_in_required(inputs)
	if (locale === "pt") return pt_kitsocial_sign_in_required(inputs)
	if (locale === "ru") return ru_kitsocial_sign_in_required(inputs)
	if (locale === "sv") return sv_kitsocial_sign_in_required(inputs)
	if (locale === "tr") return tr_kitsocial_sign_in_required(inputs)
	if (locale === "zh") return zh_kitsocial_sign_in_required(inputs)
	if (locale === "ja") return ja_kitsocial_sign_in_required(inputs)
	return en_kitsocial_sign_in_required(inputs)
});
