/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ui_Domain_Tier_CampfireInputs */

const en_ui_domain_tier_campfire = /** @type {(inputs: Ui_Domain_Tier_CampfireInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Campfire`)
};

const es_ui_domain_tier_campfire = /** @type {(inputs: Ui_Domain_Tier_CampfireInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hoguera`)
};

const de_ui_domain_tier_campfire = /** @type {(inputs: Ui_Domain_Tier_CampfireInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lagerfeuer`)
};

const fr_ui_domain_tier_campfire = /** @type {(inputs: Ui_Domain_Tier_CampfireInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Feu de camp`)
};

const it_ui_domain_tier_campfire = /** @type {(inputs: Ui_Domain_Tier_CampfireInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Falò`)
};

const nl_ui_domain_tier_campfire = /** @type {(inputs: Ui_Domain_Tier_CampfireInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kampvuur`)
};

const pl_ui_domain_tier_campfire = /** @type {(inputs: Ui_Domain_Tier_CampfireInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ognisko`)
};

const pt_ui_domain_tier_campfire = /** @type {(inputs: Ui_Domain_Tier_CampfireInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fogueira`)
};

const ru_ui_domain_tier_campfire = /** @type {(inputs: Ui_Domain_Tier_CampfireInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Костёр`)
};

const sv_ui_domain_tier_campfire = /** @type {(inputs: Ui_Domain_Tier_CampfireInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lägereld`)
};

const tr_ui_domain_tier_campfire = /** @type {(inputs: Ui_Domain_Tier_CampfireInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kamp ateşi`)
};

const zh_ui_domain_tier_campfire = /** @type {(inputs: Ui_Domain_Tier_CampfireInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`篝火`)
};

const ja_ui_domain_tier_campfire = /** @type {(inputs: Ui_Domain_Tier_CampfireInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`焚き火`)
};

/**
* | output |
* | --- |
* | "Campfire" |
*
* @param {Ui_Domain_Tier_CampfireInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ui_domain_tier_campfire = /** @type {((inputs?: Ui_Domain_Tier_CampfireInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Domain_Tier_CampfireInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ui_domain_tier_campfire(inputs)
	if (locale === "de") return de_ui_domain_tier_campfire(inputs)
	if (locale === "fr") return fr_ui_domain_tier_campfire(inputs)
	if (locale === "it") return it_ui_domain_tier_campfire(inputs)
	if (locale === "nl") return nl_ui_domain_tier_campfire(inputs)
	if (locale === "pl") return pl_ui_domain_tier_campfire(inputs)
	if (locale === "pt") return pt_ui_domain_tier_campfire(inputs)
	if (locale === "ru") return ru_ui_domain_tier_campfire(inputs)
	if (locale === "sv") return sv_ui_domain_tier_campfire(inputs)
	if (locale === "tr") return tr_ui_domain_tier_campfire(inputs)
	if (locale === "zh") return zh_ui_domain_tier_campfire(inputs)
	if (locale === "ja") return ja_ui_domain_tier_campfire(inputs)
	return en_ui_domain_tier_campfire(inputs)
});
