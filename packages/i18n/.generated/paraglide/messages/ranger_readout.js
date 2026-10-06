/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_ReadoutInputs */

const en_ranger_readout = /** @type {(inputs: Ranger_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Moderation`)
};

const es_ranger_readout = /** @type {(inputs: Ranger_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Moderación`)
};

const de_ranger_readout = /** @type {(inputs: Ranger_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Moderation`)
};

const fr_ranger_readout = /** @type {(inputs: Ranger_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modération`)
};

const it_ranger_readout = /** @type {(inputs: Ranger_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Moderazione`)
};

const nl_ranger_readout = /** @type {(inputs: Ranger_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Moderatie`)
};

const pl_ranger_readout = /** @type {(inputs: Ranger_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Moderacja`)
};

const pt_ranger_readout = /** @type {(inputs: Ranger_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Moderação`)
};

const ru_ranger_readout = /** @type {(inputs: Ranger_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Модерация`)
};

const sv_ranger_readout = /** @type {(inputs: Ranger_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Moderering`)
};

const tr_ranger_readout = /** @type {(inputs: Ranger_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Moderasyon`)
};

const zh_ranger_readout = /** @type {(inputs: Ranger_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`审核`)
};

const ja_ranger_readout = /** @type {(inputs: Ranger_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`モデレーション`)
};

/**
* | output |
* | --- |
* | "Moderation" |
*
* @param {Ranger_ReadoutInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_readout = /** @type {((inputs?: Ranger_ReadoutInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_ReadoutInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_readout(inputs)
	if (locale === "de") return de_ranger_readout(inputs)
	if (locale === "fr") return fr_ranger_readout(inputs)
	if (locale === "it") return it_ranger_readout(inputs)
	if (locale === "nl") return nl_ranger_readout(inputs)
	if (locale === "pl") return pl_ranger_readout(inputs)
	if (locale === "pt") return pt_ranger_readout(inputs)
	if (locale === "ru") return ru_ranger_readout(inputs)
	if (locale === "sv") return sv_ranger_readout(inputs)
	if (locale === "tr") return tr_ranger_readout(inputs)
	if (locale === "zh") return zh_ranger_readout(inputs)
	if (locale === "ja") return ja_ranger_readout(inputs)
	return en_ranger_readout(inputs)
});
