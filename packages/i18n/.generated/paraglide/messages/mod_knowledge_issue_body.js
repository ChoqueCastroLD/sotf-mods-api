/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Knowledge_Issue_BodyInputs */

const en_mod_knowledge_issue_body = /** @type {(inputs: Mod_Knowledge_Issue_BodyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Details`)
};

const es_mod_knowledge_issue_body = /** @type {(inputs: Mod_Knowledge_Issue_BodyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Detalles`)
};

const de_mod_knowledge_issue_body = /** @type {(inputs: Mod_Knowledge_Issue_BodyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Details`)
};

const fr_mod_knowledge_issue_body = /** @type {(inputs: Mod_Knowledge_Issue_BodyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Détails`)
};

const it_mod_knowledge_issue_body = /** @type {(inputs: Mod_Knowledge_Issue_BodyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dettagli`)
};

const nl_mod_knowledge_issue_body = /** @type {(inputs: Mod_Knowledge_Issue_BodyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Details`)
};

const pl_mod_knowledge_issue_body = /** @type {(inputs: Mod_Knowledge_Issue_BodyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Szczegóły`)
};

const pt_mod_knowledge_issue_body = /** @type {(inputs: Mod_Knowledge_Issue_BodyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Detalhes`)
};

const ru_mod_knowledge_issue_body = /** @type {(inputs: Mod_Knowledge_Issue_BodyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Подробности`)
};

const sv_mod_knowledge_issue_body = /** @type {(inputs: Mod_Knowledge_Issue_BodyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Detaljer`)
};

const tr_mod_knowledge_issue_body = /** @type {(inputs: Mod_Knowledge_Issue_BodyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ayrıntılar`)
};

const zh_mod_knowledge_issue_body = /** @type {(inputs: Mod_Knowledge_Issue_BodyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`详情`)
};

const ja_mod_knowledge_issue_body = /** @type {(inputs: Mod_Knowledge_Issue_BodyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`詳細`)
};

/**
* | output |
* | --- |
* | "Details" |
*
* @param {Mod_Knowledge_Issue_BodyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_knowledge_issue_body = /** @type {((inputs?: Mod_Knowledge_Issue_BodyInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Knowledge_Issue_BodyInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_knowledge_issue_body(inputs)
	if (locale === "de") return de_mod_knowledge_issue_body(inputs)
	if (locale === "fr") return fr_mod_knowledge_issue_body(inputs)
	if (locale === "it") return it_mod_knowledge_issue_body(inputs)
	if (locale === "nl") return nl_mod_knowledge_issue_body(inputs)
	if (locale === "pl") return pl_mod_knowledge_issue_body(inputs)
	if (locale === "pt") return pt_mod_knowledge_issue_body(inputs)
	if (locale === "ru") return ru_mod_knowledge_issue_body(inputs)
	if (locale === "sv") return sv_mod_knowledge_issue_body(inputs)
	if (locale === "tr") return tr_mod_knowledge_issue_body(inputs)
	if (locale === "zh") return zh_mod_knowledge_issue_body(inputs)
	if (locale === "ja") return ja_mod_knowledge_issue_body(inputs)
	return en_mod_knowledge_issue_body(inputs)
});
