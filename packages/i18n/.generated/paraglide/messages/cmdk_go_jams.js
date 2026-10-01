/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Cmdk_Go_JamsInputs */

const en_cmdk_go_jams = /** @type {(inputs: Cmdk_Go_JamsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jams`)
};

const es_cmdk_go_jams = /** @type {(inputs: Cmdk_Go_JamsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jams`)
};

const de_cmdk_go_jams = /** @type {(inputs: Cmdk_Go_JamsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jams`)
};

const fr_cmdk_go_jams = /** @type {(inputs: Cmdk_Go_JamsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jams`)
};

const it_cmdk_go_jams = /** @type {(inputs: Cmdk_Go_JamsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jam`)
};

const nl_cmdk_go_jams = /** @type {(inputs: Cmdk_Go_JamsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jams`)
};

const pl_cmdk_go_jams = /** @type {(inputs: Cmdk_Go_JamsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jamy`)
};

const pt_cmdk_go_jams = /** @type {(inputs: Cmdk_Go_JamsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jams`)
};

const ru_cmdk_go_jams = /** @type {(inputs: Cmdk_Go_JamsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Джемы`)
};

const sv_cmdk_go_jams = /** @type {(inputs: Cmdk_Go_JamsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jams`)
};

const tr_cmdk_go_jams = /** @type {(inputs: Cmdk_Go_JamsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jam'ler`)
};

const zh_cmdk_go_jams = /** @type {(inputs: Cmdk_Go_JamsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`模组 Jam`)
};

const ja_cmdk_go_jams = /** @type {(inputs: Cmdk_Go_JamsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ジャム`)
};

/**
* | output |
* | --- |
* | "Jams" |
*
* @param {Cmdk_Go_JamsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const cmdk_go_jams = /** @type {((inputs?: Cmdk_Go_JamsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Cmdk_Go_JamsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_cmdk_go_jams(inputs)
	if (locale === "de") return de_cmdk_go_jams(inputs)
	if (locale === "fr") return fr_cmdk_go_jams(inputs)
	if (locale === "it") return it_cmdk_go_jams(inputs)
	if (locale === "nl") return nl_cmdk_go_jams(inputs)
	if (locale === "pl") return pl_cmdk_go_jams(inputs)
	if (locale === "pt") return pt_cmdk_go_jams(inputs)
	if (locale === "ru") return ru_cmdk_go_jams(inputs)
	if (locale === "sv") return sv_cmdk_go_jams(inputs)
	if (locale === "tr") return tr_cmdk_go_jams(inputs)
	if (locale === "zh") return zh_cmdk_go_jams(inputs)
	if (locale === "ja") return ja_cmdk_go_jams(inputs)
	return en_cmdk_go_jams(inputs)
});
