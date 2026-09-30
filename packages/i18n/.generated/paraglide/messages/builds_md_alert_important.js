/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Builds_Md_Alert_ImportantInputs */

const en_builds_md_alert_important = /** @type {(inputs: Builds_Md_Alert_ImportantInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Important`)
};

const es_builds_md_alert_important = /** @type {(inputs: Builds_Md_Alert_ImportantInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Importante`)
};

const de_builds_md_alert_important = /** @type {(inputs: Builds_Md_Alert_ImportantInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wichtig`)
};

const fr_builds_md_alert_important = /** @type {(inputs: Builds_Md_Alert_ImportantInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Important`)
};

const it_builds_md_alert_important = /** @type {(inputs: Builds_Md_Alert_ImportantInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Importante`)
};

const nl_builds_md_alert_important = /** @type {(inputs: Builds_Md_Alert_ImportantInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Belangrijk`)
};

const pl_builds_md_alert_important = /** @type {(inputs: Builds_Md_Alert_ImportantInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ważne`)
};

const pt_builds_md_alert_important = /** @type {(inputs: Builds_Md_Alert_ImportantInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Importante`)
};

const ru_builds_md_alert_important = /** @type {(inputs: Builds_Md_Alert_ImportantInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Важно`)
};

const sv_builds_md_alert_important = /** @type {(inputs: Builds_Md_Alert_ImportantInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Viktigt`)
};

const tr_builds_md_alert_important = /** @type {(inputs: Builds_Md_Alert_ImportantInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Önemli`)
};

const zh_builds_md_alert_important = /** @type {(inputs: Builds_Md_Alert_ImportantInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`重要`)
};

const ja_builds_md_alert_important = /** @type {(inputs: Builds_Md_Alert_ImportantInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`重要`)
};

/**
* | output |
* | --- |
* | "Important" |
*
* @param {Builds_Md_Alert_ImportantInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const builds_md_alert_important = /** @type {((inputs?: Builds_Md_Alert_ImportantInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Builds_Md_Alert_ImportantInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_builds_md_alert_important(inputs)
	if (locale === "de") return de_builds_md_alert_important(inputs)
	if (locale === "fr") return fr_builds_md_alert_important(inputs)
	if (locale === "it") return it_builds_md_alert_important(inputs)
	if (locale === "nl") return nl_builds_md_alert_important(inputs)
	if (locale === "pl") return pl_builds_md_alert_important(inputs)
	if (locale === "pt") return pt_builds_md_alert_important(inputs)
	if (locale === "ru") return ru_builds_md_alert_important(inputs)
	if (locale === "sv") return sv_builds_md_alert_important(inputs)
	if (locale === "tr") return tr_builds_md_alert_important(inputs)
	if (locale === "zh") return zh_builds_md_alert_important(inputs)
	if (locale === "ja") return ja_builds_md_alert_important(inputs)
	return en_builds_md_alert_important(inputs)
});
