/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Cmdk_Recent_ClearInputs */

const en_cmdk_recent_clear = /** @type {(inputs: Cmdk_Recent_ClearInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Clear recent`)
};

const es_cmdk_recent_clear = /** @type {(inputs: Cmdk_Recent_ClearInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Borrar recientes`)
};

const de_cmdk_recent_clear = /** @type {(inputs: Cmdk_Recent_ClearInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verlauf löschen`)
};

const fr_cmdk_recent_clear = /** @type {(inputs: Cmdk_Recent_ClearInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Effacer les récents`)
};

const it_cmdk_recent_clear = /** @type {(inputs: Cmdk_Recent_ClearInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cancella recenti`)
};

const nl_cmdk_recent_clear = /** @type {(inputs: Cmdk_Recent_ClearInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Recent wissen`)
};

const pl_cmdk_recent_clear = /** @type {(inputs: Cmdk_Recent_ClearInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wyczyść ostatnie`)
};

const pt_cmdk_recent_clear = /** @type {(inputs: Cmdk_Recent_ClearInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Limpar recentes`)
};

const ru_cmdk_recent_clear = /** @type {(inputs: Cmdk_Recent_ClearInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Очистить недавние`)
};

const sv_cmdk_recent_clear = /** @type {(inputs: Cmdk_Recent_ClearInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rensa senaste`)
};

const tr_cmdk_recent_clear = /** @type {(inputs: Cmdk_Recent_ClearInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Son açılanları temizle`)
};

const zh_cmdk_recent_clear = /** @type {(inputs: Cmdk_Recent_ClearInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`清除最近记录`)
};

const ja_cmdk_recent_clear = /** @type {(inputs: Cmdk_Recent_ClearInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`履歴を消去`)
};

/**
* | output |
* | --- |
* | "Clear recent" |
*
* @param {Cmdk_Recent_ClearInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const cmdk_recent_clear = /** @type {((inputs?: Cmdk_Recent_ClearInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Cmdk_Recent_ClearInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_cmdk_recent_clear(inputs)
	if (locale === "de") return de_cmdk_recent_clear(inputs)
	if (locale === "fr") return fr_cmdk_recent_clear(inputs)
	if (locale === "it") return it_cmdk_recent_clear(inputs)
	if (locale === "nl") return nl_cmdk_recent_clear(inputs)
	if (locale === "pl") return pl_cmdk_recent_clear(inputs)
	if (locale === "pt") return pt_cmdk_recent_clear(inputs)
	if (locale === "ru") return ru_cmdk_recent_clear(inputs)
	if (locale === "sv") return sv_cmdk_recent_clear(inputs)
	if (locale === "tr") return tr_cmdk_recent_clear(inputs)
	if (locale === "zh") return zh_cmdk_recent_clear(inputs)
	if (locale === "ja") return ja_cmdk_recent_clear(inputs)
	return en_cmdk_recent_clear(inputs)
});
