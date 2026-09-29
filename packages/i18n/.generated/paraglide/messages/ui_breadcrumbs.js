/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ui_BreadcrumbsInputs */

const en_ui_breadcrumbs = /** @type {(inputs: Ui_BreadcrumbsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Breadcrumb`)
};

const es_ui_breadcrumbs = /** @type {(inputs: Ui_BreadcrumbsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ruta de navegación`)
};

const de_ui_breadcrumbs = /** @type {(inputs: Ui_BreadcrumbsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Brotkrümelnavigation`)
};

const fr_ui_breadcrumbs = /** @type {(inputs: Ui_BreadcrumbsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fil d’Ariane`)
};

const it_ui_breadcrumbs = /** @type {(inputs: Ui_BreadcrumbsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Percorso di navigazione`)
};

const nl_ui_breadcrumbs = /** @type {(inputs: Ui_BreadcrumbsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kruimelpad`)
};

const pl_ui_breadcrumbs = /** @type {(inputs: Ui_BreadcrumbsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ścieżka nawigacji`)
};

const pt_ui_breadcrumbs = /** @type {(inputs: Ui_BreadcrumbsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Trilha de navegação`)
};

const ru_ui_breadcrumbs = /** @type {(inputs: Ui_BreadcrumbsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Навигационная цепочка`)
};

const sv_ui_breadcrumbs = /** @type {(inputs: Ui_BreadcrumbsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Brödsmulor`)
};

const tr_ui_breadcrumbs = /** @type {(inputs: Ui_BreadcrumbsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gezinme yolu`)
};

const zh_ui_breadcrumbs = /** @type {(inputs: Ui_BreadcrumbsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`面包屑导航`)
};

const ja_ui_breadcrumbs = /** @type {(inputs: Ui_BreadcrumbsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`パンくずリスト`)
};

/**
* | output |
* | --- |
* | "Breadcrumb" |
*
* @param {Ui_BreadcrumbsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ui_breadcrumbs = /** @type {((inputs?: Ui_BreadcrumbsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_BreadcrumbsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ui_breadcrumbs(inputs)
	if (locale === "de") return de_ui_breadcrumbs(inputs)
	if (locale === "fr") return fr_ui_breadcrumbs(inputs)
	if (locale === "it") return it_ui_breadcrumbs(inputs)
	if (locale === "nl") return nl_ui_breadcrumbs(inputs)
	if (locale === "pl") return pl_ui_breadcrumbs(inputs)
	if (locale === "pt") return pt_ui_breadcrumbs(inputs)
	if (locale === "ru") return ru_ui_breadcrumbs(inputs)
	if (locale === "sv") return sv_ui_breadcrumbs(inputs)
	if (locale === "tr") return tr_ui_breadcrumbs(inputs)
	if (locale === "zh") return zh_ui_breadcrumbs(inputs)
	if (locale === "ja") return ja_ui_breadcrumbs(inputs)
	return en_ui_breadcrumbs(inputs)
});
