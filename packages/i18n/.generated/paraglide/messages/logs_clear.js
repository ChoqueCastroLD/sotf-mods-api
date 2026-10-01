/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Logs_ClearInputs */

const en_logs_clear = /** @type {(inputs: Logs_ClearInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Clear`)
};

const es_logs_clear = /** @type {(inputs: Logs_ClearInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Borrar`)
};

const de_logs_clear = /** @type {(inputs: Logs_ClearInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Leeren`)
};

const fr_logs_clear = /** @type {(inputs: Logs_ClearInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Effacer`)
};

const it_logs_clear = /** @type {(inputs: Logs_ClearInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Svuota`)
};

const nl_logs_clear = /** @type {(inputs: Logs_ClearInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wissen`)
};

const pl_logs_clear = /** @type {(inputs: Logs_ClearInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wyczyść`)
};

const pt_logs_clear = /** @type {(inputs: Logs_ClearInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Limpar`)
};

const ru_logs_clear = /** @type {(inputs: Logs_ClearInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Очистить`)
};

const sv_logs_clear = /** @type {(inputs: Logs_ClearInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rensa`)
};

const tr_logs_clear = /** @type {(inputs: Logs_ClearInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Temizle`)
};

const zh_logs_clear = /** @type {(inputs: Logs_ClearInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`清除`)
};

const ja_logs_clear = /** @type {(inputs: Logs_ClearInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`クリア`)
};

/**
* | output |
* | --- |
* | "Clear" |
*
* @param {Logs_ClearInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const logs_clear = /** @type {((inputs?: Logs_ClearInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Logs_ClearInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_logs_clear(inputs)
	if (locale === "de") return de_logs_clear(inputs)
	if (locale === "fr") return fr_logs_clear(inputs)
	if (locale === "it") return it_logs_clear(inputs)
	if (locale === "nl") return nl_logs_clear(inputs)
	if (locale === "pl") return pl_logs_clear(inputs)
	if (locale === "pt") return pt_logs_clear(inputs)
	if (locale === "ru") return ru_logs_clear(inputs)
	if (locale === "sv") return sv_logs_clear(inputs)
	if (locale === "tr") return tr_logs_clear(inputs)
	if (locale === "zh") return zh_logs_clear(inputs)
	if (locale === "ja") return ja_logs_clear(inputs)
	return en_logs_clear(inputs)
});
