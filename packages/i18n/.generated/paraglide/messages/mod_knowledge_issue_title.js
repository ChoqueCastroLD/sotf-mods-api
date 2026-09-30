/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Knowledge_Issue_TitleInputs */

const en_mod_knowledge_issue_title = /** @type {(inputs: Mod_Knowledge_Issue_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Title`)
};

const es_mod_knowledge_issue_title = /** @type {(inputs: Mod_Knowledge_Issue_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Título`)
};

const de_mod_knowledge_issue_title = /** @type {(inputs: Mod_Knowledge_Issue_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Titel`)
};

const fr_mod_knowledge_issue_title = /** @type {(inputs: Mod_Knowledge_Issue_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Titre`)
};

const it_mod_knowledge_issue_title = /** @type {(inputs: Mod_Knowledge_Issue_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Titolo`)
};

const nl_mod_knowledge_issue_title = /** @type {(inputs: Mod_Knowledge_Issue_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Titel`)
};

const pl_mod_knowledge_issue_title = /** @type {(inputs: Mod_Knowledge_Issue_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tytuł`)
};

const pt_mod_knowledge_issue_title = /** @type {(inputs: Mod_Knowledge_Issue_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Título`)
};

const ru_mod_knowledge_issue_title = /** @type {(inputs: Mod_Knowledge_Issue_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Заголовок`)
};

const sv_mod_knowledge_issue_title = /** @type {(inputs: Mod_Knowledge_Issue_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rubrik`)
};

const tr_mod_knowledge_issue_title = /** @type {(inputs: Mod_Knowledge_Issue_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Başlık`)
};

const zh_mod_knowledge_issue_title = /** @type {(inputs: Mod_Knowledge_Issue_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`标题`)
};

const ja_mod_knowledge_issue_title = /** @type {(inputs: Mod_Knowledge_Issue_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`タイトル`)
};

/**
* | output |
* | --- |
* | "Title" |
*
* @param {Mod_Knowledge_Issue_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_knowledge_issue_title = /** @type {((inputs?: Mod_Knowledge_Issue_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Knowledge_Issue_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_knowledge_issue_title(inputs)
	if (locale === "de") return de_mod_knowledge_issue_title(inputs)
	if (locale === "fr") return fr_mod_knowledge_issue_title(inputs)
	if (locale === "it") return it_mod_knowledge_issue_title(inputs)
	if (locale === "nl") return nl_mod_knowledge_issue_title(inputs)
	if (locale === "pl") return pl_mod_knowledge_issue_title(inputs)
	if (locale === "pt") return pt_mod_knowledge_issue_title(inputs)
	if (locale === "ru") return ru_mod_knowledge_issue_title(inputs)
	if (locale === "sv") return sv_mod_knowledge_issue_title(inputs)
	if (locale === "tr") return tr_mod_knowledge_issue_title(inputs)
	if (locale === "zh") return zh_mod_knowledge_issue_title(inputs)
	if (locale === "ja") return ja_mod_knowledge_issue_title(inputs)
	return en_mod_knowledge_issue_title(inputs)
});
