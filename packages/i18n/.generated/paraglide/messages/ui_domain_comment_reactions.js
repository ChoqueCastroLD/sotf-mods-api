/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ui_Domain_Comment_ReactionsInputs */

const en_ui_domain_comment_reactions = /** @type {(inputs: Ui_Domain_Comment_ReactionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reactions`)
};

const es_ui_domain_comment_reactions = /** @type {(inputs: Ui_Domain_Comment_ReactionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reacciones`)
};

const de_ui_domain_comment_reactions = /** @type {(inputs: Ui_Domain_Comment_ReactionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reaktionen`)
};

const fr_ui_domain_comment_reactions = /** @type {(inputs: Ui_Domain_Comment_ReactionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Réactions`)
};

const it_ui_domain_comment_reactions = /** @type {(inputs: Ui_Domain_Comment_ReactionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reazioni`)
};

const nl_ui_domain_comment_reactions = /** @type {(inputs: Ui_Domain_Comment_ReactionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reacties`)
};

const pl_ui_domain_comment_reactions = /** @type {(inputs: Ui_Domain_Comment_ReactionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reakcje`)
};

const pt_ui_domain_comment_reactions = /** @type {(inputs: Ui_Domain_Comment_ReactionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reações`)
};

const ru_ui_domain_comment_reactions = /** @type {(inputs: Ui_Domain_Comment_ReactionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Реакции`)
};

const sv_ui_domain_comment_reactions = /** @type {(inputs: Ui_Domain_Comment_ReactionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reaktioner`)
};

const tr_ui_domain_comment_reactions = /** @type {(inputs: Ui_Domain_Comment_ReactionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tepkiler`)
};

const zh_ui_domain_comment_reactions = /** @type {(inputs: Ui_Domain_Comment_ReactionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`表情回应`)
};

const ja_ui_domain_comment_reactions = /** @type {(inputs: Ui_Domain_Comment_ReactionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`リアクション`)
};

/**
* | output |
* | --- |
* | "Reactions" |
*
* @param {Ui_Domain_Comment_ReactionsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ui_domain_comment_reactions = /** @type {((inputs?: Ui_Domain_Comment_ReactionsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Domain_Comment_ReactionsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ui_domain_comment_reactions(inputs)
	if (locale === "de") return de_ui_domain_comment_reactions(inputs)
	if (locale === "fr") return fr_ui_domain_comment_reactions(inputs)
	if (locale === "it") return it_ui_domain_comment_reactions(inputs)
	if (locale === "nl") return nl_ui_domain_comment_reactions(inputs)
	if (locale === "pl") return pl_ui_domain_comment_reactions(inputs)
	if (locale === "pt") return pt_ui_domain_comment_reactions(inputs)
	if (locale === "ru") return ru_ui_domain_comment_reactions(inputs)
	if (locale === "sv") return sv_ui_domain_comment_reactions(inputs)
	if (locale === "tr") return tr_ui_domain_comment_reactions(inputs)
	if (locale === "zh") return zh_ui_domain_comment_reactions(inputs)
	if (locale === "ja") return ja_ui_domain_comment_reactions(inputs)
	return en_ui_domain_comment_reactions(inputs)
});
