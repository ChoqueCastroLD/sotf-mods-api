/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_NavInputs */

const en_jams_nav = /** @type {(inputs: Jams_NavInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jams`)
};

const es_jams_nav = /** @type {(inputs: Jams_NavInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jams`)
};

const de_jams_nav = /** @type {(inputs: Jams_NavInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jams`)
};

const fr_jams_nav = /** @type {(inputs: Jams_NavInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jams`)
};

const it_jams_nav = /** @type {(inputs: Jams_NavInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jam`)
};

const nl_jams_nav = /** @type {(inputs: Jams_NavInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jams`)
};

const pl_jams_nav = /** @type {(inputs: Jams_NavInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jamy`)
};

const pt_jams_nav = /** @type {(inputs: Jams_NavInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jams`)
};

const ru_jams_nav = /** @type {(inputs: Jams_NavInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Джемы`)
};

const sv_jams_nav = /** @type {(inputs: Jams_NavInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jams`)
};

const tr_jams_nav = /** @type {(inputs: Jams_NavInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jam'ler`)
};

const zh_jams_nav = /** @type {(inputs: Jams_NavInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`模组 Jam`)
};

const ja_jams_nav = /** @type {(inputs: Jams_NavInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ジャム`)
};

/**
* | output |
* | --- |
* | "Jams" |
*
* @param {Jams_NavInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_nav = /** @type {((inputs?: Jams_NavInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_NavInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_nav(inputs)
	if (locale === "de") return de_jams_nav(inputs)
	if (locale === "fr") return fr_jams_nav(inputs)
	if (locale === "it") return it_jams_nav(inputs)
	if (locale === "nl") return nl_jams_nav(inputs)
	if (locale === "pl") return pl_jams_nav(inputs)
	if (locale === "pt") return pt_jams_nav(inputs)
	if (locale === "ru") return ru_jams_nav(inputs)
	if (locale === "sv") return sv_jams_nav(inputs)
	if (locale === "tr") return tr_jams_nav(inputs)
	if (locale === "zh") return zh_jams_nav(inputs)
	if (locale === "ja") return ja_jams_nav(inputs)
	return en_jams_nav(inputs)
});
