/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ui_Domain_Tier_LabelInputs */

const en_ui_domain_tier_label = /** @type {(inputs: Ui_Domain_Tier_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Creator tier`)
};

const es_ui_domain_tier_label = /** @type {(inputs: Ui_Domain_Tier_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rango de creador`)
};

const de_ui_domain_tier_label = /** @type {(inputs: Ui_Domain_Tier_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Creator-Stufe`)
};

const fr_ui_domain_tier_label = /** @type {(inputs: Ui_Domain_Tier_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rang de créateur`)
};

const it_ui_domain_tier_label = /** @type {(inputs: Ui_Domain_Tier_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Livello da creatore`)
};

const nl_ui_domain_tier_label = /** @type {(inputs: Ui_Domain_Tier_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Makersniveau`)
};

const pl_ui_domain_tier_label = /** @type {(inputs: Ui_Domain_Tier_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Poziom twórcy`)
};

const pt_ui_domain_tier_label = /** @type {(inputs: Ui_Domain_Tier_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nível de criador`)
};

const ru_ui_domain_tier_label = /** @type {(inputs: Ui_Domain_Tier_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ранг создателя`)
};

const sv_ui_domain_tier_label = /** @type {(inputs: Ui_Domain_Tier_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Skaparnivå`)
};

const tr_ui_domain_tier_label = /** @type {(inputs: Ui_Domain_Tier_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yapımcı seviyesi`)
};

const zh_ui_domain_tier_label = /** @type {(inputs: Ui_Domain_Tier_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`创作者等级`)
};

const ja_ui_domain_tier_label = /** @type {(inputs: Ui_Domain_Tier_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`クリエイターティア`)
};

/**
* | output |
* | --- |
* | "Creator tier" |
*
* @param {Ui_Domain_Tier_LabelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ui_domain_tier_label = /** @type {((inputs?: Ui_Domain_Tier_LabelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Domain_Tier_LabelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ui_domain_tier_label(inputs)
	if (locale === "de") return de_ui_domain_tier_label(inputs)
	if (locale === "fr") return fr_ui_domain_tier_label(inputs)
	if (locale === "it") return it_ui_domain_tier_label(inputs)
	if (locale === "nl") return nl_ui_domain_tier_label(inputs)
	if (locale === "pl") return pl_ui_domain_tier_label(inputs)
	if (locale === "pt") return pt_ui_domain_tier_label(inputs)
	if (locale === "ru") return ru_ui_domain_tier_label(inputs)
	if (locale === "sv") return sv_ui_domain_tier_label(inputs)
	if (locale === "tr") return tr_ui_domain_tier_label(inputs)
	if (locale === "zh") return zh_ui_domain_tier_label(inputs)
	if (locale === "ja") return ja_ui_domain_tier_label(inputs)
	return en_ui_domain_tier_label(inputs)
});
