/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ui_Domain_Reaction_PrayInputs */

const en_ui_domain_reaction_pray = /** @type {(inputs: Ui_Domain_Reaction_PrayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Thanks`)
};

const es_ui_domain_reaction_pray = /** @type {(inputs: Ui_Domain_Reaction_PrayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gracias`)
};

const de_ui_domain_reaction_pray = /** @type {(inputs: Ui_Domain_Reaction_PrayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Danke`)
};

const fr_ui_domain_reaction_pray = /** @type {(inputs: Ui_Domain_Reaction_PrayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Merci`)
};

const it_ui_domain_reaction_pray = /** @type {(inputs: Ui_Domain_Reaction_PrayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Grazie`)
};

const nl_ui_domain_reaction_pray = /** @type {(inputs: Ui_Domain_Reaction_PrayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bedankt`)
};

const pl_ui_domain_reaction_pray = /** @type {(inputs: Ui_Domain_Reaction_PrayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dzięki`)
};

const pt_ui_domain_reaction_pray = /** @type {(inputs: Ui_Domain_Reaction_PrayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Obrigado`)
};

const ru_ui_domain_reaction_pray = /** @type {(inputs: Ui_Domain_Reaction_PrayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Спасибо`)
};

const sv_ui_domain_reaction_pray = /** @type {(inputs: Ui_Domain_Reaction_PrayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tack`)
};

const tr_ui_domain_reaction_pray = /** @type {(inputs: Ui_Domain_Reaction_PrayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Teşekkürler`)
};

const zh_ui_domain_reaction_pray = /** @type {(inputs: Ui_Domain_Reaction_PrayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`感谢`)
};

const ja_ui_domain_reaction_pray = /** @type {(inputs: Ui_Domain_Reaction_PrayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ありがとう`)
};

/**
* | output |
* | --- |
* | "Thanks" |
*
* @param {Ui_Domain_Reaction_PrayInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ui_domain_reaction_pray = /** @type {((inputs?: Ui_Domain_Reaction_PrayInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Domain_Reaction_PrayInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ui_domain_reaction_pray(inputs)
	if (locale === "de") return de_ui_domain_reaction_pray(inputs)
	if (locale === "fr") return fr_ui_domain_reaction_pray(inputs)
	if (locale === "it") return it_ui_domain_reaction_pray(inputs)
	if (locale === "nl") return nl_ui_domain_reaction_pray(inputs)
	if (locale === "pl") return pl_ui_domain_reaction_pray(inputs)
	if (locale === "pt") return pt_ui_domain_reaction_pray(inputs)
	if (locale === "ru") return ru_ui_domain_reaction_pray(inputs)
	if (locale === "sv") return sv_ui_domain_reaction_pray(inputs)
	if (locale === "tr") return tr_ui_domain_reaction_pray(inputs)
	if (locale === "zh") return zh_ui_domain_reaction_pray(inputs)
	if (locale === "ja") return ja_ui_domain_reaction_pray(inputs)
	return en_ui_domain_reaction_pray(inputs)
});
