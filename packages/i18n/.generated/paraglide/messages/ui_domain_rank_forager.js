/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ui_Domain_Rank_ForagerInputs */

const en_ui_domain_rank_forager = /** @type {(inputs: Ui_Domain_Rank_ForagerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Forager`)
};

const es_ui_domain_rank_forager = /** @type {(inputs: Ui_Domain_Rank_ForagerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Recolector`)
};

const de_ui_domain_rank_forager = /** @type {(inputs: Ui_Domain_Rank_ForagerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sammler`)
};

const fr_ui_domain_rank_forager = /** @type {(inputs: Ui_Domain_Rank_ForagerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cueilleur`)
};

const it_ui_domain_rank_forager = /** @type {(inputs: Ui_Domain_Rank_ForagerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Raccoglitore`)
};

const nl_ui_domain_rank_forager = /** @type {(inputs: Ui_Domain_Rank_ForagerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verzamelaar`)
};

const pl_ui_domain_rank_forager = /** @type {(inputs: Ui_Domain_Rank_ForagerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zbieracz`)
};

const pt_ui_domain_rank_forager = /** @type {(inputs: Ui_Domain_Rank_ForagerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Coletor`)
};

const ru_ui_domain_rank_forager = /** @type {(inputs: Ui_Domain_Rank_ForagerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Собиратель`)
};

const sv_ui_domain_rank_forager = /** @type {(inputs: Ui_Domain_Rank_ForagerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Samlare`)
};

const tr_ui_domain_rank_forager = /** @type {(inputs: Ui_Domain_Rank_ForagerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Toplayıcı`)
};

const zh_ui_domain_rank_forager = /** @type {(inputs: Ui_Domain_Rank_ForagerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`采集者`)
};

const ja_ui_domain_rank_forager = /** @type {(inputs: Ui_Domain_Rank_ForagerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`採集者`)
};

/**
* | output |
* | --- |
* | "Forager" |
*
* @param {Ui_Domain_Rank_ForagerInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ui_domain_rank_forager = /** @type {((inputs?: Ui_Domain_Rank_ForagerInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Domain_Rank_ForagerInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ui_domain_rank_forager(inputs)
	if (locale === "de") return de_ui_domain_rank_forager(inputs)
	if (locale === "fr") return fr_ui_domain_rank_forager(inputs)
	if (locale === "it") return it_ui_domain_rank_forager(inputs)
	if (locale === "nl") return nl_ui_domain_rank_forager(inputs)
	if (locale === "pl") return pl_ui_domain_rank_forager(inputs)
	if (locale === "pt") return pt_ui_domain_rank_forager(inputs)
	if (locale === "ru") return ru_ui_domain_rank_forager(inputs)
	if (locale === "sv") return sv_ui_domain_rank_forager(inputs)
	if (locale === "tr") return tr_ui_domain_rank_forager(inputs)
	if (locale === "zh") return zh_ui_domain_rank_forager(inputs)
	if (locale === "ja") return ja_ui_domain_rank_forager(inputs)
	return en_ui_domain_rank_forager(inputs)
});
