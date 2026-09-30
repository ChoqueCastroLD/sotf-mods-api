/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ui_Domain_Reaction_HeartInputs */

const en_ui_domain_reaction_heart = /** @type {(inputs: Ui_Domain_Reaction_HeartInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Heart`)
};

const es_ui_domain_reaction_heart = /** @type {(inputs: Ui_Domain_Reaction_HeartInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Corazón`)
};

const de_ui_domain_reaction_heart = /** @type {(inputs: Ui_Domain_Reaction_HeartInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Herz`)
};

const fr_ui_domain_reaction_heart = /** @type {(inputs: Ui_Domain_Reaction_HeartInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cœur`)
};

const it_ui_domain_reaction_heart = /** @type {(inputs: Ui_Domain_Reaction_HeartInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cuore`)
};

const nl_ui_domain_reaction_heart = /** @type {(inputs: Ui_Domain_Reaction_HeartInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hart`)
};

const pl_ui_domain_reaction_heart = /** @type {(inputs: Ui_Domain_Reaction_HeartInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Serce`)
};

const pt_ui_domain_reaction_heart = /** @type {(inputs: Ui_Domain_Reaction_HeartInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Coração`)
};

const ru_ui_domain_reaction_heart = /** @type {(inputs: Ui_Domain_Reaction_HeartInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Сердце`)
};

const sv_ui_domain_reaction_heart = /** @type {(inputs: Ui_Domain_Reaction_HeartInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hjärta`)
};

const tr_ui_domain_reaction_heart = /** @type {(inputs: Ui_Domain_Reaction_HeartInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kalp`)
};

const zh_ui_domain_reaction_heart = /** @type {(inputs: Ui_Domain_Reaction_HeartInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`爱心`)
};

const ja_ui_domain_reaction_heart = /** @type {(inputs: Ui_Domain_Reaction_HeartInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ハート`)
};

/**
* | output |
* | --- |
* | "Heart" |
*
* @param {Ui_Domain_Reaction_HeartInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ui_domain_reaction_heart = /** @type {((inputs?: Ui_Domain_Reaction_HeartInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Domain_Reaction_HeartInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ui_domain_reaction_heart(inputs)
	if (locale === "de") return de_ui_domain_reaction_heart(inputs)
	if (locale === "fr") return fr_ui_domain_reaction_heart(inputs)
	if (locale === "it") return it_ui_domain_reaction_heart(inputs)
	if (locale === "nl") return nl_ui_domain_reaction_heart(inputs)
	if (locale === "pl") return pl_ui_domain_reaction_heart(inputs)
	if (locale === "pt") return pt_ui_domain_reaction_heart(inputs)
	if (locale === "ru") return ru_ui_domain_reaction_heart(inputs)
	if (locale === "sv") return sv_ui_domain_reaction_heart(inputs)
	if (locale === "tr") return tr_ui_domain_reaction_heart(inputs)
	if (locale === "zh") return zh_ui_domain_reaction_heart(inputs)
	if (locale === "ja") return ja_ui_domain_reaction_heart(inputs)
	return en_ui_domain_reaction_heart(inputs)
});
