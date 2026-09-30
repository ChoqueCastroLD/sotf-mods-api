/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ui_Domain_Tier_FortressInputs */

const en_ui_domain_tier_fortress = /** @type {(inputs: Ui_Domain_Tier_FortressInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fortress`)
};

const es_ui_domain_tier_fortress = /** @type {(inputs: Ui_Domain_Tier_FortressInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fortaleza`)
};

const de_ui_domain_tier_fortress = /** @type {(inputs: Ui_Domain_Tier_FortressInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Festung`)
};

const fr_ui_domain_tier_fortress = /** @type {(inputs: Ui_Domain_Tier_FortressInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Forteresse`)
};

const it_ui_domain_tier_fortress = /** @type {(inputs: Ui_Domain_Tier_FortressInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fortezza`)
};

const nl_ui_domain_tier_fortress = /** @type {(inputs: Ui_Domain_Tier_FortressInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fort`)
};

const pl_ui_domain_tier_fortress = /** @type {(inputs: Ui_Domain_Tier_FortressInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Twierdza`)
};

const pt_ui_domain_tier_fortress = /** @type {(inputs: Ui_Domain_Tier_FortressInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fortaleza`)
};

const ru_ui_domain_tier_fortress = /** @type {(inputs: Ui_Domain_Tier_FortressInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Крепость`)
};

const sv_ui_domain_tier_fortress = /** @type {(inputs: Ui_Domain_Tier_FortressInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fästning`)
};

const tr_ui_domain_tier_fortress = /** @type {(inputs: Ui_Domain_Tier_FortressInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kale`)
};

const zh_ui_domain_tier_fortress = /** @type {(inputs: Ui_Domain_Tier_FortressInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`堡垒`)
};

const ja_ui_domain_tier_fortress = /** @type {(inputs: Ui_Domain_Tier_FortressInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`要塞`)
};

/**
* | output |
* | --- |
* | "Fortress" |
*
* @param {Ui_Domain_Tier_FortressInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ui_domain_tier_fortress = /** @type {((inputs?: Ui_Domain_Tier_FortressInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Domain_Tier_FortressInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ui_domain_tier_fortress(inputs)
	if (locale === "de") return de_ui_domain_tier_fortress(inputs)
	if (locale === "fr") return fr_ui_domain_tier_fortress(inputs)
	if (locale === "it") return it_ui_domain_tier_fortress(inputs)
	if (locale === "nl") return nl_ui_domain_tier_fortress(inputs)
	if (locale === "pl") return pl_ui_domain_tier_fortress(inputs)
	if (locale === "pt") return pt_ui_domain_tier_fortress(inputs)
	if (locale === "ru") return ru_ui_domain_tier_fortress(inputs)
	if (locale === "sv") return sv_ui_domain_tier_fortress(inputs)
	if (locale === "tr") return tr_ui_domain_tier_fortress(inputs)
	if (locale === "zh") return zh_ui_domain_tier_fortress(inputs)
	if (locale === "ja") return ja_ui_domain_tier_fortress(inputs)
	return en_ui_domain_tier_fortress(inputs)
});
