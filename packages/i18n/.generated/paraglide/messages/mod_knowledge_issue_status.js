/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Knowledge_Issue_StatusInputs */

const en_mod_knowledge_issue_status = /** @type {(inputs: Mod_Knowledge_Issue_StatusInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Status`)
};

const es_mod_knowledge_issue_status = /** @type {(inputs: Mod_Knowledge_Issue_StatusInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Estado`)
};

const de_mod_knowledge_issue_status = /** @type {(inputs: Mod_Knowledge_Issue_StatusInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Status`)
};

const fr_mod_knowledge_issue_status = /** @type {(inputs: Mod_Knowledge_Issue_StatusInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Statut`)
};

const it_mod_knowledge_issue_status = /** @type {(inputs: Mod_Knowledge_Issue_StatusInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Stato`)
};

const nl_mod_knowledge_issue_status = /** @type {(inputs: Mod_Knowledge_Issue_StatusInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Status`)
};

const pl_mod_knowledge_issue_status = /** @type {(inputs: Mod_Knowledge_Issue_StatusInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Status`)
};

const pt_mod_knowledge_issue_status = /** @type {(inputs: Mod_Knowledge_Issue_StatusInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Status`)
};

const ru_mod_knowledge_issue_status = /** @type {(inputs: Mod_Knowledge_Issue_StatusInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Статус`)
};

const sv_mod_knowledge_issue_status = /** @type {(inputs: Mod_Knowledge_Issue_StatusInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Status`)
};

const tr_mod_knowledge_issue_status = /** @type {(inputs: Mod_Knowledge_Issue_StatusInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Durum`)
};

const zh_mod_knowledge_issue_status = /** @type {(inputs: Mod_Knowledge_Issue_StatusInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`状态`)
};

const ja_mod_knowledge_issue_status = /** @type {(inputs: Mod_Knowledge_Issue_StatusInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ステータス`)
};

/**
* | output |
* | --- |
* | "Status" |
*
* @param {Mod_Knowledge_Issue_StatusInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_knowledge_issue_status = /** @type {((inputs?: Mod_Knowledge_Issue_StatusInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Knowledge_Issue_StatusInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_knowledge_issue_status(inputs)
	if (locale === "de") return de_mod_knowledge_issue_status(inputs)
	if (locale === "fr") return fr_mod_knowledge_issue_status(inputs)
	if (locale === "it") return it_mod_knowledge_issue_status(inputs)
	if (locale === "nl") return nl_mod_knowledge_issue_status(inputs)
	if (locale === "pl") return pl_mod_knowledge_issue_status(inputs)
	if (locale === "pt") return pt_mod_knowledge_issue_status(inputs)
	if (locale === "ru") return ru_mod_knowledge_issue_status(inputs)
	if (locale === "sv") return sv_mod_knowledge_issue_status(inputs)
	if (locale === "tr") return tr_mod_knowledge_issue_status(inputs)
	if (locale === "zh") return zh_mod_knowledge_issue_status(inputs)
	if (locale === "ja") return ja_mod_knowledge_issue_status(inputs)
	return en_mod_knowledge_issue_status(inputs)
});
