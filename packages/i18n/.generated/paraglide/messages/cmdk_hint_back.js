/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Cmdk_Hint_BackInputs */

const en_cmdk_hint_back = /** @type {(inputs: Cmdk_Hint_BackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Back`)
};

const es_cmdk_hint_back = /** @type {(inputs: Cmdk_Hint_BackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Volver`)
};

const de_cmdk_hint_back = /** @type {(inputs: Cmdk_Hint_BackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zurück`)
};

const fr_cmdk_hint_back = /** @type {(inputs: Cmdk_Hint_BackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Retour`)
};

const it_cmdk_hint_back = /** @type {(inputs: Cmdk_Hint_BackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Indietro`)
};

const nl_cmdk_hint_back = /** @type {(inputs: Cmdk_Hint_BackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Terug`)
};

const pl_cmdk_hint_back = /** @type {(inputs: Cmdk_Hint_BackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wstecz`)
};

const pt_cmdk_hint_back = /** @type {(inputs: Cmdk_Hint_BackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Voltar`)
};

const ru_cmdk_hint_back = /** @type {(inputs: Cmdk_Hint_BackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Назад`)
};

const sv_cmdk_hint_back = /** @type {(inputs: Cmdk_Hint_BackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tillbaka`)
};

const tr_cmdk_hint_back = /** @type {(inputs: Cmdk_Hint_BackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Geri`)
};

const zh_cmdk_hint_back = /** @type {(inputs: Cmdk_Hint_BackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`返回`)
};

const ja_cmdk_hint_back = /** @type {(inputs: Cmdk_Hint_BackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`戻る`)
};

/**
* | output |
* | --- |
* | "Back" |
*
* @param {Cmdk_Hint_BackInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const cmdk_hint_back = /** @type {((inputs?: Cmdk_Hint_BackInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Cmdk_Hint_BackInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_cmdk_hint_back(inputs)
	if (locale === "de") return de_cmdk_hint_back(inputs)
	if (locale === "fr") return fr_cmdk_hint_back(inputs)
	if (locale === "it") return it_cmdk_hint_back(inputs)
	if (locale === "nl") return nl_cmdk_hint_back(inputs)
	if (locale === "pl") return pl_cmdk_hint_back(inputs)
	if (locale === "pt") return pt_cmdk_hint_back(inputs)
	if (locale === "ru") return ru_cmdk_hint_back(inputs)
	if (locale === "sv") return sv_cmdk_hint_back(inputs)
	if (locale === "tr") return tr_cmdk_hint_back(inputs)
	if (locale === "zh") return zh_cmdk_hint_back(inputs)
	if (locale === "ja") return ja_cmdk_hint_back(inputs)
	return en_cmdk_hint_back(inputs)
});
