/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ui_Domain_Reaction_PartyInputs */

const en_ui_domain_reaction_party = /** @type {(inputs: Ui_Domain_Reaction_PartyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Party`)
};

const es_ui_domain_reaction_party = /** @type {(inputs: Ui_Domain_Reaction_PartyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fiesta`)
};

const de_ui_domain_reaction_party = /** @type {(inputs: Ui_Domain_Reaction_PartyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Party`)
};

const fr_ui_domain_reaction_party = /** @type {(inputs: Ui_Domain_Reaction_PartyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fête`)
};

const it_ui_domain_reaction_party = /** @type {(inputs: Ui_Domain_Reaction_PartyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Festa`)
};

const nl_ui_domain_reaction_party = /** @type {(inputs: Ui_Domain_Reaction_PartyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Feest`)
};

const pl_ui_domain_reaction_party = /** @type {(inputs: Ui_Domain_Reaction_PartyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Impreza`)
};

const pt_ui_domain_reaction_party = /** @type {(inputs: Ui_Domain_Reaction_PartyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Festa`)
};

const ru_ui_domain_reaction_party = /** @type {(inputs: Ui_Domain_Reaction_PartyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Праздник`)
};

const sv_ui_domain_reaction_party = /** @type {(inputs: Ui_Domain_Reaction_PartyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fest`)
};

const tr_ui_domain_reaction_party = /** @type {(inputs: Ui_Domain_Reaction_PartyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kutlama`)
};

const zh_ui_domain_reaction_party = /** @type {(inputs: Ui_Domain_Reaction_PartyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`庆祝`)
};

const ja_ui_domain_reaction_party = /** @type {(inputs: Ui_Domain_Reaction_PartyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`お祝い`)
};

/**
* | output |
* | --- |
* | "Party" |
*
* @param {Ui_Domain_Reaction_PartyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ui_domain_reaction_party = /** @type {((inputs?: Ui_Domain_Reaction_PartyInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Domain_Reaction_PartyInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ui_domain_reaction_party(inputs)
	if (locale === "de") return de_ui_domain_reaction_party(inputs)
	if (locale === "fr") return fr_ui_domain_reaction_party(inputs)
	if (locale === "it") return it_ui_domain_reaction_party(inputs)
	if (locale === "nl") return nl_ui_domain_reaction_party(inputs)
	if (locale === "pl") return pl_ui_domain_reaction_party(inputs)
	if (locale === "pt") return pt_ui_domain_reaction_party(inputs)
	if (locale === "ru") return ru_ui_domain_reaction_party(inputs)
	if (locale === "sv") return sv_ui_domain_reaction_party(inputs)
	if (locale === "tr") return tr_ui_domain_reaction_party(inputs)
	if (locale === "zh") return zh_ui_domain_reaction_party(inputs)
	if (locale === "ja") return ja_ui_domain_reaction_party(inputs)
	return en_ui_domain_reaction_party(inputs)
});
