/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Builds_Md_Alert_TipInputs */

const en_builds_md_alert_tip = /** @type {(inputs: Builds_Md_Alert_TipInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tip`)
};

const es_builds_md_alert_tip = /** @type {(inputs: Builds_Md_Alert_TipInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Consejo`)
};

const de_builds_md_alert_tip = /** @type {(inputs: Builds_Md_Alert_TipInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tipp`)
};

const fr_builds_md_alert_tip = /** @type {(inputs: Builds_Md_Alert_TipInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Astuce`)
};

const it_builds_md_alert_tip = /** @type {(inputs: Builds_Md_Alert_TipInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Suggerimento`)
};

const nl_builds_md_alert_tip = /** @type {(inputs: Builds_Md_Alert_TipInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tip`)
};

const pl_builds_md_alert_tip = /** @type {(inputs: Builds_Md_Alert_TipInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wskazówka`)
};

const pt_builds_md_alert_tip = /** @type {(inputs: Builds_Md_Alert_TipInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dica`)
};

const ru_builds_md_alert_tip = /** @type {(inputs: Builds_Md_Alert_TipInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Совет`)
};

const sv_builds_md_alert_tip = /** @type {(inputs: Builds_Md_Alert_TipInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tips`)
};

const tr_builds_md_alert_tip = /** @type {(inputs: Builds_Md_Alert_TipInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İpucu`)
};

const zh_builds_md_alert_tip = /** @type {(inputs: Builds_Md_Alert_TipInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`提示`)
};

const ja_builds_md_alert_tip = /** @type {(inputs: Builds_Md_Alert_TipInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ヒント`)
};

/**
* | output |
* | --- |
* | "Tip" |
*
* @param {Builds_Md_Alert_TipInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const builds_md_alert_tip = /** @type {((inputs?: Builds_Md_Alert_TipInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Builds_Md_Alert_TipInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_builds_md_alert_tip(inputs)
	if (locale === "de") return de_builds_md_alert_tip(inputs)
	if (locale === "fr") return fr_builds_md_alert_tip(inputs)
	if (locale === "it") return it_builds_md_alert_tip(inputs)
	if (locale === "nl") return nl_builds_md_alert_tip(inputs)
	if (locale === "pl") return pl_builds_md_alert_tip(inputs)
	if (locale === "pt") return pt_builds_md_alert_tip(inputs)
	if (locale === "ru") return ru_builds_md_alert_tip(inputs)
	if (locale === "sv") return sv_builds_md_alert_tip(inputs)
	if (locale === "tr") return tr_builds_md_alert_tip(inputs)
	if (locale === "zh") return zh_builds_md_alert_tip(inputs)
	if (locale === "ja") return ja_builds_md_alert_tip(inputs)
	return en_builds_md_alert_tip(inputs)
});
