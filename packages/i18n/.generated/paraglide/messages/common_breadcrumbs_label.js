/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Common_Breadcrumbs_LabelInputs */

const en_common_breadcrumbs_label = /** @type {(inputs: Common_Breadcrumbs_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Breadcrumb`)
};

const es_common_breadcrumbs_label = /** @type {(inputs: Common_Breadcrumbs_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ruta de navegación`)
};

const de_common_breadcrumbs_label = /** @type {(inputs: Common_Breadcrumbs_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Brotkrumennavigation`)
};

const fr_common_breadcrumbs_label = /** @type {(inputs: Common_Breadcrumbs_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fil d’Ariane`)
};

const it_common_breadcrumbs_label = /** @type {(inputs: Common_Breadcrumbs_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Percorso di navigazione`)
};

const nl_common_breadcrumbs_label = /** @type {(inputs: Common_Breadcrumbs_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kruimelpad`)
};

const pl_common_breadcrumbs_label = /** @type {(inputs: Common_Breadcrumbs_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ścieżka nawigacji`)
};

const pt_common_breadcrumbs_label = /** @type {(inputs: Common_Breadcrumbs_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Trilha de navegação`)
};

const ru_common_breadcrumbs_label = /** @type {(inputs: Common_Breadcrumbs_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Навигационная цепочка`)
};

const sv_common_breadcrumbs_label = /** @type {(inputs: Common_Breadcrumbs_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Brödsmulor`)
};

const tr_common_breadcrumbs_label = /** @type {(inputs: Common_Breadcrumbs_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gezinti yolu`)
};

const zh_common_breadcrumbs_label = /** @type {(inputs: Common_Breadcrumbs_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`导航路径`)
};

const ja_common_breadcrumbs_label = /** @type {(inputs: Common_Breadcrumbs_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`パンくずリスト`)
};

/**
* | output |
* | --- |
* | "Breadcrumb" |
*
* @param {Common_Breadcrumbs_LabelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const common_breadcrumbs_label = /** @type {((inputs?: Common_Breadcrumbs_LabelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Common_Breadcrumbs_LabelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_common_breadcrumbs_label(inputs)
	if (locale === "de") return de_common_breadcrumbs_label(inputs)
	if (locale === "fr") return fr_common_breadcrumbs_label(inputs)
	if (locale === "it") return it_common_breadcrumbs_label(inputs)
	if (locale === "nl") return nl_common_breadcrumbs_label(inputs)
	if (locale === "pl") return pl_common_breadcrumbs_label(inputs)
	if (locale === "pt") return pt_common_breadcrumbs_label(inputs)
	if (locale === "ru") return ru_common_breadcrumbs_label(inputs)
	if (locale === "sv") return sv_common_breadcrumbs_label(inputs)
	if (locale === "tr") return tr_common_breadcrumbs_label(inputs)
	if (locale === "zh") return zh_common_breadcrumbs_label(inputs)
	if (locale === "ja") return ja_common_breadcrumbs_label(inputs)
	return en_common_breadcrumbs_label(inputs)
});
