/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Knowledge_Team_RemovedInputs */

const en_mod_knowledge_team_removed = /** @type {(inputs: Mod_Knowledge_Team_RemovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Co-author removed`)
};

const es_mod_knowledge_team_removed = /** @type {(inputs: Mod_Knowledge_Team_RemovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Coautor retirado`)
};

const de_mod_knowledge_team_removed = /** @type {(inputs: Mod_Knowledge_Team_RemovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Co-Autor entfernt`)
};

const fr_mod_knowledge_team_removed = /** @type {(inputs: Mod_Knowledge_Team_RemovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Co-auteur retiré`)
};

const it_mod_knowledge_team_removed = /** @type {(inputs: Mod_Knowledge_Team_RemovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Coautore rimosso`)
};

const nl_mod_knowledge_team_removed = /** @type {(inputs: Mod_Knowledge_Team_RemovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Co-auteur verwijderd`)
};

const pl_mod_knowledge_team_removed = /** @type {(inputs: Mod_Knowledge_Team_RemovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Usunięto współautora`)
};

const pt_mod_knowledge_team_removed = /** @type {(inputs: Mod_Knowledge_Team_RemovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Coautor removido`)
};

const ru_mod_knowledge_team_removed = /** @type {(inputs: Mod_Knowledge_Team_RemovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Соавтор удалён`)
};

const sv_mod_knowledge_team_removed = /** @type {(inputs: Mod_Knowledge_Team_RemovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Medförfattare borttagen`)
};

const tr_mod_knowledge_team_removed = /** @type {(inputs: Mod_Knowledge_Team_RemovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ortak yazar kaldırıldı`)
};

const zh_mod_knowledge_team_removed = /** @type {(inputs: Mod_Knowledge_Team_RemovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已移除共同作者`)
};

const ja_mod_knowledge_team_removed = /** @type {(inputs: Mod_Knowledge_Team_RemovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`共同制作者を削除しました`)
};

/**
* | output |
* | --- |
* | "Co-author removed" |
*
* @param {Mod_Knowledge_Team_RemovedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_knowledge_team_removed = /** @type {((inputs?: Mod_Knowledge_Team_RemovedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Knowledge_Team_RemovedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_knowledge_team_removed(inputs)
	if (locale === "de") return de_mod_knowledge_team_removed(inputs)
	if (locale === "fr") return fr_mod_knowledge_team_removed(inputs)
	if (locale === "it") return it_mod_knowledge_team_removed(inputs)
	if (locale === "nl") return nl_mod_knowledge_team_removed(inputs)
	if (locale === "pl") return pl_mod_knowledge_team_removed(inputs)
	if (locale === "pt") return pt_mod_knowledge_team_removed(inputs)
	if (locale === "ru") return ru_mod_knowledge_team_removed(inputs)
	if (locale === "sv") return sv_mod_knowledge_team_removed(inputs)
	if (locale === "tr") return tr_mod_knowledge_team_removed(inputs)
	if (locale === "zh") return zh_mod_knowledge_team_removed(inputs)
	if (locale === "ja") return ja_mod_knowledge_team_removed(inputs)
	return en_mod_knowledge_team_removed(inputs)
});
