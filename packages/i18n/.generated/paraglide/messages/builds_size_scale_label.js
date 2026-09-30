/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Builds_Size_Scale_LabelInputs */

const en_builds_size_scale_label = /** @type {(inputs: Builds_Size_Scale_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Size scale`)
};

const es_builds_size_scale_label = /** @type {(inputs: Builds_Size_Scale_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Escala de tamaño`)
};

const de_builds_size_scale_label = /** @type {(inputs: Builds_Size_Scale_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Größenskala`)
};

const fr_builds_size_scale_label = /** @type {(inputs: Builds_Size_Scale_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Échelle de taille`)
};

const it_builds_size_scale_label = /** @type {(inputs: Builds_Size_Scale_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scala delle taglie`)
};

const nl_builds_size_scale_label = /** @type {(inputs: Builds_Size_Scale_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Grootteschaal`)
};

const pl_builds_size_scale_label = /** @type {(inputs: Builds_Size_Scale_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Skala rozmiaru`)
};

const pt_builds_size_scale_label = /** @type {(inputs: Builds_Size_Scale_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Escala de tamanho`)
};

const ru_builds_size_scale_label = /** @type {(inputs: Builds_Size_Scale_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Шкала размеров`)
};

const sv_builds_size_scale_label = /** @type {(inputs: Builds_Size_Scale_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Storleksskala`)
};

const tr_builds_size_scale_label = /** @type {(inputs: Builds_Size_Scale_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Boyut ölçeği`)
};

const zh_builds_size_scale_label = /** @type {(inputs: Builds_Size_Scale_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`尺寸等级`)
};

const ja_builds_size_scale_label = /** @type {(inputs: Builds_Size_Scale_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`サイズの目安`)
};

/**
* | output |
* | --- |
* | "Size scale" |
*
* @param {Builds_Size_Scale_LabelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const builds_size_scale_label = /** @type {((inputs?: Builds_Size_Scale_LabelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Builds_Size_Scale_LabelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_builds_size_scale_label(inputs)
	if (locale === "de") return de_builds_size_scale_label(inputs)
	if (locale === "fr") return fr_builds_size_scale_label(inputs)
	if (locale === "it") return it_builds_size_scale_label(inputs)
	if (locale === "nl") return nl_builds_size_scale_label(inputs)
	if (locale === "pl") return pl_builds_size_scale_label(inputs)
	if (locale === "pt") return pt_builds_size_scale_label(inputs)
	if (locale === "ru") return ru_builds_size_scale_label(inputs)
	if (locale === "sv") return sv_builds_size_scale_label(inputs)
	if (locale === "tr") return tr_builds_size_scale_label(inputs)
	if (locale === "zh") return zh_builds_size_scale_label(inputs)
	if (locale === "ja") return ja_builds_size_scale_label(inputs)
	return en_builds_size_scale_label(inputs)
});
