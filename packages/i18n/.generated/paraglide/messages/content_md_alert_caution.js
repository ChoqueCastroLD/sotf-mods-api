/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Content_Md_Alert_CautionInputs */

const en_content_md_alert_caution = /** @type {(inputs: Content_Md_Alert_CautionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Caution`)
};

const es_content_md_alert_caution = /** @type {(inputs: Content_Md_Alert_CautionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cuidado`)
};

const de_content_md_alert_caution = /** @type {(inputs: Content_Md_Alert_CautionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vorsicht`)
};

const fr_content_md_alert_caution = /** @type {(inputs: Content_Md_Alert_CautionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Prudence`)
};

const it_content_md_alert_caution = /** @type {(inputs: Content_Md_Alert_CautionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cautela`)
};

const nl_content_md_alert_caution = /** @type {(inputs: Content_Md_Alert_CautionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Voorzichtig`)
};

const pl_content_md_alert_caution = /** @type {(inputs: Content_Md_Alert_CautionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ostrożnie`)
};

const pt_content_md_alert_caution = /** @type {(inputs: Content_Md_Alert_CautionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cuidado`)
};

const ru_content_md_alert_caution = /** @type {(inputs: Content_Md_Alert_CautionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Осторожно`)
};

const sv_content_md_alert_caution = /** @type {(inputs: Content_Md_Alert_CautionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Försiktigt`)
};

const tr_content_md_alert_caution = /** @type {(inputs: Content_Md_Alert_CautionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dikkat`)
};

const zh_content_md_alert_caution = /** @type {(inputs: Content_Md_Alert_CautionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`小心`)
};

const ja_content_md_alert_caution = /** @type {(inputs: Content_Md_Alert_CautionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`注意`)
};

/**
* | output |
* | --- |
* | "Caution" |
*
* @param {Content_Md_Alert_CautionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const content_md_alert_caution = /** @type {((inputs?: Content_Md_Alert_CautionInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Md_Alert_CautionInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_content_md_alert_caution(inputs)
	if (locale === "de") return de_content_md_alert_caution(inputs)
	if (locale === "fr") return fr_content_md_alert_caution(inputs)
	if (locale === "it") return it_content_md_alert_caution(inputs)
	if (locale === "nl") return nl_content_md_alert_caution(inputs)
	if (locale === "pl") return pl_content_md_alert_caution(inputs)
	if (locale === "pt") return pt_content_md_alert_caution(inputs)
	if (locale === "ru") return ru_content_md_alert_caution(inputs)
	if (locale === "sv") return sv_content_md_alert_caution(inputs)
	if (locale === "tr") return tr_content_md_alert_caution(inputs)
	if (locale === "zh") return zh_content_md_alert_caution(inputs)
	if (locale === "ja") return ja_content_md_alert_caution(inputs)
	return en_content_md_alert_caution(inputs)
});
