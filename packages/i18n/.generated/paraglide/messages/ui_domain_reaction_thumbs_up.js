/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ui_Domain_Reaction_Thumbs_UpInputs */

const en_ui_domain_reaction_thumbs_up = /** @type {(inputs: Ui_Domain_Reaction_Thumbs_UpInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Thumbs up`)
};

const es_ui_domain_reaction_thumbs_up = /** @type {(inputs: Ui_Domain_Reaction_Thumbs_UpInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pulgar arriba`)
};

const de_ui_domain_reaction_thumbs_up = /** @type {(inputs: Ui_Domain_Reaction_Thumbs_UpInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Daumen hoch`)
};

const fr_ui_domain_reaction_thumbs_up = /** @type {(inputs: Ui_Domain_Reaction_Thumbs_UpInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pouce levé`)
};

const it_ui_domain_reaction_thumbs_up = /** @type {(inputs: Ui_Domain_Reaction_Thumbs_UpInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pollice in su`)
};

const nl_ui_domain_reaction_thumbs_up = /** @type {(inputs: Ui_Domain_Reaction_Thumbs_UpInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Duim omhoog`)
};

const pl_ui_domain_reaction_thumbs_up = /** @type {(inputs: Ui_Domain_Reaction_Thumbs_UpInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kciuk w górę`)
};

const pt_ui_domain_reaction_thumbs_up = /** @type {(inputs: Ui_Domain_Reaction_Thumbs_UpInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Joinha`)
};

const ru_ui_domain_reaction_thumbs_up = /** @type {(inputs: Ui_Domain_Reaction_Thumbs_UpInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Палец вверх`)
};

const sv_ui_domain_reaction_thumbs_up = /** @type {(inputs: Ui_Domain_Reaction_Thumbs_UpInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tummen upp`)
};

const tr_ui_domain_reaction_thumbs_up = /** @type {(inputs: Ui_Domain_Reaction_Thumbs_UpInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Beğen`)
};

const zh_ui_domain_reaction_thumbs_up = /** @type {(inputs: Ui_Domain_Reaction_Thumbs_UpInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`点赞`)
};

const ja_ui_domain_reaction_thumbs_up = /** @type {(inputs: Ui_Domain_Reaction_Thumbs_UpInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`いいね`)
};

/**
* | output |
* | --- |
* | "Thumbs up" |
*
* @param {Ui_Domain_Reaction_Thumbs_UpInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ui_domain_reaction_thumbs_up = /** @type {((inputs?: Ui_Domain_Reaction_Thumbs_UpInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Domain_Reaction_Thumbs_UpInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ui_domain_reaction_thumbs_up(inputs)
	if (locale === "de") return de_ui_domain_reaction_thumbs_up(inputs)
	if (locale === "fr") return fr_ui_domain_reaction_thumbs_up(inputs)
	if (locale === "it") return it_ui_domain_reaction_thumbs_up(inputs)
	if (locale === "nl") return nl_ui_domain_reaction_thumbs_up(inputs)
	if (locale === "pl") return pl_ui_domain_reaction_thumbs_up(inputs)
	if (locale === "pt") return pt_ui_domain_reaction_thumbs_up(inputs)
	if (locale === "ru") return ru_ui_domain_reaction_thumbs_up(inputs)
	if (locale === "sv") return sv_ui_domain_reaction_thumbs_up(inputs)
	if (locale === "tr") return tr_ui_domain_reaction_thumbs_up(inputs)
	if (locale === "zh") return zh_ui_domain_reaction_thumbs_up(inputs)
	if (locale === "ja") return ja_ui_domain_reaction_thumbs_up(inputs)
	return en_ui_domain_reaction_thumbs_up(inputs)
});
