/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Errors_Code_Gone_TitleInputs */

const en_errors_code_gone_title = /** @type {(inputs: Errors_Code_Gone_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gone for good`)
};

const es_errors_code_gone_title = /** @type {(inputs: Errors_Code_Gone_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ya no existe`)
};

const de_errors_code_gone_title = /** @type {(inputs: Errors_Code_Gone_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Endgültig weg`)
};

const fr_errors_code_gone_title = /** @type {(inputs: Errors_Code_Gone_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Disparu pour de bon`)
};

const it_errors_code_gone_title = /** @type {(inputs: Errors_Code_Gone_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sparito per sempre`)
};

const nl_errors_code_gone_title = /** @type {(inputs: Errors_Code_Gone_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Voorgoed weg`)
};

const pl_errors_code_gone_title = /** @type {(inputs: Errors_Code_Gone_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zniknęło na dobre`)
};

const pt_errors_code_gone_title = /** @type {(inputs: Errors_Code_Gone_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sumiu de vez`)
};

const ru_errors_code_gone_title = /** @type {(inputs: Errors_Code_Gone_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Удалено навсегда`)
};

const sv_errors_code_gone_title = /** @type {(inputs: Errors_Code_Gone_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Borta för gott`)
};

const tr_errors_code_gone_title = /** @type {(inputs: Errors_Code_Gone_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tamamen kaldırıldı`)
};

const zh_errors_code_gone_title = /** @type {(inputs: Errors_Code_Gone_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已永久移除`)
};

const ja_errors_code_gone_title = /** @type {(inputs: Errors_Code_Gone_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`完全に削除されました`)
};

/**
* | output |
* | --- |
* | "Gone for good" |
*
* @param {Errors_Code_Gone_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const errors_code_gone_title = /** @type {((inputs?: Errors_Code_Gone_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Errors_Code_Gone_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_errors_code_gone_title(inputs)
	if (locale === "de") return de_errors_code_gone_title(inputs)
	if (locale === "fr") return fr_errors_code_gone_title(inputs)
	if (locale === "it") return it_errors_code_gone_title(inputs)
	if (locale === "nl") return nl_errors_code_gone_title(inputs)
	if (locale === "pl") return pl_errors_code_gone_title(inputs)
	if (locale === "pt") return pt_errors_code_gone_title(inputs)
	if (locale === "ru") return ru_errors_code_gone_title(inputs)
	if (locale === "sv") return sv_errors_code_gone_title(inputs)
	if (locale === "tr") return tr_errors_code_gone_title(inputs)
	if (locale === "zh") return zh_errors_code_gone_title(inputs)
	if (locale === "ja") return ja_errors_code_gone_title(inputs)
	return en_errors_code_gone_title(inputs)
});
