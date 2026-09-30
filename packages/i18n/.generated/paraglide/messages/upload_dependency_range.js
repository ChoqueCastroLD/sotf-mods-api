/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ id: NonNullable<unknown> }} Upload_Dependency_RangeInputs */

const en_upload_dependency_range = /** @type {(inputs: Upload_Dependency_RangeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Version range of ${i?.id}`)
};

const es_upload_dependency_range = /** @type {(inputs: Upload_Dependency_RangeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Rango de versiones de ${i?.id}`)
};

const de_upload_dependency_range = /** @type {(inputs: Upload_Dependency_RangeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Versionsbereich von ${i?.id}`)
};

const fr_upload_dependency_range = /** @type {(inputs: Upload_Dependency_RangeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Plage de versions de ${i?.id}`)
};

const it_upload_dependency_range = /** @type {(inputs: Upload_Dependency_RangeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Intervallo di versioni di ${i?.id}`)
};

const nl_upload_dependency_range = /** @type {(inputs: Upload_Dependency_RangeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Versiebereik van ${i?.id}`)
};

const pl_upload_dependency_range = /** @type {(inputs: Upload_Dependency_RangeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Zakres wersji ${i?.id}`)
};

const pt_upload_dependency_range = /** @type {(inputs: Upload_Dependency_RangeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Faixa de versões de ${i?.id}`)
};

const ru_upload_dependency_range = /** @type {(inputs: Upload_Dependency_RangeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Диапазон версий ${i?.id}`)
};

const sv_upload_dependency_range = /** @type {(inputs: Upload_Dependency_RangeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Versionsintervall för ${i?.id}`)
};

const tr_upload_dependency_range = /** @type {(inputs: Upload_Dependency_RangeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.id} sürüm aralığı`)
};

const zh_upload_dependency_range = /** @type {(inputs: Upload_Dependency_RangeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.id} 的版本范围`)
};

const ja_upload_dependency_range = /** @type {(inputs: Upload_Dependency_RangeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.id} のバージョン範囲`)
};

/**
* | output |
* | --- |
* | "Version range of {id}" |
*
* @param {Upload_Dependency_RangeInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_dependency_range = /** @type {((inputs: Upload_Dependency_RangeInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Dependency_RangeInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_dependency_range(inputs)
	if (locale === "de") return de_upload_dependency_range(inputs)
	if (locale === "fr") return fr_upload_dependency_range(inputs)
	if (locale === "it") return it_upload_dependency_range(inputs)
	if (locale === "nl") return nl_upload_dependency_range(inputs)
	if (locale === "pl") return pl_upload_dependency_range(inputs)
	if (locale === "pt") return pt_upload_dependency_range(inputs)
	if (locale === "ru") return ru_upload_dependency_range(inputs)
	if (locale === "sv") return sv_upload_dependency_range(inputs)
	if (locale === "tr") return tr_upload_dependency_range(inputs)
	if (locale === "zh") return zh_upload_dependency_range(inputs)
	if (locale === "ja") return ja_upload_dependency_range(inputs)
	return en_upload_dependency_range(inputs)
});
