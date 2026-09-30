/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Md_Alert_TipInputs */

const en_mod_md_alert_tip = /** @type {(inputs: Mod_Md_Alert_TipInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tip`)
};

const es_mod_md_alert_tip = /** @type {(inputs: Mod_Md_Alert_TipInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Consejo`)
};

const de_mod_md_alert_tip = /** @type {(inputs: Mod_Md_Alert_TipInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tipp`)
};

const fr_mod_md_alert_tip = /** @type {(inputs: Mod_Md_Alert_TipInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Astuce`)
};

const it_mod_md_alert_tip = /** @type {(inputs: Mod_Md_Alert_TipInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Suggerimento`)
};

const nl_mod_md_alert_tip = /** @type {(inputs: Mod_Md_Alert_TipInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tip`)
};

const pl_mod_md_alert_tip = /** @type {(inputs: Mod_Md_Alert_TipInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wskazówka`)
};

const pt_mod_md_alert_tip = /** @type {(inputs: Mod_Md_Alert_TipInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dica`)
};

const ru_mod_md_alert_tip = /** @type {(inputs: Mod_Md_Alert_TipInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Совет`)
};

const sv_mod_md_alert_tip = /** @type {(inputs: Mod_Md_Alert_TipInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tips`)
};

const tr_mod_md_alert_tip = /** @type {(inputs: Mod_Md_Alert_TipInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İpucu`)
};

const zh_mod_md_alert_tip = /** @type {(inputs: Mod_Md_Alert_TipInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`提示`)
};

const ja_mod_md_alert_tip = /** @type {(inputs: Mod_Md_Alert_TipInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ヒント`)
};

/**
* | output |
* | --- |
* | "Tip" |
*
* @param {Mod_Md_Alert_TipInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_md_alert_tip = /** @type {((inputs?: Mod_Md_Alert_TipInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Md_Alert_TipInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_md_alert_tip(inputs)
	if (locale === "de") return de_mod_md_alert_tip(inputs)
	if (locale === "fr") return fr_mod_md_alert_tip(inputs)
	if (locale === "it") return it_mod_md_alert_tip(inputs)
	if (locale === "nl") return nl_mod_md_alert_tip(inputs)
	if (locale === "pl") return pl_mod_md_alert_tip(inputs)
	if (locale === "pt") return pt_mod_md_alert_tip(inputs)
	if (locale === "ru") return ru_mod_md_alert_tip(inputs)
	if (locale === "sv") return sv_mod_md_alert_tip(inputs)
	if (locale === "tr") return tr_mod_md_alert_tip(inputs)
	if (locale === "zh") return zh_mod_md_alert_tip(inputs)
	if (locale === "ja") return ja_mod_md_alert_tip(inputs)
	return en_mod_md_alert_tip(inputs)
});
