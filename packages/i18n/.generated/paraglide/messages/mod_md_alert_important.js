/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Md_Alert_ImportantInputs */

const en_mod_md_alert_important = /** @type {(inputs: Mod_Md_Alert_ImportantInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Important`)
};

const es_mod_md_alert_important = /** @type {(inputs: Mod_Md_Alert_ImportantInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Importante`)
};

const de_mod_md_alert_important = /** @type {(inputs: Mod_Md_Alert_ImportantInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wichtig`)
};

const fr_mod_md_alert_important = /** @type {(inputs: Mod_Md_Alert_ImportantInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Important`)
};

const it_mod_md_alert_important = /** @type {(inputs: Mod_Md_Alert_ImportantInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Importante`)
};

const nl_mod_md_alert_important = /** @type {(inputs: Mod_Md_Alert_ImportantInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Belangrijk`)
};

const pl_mod_md_alert_important = /** @type {(inputs: Mod_Md_Alert_ImportantInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ważne`)
};

const pt_mod_md_alert_important = /** @type {(inputs: Mod_Md_Alert_ImportantInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Importante`)
};

const ru_mod_md_alert_important = /** @type {(inputs: Mod_Md_Alert_ImportantInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Важно`)
};

const sv_mod_md_alert_important = /** @type {(inputs: Mod_Md_Alert_ImportantInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Viktigt`)
};

const tr_mod_md_alert_important = /** @type {(inputs: Mod_Md_Alert_ImportantInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Önemli`)
};

const zh_mod_md_alert_important = /** @type {(inputs: Mod_Md_Alert_ImportantInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`重要`)
};

const ja_mod_md_alert_important = /** @type {(inputs: Mod_Md_Alert_ImportantInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`重要`)
};

/**
* | output |
* | --- |
* | "Important" |
*
* @param {Mod_Md_Alert_ImportantInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_md_alert_important = /** @type {((inputs?: Mod_Md_Alert_ImportantInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Md_Alert_ImportantInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_md_alert_important(inputs)
	if (locale === "de") return de_mod_md_alert_important(inputs)
	if (locale === "fr") return fr_mod_md_alert_important(inputs)
	if (locale === "it") return it_mod_md_alert_important(inputs)
	if (locale === "nl") return nl_mod_md_alert_important(inputs)
	if (locale === "pl") return pl_mod_md_alert_important(inputs)
	if (locale === "pt") return pt_mod_md_alert_important(inputs)
	if (locale === "ru") return ru_mod_md_alert_important(inputs)
	if (locale === "sv") return sv_mod_md_alert_important(inputs)
	if (locale === "tr") return tr_mod_md_alert_important(inputs)
	if (locale === "zh") return zh_mod_md_alert_important(inputs)
	if (locale === "ja") return ja_mod_md_alert_important(inputs)
	return en_mod_md_alert_important(inputs)
});
