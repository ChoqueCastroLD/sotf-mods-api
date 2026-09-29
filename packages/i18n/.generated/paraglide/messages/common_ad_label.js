/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Common_Ad_LabelInputs */

const en_common_ad_label = /** @type {(inputs: Common_Ad_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Advertisement`)
};

const es_common_ad_label = /** @type {(inputs: Common_Ad_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publicidad`)
};

const de_common_ad_label = /** @type {(inputs: Common_Ad_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Anzeige`)
};

const fr_common_ad_label = /** @type {(inputs: Common_Ad_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publicité`)
};

const it_common_ad_label = /** @type {(inputs: Common_Ad_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pubblicità`)
};

const nl_common_ad_label = /** @type {(inputs: Common_Ad_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Advertentie`)
};

const pl_common_ad_label = /** @type {(inputs: Common_Ad_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reklama`)
};

const pt_common_ad_label = /** @type {(inputs: Common_Ad_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publicidade`)
};

const ru_common_ad_label = /** @type {(inputs: Common_Ad_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Реклама`)
};

const sv_common_ad_label = /** @type {(inputs: Common_Ad_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Annons`)
};

const tr_common_ad_label = /** @type {(inputs: Common_Ad_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reklam`)
};

const zh_common_ad_label = /** @type {(inputs: Common_Ad_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`广告`)
};

const ja_common_ad_label = /** @type {(inputs: Common_Ad_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`広告`)
};

/**
* | output |
* | --- |
* | "Advertisement" |
*
* @param {Common_Ad_LabelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const common_ad_label = /** @type {((inputs?: Common_Ad_LabelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Common_Ad_LabelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_common_ad_label(inputs)
	if (locale === "de") return de_common_ad_label(inputs)
	if (locale === "fr") return fr_common_ad_label(inputs)
	if (locale === "it") return it_common_ad_label(inputs)
	if (locale === "nl") return nl_common_ad_label(inputs)
	if (locale === "pl") return pl_common_ad_label(inputs)
	if (locale === "pt") return pt_common_ad_label(inputs)
	if (locale === "ru") return ru_common_ad_label(inputs)
	if (locale === "sv") return sv_common_ad_label(inputs)
	if (locale === "tr") return tr_common_ad_label(inputs)
	if (locale === "zh") return zh_common_ad_label(inputs)
	if (locale === "ja") return ja_common_ad_label(inputs)
	return en_common_ad_label(inputs)
});
