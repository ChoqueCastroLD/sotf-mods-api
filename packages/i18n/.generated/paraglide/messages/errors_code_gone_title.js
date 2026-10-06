/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Errors_Code_Gone_TitleInputs */

const en_errors_code_gone_title = /** @type {(inputs: Errors_Code_Gone_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Removed`)
};

const es_errors_code_gone_title = /** @type {(inputs: Errors_Code_Gone_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Eliminado`)
};

const de_errors_code_gone_title = /** @type {(inputs: Errors_Code_Gone_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Entfernt`)
};

const fr_errors_code_gone_title = /** @type {(inputs: Errors_Code_Gone_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Supprimé`)
};

const it_errors_code_gone_title = /** @type {(inputs: Errors_Code_Gone_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rimosso`)
};

const nl_errors_code_gone_title = /** @type {(inputs: Errors_Code_Gone_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verwijderd`)
};

const pl_errors_code_gone_title = /** @type {(inputs: Errors_Code_Gone_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Usunięto`)
};

const pt_errors_code_gone_title = /** @type {(inputs: Errors_Code_Gone_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Removido`)
};

const ru_errors_code_gone_title = /** @type {(inputs: Errors_Code_Gone_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Удалено`)
};

const sv_errors_code_gone_title = /** @type {(inputs: Errors_Code_Gone_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Borttaget`)
};

const tr_errors_code_gone_title = /** @type {(inputs: Errors_Code_Gone_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kaldırıldı`)
};

const zh_errors_code_gone_title = /** @type {(inputs: Errors_Code_Gone_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已移除`)
};

const ja_errors_code_gone_title = /** @type {(inputs: Errors_Code_Gone_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`削除されました`)
};

/**
* | output |
* | --- |
* | "Removed" |
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
