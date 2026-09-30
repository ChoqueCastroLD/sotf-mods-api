/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ui_Domain_Tier_CabinInputs */

const en_ui_domain_tier_cabin = /** @type {(inputs: Ui_Domain_Tier_CabinInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cabin`)
};

const es_ui_domain_tier_cabin = /** @type {(inputs: Ui_Domain_Tier_CabinInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cabaña`)
};

const de_ui_domain_tier_cabin = /** @type {(inputs: Ui_Domain_Tier_CabinInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hütte`)
};

const fr_ui_domain_tier_cabin = /** @type {(inputs: Ui_Domain_Tier_CabinInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cabane`)
};

const it_ui_domain_tier_cabin = /** @type {(inputs: Ui_Domain_Tier_CabinInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Capanna`)
};

const nl_ui_domain_tier_cabin = /** @type {(inputs: Ui_Domain_Tier_CabinInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Blokhut`)
};

const pl_ui_domain_tier_cabin = /** @type {(inputs: Ui_Domain_Tier_CabinInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Chata`)
};

const pt_ui_domain_tier_cabin = /** @type {(inputs: Ui_Domain_Tier_CabinInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cabana`)
};

const ru_ui_domain_tier_cabin = /** @type {(inputs: Ui_Domain_Tier_CabinInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Хижина`)
};

const sv_ui_domain_tier_cabin = /** @type {(inputs: Ui_Domain_Tier_CabinInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Stuga`)
};

const tr_ui_domain_tier_cabin = /** @type {(inputs: Ui_Domain_Tier_CabinInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kulübe`)
};

const zh_ui_domain_tier_cabin = /** @type {(inputs: Ui_Domain_Tier_CabinInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`小屋`)
};

const ja_ui_domain_tier_cabin = /** @type {(inputs: Ui_Domain_Tier_CabinInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`キャビン`)
};

/**
* | output |
* | --- |
* | "Cabin" |
*
* @param {Ui_Domain_Tier_CabinInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ui_domain_tier_cabin = /** @type {((inputs?: Ui_Domain_Tier_CabinInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Domain_Tier_CabinInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ui_domain_tier_cabin(inputs)
	if (locale === "de") return de_ui_domain_tier_cabin(inputs)
	if (locale === "fr") return fr_ui_domain_tier_cabin(inputs)
	if (locale === "it") return it_ui_domain_tier_cabin(inputs)
	if (locale === "nl") return nl_ui_domain_tier_cabin(inputs)
	if (locale === "pl") return pl_ui_domain_tier_cabin(inputs)
	if (locale === "pt") return pt_ui_domain_tier_cabin(inputs)
	if (locale === "ru") return ru_ui_domain_tier_cabin(inputs)
	if (locale === "sv") return sv_ui_domain_tier_cabin(inputs)
	if (locale === "tr") return tr_ui_domain_tier_cabin(inputs)
	if (locale === "zh") return zh_ui_domain_tier_cabin(inputs)
	if (locale === "ja") return ja_ui_domain_tier_cabin(inputs)
	return en_ui_domain_tier_cabin(inputs)
});
