/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_LiveInputs */

const en_ranger_live = /** @type {(inputs: Ranger_LiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Live`)
};

const es_ranger_live = /** @type {(inputs: Ranger_LiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`En directo`)
};

const de_ranger_live = /** @type {(inputs: Ranger_LiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Live`)
};

const fr_ranger_live = /** @type {(inputs: Ranger_LiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`En direct`)
};

const it_ranger_live = /** @type {(inputs: Ranger_LiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`In diretta`)
};

const nl_ranger_live = /** @type {(inputs: Ranger_LiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Live`)
};

const pl_ranger_live = /** @type {(inputs: Ranger_LiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Na żywo`)
};

const pt_ranger_live = /** @type {(inputs: Ranger_LiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ao vivo`)
};

const ru_ranger_live = /** @type {(inputs: Ranger_LiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`В эфире`)
};

const sv_ranger_live = /** @type {(inputs: Ranger_LiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Live`)
};

const tr_ranger_live = /** @type {(inputs: Ranger_LiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Canlı`)
};

const zh_ranger_live = /** @type {(inputs: Ranger_LiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`实时`)
};

const ja_ranger_live = /** @type {(inputs: Ranger_LiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ライブ`)
};

/**
* | output |
* | --- |
* | "Live" |
*
* @param {Ranger_LiveInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_live = /** @type {((inputs?: Ranger_LiveInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_LiveInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_live(inputs)
	if (locale === "de") return de_ranger_live(inputs)
	if (locale === "fr") return fr_ranger_live(inputs)
	if (locale === "it") return it_ranger_live(inputs)
	if (locale === "nl") return nl_ranger_live(inputs)
	if (locale === "pl") return pl_ranger_live(inputs)
	if (locale === "pt") return pt_ranger_live(inputs)
	if (locale === "ru") return ru_ranger_live(inputs)
	if (locale === "sv") return sv_ranger_live(inputs)
	if (locale === "tr") return tr_ranger_live(inputs)
	if (locale === "zh") return zh_ranger_live(inputs)
	if (locale === "ja") return ja_ranger_live(inputs)
	return en_ranger_live(inputs)
});
