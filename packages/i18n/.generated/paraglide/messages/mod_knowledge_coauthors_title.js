/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Knowledge_Coauthors_TitleInputs */

const en_mod_knowledge_coauthors_title = /** @type {(inputs: Mod_Knowledge_Coauthors_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Co-authors`)
};

const es_mod_knowledge_coauthors_title = /** @type {(inputs: Mod_Knowledge_Coauthors_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Coautores`)
};

const de_mod_knowledge_coauthors_title = /** @type {(inputs: Mod_Knowledge_Coauthors_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Co-Autoren`)
};

const fr_mod_knowledge_coauthors_title = /** @type {(inputs: Mod_Knowledge_Coauthors_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Co-auteurs`)
};

const it_mod_knowledge_coauthors_title = /** @type {(inputs: Mod_Knowledge_Coauthors_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Coautori`)
};

const nl_mod_knowledge_coauthors_title = /** @type {(inputs: Mod_Knowledge_Coauthors_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Co-auteurs`)
};

const pl_mod_knowledge_coauthors_title = /** @type {(inputs: Mod_Knowledge_Coauthors_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Współautorzy`)
};

const pt_mod_knowledge_coauthors_title = /** @type {(inputs: Mod_Knowledge_Coauthors_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Coautores`)
};

const ru_mod_knowledge_coauthors_title = /** @type {(inputs: Mod_Knowledge_Coauthors_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Соавторы`)
};

const sv_mod_knowledge_coauthors_title = /** @type {(inputs: Mod_Knowledge_Coauthors_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Medförfattare`)
};

const tr_mod_knowledge_coauthors_title = /** @type {(inputs: Mod_Knowledge_Coauthors_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ortak yazarlar`)
};

const zh_mod_knowledge_coauthors_title = /** @type {(inputs: Mod_Knowledge_Coauthors_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`共同作者`)
};

const ja_mod_knowledge_coauthors_title = /** @type {(inputs: Mod_Knowledge_Coauthors_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`共同制作者`)
};

/**
* | output |
* | --- |
* | "Co-authors" |
*
* @param {Mod_Knowledge_Coauthors_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_knowledge_coauthors_title = /** @type {((inputs?: Mod_Knowledge_Coauthors_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Knowledge_Coauthors_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_knowledge_coauthors_title(inputs)
	if (locale === "de") return de_mod_knowledge_coauthors_title(inputs)
	if (locale === "fr") return fr_mod_knowledge_coauthors_title(inputs)
	if (locale === "it") return it_mod_knowledge_coauthors_title(inputs)
	if (locale === "nl") return nl_mod_knowledge_coauthors_title(inputs)
	if (locale === "pl") return pl_mod_knowledge_coauthors_title(inputs)
	if (locale === "pt") return pt_mod_knowledge_coauthors_title(inputs)
	if (locale === "ru") return ru_mod_knowledge_coauthors_title(inputs)
	if (locale === "sv") return sv_mod_knowledge_coauthors_title(inputs)
	if (locale === "tr") return tr_mod_knowledge_coauthors_title(inputs)
	if (locale === "zh") return zh_mod_knowledge_coauthors_title(inputs)
	if (locale === "ja") return ja_mod_knowledge_coauthors_title(inputs)
	return en_mod_knowledge_coauthors_title(inputs)
});
