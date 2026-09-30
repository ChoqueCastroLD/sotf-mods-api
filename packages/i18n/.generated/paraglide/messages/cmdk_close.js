/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Cmdk_CloseInputs */

const en_cmdk_close = /** @type {(inputs: Cmdk_CloseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Close`)
};

const es_cmdk_close = /** @type {(inputs: Cmdk_CloseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cerrar`)
};

const de_cmdk_close = /** @type {(inputs: Cmdk_CloseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Schließen`)
};

const fr_cmdk_close = /** @type {(inputs: Cmdk_CloseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fermer`)
};

const it_cmdk_close = /** @type {(inputs: Cmdk_CloseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Chiudi`)
};

const nl_cmdk_close = /** @type {(inputs: Cmdk_CloseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sluiten`)
};

const pl_cmdk_close = /** @type {(inputs: Cmdk_CloseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zamknij`)
};

const pt_cmdk_close = /** @type {(inputs: Cmdk_CloseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fechar`)
};

const ru_cmdk_close = /** @type {(inputs: Cmdk_CloseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Закрыть`)
};

const sv_cmdk_close = /** @type {(inputs: Cmdk_CloseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Stäng`)
};

const tr_cmdk_close = /** @type {(inputs: Cmdk_CloseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kapat`)
};

const zh_cmdk_close = /** @type {(inputs: Cmdk_CloseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`关闭`)
};

const ja_cmdk_close = /** @type {(inputs: Cmdk_CloseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`閉じる`)
};

/**
* | output |
* | --- |
* | "Close" |
*
* @param {Cmdk_CloseInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const cmdk_close = /** @type {((inputs?: Cmdk_CloseInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Cmdk_CloseInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_cmdk_close(inputs)
	if (locale === "de") return de_cmdk_close(inputs)
	if (locale === "fr") return fr_cmdk_close(inputs)
	if (locale === "it") return it_cmdk_close(inputs)
	if (locale === "nl") return nl_cmdk_close(inputs)
	if (locale === "pl") return pl_cmdk_close(inputs)
	if (locale === "pt") return pt_cmdk_close(inputs)
	if (locale === "ru") return ru_cmdk_close(inputs)
	if (locale === "sv") return sv_cmdk_close(inputs)
	if (locale === "tr") return tr_cmdk_close(inputs)
	if (locale === "zh") return zh_cmdk_close(inputs)
	if (locale === "ja") return ja_cmdk_close(inputs)
	return en_cmdk_close(inputs)
});
