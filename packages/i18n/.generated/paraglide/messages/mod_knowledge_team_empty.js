/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Knowledge_Team_EmptyInputs */

const en_mod_knowledge_team_empty = /** @type {(inputs: Mod_Knowledge_Team_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No co-authors yet.`)
};

const es_mod_knowledge_team_empty = /** @type {(inputs: Mod_Knowledge_Team_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aún no hay coautores.`)
};

const de_mod_knowledge_team_empty = /** @type {(inputs: Mod_Knowledge_Team_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Noch keine Co-Autoren.`)
};

const fr_mod_knowledge_team_empty = /** @type {(inputs: Mod_Knowledge_Team_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pas encore de co-auteurs.`)
};

const it_mod_knowledge_team_empty = /** @type {(inputs: Mod_Knowledge_Team_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ancora nessun coautore.`)
};

const nl_mod_knowledge_team_empty = /** @type {(inputs: Mod_Knowledge_Team_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nog geen co-auteurs.`)
};

const pl_mod_knowledge_team_empty = /** @type {(inputs: Mod_Knowledge_Team_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Brak współautorów.`)
};

const pt_mod_knowledge_team_empty = /** @type {(inputs: Mod_Knowledge_Team_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ainda não há coautores.`)
};

const ru_mod_knowledge_team_empty = /** @type {(inputs: Mod_Knowledge_Team_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Соавторов пока нет.`)
};

const sv_mod_knowledge_team_empty = /** @type {(inputs: Mod_Knowledge_Team_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inga medförfattare än.`)
};

const tr_mod_knowledge_team_empty = /** @type {(inputs: Mod_Knowledge_Team_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Henüz ortak yazar yok.`)
};

const zh_mod_knowledge_team_empty = /** @type {(inputs: Mod_Knowledge_Team_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`还没有共同作者。`)
};

const ja_mod_knowledge_team_empty = /** @type {(inputs: Mod_Knowledge_Team_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`共同制作者はまだいません。`)
};

/**
* | output |
* | --- |
* | "No co-authors yet." |
*
* @param {Mod_Knowledge_Team_EmptyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_knowledge_team_empty = /** @type {((inputs?: Mod_Knowledge_Team_EmptyInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Knowledge_Team_EmptyInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_knowledge_team_empty(inputs)
	if (locale === "de") return de_mod_knowledge_team_empty(inputs)
	if (locale === "fr") return fr_mod_knowledge_team_empty(inputs)
	if (locale === "it") return it_mod_knowledge_team_empty(inputs)
	if (locale === "nl") return nl_mod_knowledge_team_empty(inputs)
	if (locale === "pl") return pl_mod_knowledge_team_empty(inputs)
	if (locale === "pt") return pt_mod_knowledge_team_empty(inputs)
	if (locale === "ru") return ru_mod_knowledge_team_empty(inputs)
	if (locale === "sv") return sv_mod_knowledge_team_empty(inputs)
	if (locale === "tr") return tr_mod_knowledge_team_empty(inputs)
	if (locale === "zh") return zh_mod_knowledge_team_empty(inputs)
	if (locale === "ja") return ja_mod_knowledge_team_empty(inputs)
	return en_mod_knowledge_team_empty(inputs)
});
