/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Knowledge_Tab_TeamInputs */

const en_mod_knowledge_tab_team = /** @type {(inputs: Mod_Knowledge_Tab_TeamInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Team`)
};

const es_mod_knowledge_tab_team = /** @type {(inputs: Mod_Knowledge_Tab_TeamInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Equipo`)
};

const de_mod_knowledge_tab_team = /** @type {(inputs: Mod_Knowledge_Tab_TeamInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Team`)
};

const fr_mod_knowledge_tab_team = /** @type {(inputs: Mod_Knowledge_Tab_TeamInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Équipe`)
};

const it_mod_knowledge_tab_team = /** @type {(inputs: Mod_Knowledge_Tab_TeamInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Team`)
};

const nl_mod_knowledge_tab_team = /** @type {(inputs: Mod_Knowledge_Tab_TeamInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Team`)
};

const pl_mod_knowledge_tab_team = /** @type {(inputs: Mod_Knowledge_Tab_TeamInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zespół`)
};

const pt_mod_knowledge_tab_team = /** @type {(inputs: Mod_Knowledge_Tab_TeamInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Equipe`)
};

const ru_mod_knowledge_tab_team = /** @type {(inputs: Mod_Knowledge_Tab_TeamInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Команда`)
};

const sv_mod_knowledge_tab_team = /** @type {(inputs: Mod_Knowledge_Tab_TeamInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Team`)
};

const tr_mod_knowledge_tab_team = /** @type {(inputs: Mod_Knowledge_Tab_TeamInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ekip`)
};

const zh_mod_knowledge_tab_team = /** @type {(inputs: Mod_Knowledge_Tab_TeamInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`团队`)
};

const ja_mod_knowledge_tab_team = /** @type {(inputs: Mod_Knowledge_Tab_TeamInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`チーム`)
};

/**
* | output |
* | --- |
* | "Team" |
*
* @param {Mod_Knowledge_Tab_TeamInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_knowledge_tab_team = /** @type {((inputs?: Mod_Knowledge_Tab_TeamInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Knowledge_Tab_TeamInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_knowledge_tab_team(inputs)
	if (locale === "de") return de_mod_knowledge_tab_team(inputs)
	if (locale === "fr") return fr_mod_knowledge_tab_team(inputs)
	if (locale === "it") return it_mod_knowledge_tab_team(inputs)
	if (locale === "nl") return nl_mod_knowledge_tab_team(inputs)
	if (locale === "pl") return pl_mod_knowledge_tab_team(inputs)
	if (locale === "pt") return pt_mod_knowledge_tab_team(inputs)
	if (locale === "ru") return ru_mod_knowledge_tab_team(inputs)
	if (locale === "sv") return sv_mod_knowledge_tab_team(inputs)
	if (locale === "tr") return tr_mod_knowledge_tab_team(inputs)
	if (locale === "zh") return zh_mod_knowledge_tab_team(inputs)
	if (locale === "ja") return ja_mod_knowledge_tab_team(inputs)
	return en_mod_knowledge_tab_team(inputs)
});
