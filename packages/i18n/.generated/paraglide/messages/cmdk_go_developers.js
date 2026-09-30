/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Cmdk_Go_DevelopersInputs */

const en_cmdk_go_developers = /** @type {(inputs: Cmdk_Go_DevelopersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Developers and API`)
};

const es_cmdk_go_developers = /** @type {(inputs: Cmdk_Go_DevelopersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Desarrolladores y API`)
};

const de_cmdk_go_developers = /** @type {(inputs: Cmdk_Go_DevelopersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Entwickler und API`)
};

const fr_cmdk_go_developers = /** @type {(inputs: Cmdk_Go_DevelopersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Développeurs et API`)
};

const it_cmdk_go_developers = /** @type {(inputs: Cmdk_Go_DevelopersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sviluppatori e API`)
};

const nl_cmdk_go_developers = /** @type {(inputs: Cmdk_Go_DevelopersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ontwikkelaars en API`)
};

const pl_cmdk_go_developers = /** @type {(inputs: Cmdk_Go_DevelopersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Deweloperzy i API`)
};

const pt_cmdk_go_developers = /** @type {(inputs: Cmdk_Go_DevelopersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Programadores e API`)
};

const ru_cmdk_go_developers = /** @type {(inputs: Cmdk_Go_DevelopersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Разработчикам и API`)
};

const sv_cmdk_go_developers = /** @type {(inputs: Cmdk_Go_DevelopersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Utvecklare och API`)
};

const tr_cmdk_go_developers = /** @type {(inputs: Cmdk_Go_DevelopersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Geliştiriciler ve API`)
};

const zh_cmdk_go_developers = /** @type {(inputs: Cmdk_Go_DevelopersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`开发者与 API`)
};

const ja_cmdk_go_developers = /** @type {(inputs: Cmdk_Go_DevelopersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`開発者と API`)
};

/**
* | output |
* | --- |
* | "Developers and API" |
*
* @param {Cmdk_Go_DevelopersInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const cmdk_go_developers = /** @type {((inputs?: Cmdk_Go_DevelopersInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Cmdk_Go_DevelopersInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_cmdk_go_developers(inputs)
	if (locale === "de") return de_cmdk_go_developers(inputs)
	if (locale === "fr") return fr_cmdk_go_developers(inputs)
	if (locale === "it") return it_cmdk_go_developers(inputs)
	if (locale === "nl") return nl_cmdk_go_developers(inputs)
	if (locale === "pl") return pl_cmdk_go_developers(inputs)
	if (locale === "pt") return pt_cmdk_go_developers(inputs)
	if (locale === "ru") return ru_cmdk_go_developers(inputs)
	if (locale === "sv") return sv_cmdk_go_developers(inputs)
	if (locale === "tr") return tr_cmdk_go_developers(inputs)
	if (locale === "zh") return zh_cmdk_go_developers(inputs)
	if (locale === "ja") return ja_cmdk_go_developers(inputs)
	return en_cmdk_go_developers(inputs)
});
