/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Cmdk_Preview_LabelInputs */

const en_cmdk_preview_label = /** @type {(inputs: Cmdk_Preview_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Preview`)
};

const es_cmdk_preview_label = /** @type {(inputs: Cmdk_Preview_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vista previa`)
};

const de_cmdk_preview_label = /** @type {(inputs: Cmdk_Preview_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vorschau`)
};

const fr_cmdk_preview_label = /** @type {(inputs: Cmdk_Preview_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aperçu`)
};

const it_cmdk_preview_label = /** @type {(inputs: Cmdk_Preview_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Anteprima`)
};

const nl_cmdk_preview_label = /** @type {(inputs: Cmdk_Preview_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Voorbeeld`)
};

const pl_cmdk_preview_label = /** @type {(inputs: Cmdk_Preview_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Podgląd`)
};

const pt_cmdk_preview_label = /** @type {(inputs: Cmdk_Preview_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pré-visualização`)
};

const ru_cmdk_preview_label = /** @type {(inputs: Cmdk_Preview_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Предпросмотр`)
};

const sv_cmdk_preview_label = /** @type {(inputs: Cmdk_Preview_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Förhandsvisning`)
};

const tr_cmdk_preview_label = /** @type {(inputs: Cmdk_Preview_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Önizleme`)
};

const zh_cmdk_preview_label = /** @type {(inputs: Cmdk_Preview_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`预览`)
};

const ja_cmdk_preview_label = /** @type {(inputs: Cmdk_Preview_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`プレビュー`)
};

/**
* | output |
* | --- |
* | "Preview" |
*
* @param {Cmdk_Preview_LabelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const cmdk_preview_label = /** @type {((inputs?: Cmdk_Preview_LabelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Cmdk_Preview_LabelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_cmdk_preview_label(inputs)
	if (locale === "de") return de_cmdk_preview_label(inputs)
	if (locale === "fr") return fr_cmdk_preview_label(inputs)
	if (locale === "it") return it_cmdk_preview_label(inputs)
	if (locale === "nl") return nl_cmdk_preview_label(inputs)
	if (locale === "pl") return pl_cmdk_preview_label(inputs)
	if (locale === "pt") return pt_cmdk_preview_label(inputs)
	if (locale === "ru") return ru_cmdk_preview_label(inputs)
	if (locale === "sv") return sv_cmdk_preview_label(inputs)
	if (locale === "tr") return tr_cmdk_preview_label(inputs)
	if (locale === "zh") return zh_cmdk_preview_label(inputs)
	if (locale === "ja") return ja_cmdk_preview_label(inputs)
	return en_cmdk_preview_label(inputs)
});
