/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ date: NonNullable<unknown> }} Mod_Knowledge_Team_SinceInputs */

const en_mod_knowledge_team_since = /** @type {(inputs: Mod_Knowledge_Team_SinceInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`since ${i?.date}`)
};

const es_mod_knowledge_team_since = /** @type {(inputs: Mod_Knowledge_Team_SinceInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`desde el ${i?.date}`)
};

const de_mod_knowledge_team_since = /** @type {(inputs: Mod_Knowledge_Team_SinceInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`seit ${i?.date}`)
};

const fr_mod_knowledge_team_since = /** @type {(inputs: Mod_Knowledge_Team_SinceInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`depuis le ${i?.date}`)
};

const it_mod_knowledge_team_since = /** @type {(inputs: Mod_Knowledge_Team_SinceInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`dal ${i?.date}`)
};

const nl_mod_knowledge_team_since = /** @type {(inputs: Mod_Knowledge_Team_SinceInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`sinds ${i?.date}`)
};

const pl_mod_knowledge_team_since = /** @type {(inputs: Mod_Knowledge_Team_SinceInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`od ${i?.date}`)
};

const pt_mod_knowledge_team_since = /** @type {(inputs: Mod_Knowledge_Team_SinceInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`desde ${i?.date}`)
};

const ru_mod_knowledge_team_since = /** @type {(inputs: Mod_Knowledge_Team_SinceInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`с ${i?.date}`)
};

const sv_mod_knowledge_team_since = /** @type {(inputs: Mod_Knowledge_Team_SinceInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`sedan ${i?.date}`)
};

const tr_mod_knowledge_team_since = /** @type {(inputs: Mod_Knowledge_Team_SinceInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.date} tarihinden beri`)
};

const zh_mod_knowledge_team_since = /** @type {(inputs: Mod_Knowledge_Team_SinceInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`自 ${i?.date}`)
};

const ja_mod_knowledge_team_since = /** @type {(inputs: Mod_Knowledge_Team_SinceInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.date} から`)
};

/**
* | output |
* | --- |
* | "since {date}" |
*
* @param {Mod_Knowledge_Team_SinceInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_knowledge_team_since = /** @type {((inputs: Mod_Knowledge_Team_SinceInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Knowledge_Team_SinceInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_knowledge_team_since(inputs)
	if (locale === "de") return de_mod_knowledge_team_since(inputs)
	if (locale === "fr") return fr_mod_knowledge_team_since(inputs)
	if (locale === "it") return it_mod_knowledge_team_since(inputs)
	if (locale === "nl") return nl_mod_knowledge_team_since(inputs)
	if (locale === "pl") return pl_mod_knowledge_team_since(inputs)
	if (locale === "pt") return pt_mod_knowledge_team_since(inputs)
	if (locale === "ru") return ru_mod_knowledge_team_since(inputs)
	if (locale === "sv") return sv_mod_knowledge_team_since(inputs)
	if (locale === "tr") return tr_mod_knowledge_team_since(inputs)
	if (locale === "zh") return zh_mod_knowledge_team_since(inputs)
	if (locale === "ja") return ja_mod_knowledge_team_since(inputs)
	return en_mod_knowledge_team_since(inputs)
});
