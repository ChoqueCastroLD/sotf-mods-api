/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Cmdk_Go_My_KitsInputs */

const en_cmdk_go_my_kits = /** @type {(inputs: Cmdk_Go_My_KitsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`My kits`)
};

const es_cmdk_go_my_kits = /** @type {(inputs: Cmdk_Go_My_KitsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mis kits`)
};

const de_cmdk_go_my_kits = /** @type {(inputs: Cmdk_Go_My_KitsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Meine Kits`)
};

const fr_cmdk_go_my_kits = /** @type {(inputs: Cmdk_Go_My_KitsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mes kits`)
};

const it_cmdk_go_my_kits = /** @type {(inputs: Cmdk_Go_My_KitsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`I miei kit`)
};

const nl_cmdk_go_my_kits = /** @type {(inputs: Cmdk_Go_My_KitsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mijn kits`)
};

const pl_cmdk_go_my_kits = /** @type {(inputs: Cmdk_Go_My_KitsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Moje zestawy`)
};

const pt_cmdk_go_my_kits = /** @type {(inputs: Cmdk_Go_My_KitsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Os meus kits`)
};

const ru_cmdk_go_my_kits = /** @type {(inputs: Cmdk_Go_My_KitsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Мои наборы`)
};

const sv_cmdk_go_my_kits = /** @type {(inputs: Cmdk_Go_My_KitsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mina kits`)
};

const tr_cmdk_go_my_kits = /** @type {(inputs: Cmdk_Go_My_KitsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kit'lerim`)
};

const zh_cmdk_go_my_kits = /** @type {(inputs: Cmdk_Go_My_KitsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`我的套件`)
};

const ja_cmdk_go_my_kits = /** @type {(inputs: Cmdk_Go_My_KitsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`マイキット`)
};

/**
* | output |
* | --- |
* | "My kits" |
*
* @param {Cmdk_Go_My_KitsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const cmdk_go_my_kits = /** @type {((inputs?: Cmdk_Go_My_KitsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Cmdk_Go_My_KitsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_cmdk_go_my_kits(inputs)
	if (locale === "de") return de_cmdk_go_my_kits(inputs)
	if (locale === "fr") return fr_cmdk_go_my_kits(inputs)
	if (locale === "it") return it_cmdk_go_my_kits(inputs)
	if (locale === "nl") return nl_cmdk_go_my_kits(inputs)
	if (locale === "pl") return pl_cmdk_go_my_kits(inputs)
	if (locale === "pt") return pt_cmdk_go_my_kits(inputs)
	if (locale === "ru") return ru_cmdk_go_my_kits(inputs)
	if (locale === "sv") return sv_cmdk_go_my_kits(inputs)
	if (locale === "tr") return tr_cmdk_go_my_kits(inputs)
	if (locale === "zh") return zh_cmdk_go_my_kits(inputs)
	if (locale === "ja") return ja_cmdk_go_my_kits(inputs)
	return en_cmdk_go_my_kits(inputs)
});
