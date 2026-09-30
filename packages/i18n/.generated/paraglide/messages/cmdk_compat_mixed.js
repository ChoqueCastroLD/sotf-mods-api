/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Cmdk_Compat_MixedInputs */

const en_cmdk_compat_mixed = /** @type {(inputs: Cmdk_Compat_MixedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mixed reports`)
};

const es_cmdk_compat_mixed = /** @type {(inputs: Cmdk_Compat_MixedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reportes mixtos`)
};

const de_cmdk_compat_mixed = /** @type {(inputs: Cmdk_Compat_MixedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gemischte Berichte`)
};

const fr_cmdk_compat_mixed = /** @type {(inputs: Cmdk_Compat_MixedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Retours mitigés`)
};

const it_cmdk_compat_mixed = /** @type {(inputs: Cmdk_Compat_MixedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Segnalazioni contrastanti`)
};

const nl_cmdk_compat_mixed = /** @type {(inputs: Cmdk_Compat_MixedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wisselende meldingen`)
};

const pl_cmdk_compat_mixed = /** @type {(inputs: Cmdk_Compat_MixedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mieszane zgłoszenia`)
};

const pt_cmdk_compat_mixed = /** @type {(inputs: Cmdk_Compat_MixedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Relatos divergentes`)
};

const ru_cmdk_compat_mixed = /** @type {(inputs: Cmdk_Compat_MixedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Отзывы расходятся`)
};

const sv_cmdk_compat_mixed = /** @type {(inputs: Cmdk_Compat_MixedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Blandade rapporter`)
};

const tr_cmdk_compat_mixed = /** @type {(inputs: Cmdk_Compat_MixedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Karışık raporlar`)
};

const zh_cmdk_compat_mixed = /** @type {(inputs: Cmdk_Compat_MixedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`反馈不一`)
};

const ja_cmdk_compat_mixed = /** @type {(inputs: Cmdk_Compat_MixedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`報告が割れています`)
};

/**
* | output |
* | --- |
* | "Mixed reports" |
*
* @param {Cmdk_Compat_MixedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const cmdk_compat_mixed = /** @type {((inputs?: Cmdk_Compat_MixedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Cmdk_Compat_MixedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_cmdk_compat_mixed(inputs)
	if (locale === "de") return de_cmdk_compat_mixed(inputs)
	if (locale === "fr") return fr_cmdk_compat_mixed(inputs)
	if (locale === "it") return it_cmdk_compat_mixed(inputs)
	if (locale === "nl") return nl_cmdk_compat_mixed(inputs)
	if (locale === "pl") return pl_cmdk_compat_mixed(inputs)
	if (locale === "pt") return pt_cmdk_compat_mixed(inputs)
	if (locale === "ru") return ru_cmdk_compat_mixed(inputs)
	if (locale === "sv") return sv_cmdk_compat_mixed(inputs)
	if (locale === "tr") return tr_cmdk_compat_mixed(inputs)
	if (locale === "zh") return zh_cmdk_compat_mixed(inputs)
	if (locale === "ja") return ja_cmdk_compat_mixed(inputs)
	return en_cmdk_compat_mixed(inputs)
});
