/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ui_Domain_Reaction_LaughInputs */

const en_ui_domain_reaction_laugh = /** @type {(inputs: Ui_Domain_Reaction_LaughInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Laugh`)
};

const es_ui_domain_reaction_laugh = /** @type {(inputs: Ui_Domain_Reaction_LaughInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Risa`)
};

const de_ui_domain_reaction_laugh = /** @type {(inputs: Ui_Domain_Reaction_LaughInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lachen`)
};

const fr_ui_domain_reaction_laugh = /** @type {(inputs: Ui_Domain_Reaction_LaughInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rire`)
};

const it_ui_domain_reaction_laugh = /** @type {(inputs: Ui_Domain_Reaction_LaughInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Risata`)
};

const nl_ui_domain_reaction_laugh = /** @type {(inputs: Ui_Domain_Reaction_LaughInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lach`)
};

const pl_ui_domain_reaction_laugh = /** @type {(inputs: Ui_Domain_Reaction_LaughInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Śmiech`)
};

const pt_ui_domain_reaction_laugh = /** @type {(inputs: Ui_Domain_Reaction_LaughInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Risada`)
};

const ru_ui_domain_reaction_laugh = /** @type {(inputs: Ui_Domain_Reaction_LaughInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Смех`)
};

const sv_ui_domain_reaction_laugh = /** @type {(inputs: Ui_Domain_Reaction_LaughInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Skratt`)
};

const tr_ui_domain_reaction_laugh = /** @type {(inputs: Ui_Domain_Reaction_LaughInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gülme`)
};

const zh_ui_domain_reaction_laugh = /** @type {(inputs: Ui_Domain_Reaction_LaughInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`大笑`)
};

const ja_ui_domain_reaction_laugh = /** @type {(inputs: Ui_Domain_Reaction_LaughInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`笑い`)
};

/**
* | output |
* | --- |
* | "Laugh" |
*
* @param {Ui_Domain_Reaction_LaughInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ui_domain_reaction_laugh = /** @type {((inputs?: Ui_Domain_Reaction_LaughInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Domain_Reaction_LaughInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ui_domain_reaction_laugh(inputs)
	if (locale === "de") return de_ui_domain_reaction_laugh(inputs)
	if (locale === "fr") return fr_ui_domain_reaction_laugh(inputs)
	if (locale === "it") return it_ui_domain_reaction_laugh(inputs)
	if (locale === "nl") return nl_ui_domain_reaction_laugh(inputs)
	if (locale === "pl") return pl_ui_domain_reaction_laugh(inputs)
	if (locale === "pt") return pt_ui_domain_reaction_laugh(inputs)
	if (locale === "ru") return ru_ui_domain_reaction_laugh(inputs)
	if (locale === "sv") return sv_ui_domain_reaction_laugh(inputs)
	if (locale === "tr") return tr_ui_domain_reaction_laugh(inputs)
	if (locale === "zh") return zh_ui_domain_reaction_laugh(inputs)
	if (locale === "ja") return ja_ui_domain_reaction_laugh(inputs)
	return en_ui_domain_reaction_laugh(inputs)
});
