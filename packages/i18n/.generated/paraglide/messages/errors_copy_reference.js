/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Errors_Copy_ReferenceInputs */

const en_errors_copy_reference = /** @type {(inputs: Errors_Copy_ReferenceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Copy reference`)
};

const es_errors_copy_reference = /** @type {(inputs: Errors_Copy_ReferenceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Copiar referencia`)
};

const de_errors_copy_reference = /** @type {(inputs: Errors_Copy_ReferenceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Referenz kopieren`)
};

const fr_errors_copy_reference = /** @type {(inputs: Errors_Copy_ReferenceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Copier la référence`)
};

const it_errors_copy_reference = /** @type {(inputs: Errors_Copy_ReferenceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Copia riferimento`)
};

const nl_errors_copy_reference = /** @type {(inputs: Errors_Copy_ReferenceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Referentie kopiëren`)
};

const pl_errors_copy_reference = /** @type {(inputs: Errors_Copy_ReferenceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kopiuj identyfikator`)
};

const pt_errors_copy_reference = /** @type {(inputs: Errors_Copy_ReferenceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Copiar referência`)
};

const ru_errors_copy_reference = /** @type {(inputs: Errors_Copy_ReferenceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Копировать номер`)
};

const sv_errors_copy_reference = /** @type {(inputs: Errors_Copy_ReferenceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kopiera referens`)
};

const tr_errors_copy_reference = /** @type {(inputs: Errors_Copy_ReferenceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Referansı kopyala`)
};

const zh_errors_copy_reference = /** @type {(inputs: Errors_Copy_ReferenceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`复制参考编号`)
};

const ja_errors_copy_reference = /** @type {(inputs: Errors_Copy_ReferenceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`参照番号をコピー`)
};

/**
* | output |
* | --- |
* | "Copy reference" |
*
* @param {Errors_Copy_ReferenceInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const errors_copy_reference = /** @type {((inputs?: Errors_Copy_ReferenceInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Errors_Copy_ReferenceInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_errors_copy_reference(inputs)
	if (locale === "de") return de_errors_copy_reference(inputs)
	if (locale === "fr") return fr_errors_copy_reference(inputs)
	if (locale === "it") return it_errors_copy_reference(inputs)
	if (locale === "nl") return nl_errors_copy_reference(inputs)
	if (locale === "pl") return pl_errors_copy_reference(inputs)
	if (locale === "pt") return pt_errors_copy_reference(inputs)
	if (locale === "ru") return ru_errors_copy_reference(inputs)
	if (locale === "sv") return sv_errors_copy_reference(inputs)
	if (locale === "tr") return tr_errors_copy_reference(inputs)
	if (locale === "zh") return zh_errors_copy_reference(inputs)
	if (locale === "ja") return ja_errors_copy_reference(inputs)
	return en_errors_copy_reference(inputs)
});
