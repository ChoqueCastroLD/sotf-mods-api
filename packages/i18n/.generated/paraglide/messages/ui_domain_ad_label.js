/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ui_Domain_Ad_LabelInputs */

const en_ui_domain_ad_label = /** @type {(inputs: Ui_Domain_Ad_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Advertisement`)
};

const es_ui_domain_ad_label = /** @type {(inputs: Ui_Domain_Ad_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publicidad`)
};

const de_ui_domain_ad_label = /** @type {(inputs: Ui_Domain_Ad_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Anzeige`)
};

const fr_ui_domain_ad_label = /** @type {(inputs: Ui_Domain_Ad_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publicité`)
};

const it_ui_domain_ad_label = /** @type {(inputs: Ui_Domain_Ad_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pubblicità`)
};

const nl_ui_domain_ad_label = /** @type {(inputs: Ui_Domain_Ad_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Advertentie`)
};

const pl_ui_domain_ad_label = /** @type {(inputs: Ui_Domain_Ad_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reklama`)
};

const pt_ui_domain_ad_label = /** @type {(inputs: Ui_Domain_Ad_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publicidade`)
};

const ru_ui_domain_ad_label = /** @type {(inputs: Ui_Domain_Ad_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Реклама`)
};

const sv_ui_domain_ad_label = /** @type {(inputs: Ui_Domain_Ad_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Annons`)
};

const tr_ui_domain_ad_label = /** @type {(inputs: Ui_Domain_Ad_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reklam`)
};

const zh_ui_domain_ad_label = /** @type {(inputs: Ui_Domain_Ad_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`广告`)
};

const ja_ui_domain_ad_label = /** @type {(inputs: Ui_Domain_Ad_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`広告`)
};

/**
* | output |
* | --- |
* | "Advertisement" |
*
* @param {Ui_Domain_Ad_LabelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ui_domain_ad_label = /** @type {((inputs?: Ui_Domain_Ad_LabelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Domain_Ad_LabelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ui_domain_ad_label(inputs)
	if (locale === "de") return de_ui_domain_ad_label(inputs)
	if (locale === "fr") return fr_ui_domain_ad_label(inputs)
	if (locale === "it") return it_ui_domain_ad_label(inputs)
	if (locale === "nl") return nl_ui_domain_ad_label(inputs)
	if (locale === "pl") return pl_ui_domain_ad_label(inputs)
	if (locale === "pt") return pt_ui_domain_ad_label(inputs)
	if (locale === "ru") return ru_ui_domain_ad_label(inputs)
	if (locale === "sv") return sv_ui_domain_ad_label(inputs)
	if (locale === "tr") return tr_ui_domain_ad_label(inputs)
	if (locale === "zh") return zh_ui_domain_ad_label(inputs)
	if (locale === "ja") return ja_ui_domain_ad_label(inputs)
	return en_ui_domain_ad_label(inputs)
});
