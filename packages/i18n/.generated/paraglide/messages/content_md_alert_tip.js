/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Content_Md_Alert_TipInputs */

const en_content_md_alert_tip = /** @type {(inputs: Content_Md_Alert_TipInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tip`)
};

const es_content_md_alert_tip = /** @type {(inputs: Content_Md_Alert_TipInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Consejo`)
};

const de_content_md_alert_tip = /** @type {(inputs: Content_Md_Alert_TipInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tipp`)
};

const fr_content_md_alert_tip = /** @type {(inputs: Content_Md_Alert_TipInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Astuce`)
};

const it_content_md_alert_tip = /** @type {(inputs: Content_Md_Alert_TipInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Suggerimento`)
};

const nl_content_md_alert_tip = /** @type {(inputs: Content_Md_Alert_TipInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tip`)
};

const pl_content_md_alert_tip = /** @type {(inputs: Content_Md_Alert_TipInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wskazówka`)
};

const pt_content_md_alert_tip = /** @type {(inputs: Content_Md_Alert_TipInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dica`)
};

const ru_content_md_alert_tip = /** @type {(inputs: Content_Md_Alert_TipInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Совет`)
};

const sv_content_md_alert_tip = /** @type {(inputs: Content_Md_Alert_TipInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tips`)
};

const tr_content_md_alert_tip = /** @type {(inputs: Content_Md_Alert_TipInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İpucu`)
};

const zh_content_md_alert_tip = /** @type {(inputs: Content_Md_Alert_TipInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`提示`)
};

const ja_content_md_alert_tip = /** @type {(inputs: Content_Md_Alert_TipInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ヒント`)
};

/**
* | output |
* | --- |
* | "Tip" |
*
* @param {Content_Md_Alert_TipInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const content_md_alert_tip = /** @type {((inputs?: Content_Md_Alert_TipInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Md_Alert_TipInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_content_md_alert_tip(inputs)
	if (locale === "de") return de_content_md_alert_tip(inputs)
	if (locale === "fr") return fr_content_md_alert_tip(inputs)
	if (locale === "it") return it_content_md_alert_tip(inputs)
	if (locale === "nl") return nl_content_md_alert_tip(inputs)
	if (locale === "pl") return pl_content_md_alert_tip(inputs)
	if (locale === "pt") return pt_content_md_alert_tip(inputs)
	if (locale === "ru") return ru_content_md_alert_tip(inputs)
	if (locale === "sv") return sv_content_md_alert_tip(inputs)
	if (locale === "tr") return tr_content_md_alert_tip(inputs)
	if (locale === "zh") return zh_content_md_alert_tip(inputs)
	if (locale === "ja") return ja_content_md_alert_tip(inputs)
	return en_content_md_alert_tip(inputs)
});
