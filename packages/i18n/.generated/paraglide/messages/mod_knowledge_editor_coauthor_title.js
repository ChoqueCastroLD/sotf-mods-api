/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Knowledge_Editor_Coauthor_TitleInputs */

const en_mod_knowledge_editor_coauthor_title = /** @type {(inputs: Mod_Knowledge_Editor_Coauthor_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`You are a co-author`)
};

const es_mod_knowledge_editor_coauthor_title = /** @type {(inputs: Mod_Knowledge_Editor_Coauthor_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Eres coautor`)
};

const de_mod_knowledge_editor_coauthor_title = /** @type {(inputs: Mod_Knowledge_Editor_Coauthor_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Du bist Co-Autor`)
};

const fr_mod_knowledge_editor_coauthor_title = /** @type {(inputs: Mod_Knowledge_Editor_Coauthor_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vous êtes co-auteur`)
};

const it_mod_knowledge_editor_coauthor_title = /** @type {(inputs: Mod_Knowledge_Editor_Coauthor_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sei un coautore`)
};

const nl_mod_knowledge_editor_coauthor_title = /** @type {(inputs: Mod_Knowledge_Editor_Coauthor_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Je bent co-auteur`)
};

const pl_mod_knowledge_editor_coauthor_title = /** @type {(inputs: Mod_Knowledge_Editor_Coauthor_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jesteś współautorem`)
};

const pt_mod_knowledge_editor_coauthor_title = /** @type {(inputs: Mod_Knowledge_Editor_Coauthor_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Você é coautor`)
};

const ru_mod_knowledge_editor_coauthor_title = /** @type {(inputs: Mod_Knowledge_Editor_Coauthor_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Вы соавтор`)
};

const sv_mod_knowledge_editor_coauthor_title = /** @type {(inputs: Mod_Knowledge_Editor_Coauthor_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Du är medförfattare`)
};

const tr_mod_knowledge_editor_coauthor_title = /** @type {(inputs: Mod_Knowledge_Editor_Coauthor_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ortak yazarsın`)
};

const zh_mod_knowledge_editor_coauthor_title = /** @type {(inputs: Mod_Knowledge_Editor_Coauthor_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`你是共同作者`)
};

const ja_mod_knowledge_editor_coauthor_title = /** @type {(inputs: Mod_Knowledge_Editor_Coauthor_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`あなたは共同制作者です`)
};

/**
* | output |
* | --- |
* | "You are a co-author" |
*
* @param {Mod_Knowledge_Editor_Coauthor_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_knowledge_editor_coauthor_title = /** @type {((inputs?: Mod_Knowledge_Editor_Coauthor_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Knowledge_Editor_Coauthor_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_knowledge_editor_coauthor_title(inputs)
	if (locale === "de") return de_mod_knowledge_editor_coauthor_title(inputs)
	if (locale === "fr") return fr_mod_knowledge_editor_coauthor_title(inputs)
	if (locale === "it") return it_mod_knowledge_editor_coauthor_title(inputs)
	if (locale === "nl") return nl_mod_knowledge_editor_coauthor_title(inputs)
	if (locale === "pl") return pl_mod_knowledge_editor_coauthor_title(inputs)
	if (locale === "pt") return pt_mod_knowledge_editor_coauthor_title(inputs)
	if (locale === "ru") return ru_mod_knowledge_editor_coauthor_title(inputs)
	if (locale === "sv") return sv_mod_knowledge_editor_coauthor_title(inputs)
	if (locale === "tr") return tr_mod_knowledge_editor_coauthor_title(inputs)
	if (locale === "zh") return zh_mod_knowledge_editor_coauthor_title(inputs)
	if (locale === "ja") return ja_mod_knowledge_editor_coauthor_title(inputs)
	return en_mod_knowledge_editor_coauthor_title(inputs)
});
