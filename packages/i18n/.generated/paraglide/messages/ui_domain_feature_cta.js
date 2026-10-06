/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ui_Domain_Feature_CtaInputs */

const en_ui_domain_feature_cta = /** @type {(inputs: Ui_Domain_Feature_CtaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`View`)
};

const es_ui_domain_feature_cta = /** @type {(inputs: Ui_Domain_Feature_CtaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ver`)
};

const de_ui_domain_feature_cta = /** @type {(inputs: Ui_Domain_Feature_CtaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ansehen`)
};

const fr_ui_domain_feature_cta = /** @type {(inputs: Ui_Domain_Feature_CtaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Voir`)
};

const it_ui_domain_feature_cta = /** @type {(inputs: Ui_Domain_Feature_CtaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vedi`)
};

const nl_ui_domain_feature_cta = /** @type {(inputs: Ui_Domain_Feature_CtaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bekijken`)
};

const pl_ui_domain_feature_cta = /** @type {(inputs: Ui_Domain_Feature_CtaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zobacz`)
};

const pt_ui_domain_feature_cta = /** @type {(inputs: Ui_Domain_Feature_CtaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ver`)
};

const ru_ui_domain_feature_cta = /** @type {(inputs: Ui_Domain_Feature_CtaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Посмотреть`)
};

const sv_ui_domain_feature_cta = /** @type {(inputs: Ui_Domain_Feature_CtaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Visa`)
};

const tr_ui_domain_feature_cta = /** @type {(inputs: Ui_Domain_Feature_CtaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Görüntüle`)
};

const zh_ui_domain_feature_cta = /** @type {(inputs: Ui_Domain_Feature_CtaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`查看`)
};

const ja_ui_domain_feature_cta = /** @type {(inputs: Ui_Domain_Feature_CtaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`見る`)
};

/**
* | output |
* | --- |
* | "View" |
*
* @param {Ui_Domain_Feature_CtaInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ui_domain_feature_cta = /** @type {((inputs?: Ui_Domain_Feature_CtaInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Domain_Feature_CtaInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ui_domain_feature_cta(inputs)
	if (locale === "de") return de_ui_domain_feature_cta(inputs)
	if (locale === "fr") return fr_ui_domain_feature_cta(inputs)
	if (locale === "it") return it_ui_domain_feature_cta(inputs)
	if (locale === "nl") return nl_ui_domain_feature_cta(inputs)
	if (locale === "pl") return pl_ui_domain_feature_cta(inputs)
	if (locale === "pt") return pt_ui_domain_feature_cta(inputs)
	if (locale === "ru") return ru_ui_domain_feature_cta(inputs)
	if (locale === "sv") return sv_ui_domain_feature_cta(inputs)
	if (locale === "tr") return tr_ui_domain_feature_cta(inputs)
	if (locale === "zh") return zh_ui_domain_feature_cta(inputs)
	if (locale === "ja") return ja_ui_domain_feature_cta(inputs)
	return en_ui_domain_feature_cta(inputs)
});
