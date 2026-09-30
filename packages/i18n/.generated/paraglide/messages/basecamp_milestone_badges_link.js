/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Milestone_Badges_LinkInputs */

const en_basecamp_milestone_badges_link = /** @type {(inputs: Basecamp_Milestone_Badges_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Badges and tiers`)
};

const es_basecamp_milestone_badges_link = /** @type {(inputs: Basecamp_Milestone_Badges_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Insignias y rangos`)
};

const de_basecamp_milestone_badges_link = /** @type {(inputs: Basecamp_Milestone_Badges_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Abzeichen und Stufen`)
};

const fr_basecamp_milestone_badges_link = /** @type {(inputs: Basecamp_Milestone_Badges_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Badges et rangs`)
};

const it_basecamp_milestone_badges_link = /** @type {(inputs: Basecamp_Milestone_Badges_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Distintivi e livelli`)
};

const nl_basecamp_milestone_badges_link = /** @type {(inputs: Basecamp_Milestone_Badges_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Badges en niveaus`)
};

const pl_basecamp_milestone_badges_link = /** @type {(inputs: Basecamp_Milestone_Badges_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Odznaki i poziomy`)
};

const pt_basecamp_milestone_badges_link = /** @type {(inputs: Basecamp_Milestone_Badges_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Insígnias e níveis`)
};

const ru_basecamp_milestone_badges_link = /** @type {(inputs: Basecamp_Milestone_Badges_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Значки и ранги`)
};

const sv_basecamp_milestone_badges_link = /** @type {(inputs: Basecamp_Milestone_Badges_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Märken och nivåer`)
};

const tr_basecamp_milestone_badges_link = /** @type {(inputs: Basecamp_Milestone_Badges_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rozetler ve seviyeler`)
};

const zh_basecamp_milestone_badges_link = /** @type {(inputs: Basecamp_Milestone_Badges_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`徽章与等级`)
};

const ja_basecamp_milestone_badges_link = /** @type {(inputs: Basecamp_Milestone_Badges_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`バッジとティア`)
};

/**
* | output |
* | --- |
* | "Badges and tiers" |
*
* @param {Basecamp_Milestone_Badges_LinkInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_milestone_badges_link = /** @type {((inputs?: Basecamp_Milestone_Badges_LinkInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Milestone_Badges_LinkInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_milestone_badges_link(inputs)
	if (locale === "de") return de_basecamp_milestone_badges_link(inputs)
	if (locale === "fr") return fr_basecamp_milestone_badges_link(inputs)
	if (locale === "it") return it_basecamp_milestone_badges_link(inputs)
	if (locale === "nl") return nl_basecamp_milestone_badges_link(inputs)
	if (locale === "pl") return pl_basecamp_milestone_badges_link(inputs)
	if (locale === "pt") return pt_basecamp_milestone_badges_link(inputs)
	if (locale === "ru") return ru_basecamp_milestone_badges_link(inputs)
	if (locale === "sv") return sv_basecamp_milestone_badges_link(inputs)
	if (locale === "tr") return tr_basecamp_milestone_badges_link(inputs)
	if (locale === "zh") return zh_basecamp_milestone_badges_link(inputs)
	if (locale === "ja") return ja_basecamp_milestone_badges_link(inputs)
	return en_basecamp_milestone_badges_link(inputs)
});
