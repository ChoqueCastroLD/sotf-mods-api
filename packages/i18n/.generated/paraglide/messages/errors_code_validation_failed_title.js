/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Errors_Code_Validation_Failed_TitleInputs */

const en_errors_code_validation_failed_title = /** @type {(inputs: Errors_Code_Validation_Failed_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Check the highlighted fields`)
};

const es_errors_code_validation_failed_title = /** @type {(inputs: Errors_Code_Validation_Failed_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Revisa los campos marcados`)
};

const de_errors_code_validation_failed_title = /** @type {(inputs: Errors_Code_Validation_Failed_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Prüfe die markierten Felder`)
};

const fr_errors_code_validation_failed_title = /** @type {(inputs: Errors_Code_Validation_Failed_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vérifiez les champs signalés`)
};

const it_errors_code_validation_failed_title = /** @type {(inputs: Errors_Code_Validation_Failed_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Controlla i campi evidenziati`)
};

const nl_errors_code_validation_failed_title = /** @type {(inputs: Errors_Code_Validation_Failed_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Controleer de gemarkeerde velden`)
};

const pl_errors_code_validation_failed_title = /** @type {(inputs: Errors_Code_Validation_Failed_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sprawdź zaznaczone pola`)
};

const pt_errors_code_validation_failed_title = /** @type {(inputs: Errors_Code_Validation_Failed_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Confira os campos destacados`)
};

const ru_errors_code_validation_failed_title = /** @type {(inputs: Errors_Code_Validation_Failed_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Проверьте отмеченные поля`)
};

const sv_errors_code_validation_failed_title = /** @type {(inputs: Errors_Code_Validation_Failed_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kontrollera de markerade fälten`)
};

const tr_errors_code_validation_failed_title = /** @type {(inputs: Errors_Code_Validation_Failed_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İşaretli alanları kontrol et`)
};

const zh_errors_code_validation_failed_title = /** @type {(inputs: Errors_Code_Validation_Failed_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`请检查标出的字段`)
};

const ja_errors_code_validation_failed_title = /** @type {(inputs: Errors_Code_Validation_Failed_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`入力内容を確認してください`)
};

/**
* | output |
* | --- |
* | "Check the highlighted fields" |
*
* @param {Errors_Code_Validation_Failed_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const errors_code_validation_failed_title = /** @type {((inputs?: Errors_Code_Validation_Failed_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Errors_Code_Validation_Failed_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_errors_code_validation_failed_title(inputs)
	if (locale === "de") return de_errors_code_validation_failed_title(inputs)
	if (locale === "fr") return fr_errors_code_validation_failed_title(inputs)
	if (locale === "it") return it_errors_code_validation_failed_title(inputs)
	if (locale === "nl") return nl_errors_code_validation_failed_title(inputs)
	if (locale === "pl") return pl_errors_code_validation_failed_title(inputs)
	if (locale === "pt") return pt_errors_code_validation_failed_title(inputs)
	if (locale === "ru") return ru_errors_code_validation_failed_title(inputs)
	if (locale === "sv") return sv_errors_code_validation_failed_title(inputs)
	if (locale === "tr") return tr_errors_code_validation_failed_title(inputs)
	if (locale === "zh") return zh_errors_code_validation_failed_title(inputs)
	if (locale === "ja") return ja_errors_code_validation_failed_title(inputs)
	return en_errors_code_validation_failed_title(inputs)
});
