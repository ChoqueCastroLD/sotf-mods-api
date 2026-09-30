/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ui_Domain_Rank_ScavengerInputs */

const en_ui_domain_rank_scavenger = /** @type {(inputs: Ui_Domain_Rank_ScavengerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scavenger`)
};

const es_ui_domain_rank_scavenger = /** @type {(inputs: Ui_Domain_Rank_ScavengerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Carroñero`)
};

const de_ui_domain_rank_scavenger = /** @type {(inputs: Ui_Domain_Rank_ScavengerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Plünderer`)
};

const fr_ui_domain_rank_scavenger = /** @type {(inputs: Ui_Domain_Rank_ScavengerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pillard`)
};

const it_ui_domain_rank_scavenger = /** @type {(inputs: Ui_Domain_Rank_ScavengerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Razziatore`)
};

const nl_ui_domain_rank_scavenger = /** @type {(inputs: Ui_Domain_Rank_ScavengerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aaseter`)
};

const pl_ui_domain_rank_scavenger = /** @type {(inputs: Ui_Domain_Rank_ScavengerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Szabrownik`)
};

const pt_ui_domain_rank_scavenger = /** @type {(inputs: Ui_Domain_Rank_ScavengerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Catador`)
};

const ru_ui_domain_rank_scavenger = /** @type {(inputs: Ui_Domain_Rank_ScavengerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Мародёр`)
};

const sv_ui_domain_rank_scavenger = /** @type {(inputs: Ui_Domain_Rank_ScavengerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Asätare`)
};

const tr_ui_domain_rank_scavenger = /** @type {(inputs: Ui_Domain_Rank_ScavengerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Leşçi`)
};

const zh_ui_domain_rank_scavenger = /** @type {(inputs: Ui_Domain_Rank_ScavengerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`拾荒者`)
};

const ja_ui_domain_rank_scavenger = /** @type {(inputs: Ui_Domain_Rank_ScavengerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`スカベンジャー`)
};

/**
* | output |
* | --- |
* | "Scavenger" |
*
* @param {Ui_Domain_Rank_ScavengerInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ui_domain_rank_scavenger = /** @type {((inputs?: Ui_Domain_Rank_ScavengerInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Domain_Rank_ScavengerInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ui_domain_rank_scavenger(inputs)
	if (locale === "de") return de_ui_domain_rank_scavenger(inputs)
	if (locale === "fr") return fr_ui_domain_rank_scavenger(inputs)
	if (locale === "it") return it_ui_domain_rank_scavenger(inputs)
	if (locale === "nl") return nl_ui_domain_rank_scavenger(inputs)
	if (locale === "pl") return pl_ui_domain_rank_scavenger(inputs)
	if (locale === "pt") return pt_ui_domain_rank_scavenger(inputs)
	if (locale === "ru") return ru_ui_domain_rank_scavenger(inputs)
	if (locale === "sv") return sv_ui_domain_rank_scavenger(inputs)
	if (locale === "tr") return tr_ui_domain_rank_scavenger(inputs)
	if (locale === "zh") return zh_ui_domain_rank_scavenger(inputs)
	if (locale === "ja") return ja_ui_domain_rank_scavenger(inputs)
	return en_ui_domain_rank_scavenger(inputs)
});
