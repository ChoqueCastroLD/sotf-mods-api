/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Errors_Code_Forbidden_TitleInputs */

const en_errors_code_forbidden_title = /** @type {(inputs: Errors_Code_Forbidden_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`You can’t do that here`)
};

const es_errors_code_forbidden_title = /** @type {(inputs: Errors_Code_Forbidden_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No puedes hacer eso aquí`)
};

const de_errors_code_forbidden_title = /** @type {(inputs: Errors_Code_Forbidden_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Das geht hier nicht`)
};

const fr_errors_code_forbidden_title = /** @type {(inputs: Errors_Code_Forbidden_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Action impossible ici`)
};

const it_errors_code_forbidden_title = /** @type {(inputs: Errors_Code_Forbidden_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Qui non puoi farlo`)
};

const nl_errors_code_forbidden_title = /** @type {(inputs: Errors_Code_Forbidden_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dat kan hier niet`)
};

const pl_errors_code_forbidden_title = /** @type {(inputs: Errors_Code_Forbidden_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tutaj nie możesz tego zrobić`)
};

const pt_errors_code_forbidden_title = /** @type {(inputs: Errors_Code_Forbidden_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Você não pode fazer isso aqui`)
};

const ru_errors_code_forbidden_title = /** @type {(inputs: Errors_Code_Forbidden_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Здесь это сделать нельзя`)
};

const sv_errors_code_forbidden_title = /** @type {(inputs: Errors_Code_Forbidden_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Det går inte att göra här`)
};

const tr_errors_code_forbidden_title = /** @type {(inputs: Errors_Code_Forbidden_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bunu burada yapamazsın`)
};

const zh_errors_code_forbidden_title = /** @type {(inputs: Errors_Code_Forbidden_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`无法在此执行该操作`)
};

const ja_errors_code_forbidden_title = /** @type {(inputs: Errors_Code_Forbidden_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`この操作はできません`)
};

/**
* | output |
* | --- |
* | "You can’t do that here" |
*
* @param {Errors_Code_Forbidden_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const errors_code_forbidden_title = /** @type {((inputs?: Errors_Code_Forbidden_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Errors_Code_Forbidden_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_errors_code_forbidden_title(inputs)
	if (locale === "de") return de_errors_code_forbidden_title(inputs)
	if (locale === "fr") return fr_errors_code_forbidden_title(inputs)
	if (locale === "it") return it_errors_code_forbidden_title(inputs)
	if (locale === "nl") return nl_errors_code_forbidden_title(inputs)
	if (locale === "pl") return pl_errors_code_forbidden_title(inputs)
	if (locale === "pt") return pt_errors_code_forbidden_title(inputs)
	if (locale === "ru") return ru_errors_code_forbidden_title(inputs)
	if (locale === "sv") return sv_errors_code_forbidden_title(inputs)
	if (locale === "tr") return tr_errors_code_forbidden_title(inputs)
	if (locale === "zh") return zh_errors_code_forbidden_title(inputs)
	if (locale === "ja") return ja_errors_code_forbidden_title(inputs)
	return en_errors_code_forbidden_title(inputs)
});
