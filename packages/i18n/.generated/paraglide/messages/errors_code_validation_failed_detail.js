/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Errors_Code_Validation_Failed_DetailInputs */

const en_errors_code_validation_failed_detail = /** @type {(inputs: Errors_Code_Validation_Failed_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Some of what you entered can’t be used. Fix the fields marked below and try again.`)
};

const es_errors_code_validation_failed_detail = /** @type {(inputs: Errors_Code_Validation_Failed_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Parte de lo que escribiste no es válido. Corrige los campos marcados abajo e inténtalo de nuevo.`)
};

const de_errors_code_validation_failed_detail = /** @type {(inputs: Errors_Code_Validation_Failed_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Einige Eingaben sind nicht gültig. Korrigiere die unten markierten Felder und versuch es erneut.`)
};

const fr_errors_code_validation_failed_detail = /** @type {(inputs: Errors_Code_Validation_Failed_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Une partie de votre saisie n’est pas valide. Corrigez les champs signalés ci-dessous et réessayez.`)
};

const it_errors_code_validation_failed_detail = /** @type {(inputs: Errors_Code_Validation_Failed_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alcuni dati inseriti non sono validi. Correggi i campi evidenziati qui sotto e riprova.`)
};

const nl_errors_code_validation_failed_detail = /** @type {(inputs: Errors_Code_Validation_Failed_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Een deel van wat je hebt ingevuld is niet geldig. Verbeter de gemarkeerde velden hieronder en probeer het opnieuw.`)
};

const pl_errors_code_validation_failed_detail = /** @type {(inputs: Errors_Code_Validation_Failed_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Część wprowadzonych danych jest nieprawidłowa. Popraw pola zaznaczone poniżej i spróbuj ponownie.`)
};

const pt_errors_code_validation_failed_detail = /** @type {(inputs: Errors_Code_Validation_Failed_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Parte do que você digitou não é válida. Corrija os campos destacados abaixo e tente de novo.`)
};

const ru_errors_code_validation_failed_detail = /** @type {(inputs: Errors_Code_Validation_Failed_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Часть введённых данных не подходит. Исправьте отмеченные ниже поля и попробуйте снова.`)
};

const sv_errors_code_validation_failed_detail = /** @type {(inputs: Errors_Code_Validation_Failed_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`En del av det du angett är ogiltigt. Rätta de markerade fälten nedan och försök igen.`)
};

const tr_errors_code_validation_failed_detail = /** @type {(inputs: Errors_Code_Validation_Failed_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Girdiğin bilgilerin bir kısmı geçerli değil. Aşağıda işaretli alanları düzeltip tekrar dene.`)
};

const zh_errors_code_validation_failed_detail = /** @type {(inputs: Errors_Code_Validation_Failed_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`你填写的部分内容无效。请修改下方标出的字段后重试。`)
};

const ja_errors_code_validation_failed_detail = /** @type {(inputs: Errors_Code_Validation_Failed_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`入力内容の一部が正しくありません。下の印の付いた項目を修正して、もう一度お試しください。`)
};

/**
* | output |
* | --- |
* | "Some of what you entered can’t be used. Fix the fields marked below and try again." |
*
* @param {Errors_Code_Validation_Failed_DetailInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const errors_code_validation_failed_detail = /** @type {((inputs?: Errors_Code_Validation_Failed_DetailInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Errors_Code_Validation_Failed_DetailInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_errors_code_validation_failed_detail(inputs)
	if (locale === "de") return de_errors_code_validation_failed_detail(inputs)
	if (locale === "fr") return fr_errors_code_validation_failed_detail(inputs)
	if (locale === "it") return it_errors_code_validation_failed_detail(inputs)
	if (locale === "nl") return nl_errors_code_validation_failed_detail(inputs)
	if (locale === "pl") return pl_errors_code_validation_failed_detail(inputs)
	if (locale === "pt") return pt_errors_code_validation_failed_detail(inputs)
	if (locale === "ru") return ru_errors_code_validation_failed_detail(inputs)
	if (locale === "sv") return sv_errors_code_validation_failed_detail(inputs)
	if (locale === "tr") return tr_errors_code_validation_failed_detail(inputs)
	if (locale === "zh") return zh_errors_code_validation_failed_detail(inputs)
	if (locale === "ja") return ja_errors_code_validation_failed_detail(inputs)
	return en_errors_code_validation_failed_detail(inputs)
});
