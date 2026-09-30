/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Knowledge_Team_LeftInputs */

const en_mod_knowledge_team_left = /** @type {(inputs: Mod_Knowledge_Team_LeftInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`You left the mod`)
};

const es_mod_knowledge_team_left = /** @type {(inputs: Mod_Knowledge_Team_LeftInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Has dejado el mod`)
};

const de_mod_knowledge_team_left = /** @type {(inputs: Mod_Knowledge_Team_LeftInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Du hast den Mod verlassen`)
};

const fr_mod_knowledge_team_left = /** @type {(inputs: Mod_Knowledge_Team_LeftInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vous avez quitté le mod`)
};

const it_mod_knowledge_team_left = /** @type {(inputs: Mod_Knowledge_Team_LeftInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hai lasciato il mod`)
};

const nl_mod_knowledge_team_left = /** @type {(inputs: Mod_Knowledge_Team_LeftInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Je hebt de mod verlaten`)
};

const pl_mod_knowledge_team_left = /** @type {(inputs: Mod_Knowledge_Team_LeftInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Opuszczono moda`)
};

const pt_mod_knowledge_team_left = /** @type {(inputs: Mod_Knowledge_Team_LeftInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Você saiu do mod`)
};

const ru_mod_knowledge_team_left = /** @type {(inputs: Mod_Knowledge_Team_LeftInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Вы покинули мод`)
};

const sv_mod_knowledge_team_left = /** @type {(inputs: Mod_Knowledge_Team_LeftInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Du lämnade moden`)
};

const tr_mod_knowledge_team_left = /** @type {(inputs: Mod_Knowledge_Team_LeftInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Moddan ayrıldın`)
};

const zh_mod_knowledge_team_left = /** @type {(inputs: Mod_Knowledge_Team_LeftInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`你已退出该模组`)
};

const ja_mod_knowledge_team_left = /** @type {(inputs: Mod_Knowledge_Team_LeftInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modから退出しました`)
};

/**
* | output |
* | --- |
* | "You left the mod" |
*
* @param {Mod_Knowledge_Team_LeftInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_knowledge_team_left = /** @type {((inputs?: Mod_Knowledge_Team_LeftInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Knowledge_Team_LeftInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_knowledge_team_left(inputs)
	if (locale === "de") return de_mod_knowledge_team_left(inputs)
	if (locale === "fr") return fr_mod_knowledge_team_left(inputs)
	if (locale === "it") return it_mod_knowledge_team_left(inputs)
	if (locale === "nl") return nl_mod_knowledge_team_left(inputs)
	if (locale === "pl") return pl_mod_knowledge_team_left(inputs)
	if (locale === "pt") return pt_mod_knowledge_team_left(inputs)
	if (locale === "ru") return ru_mod_knowledge_team_left(inputs)
	if (locale === "sv") return sv_mod_knowledge_team_left(inputs)
	if (locale === "tr") return tr_mod_knowledge_team_left(inputs)
	if (locale === "zh") return zh_mod_knowledge_team_left(inputs)
	if (locale === "ja") return ja_mod_knowledge_team_left(inputs)
	return en_mod_knowledge_team_left(inputs)
});
