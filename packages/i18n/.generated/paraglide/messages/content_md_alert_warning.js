/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Content_Md_Alert_WarningInputs */

const en_content_md_alert_warning = /** @type {(inputs: Content_Md_Alert_WarningInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Warning`)
};

const es_content_md_alert_warning = /** @type {(inputs: Content_Md_Alert_WarningInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Atención`)
};

const de_content_md_alert_warning = /** @type {(inputs: Content_Md_Alert_WarningInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Achtung`)
};

const fr_content_md_alert_warning = /** @type {(inputs: Content_Md_Alert_WarningInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Attention`)
};

const it_content_md_alert_warning = /** @type {(inputs: Content_Md_Alert_WarningInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Attenzione`)
};

const nl_content_md_alert_warning = /** @type {(inputs: Content_Md_Alert_WarningInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Let op`)
};

const pl_content_md_alert_warning = /** @type {(inputs: Content_Md_Alert_WarningInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ostrzeżenie`)
};

const pt_content_md_alert_warning = /** @type {(inputs: Content_Md_Alert_WarningInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Atenção`)
};

const ru_content_md_alert_warning = /** @type {(inputs: Content_Md_Alert_WarningInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Внимание`)
};

const sv_content_md_alert_warning = /** @type {(inputs: Content_Md_Alert_WarningInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Varning`)
};

const tr_content_md_alert_warning = /** @type {(inputs: Content_Md_Alert_WarningInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Uyarı`)
};

const zh_content_md_alert_warning = /** @type {(inputs: Content_Md_Alert_WarningInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`警告`)
};

const ja_content_md_alert_warning = /** @type {(inputs: Content_Md_Alert_WarningInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`警告`)
};

/**
* | output |
* | --- |
* | "Warning" |
*
* @param {Content_Md_Alert_WarningInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const content_md_alert_warning = /** @type {((inputs?: Content_Md_Alert_WarningInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Md_Alert_WarningInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_content_md_alert_warning(inputs)
	if (locale === "de") return de_content_md_alert_warning(inputs)
	if (locale === "fr") return fr_content_md_alert_warning(inputs)
	if (locale === "it") return it_content_md_alert_warning(inputs)
	if (locale === "nl") return nl_content_md_alert_warning(inputs)
	if (locale === "pl") return pl_content_md_alert_warning(inputs)
	if (locale === "pt") return pt_content_md_alert_warning(inputs)
	if (locale === "ru") return ru_content_md_alert_warning(inputs)
	if (locale === "sv") return sv_content_md_alert_warning(inputs)
	if (locale === "tr") return tr_content_md_alert_warning(inputs)
	if (locale === "zh") return zh_content_md_alert_warning(inputs)
	if (locale === "ja") return ja_content_md_alert_warning(inputs)
	return en_content_md_alert_warning(inputs)
});
