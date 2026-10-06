/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_ReadoutInputs */

const en_basecamp_readout = /** @type {(inputs: Basecamp_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dashboard`)
};

const es_basecamp_readout = /** @type {(inputs: Basecamp_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Panel`)
};

const de_basecamp_readout = /** @type {(inputs: Basecamp_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dashboard`)
};

const fr_basecamp_readout = /** @type {(inputs: Basecamp_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tableau de bord`)
};

const it_basecamp_readout = /** @type {(inputs: Basecamp_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dashboard`)
};

const nl_basecamp_readout = /** @type {(inputs: Basecamp_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dashboard`)
};

const pl_basecamp_readout = /** @type {(inputs: Basecamp_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Panel`)
};

const pt_basecamp_readout = /** @type {(inputs: Basecamp_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Painel`)
};

const ru_basecamp_readout = /** @type {(inputs: Basecamp_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Панель`)
};

const sv_basecamp_readout = /** @type {(inputs: Basecamp_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Översikt`)
};

const tr_basecamp_readout = /** @type {(inputs: Basecamp_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Panel`)
};

const zh_basecamp_readout = /** @type {(inputs: Basecamp_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`控制台`)
};

const ja_basecamp_readout = /** @type {(inputs: Basecamp_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ダッシュボード`)
};

/**
* | output |
* | --- |
* | "Dashboard" |
*
* @param {Basecamp_ReadoutInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_readout = /** @type {((inputs?: Basecamp_ReadoutInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_ReadoutInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_readout(inputs)
	if (locale === "de") return de_basecamp_readout(inputs)
	if (locale === "fr") return fr_basecamp_readout(inputs)
	if (locale === "it") return it_basecamp_readout(inputs)
	if (locale === "nl") return nl_basecamp_readout(inputs)
	if (locale === "pl") return pl_basecamp_readout(inputs)
	if (locale === "pt") return pt_basecamp_readout(inputs)
	if (locale === "ru") return ru_basecamp_readout(inputs)
	if (locale === "sv") return sv_basecamp_readout(inputs)
	if (locale === "tr") return tr_basecamp_readout(inputs)
	if (locale === "zh") return zh_basecamp_readout(inputs)
	if (locale === "ja") return ja_basecamp_readout(inputs)
	return en_basecamp_readout(inputs)
});
