/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Knowledge_Issues_TitleInputs */

const en_mod_knowledge_issues_title = /** @type {(inputs: Mod_Knowledge_Issues_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Known issues`)
};

const es_mod_knowledge_issues_title = /** @type {(inputs: Mod_Knowledge_Issues_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Problemas conocidos`)
};

const de_mod_knowledge_issues_title = /** @type {(inputs: Mod_Knowledge_Issues_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bekannte Probleme`)
};

const fr_mod_knowledge_issues_title = /** @type {(inputs: Mod_Knowledge_Issues_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Problèmes connus`)
};

const it_mod_knowledge_issues_title = /** @type {(inputs: Mod_Knowledge_Issues_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Problemi noti`)
};

const nl_mod_knowledge_issues_title = /** @type {(inputs: Mod_Knowledge_Issues_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bekende problemen`)
};

const pl_mod_knowledge_issues_title = /** @type {(inputs: Mod_Knowledge_Issues_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Znane problemy`)
};

const pt_mod_knowledge_issues_title = /** @type {(inputs: Mod_Knowledge_Issues_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Problemas conhecidos`)
};

const ru_mod_knowledge_issues_title = /** @type {(inputs: Mod_Knowledge_Issues_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Известные проблемы`)
};

const sv_mod_knowledge_issues_title = /** @type {(inputs: Mod_Knowledge_Issues_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kända problem`)
};

const tr_mod_knowledge_issues_title = /** @type {(inputs: Mod_Knowledge_Issues_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bilinen sorunlar`)
};

const zh_mod_knowledge_issues_title = /** @type {(inputs: Mod_Knowledge_Issues_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已知问题`)
};

const ja_mod_knowledge_issues_title = /** @type {(inputs: Mod_Knowledge_Issues_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`既知の問題`)
};

/**
* | output |
* | --- |
* | "Known issues" |
*
* @param {Mod_Knowledge_Issues_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_knowledge_issues_title = /** @type {((inputs?: Mod_Knowledge_Issues_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Knowledge_Issues_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_knowledge_issues_title(inputs)
	if (locale === "de") return de_mod_knowledge_issues_title(inputs)
	if (locale === "fr") return fr_mod_knowledge_issues_title(inputs)
	if (locale === "it") return it_mod_knowledge_issues_title(inputs)
	if (locale === "nl") return nl_mod_knowledge_issues_title(inputs)
	if (locale === "pl") return pl_mod_knowledge_issues_title(inputs)
	if (locale === "pt") return pt_mod_knowledge_issues_title(inputs)
	if (locale === "ru") return ru_mod_knowledge_issues_title(inputs)
	if (locale === "sv") return sv_mod_knowledge_issues_title(inputs)
	if (locale === "tr") return tr_mod_knowledge_issues_title(inputs)
	if (locale === "zh") return zh_mod_knowledge_issues_title(inputs)
	if (locale === "ja") return ja_mod_knowledge_issues_title(inputs)
	return en_mod_knowledge_issues_title(inputs)
});
