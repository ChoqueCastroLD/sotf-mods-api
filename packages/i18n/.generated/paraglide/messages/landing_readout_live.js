/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Landing_Readout_LiveInputs */

const en_landing_readout_live = /** @type {(inputs: Landing_Readout_LiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Live`)
};

const es_landing_readout_live = /** @type {(inputs: Landing_Readout_LiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`En vivo`)
};

const de_landing_readout_live = /** @type {(inputs: Landing_Readout_LiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Live`)
};

const fr_landing_readout_live = /** @type {(inputs: Landing_Readout_LiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`En direct`)
};

const it_landing_readout_live = /** @type {(inputs: Landing_Readout_LiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`In diretta`)
};

const nl_landing_readout_live = /** @type {(inputs: Landing_Readout_LiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Live`)
};

const pl_landing_readout_live = /** @type {(inputs: Landing_Readout_LiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Na żywo`)
};

const pt_landing_readout_live = /** @type {(inputs: Landing_Readout_LiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ao vivo`)
};

const ru_landing_readout_live = /** @type {(inputs: Landing_Readout_LiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`В эфире`)
};

const sv_landing_readout_live = /** @type {(inputs: Landing_Readout_LiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Live`)
};

const tr_landing_readout_live = /** @type {(inputs: Landing_Readout_LiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Canlı`)
};

const zh_landing_readout_live = /** @type {(inputs: Landing_Readout_LiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`实时`)
};

const ja_landing_readout_live = /** @type {(inputs: Landing_Readout_LiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ライブ`)
};

/**
* | output |
* | --- |
* | "Live" |
*
* @param {Landing_Readout_LiveInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const landing_readout_live = /** @type {((inputs?: Landing_Readout_LiveInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Landing_Readout_LiveInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_landing_readout_live(inputs)
	if (locale === "de") return de_landing_readout_live(inputs)
	if (locale === "fr") return fr_landing_readout_live(inputs)
	if (locale === "it") return it_landing_readout_live(inputs)
	if (locale === "nl") return nl_landing_readout_live(inputs)
	if (locale === "pl") return pl_landing_readout_live(inputs)
	if (locale === "pt") return pt_landing_readout_live(inputs)
	if (locale === "ru") return ru_landing_readout_live(inputs)
	if (locale === "sv") return sv_landing_readout_live(inputs)
	if (locale === "tr") return tr_landing_readout_live(inputs)
	if (locale === "zh") return zh_landing_readout_live(inputs)
	if (locale === "ja") return ja_landing_readout_live(inputs)
	return en_landing_readout_live(inputs)
});
