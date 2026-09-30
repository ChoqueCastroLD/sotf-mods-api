/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Content_Md_Alert_ImportantInputs */

const en_content_md_alert_important = /** @type {(inputs: Content_Md_Alert_ImportantInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Important`)
};

const es_content_md_alert_important = /** @type {(inputs: Content_Md_Alert_ImportantInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Importante`)
};

const de_content_md_alert_important = /** @type {(inputs: Content_Md_Alert_ImportantInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wichtig`)
};

const fr_content_md_alert_important = /** @type {(inputs: Content_Md_Alert_ImportantInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Important`)
};

const it_content_md_alert_important = /** @type {(inputs: Content_Md_Alert_ImportantInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Importante`)
};

const nl_content_md_alert_important = /** @type {(inputs: Content_Md_Alert_ImportantInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Belangrijk`)
};

const pl_content_md_alert_important = /** @type {(inputs: Content_Md_Alert_ImportantInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ważne`)
};

const pt_content_md_alert_important = /** @type {(inputs: Content_Md_Alert_ImportantInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Importante`)
};

const ru_content_md_alert_important = /** @type {(inputs: Content_Md_Alert_ImportantInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Важно`)
};

const sv_content_md_alert_important = /** @type {(inputs: Content_Md_Alert_ImportantInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Viktigt`)
};

const tr_content_md_alert_important = /** @type {(inputs: Content_Md_Alert_ImportantInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Önemli`)
};

const zh_content_md_alert_important = /** @type {(inputs: Content_Md_Alert_ImportantInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`重要`)
};

const ja_content_md_alert_important = /** @type {(inputs: Content_Md_Alert_ImportantInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`重要`)
};

/**
* | output |
* | --- |
* | "Important" |
*
* @param {Content_Md_Alert_ImportantInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const content_md_alert_important = /** @type {((inputs?: Content_Md_Alert_ImportantInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Md_Alert_ImportantInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_content_md_alert_important(inputs)
	if (locale === "de") return de_content_md_alert_important(inputs)
	if (locale === "fr") return fr_content_md_alert_important(inputs)
	if (locale === "it") return it_content_md_alert_important(inputs)
	if (locale === "nl") return nl_content_md_alert_important(inputs)
	if (locale === "pl") return pl_content_md_alert_important(inputs)
	if (locale === "pt") return pt_content_md_alert_important(inputs)
	if (locale === "ru") return ru_content_md_alert_important(inputs)
	if (locale === "sv") return sv_content_md_alert_important(inputs)
	if (locale === "tr") return tr_content_md_alert_important(inputs)
	if (locale === "zh") return zh_content_md_alert_important(inputs)
	if (locale === "ja") return ja_content_md_alert_important(inputs)
	return en_content_md_alert_important(inputs)
});
