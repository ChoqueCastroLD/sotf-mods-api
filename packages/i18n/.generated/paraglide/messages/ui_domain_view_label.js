/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ui_Domain_View_LabelInputs */

const en_ui_domain_view_label = /** @type {(inputs: Ui_Domain_View_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`View`)
};

const es_ui_domain_view_label = /** @type {(inputs: Ui_Domain_View_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vista`)
};

const de_ui_domain_view_label = /** @type {(inputs: Ui_Domain_View_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ansicht`)
};

const fr_ui_domain_view_label = /** @type {(inputs: Ui_Domain_View_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Affichage`)
};

const it_ui_domain_view_label = /** @type {(inputs: Ui_Domain_View_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vista`)
};

const nl_ui_domain_view_label = /** @type {(inputs: Ui_Domain_View_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Weergave`)
};

const pl_ui_domain_view_label = /** @type {(inputs: Ui_Domain_View_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Widok`)
};

const pt_ui_domain_view_label = /** @type {(inputs: Ui_Domain_View_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Visualização`)
};

const ru_ui_domain_view_label = /** @type {(inputs: Ui_Domain_View_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Вид`)
};

const sv_ui_domain_view_label = /** @type {(inputs: Ui_Domain_View_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Visning`)
};

const tr_ui_domain_view_label = /** @type {(inputs: Ui_Domain_View_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Görünüm`)
};

const zh_ui_domain_view_label = /** @type {(inputs: Ui_Domain_View_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`视图`)
};

const ja_ui_domain_view_label = /** @type {(inputs: Ui_Domain_View_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`表示形式`)
};

/**
* | output |
* | --- |
* | "View" |
*
* @param {Ui_Domain_View_LabelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ui_domain_view_label = /** @type {((inputs?: Ui_Domain_View_LabelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Domain_View_LabelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ui_domain_view_label(inputs)
	if (locale === "de") return de_ui_domain_view_label(inputs)
	if (locale === "fr") return fr_ui_domain_view_label(inputs)
	if (locale === "it") return it_ui_domain_view_label(inputs)
	if (locale === "nl") return nl_ui_domain_view_label(inputs)
	if (locale === "pl") return pl_ui_domain_view_label(inputs)
	if (locale === "pt") return pt_ui_domain_view_label(inputs)
	if (locale === "ru") return ru_ui_domain_view_label(inputs)
	if (locale === "sv") return sv_ui_domain_view_label(inputs)
	if (locale === "tr") return tr_ui_domain_view_label(inputs)
	if (locale === "zh") return zh_ui_domain_view_label(inputs)
	if (locale === "ja") return ja_ui_domain_view_label(inputs)
	return en_ui_domain_view_label(inputs)
});
