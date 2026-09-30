/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Builds_Md_Alert_CautionInputs */

const en_builds_md_alert_caution = /** @type {(inputs: Builds_Md_Alert_CautionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Caution`)
};

const es_builds_md_alert_caution = /** @type {(inputs: Builds_Md_Alert_CautionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Precaución`)
};

const de_builds_md_alert_caution = /** @type {(inputs: Builds_Md_Alert_CautionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vorsicht`)
};

const fr_builds_md_alert_caution = /** @type {(inputs: Builds_Md_Alert_CautionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Attention`)
};

const it_builds_md_alert_caution = /** @type {(inputs: Builds_Md_Alert_CautionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Attenzione`)
};

const nl_builds_md_alert_caution = /** @type {(inputs: Builds_Md_Alert_CautionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Let op`)
};

const pl_builds_md_alert_caution = /** @type {(inputs: Builds_Md_Alert_CautionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ostrożnie`)
};

const pt_builds_md_alert_caution = /** @type {(inputs: Builds_Md_Alert_CautionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cuidado`)
};

const ru_builds_md_alert_caution = /** @type {(inputs: Builds_Md_Alert_CautionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Осторожно`)
};

const sv_builds_md_alert_caution = /** @type {(inputs: Builds_Md_Alert_CautionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Försiktighet`)
};

const tr_builds_md_alert_caution = /** @type {(inputs: Builds_Md_Alert_CautionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dikkat`)
};

const zh_builds_md_alert_caution = /** @type {(inputs: Builds_Md_Alert_CautionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`小心`)
};

const ja_builds_md_alert_caution = /** @type {(inputs: Builds_Md_Alert_CautionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`注意`)
};

/**
* | output |
* | --- |
* | "Caution" |
*
* @param {Builds_Md_Alert_CautionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const builds_md_alert_caution = /** @type {((inputs?: Builds_Md_Alert_CautionInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Builds_Md_Alert_CautionInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_builds_md_alert_caution(inputs)
	if (locale === "de") return de_builds_md_alert_caution(inputs)
	if (locale === "fr") return fr_builds_md_alert_caution(inputs)
	if (locale === "it") return it_builds_md_alert_caution(inputs)
	if (locale === "nl") return nl_builds_md_alert_caution(inputs)
	if (locale === "pl") return pl_builds_md_alert_caution(inputs)
	if (locale === "pt") return pt_builds_md_alert_caution(inputs)
	if (locale === "ru") return ru_builds_md_alert_caution(inputs)
	if (locale === "sv") return sv_builds_md_alert_caution(inputs)
	if (locale === "tr") return tr_builds_md_alert_caution(inputs)
	if (locale === "zh") return zh_builds_md_alert_caution(inputs)
	if (locale === "ja") return ja_builds_md_alert_caution(inputs)
	return en_builds_md_alert_caution(inputs)
});
