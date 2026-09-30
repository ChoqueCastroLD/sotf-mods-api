/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ui_Domain_Compat_MixedInputs */

const en_ui_domain_compat_mixed = /** @type {(inputs: Ui_Domain_Compat_MixedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mixed reports`)
};

const es_ui_domain_compat_mixed = /** @type {(inputs: Ui_Domain_Compat_MixedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reportes mixtos`)
};

const de_ui_domain_compat_mixed = /** @type {(inputs: Ui_Domain_Compat_MixedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gemischte Berichte`)
};

const fr_ui_domain_compat_mixed = /** @type {(inputs: Ui_Domain_Compat_MixedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Retours mitigés`)
};

const it_ui_domain_compat_mixed = /** @type {(inputs: Ui_Domain_Compat_MixedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Segnalazioni contrastanti`)
};

const nl_ui_domain_compat_mixed = /** @type {(inputs: Ui_Domain_Compat_MixedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wisselende meldingen`)
};

const pl_ui_domain_compat_mixed = /** @type {(inputs: Ui_Domain_Compat_MixedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mieszane zgłoszenia`)
};

const pt_ui_domain_compat_mixed = /** @type {(inputs: Ui_Domain_Compat_MixedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Relatos divergentes`)
};

const ru_ui_domain_compat_mixed = /** @type {(inputs: Ui_Domain_Compat_MixedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Отзывы расходятся`)
};

const sv_ui_domain_compat_mixed = /** @type {(inputs: Ui_Domain_Compat_MixedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Blandade rapporter`)
};

const tr_ui_domain_compat_mixed = /** @type {(inputs: Ui_Domain_Compat_MixedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Karışık raporlar`)
};

const zh_ui_domain_compat_mixed = /** @type {(inputs: Ui_Domain_Compat_MixedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`反馈不一`)
};

const ja_ui_domain_compat_mixed = /** @type {(inputs: Ui_Domain_Compat_MixedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`報告が割れています`)
};

/**
* | output |
* | --- |
* | "Mixed reports" |
*
* @param {Ui_Domain_Compat_MixedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ui_domain_compat_mixed = /** @type {((inputs?: Ui_Domain_Compat_MixedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Domain_Compat_MixedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ui_domain_compat_mixed(inputs)
	if (locale === "de") return de_ui_domain_compat_mixed(inputs)
	if (locale === "fr") return fr_ui_domain_compat_mixed(inputs)
	if (locale === "it") return it_ui_domain_compat_mixed(inputs)
	if (locale === "nl") return nl_ui_domain_compat_mixed(inputs)
	if (locale === "pl") return pl_ui_domain_compat_mixed(inputs)
	if (locale === "pt") return pt_ui_domain_compat_mixed(inputs)
	if (locale === "ru") return ru_ui_domain_compat_mixed(inputs)
	if (locale === "sv") return sv_ui_domain_compat_mixed(inputs)
	if (locale === "tr") return tr_ui_domain_compat_mixed(inputs)
	if (locale === "zh") return zh_ui_domain_compat_mixed(inputs)
	if (locale === "ja") return ja_ui_domain_compat_mixed(inputs)
	return en_ui_domain_compat_mixed(inputs)
});
