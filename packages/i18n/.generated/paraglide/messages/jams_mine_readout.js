/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Mine_ReadoutInputs */

const en_jams_mine_readout = /** @type {(inputs: Jams_Mine_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`BASECAMP`)
};

const es_jams_mine_readout = /** @type {(inputs: Jams_Mine_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`CAMPAMENTO BASE`)
};

const de_jams_mine_readout = /** @type {(inputs: Jams_Mine_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`BASISLAGER`)
};

const fr_jams_mine_readout = /** @type {(inputs: Jams_Mine_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`CAMP DE BASE`)
};

const it_jams_mine_readout = /** @type {(inputs: Jams_Mine_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`CAMPO BASE`)
};

const nl_jams_mine_readout = /** @type {(inputs: Jams_Mine_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`BASISKAMP`)
};

const pl_jams_mine_readout = /** @type {(inputs: Jams_Mine_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`OBOZ BAZOWY`)
};

const pt_jams_mine_readout = /** @type {(inputs: Jams_Mine_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ACAMPAMENTO-BASE`)
};

const ru_jams_mine_readout = /** @type {(inputs: Jams_Mine_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`БАЗОВЫЙ ЛАГЕРЬ`)
};

const sv_jams_mine_readout = /** @type {(inputs: Jams_Mine_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`BASLÄGER`)
};

const tr_jams_mine_readout = /** @type {(inputs: Jams_Mine_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ANA KAMP`)
};

const zh_jams_mine_readout = /** @type {(inputs: Jams_Mine_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`大本营`)
};

const ja_jams_mine_readout = /** @type {(inputs: Jams_Mine_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ベースキャンプ`)
};

/**
* | output |
* | --- |
* | "BASECAMP" |
*
* @param {Jams_Mine_ReadoutInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_mine_readout = /** @type {((inputs?: Jams_Mine_ReadoutInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Mine_ReadoutInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_mine_readout(inputs)
	if (locale === "de") return de_jams_mine_readout(inputs)
	if (locale === "fr") return fr_jams_mine_readout(inputs)
	if (locale === "it") return it_jams_mine_readout(inputs)
	if (locale === "nl") return nl_jams_mine_readout(inputs)
	if (locale === "pl") return pl_jams_mine_readout(inputs)
	if (locale === "pt") return pt_jams_mine_readout(inputs)
	if (locale === "ru") return ru_jams_mine_readout(inputs)
	if (locale === "sv") return sv_jams_mine_readout(inputs)
	if (locale === "tr") return tr_jams_mine_readout(inputs)
	if (locale === "zh") return zh_jams_mine_readout(inputs)
	if (locale === "ja") return ja_jams_mine_readout(inputs)
	return en_jams_mine_readout(inputs)
});
