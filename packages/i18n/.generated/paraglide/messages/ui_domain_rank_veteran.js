/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ui_Domain_Rank_VeteranInputs */

const en_ui_domain_rank_veteran = /** @type {(inputs: Ui_Domain_Rank_VeteranInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Veteran`)
};

const es_ui_domain_rank_veteran = /** @type {(inputs: Ui_Domain_Rank_VeteranInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Veterano`)
};

const de_ui_domain_rank_veteran = /** @type {(inputs: Ui_Domain_Rank_VeteranInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Veteran`)
};

const fr_ui_domain_rank_veteran = /** @type {(inputs: Ui_Domain_Rank_VeteranInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vétéran`)
};

const it_ui_domain_rank_veteran = /** @type {(inputs: Ui_Domain_Rank_VeteranInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Veterano`)
};

const nl_ui_domain_rank_veteran = /** @type {(inputs: Ui_Domain_Rank_VeteranInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Veteraan`)
};

const pl_ui_domain_rank_veteran = /** @type {(inputs: Ui_Domain_Rank_VeteranInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Weteran`)
};

const pt_ui_domain_rank_veteran = /** @type {(inputs: Ui_Domain_Rank_VeteranInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Veterano`)
};

const ru_ui_domain_rank_veteran = /** @type {(inputs: Ui_Domain_Rank_VeteranInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ветеран`)
};

const sv_ui_domain_rank_veteran = /** @type {(inputs: Ui_Domain_Rank_VeteranInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Veteran`)
};

const tr_ui_domain_rank_veteran = /** @type {(inputs: Ui_Domain_Rank_VeteranInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kıdemli`)
};

const zh_ui_domain_rank_veteran = /** @type {(inputs: Ui_Domain_Rank_VeteranInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`老手`)
};

const ja_ui_domain_rank_veteran = /** @type {(inputs: Ui_Domain_Rank_VeteranInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ベテラン`)
};

/**
* | output |
* | --- |
* | "Veteran" |
*
* @param {Ui_Domain_Rank_VeteranInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ui_domain_rank_veteran = /** @type {((inputs?: Ui_Domain_Rank_VeteranInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Domain_Rank_VeteranInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ui_domain_rank_veteran(inputs)
	if (locale === "de") return de_ui_domain_rank_veteran(inputs)
	if (locale === "fr") return fr_ui_domain_rank_veteran(inputs)
	if (locale === "it") return it_ui_domain_rank_veteran(inputs)
	if (locale === "nl") return nl_ui_domain_rank_veteran(inputs)
	if (locale === "pl") return pl_ui_domain_rank_veteran(inputs)
	if (locale === "pt") return pt_ui_domain_rank_veteran(inputs)
	if (locale === "ru") return ru_ui_domain_rank_veteran(inputs)
	if (locale === "sv") return sv_ui_domain_rank_veteran(inputs)
	if (locale === "tr") return tr_ui_domain_rank_veteran(inputs)
	if (locale === "zh") return zh_ui_domain_rank_veteran(inputs)
	if (locale === "ja") return ja_ui_domain_rank_veteran(inputs)
	return en_ui_domain_rank_veteran(inputs)
});
