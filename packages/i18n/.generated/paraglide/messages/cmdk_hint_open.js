/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Cmdk_Hint_OpenInputs */

const en_cmdk_hint_open = /** @type {(inputs: Cmdk_Hint_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Open`)
};

const es_cmdk_hint_open = /** @type {(inputs: Cmdk_Hint_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Abrir`)
};

const de_cmdk_hint_open = /** @type {(inputs: Cmdk_Hint_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Öffnen`)
};

const fr_cmdk_hint_open = /** @type {(inputs: Cmdk_Hint_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ouvrir`)
};

const it_cmdk_hint_open = /** @type {(inputs: Cmdk_Hint_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Apri`)
};

const nl_cmdk_hint_open = /** @type {(inputs: Cmdk_Hint_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Openen`)
};

const pl_cmdk_hint_open = /** @type {(inputs: Cmdk_Hint_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Otwórz`)
};

const pt_cmdk_hint_open = /** @type {(inputs: Cmdk_Hint_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Abrir`)
};

const ru_cmdk_hint_open = /** @type {(inputs: Cmdk_Hint_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Открыть`)
};

const sv_cmdk_hint_open = /** @type {(inputs: Cmdk_Hint_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Öppna`)
};

const tr_cmdk_hint_open = /** @type {(inputs: Cmdk_Hint_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aç`)
};

const zh_cmdk_hint_open = /** @type {(inputs: Cmdk_Hint_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`打开`)
};

const ja_cmdk_hint_open = /** @type {(inputs: Cmdk_Hint_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`開く`)
};

/**
* | output |
* | --- |
* | "Open" |
*
* @param {Cmdk_Hint_OpenInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const cmdk_hint_open = /** @type {((inputs?: Cmdk_Hint_OpenInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Cmdk_Hint_OpenInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_cmdk_hint_open(inputs)
	if (locale === "de") return de_cmdk_hint_open(inputs)
	if (locale === "fr") return fr_cmdk_hint_open(inputs)
	if (locale === "it") return it_cmdk_hint_open(inputs)
	if (locale === "nl") return nl_cmdk_hint_open(inputs)
	if (locale === "pl") return pl_cmdk_hint_open(inputs)
	if (locale === "pt") return pt_cmdk_hint_open(inputs)
	if (locale === "ru") return ru_cmdk_hint_open(inputs)
	if (locale === "sv") return sv_cmdk_hint_open(inputs)
	if (locale === "tr") return tr_cmdk_hint_open(inputs)
	if (locale === "zh") return zh_cmdk_hint_open(inputs)
	if (locale === "ja") return ja_cmdk_hint_open(inputs)
	return en_cmdk_hint_open(inputs)
});
