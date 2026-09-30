/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ui_Domain_Tier_LandmarkInputs */

const en_ui_domain_tier_landmark = /** @type {(inputs: Ui_Domain_Tier_LandmarkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Landmark`)
};

const es_ui_domain_tier_landmark = /** @type {(inputs: Ui_Domain_Tier_LandmarkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hito`)
};

const de_ui_domain_tier_landmark = /** @type {(inputs: Ui_Domain_Tier_LandmarkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wahrzeichen`)
};

const fr_ui_domain_tier_landmark = /** @type {(inputs: Ui_Domain_Tier_LandmarkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Monument`)
};

const it_ui_domain_tier_landmark = /** @type {(inputs: Ui_Domain_Tier_LandmarkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Monumento`)
};

const nl_ui_domain_tier_landmark = /** @type {(inputs: Ui_Domain_Tier_LandmarkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Monument`)
};

const pl_ui_domain_tier_landmark = /** @type {(inputs: Ui_Domain_Tier_LandmarkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Punkt orientacyjny`)
};

const pt_ui_domain_tier_landmark = /** @type {(inputs: Ui_Domain_Tier_LandmarkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Marco`)
};

const ru_ui_domain_tier_landmark = /** @type {(inputs: Ui_Domain_Tier_LandmarkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Достопримечательность`)
};

const sv_ui_domain_tier_landmark = /** @type {(inputs: Ui_Domain_Tier_LandmarkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Landmärke`)
};

const tr_ui_domain_tier_landmark = /** @type {(inputs: Ui_Domain_Tier_LandmarkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Simge yapı`)
};

const zh_ui_domain_tier_landmark = /** @type {(inputs: Ui_Domain_Tier_LandmarkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`地标`)
};

const ja_ui_domain_tier_landmark = /** @type {(inputs: Ui_Domain_Tier_LandmarkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ランドマーク`)
};

/**
* | output |
* | --- |
* | "Landmark" |
*
* @param {Ui_Domain_Tier_LandmarkInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ui_domain_tier_landmark = /** @type {((inputs?: Ui_Domain_Tier_LandmarkInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Domain_Tier_LandmarkInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ui_domain_tier_landmark(inputs)
	if (locale === "de") return de_ui_domain_tier_landmark(inputs)
	if (locale === "fr") return fr_ui_domain_tier_landmark(inputs)
	if (locale === "it") return it_ui_domain_tier_landmark(inputs)
	if (locale === "nl") return nl_ui_domain_tier_landmark(inputs)
	if (locale === "pl") return pl_ui_domain_tier_landmark(inputs)
	if (locale === "pt") return pt_ui_domain_tier_landmark(inputs)
	if (locale === "ru") return ru_ui_domain_tier_landmark(inputs)
	if (locale === "sv") return sv_ui_domain_tier_landmark(inputs)
	if (locale === "tr") return tr_ui_domain_tier_landmark(inputs)
	if (locale === "zh") return zh_ui_domain_tier_landmark(inputs)
	if (locale === "ja") return ja_ui_domain_tier_landmark(inputs)
	return en_ui_domain_tier_landmark(inputs)
});
