/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Errors_Code_Not_Found_TitleInputs */

const en_errors_code_not_found_title = /** @type {(inputs: Errors_Code_Not_Found_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Not found`)
};

const es_errors_code_not_found_title = /** @type {(inputs: Errors_Code_Not_Found_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No encontrado`)
};

const de_errors_code_not_found_title = /** @type {(inputs: Errors_Code_Not_Found_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nicht gefunden`)
};

const fr_errors_code_not_found_title = /** @type {(inputs: Errors_Code_Not_Found_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Introuvable`)
};

const it_errors_code_not_found_title = /** @type {(inputs: Errors_Code_Not_Found_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Non trovato`)
};

const nl_errors_code_not_found_title = /** @type {(inputs: Errors_Code_Not_Found_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Niet gevonden`)
};

const pl_errors_code_not_found_title = /** @type {(inputs: Errors_Code_Not_Found_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie znaleziono`)
};

const pt_errors_code_not_found_title = /** @type {(inputs: Errors_Code_Not_Found_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Não encontrado`)
};

const ru_errors_code_not_found_title = /** @type {(inputs: Errors_Code_Not_Found_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Не найдено`)
};

const sv_errors_code_not_found_title = /** @type {(inputs: Errors_Code_Not_Found_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hittades inte`)
};

const tr_errors_code_not_found_title = /** @type {(inputs: Errors_Code_Not_Found_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bulunamadı`)
};

const zh_errors_code_not_found_title = /** @type {(inputs: Errors_Code_Not_Found_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`未找到`)
};

const ja_errors_code_not_found_title = /** @type {(inputs: Errors_Code_Not_Found_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`見つかりません`)
};

/**
* | output |
* | --- |
* | "Not found" |
*
* @param {Errors_Code_Not_Found_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const errors_code_not_found_title = /** @type {((inputs?: Errors_Code_Not_Found_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Errors_Code_Not_Found_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_errors_code_not_found_title(inputs)
	if (locale === "de") return de_errors_code_not_found_title(inputs)
	if (locale === "fr") return fr_errors_code_not_found_title(inputs)
	if (locale === "it") return it_errors_code_not_found_title(inputs)
	if (locale === "nl") return nl_errors_code_not_found_title(inputs)
	if (locale === "pl") return pl_errors_code_not_found_title(inputs)
	if (locale === "pt") return pt_errors_code_not_found_title(inputs)
	if (locale === "ru") return ru_errors_code_not_found_title(inputs)
	if (locale === "sv") return sv_errors_code_not_found_title(inputs)
	if (locale === "tr") return tr_errors_code_not_found_title(inputs)
	if (locale === "zh") return zh_errors_code_not_found_title(inputs)
	if (locale === "ja") return ja_errors_code_not_found_title(inputs)
	return en_errors_code_not_found_title(inputs)
});
