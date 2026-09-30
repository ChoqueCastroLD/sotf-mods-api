/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Ann_PreviewInputs */

const en_admin_ann_preview = /** @type {(inputs: Admin_Ann_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Preview`)
};

const es_admin_ann_preview = /** @type {(inputs: Admin_Ann_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vista previa`)
};

const de_admin_ann_preview = /** @type {(inputs: Admin_Ann_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vorschau`)
};

const fr_admin_ann_preview = /** @type {(inputs: Admin_Ann_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aperçu`)
};

const it_admin_ann_preview = /** @type {(inputs: Admin_Ann_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Anteprima`)
};

const nl_admin_ann_preview = /** @type {(inputs: Admin_Ann_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Voorbeeld`)
};

const pl_admin_ann_preview = /** @type {(inputs: Admin_Ann_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Podgląd`)
};

const pt_admin_ann_preview = /** @type {(inputs: Admin_Ann_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Prévia`)
};

const ru_admin_ann_preview = /** @type {(inputs: Admin_Ann_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Предпросмотр`)
};

const sv_admin_ann_preview = /** @type {(inputs: Admin_Ann_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Förhandsvisning`)
};

const tr_admin_ann_preview = /** @type {(inputs: Admin_Ann_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Önizleme`)
};

const zh_admin_ann_preview = /** @type {(inputs: Admin_Ann_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`预览`)
};

const ja_admin_ann_preview = /** @type {(inputs: Admin_Ann_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`プレビュー`)
};

/**
* | output |
* | --- |
* | "Preview" |
*
* @param {Admin_Ann_PreviewInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_ann_preview = /** @type {((inputs?: Admin_Ann_PreviewInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Ann_PreviewInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_ann_preview(inputs)
	if (locale === "de") return de_admin_ann_preview(inputs)
	if (locale === "fr") return fr_admin_ann_preview(inputs)
	if (locale === "it") return it_admin_ann_preview(inputs)
	if (locale === "nl") return nl_admin_ann_preview(inputs)
	if (locale === "pl") return pl_admin_ann_preview(inputs)
	if (locale === "pt") return pt_admin_ann_preview(inputs)
	if (locale === "ru") return ru_admin_ann_preview(inputs)
	if (locale === "sv") return sv_admin_ann_preview(inputs)
	if (locale === "tr") return tr_admin_ann_preview(inputs)
	if (locale === "zh") return zh_admin_ann_preview(inputs)
	if (locale === "ja") return ja_admin_ann_preview(inputs)
	return en_admin_ann_preview(inputs)
});
