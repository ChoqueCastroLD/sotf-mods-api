/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Action_DraftsInputs */

const en_basecamp_action_drafts = /** @type {(inputs: Basecamp_Action_DraftsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Drafts`)
};

const es_basecamp_action_drafts = /** @type {(inputs: Basecamp_Action_DraftsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Borradores`)
};

const de_basecamp_action_drafts = /** @type {(inputs: Basecamp_Action_DraftsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Entwürfe`)
};

const fr_basecamp_action_drafts = /** @type {(inputs: Basecamp_Action_DraftsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Brouillons`)
};

const it_basecamp_action_drafts = /** @type {(inputs: Basecamp_Action_DraftsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bozze`)
};

const nl_basecamp_action_drafts = /** @type {(inputs: Basecamp_Action_DraftsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Concepten`)
};

const pl_basecamp_action_drafts = /** @type {(inputs: Basecamp_Action_DraftsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Szkice`)
};

const pt_basecamp_action_drafts = /** @type {(inputs: Basecamp_Action_DraftsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rascunhos`)
};

const ru_basecamp_action_drafts = /** @type {(inputs: Basecamp_Action_DraftsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Черновики`)
};

const sv_basecamp_action_drafts = /** @type {(inputs: Basecamp_Action_DraftsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Utkast`)
};

const tr_basecamp_action_drafts = /** @type {(inputs: Basecamp_Action_DraftsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Taslaklar`)
};

const zh_basecamp_action_drafts = /** @type {(inputs: Basecamp_Action_DraftsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`草稿`)
};

const ja_basecamp_action_drafts = /** @type {(inputs: Basecamp_Action_DraftsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`下書き`)
};

/**
* | output |
* | --- |
* | "Drafts" |
*
* @param {Basecamp_Action_DraftsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_action_drafts = /** @type {((inputs?: Basecamp_Action_DraftsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Action_DraftsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_action_drafts(inputs)
	if (locale === "de") return de_basecamp_action_drafts(inputs)
	if (locale === "fr") return fr_basecamp_action_drafts(inputs)
	if (locale === "it") return it_basecamp_action_drafts(inputs)
	if (locale === "nl") return nl_basecamp_action_drafts(inputs)
	if (locale === "pl") return pl_basecamp_action_drafts(inputs)
	if (locale === "pt") return pt_basecamp_action_drafts(inputs)
	if (locale === "ru") return ru_basecamp_action_drafts(inputs)
	if (locale === "sv") return sv_basecamp_action_drafts(inputs)
	if (locale === "tr") return tr_basecamp_action_drafts(inputs)
	if (locale === "zh") return zh_basecamp_action_drafts(inputs)
	if (locale === "ja") return ja_basecamp_action_drafts(inputs)
	return en_basecamp_action_drafts(inputs)
});
