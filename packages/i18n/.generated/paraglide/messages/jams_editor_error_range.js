/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ min: NonNullable<unknown>, max: NonNullable<unknown> }} Jams_Editor_Error_RangeInputs */

const en_jams_editor_error_range = /** @type {(inputs: Jams_Editor_Error_RangeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Use a whole number from ${i?.min} to ${i?.max}.`)
};

const es_jams_editor_error_range = /** @type {(inputs: Jams_Editor_Error_RangeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Usa un número entero de ${i?.min} a ${i?.max}.`)
};

const de_jams_editor_error_range = /** @type {(inputs: Jams_Editor_Error_RangeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Verwende eine ganze Zahl von ${i?.min} bis ${i?.max}.`)
};

const fr_jams_editor_error_range = /** @type {(inputs: Jams_Editor_Error_RangeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Utilisez un nombre entier de ${i?.min} à ${i?.max}.`)
};

const it_jams_editor_error_range = /** @type {(inputs: Jams_Editor_Error_RangeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Usa un numero intero da ${i?.min} a ${i?.max}.`)
};

const nl_jams_editor_error_range = /** @type {(inputs: Jams_Editor_Error_RangeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Gebruik een geheel getal van ${i?.min} tot ${i?.max}.`)
};

const pl_jams_editor_error_range = /** @type {(inputs: Jams_Editor_Error_RangeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Użyj liczby całkowitej od ${i?.min} do ${i?.max}.`)
};

const pt_jams_editor_error_range = /** @type {(inputs: Jams_Editor_Error_RangeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Use um número inteiro de ${i?.min} a ${i?.max}.`)
};

const ru_jams_editor_error_range = /** @type {(inputs: Jams_Editor_Error_RangeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Введите целое число от ${i?.min} до ${i?.max}.`)
};

const sv_jams_editor_error_range = /** @type {(inputs: Jams_Editor_Error_RangeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Använd ett heltal från ${i?.min} till ${i?.max}.`)
};

const tr_jams_editor_error_range = /** @type {(inputs: Jams_Editor_Error_RangeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.min} ile ${i?.max} arasında bir tam sayı girin.`)
};

const zh_jams_editor_error_range = /** @type {(inputs: Jams_Editor_Error_RangeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`请输入 ${i?.min} 到 ${i?.max} 之间的整数。`)
};

const ja_jams_editor_error_range = /** @type {(inputs: Jams_Editor_Error_RangeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.min} から ${i?.max} までの整数を入力してください。`)
};

/**
* | output |
* | --- |
* | "Use a whole number from {min} to {max}." |
*
* @param {Jams_Editor_Error_RangeInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_editor_error_range = /** @type {((inputs: Jams_Editor_Error_RangeInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Editor_Error_RangeInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_editor_error_range(inputs)
	if (locale === "de") return de_jams_editor_error_range(inputs)
	if (locale === "fr") return fr_jams_editor_error_range(inputs)
	if (locale === "it") return it_jams_editor_error_range(inputs)
	if (locale === "nl") return nl_jams_editor_error_range(inputs)
	if (locale === "pl") return pl_jams_editor_error_range(inputs)
	if (locale === "pt") return pt_jams_editor_error_range(inputs)
	if (locale === "ru") return ru_jams_editor_error_range(inputs)
	if (locale === "sv") return sv_jams_editor_error_range(inputs)
	if (locale === "tr") return tr_jams_editor_error_range(inputs)
	if (locale === "zh") return zh_jams_editor_error_range(inputs)
	if (locale === "ja") return ja_jams_editor_error_range(inputs)
	return en_jams_editor_error_range(inputs)
});
