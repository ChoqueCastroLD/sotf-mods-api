/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Errors_Code_Unknown_TitleInputs */

const en_errors_code_unknown_title = /** @type {(inputs: Errors_Code_Unknown_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Something went wrong`)
};

const es_errors_code_unknown_title = /** @type {(inputs: Errors_Code_Unknown_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Algo salió mal`)
};

const de_errors_code_unknown_title = /** @type {(inputs: Errors_Code_Unknown_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Etwas ist schiefgelaufen`)
};

const fr_errors_code_unknown_title = /** @type {(inputs: Errors_Code_Unknown_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Un problème est survenu`)
};

const it_errors_code_unknown_title = /** @type {(inputs: Errors_Code_Unknown_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Qualcosa è andato storto`)
};

const nl_errors_code_unknown_title = /** @type {(inputs: Errors_Code_Unknown_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Er ging iets mis`)
};

const pl_errors_code_unknown_title = /** @type {(inputs: Errors_Code_Unknown_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Coś poszło nie tak`)
};

const pt_errors_code_unknown_title = /** @type {(inputs: Errors_Code_Unknown_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Algo deu errado`)
};

const ru_errors_code_unknown_title = /** @type {(inputs: Errors_Code_Unknown_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Что-то пошло не так`)
};

const sv_errors_code_unknown_title = /** @type {(inputs: Errors_Code_Unknown_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Något gick fel`)
};

const tr_errors_code_unknown_title = /** @type {(inputs: Errors_Code_Unknown_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bir şeyler ters gitti`)
};

const zh_errors_code_unknown_title = /** @type {(inputs: Errors_Code_Unknown_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`出了点问题`)
};

const ja_errors_code_unknown_title = /** @type {(inputs: Errors_Code_Unknown_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`問題が発生しました`)
};

/**
* | output |
* | --- |
* | "Something went wrong" |
*
* @param {Errors_Code_Unknown_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const errors_code_unknown_title = /** @type {((inputs?: Errors_Code_Unknown_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Errors_Code_Unknown_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_errors_code_unknown_title(inputs)
	if (locale === "de") return de_errors_code_unknown_title(inputs)
	if (locale === "fr") return fr_errors_code_unknown_title(inputs)
	if (locale === "it") return it_errors_code_unknown_title(inputs)
	if (locale === "nl") return nl_errors_code_unknown_title(inputs)
	if (locale === "pl") return pl_errors_code_unknown_title(inputs)
	if (locale === "pt") return pt_errors_code_unknown_title(inputs)
	if (locale === "ru") return ru_errors_code_unknown_title(inputs)
	if (locale === "sv") return sv_errors_code_unknown_title(inputs)
	if (locale === "tr") return tr_errors_code_unknown_title(inputs)
	if (locale === "zh") return zh_errors_code_unknown_title(inputs)
	if (locale === "ja") return ja_errors_code_unknown_title(inputs)
	return en_errors_code_unknown_title(inputs)
});
