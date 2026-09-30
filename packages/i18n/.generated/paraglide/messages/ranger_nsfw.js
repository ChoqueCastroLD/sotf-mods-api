/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_NsfwInputs */

const en_ranger_nsfw = /** @type {(inputs: Ranger_NsfwInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`NSFW`)
};

const es_ranger_nsfw = /** @type {(inputs: Ranger_NsfwInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`NSFW`)
};

const de_ranger_nsfw = /** @type {(inputs: Ranger_NsfwInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`NSFW`)
};

const fr_ranger_nsfw = /** @type {(inputs: Ranger_NsfwInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`NSFW`)
};

const it_ranger_nsfw = /** @type {(inputs: Ranger_NsfwInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`NSFW`)
};

const nl_ranger_nsfw = /** @type {(inputs: Ranger_NsfwInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`NSFW`)
};

const pl_ranger_nsfw = /** @type {(inputs: Ranger_NsfwInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`NSFW`)
};

const pt_ranger_nsfw = /** @type {(inputs: Ranger_NsfwInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`NSFW`)
};

const ru_ranger_nsfw = /** @type {(inputs: Ranger_NsfwInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`NSFW`)
};

const sv_ranger_nsfw = /** @type {(inputs: Ranger_NsfwInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`NSFW`)
};

const tr_ranger_nsfw = /** @type {(inputs: Ranger_NsfwInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`NSFW`)
};

const zh_ranger_nsfw = /** @type {(inputs: Ranger_NsfwInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`NSFW`)
};

const ja_ranger_nsfw = /** @type {(inputs: Ranger_NsfwInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`NSFW`)
};

/**
* | output |
* | --- |
* | "NSFW" |
*
* @param {Ranger_NsfwInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_nsfw = /** @type {((inputs?: Ranger_NsfwInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_NsfwInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_nsfw(inputs)
	if (locale === "de") return de_ranger_nsfw(inputs)
	if (locale === "fr") return fr_ranger_nsfw(inputs)
	if (locale === "it") return it_ranger_nsfw(inputs)
	if (locale === "nl") return nl_ranger_nsfw(inputs)
	if (locale === "pl") return pl_ranger_nsfw(inputs)
	if (locale === "pt") return pt_ranger_nsfw(inputs)
	if (locale === "ru") return ru_ranger_nsfw(inputs)
	if (locale === "sv") return sv_ranger_nsfw(inputs)
	if (locale === "tr") return tr_ranger_nsfw(inputs)
	if (locale === "zh") return zh_ranger_nsfw(inputs)
	if (locale === "ja") return ja_ranger_nsfw(inputs)
	return en_ranger_nsfw(inputs)
});
