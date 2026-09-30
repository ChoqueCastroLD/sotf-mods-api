/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Md_Alert_CautionInputs */

const en_mod_md_alert_caution = /** @type {(inputs: Mod_Md_Alert_CautionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Caution`)
};

const es_mod_md_alert_caution = /** @type {(inputs: Mod_Md_Alert_CautionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Precaución`)
};

const de_mod_md_alert_caution = /** @type {(inputs: Mod_Md_Alert_CautionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vorsicht`)
};

const fr_mod_md_alert_caution = /** @type {(inputs: Mod_Md_Alert_CautionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Attention`)
};

const it_mod_md_alert_caution = /** @type {(inputs: Mod_Md_Alert_CautionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Attenzione`)
};

const nl_mod_md_alert_caution = /** @type {(inputs: Mod_Md_Alert_CautionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Let op`)
};

const pl_mod_md_alert_caution = /** @type {(inputs: Mod_Md_Alert_CautionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ostrożnie`)
};

const pt_mod_md_alert_caution = /** @type {(inputs: Mod_Md_Alert_CautionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cuidado`)
};

const ru_mod_md_alert_caution = /** @type {(inputs: Mod_Md_Alert_CautionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Осторожно`)
};

const sv_mod_md_alert_caution = /** @type {(inputs: Mod_Md_Alert_CautionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Försiktighet`)
};

const tr_mod_md_alert_caution = /** @type {(inputs: Mod_Md_Alert_CautionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dikkat`)
};

const zh_mod_md_alert_caution = /** @type {(inputs: Mod_Md_Alert_CautionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`小心`)
};

const ja_mod_md_alert_caution = /** @type {(inputs: Mod_Md_Alert_CautionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`注意`)
};

/**
* | output |
* | --- |
* | "Caution" |
*
* @param {Mod_Md_Alert_CautionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_md_alert_caution = /** @type {((inputs?: Mod_Md_Alert_CautionInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Md_Alert_CautionInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_md_alert_caution(inputs)
	if (locale === "de") return de_mod_md_alert_caution(inputs)
	if (locale === "fr") return fr_mod_md_alert_caution(inputs)
	if (locale === "it") return it_mod_md_alert_caution(inputs)
	if (locale === "nl") return nl_mod_md_alert_caution(inputs)
	if (locale === "pl") return pl_mod_md_alert_caution(inputs)
	if (locale === "pt") return pt_mod_md_alert_caution(inputs)
	if (locale === "ru") return ru_mod_md_alert_caution(inputs)
	if (locale === "sv") return sv_mod_md_alert_caution(inputs)
	if (locale === "tr") return tr_mod_md_alert_caution(inputs)
	if (locale === "zh") return zh_mod_md_alert_caution(inputs)
	if (locale === "ja") return ja_mod_md_alert_caution(inputs)
	return en_mod_md_alert_caution(inputs)
});
