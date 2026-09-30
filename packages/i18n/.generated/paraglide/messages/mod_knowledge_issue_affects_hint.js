/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Knowledge_Issue_Affects_HintInputs */

const en_mod_knowledge_issue_affects_hint = /** @type {(inputs: Mod_Knowledge_Issue_Affects_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Free text, for example “1.2.0 and older”.`)
};

const es_mod_knowledge_issue_affects_hint = /** @type {(inputs: Mod_Knowledge_Issue_Affects_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Texto libre, por ejemplo «1.2.0 y anteriores».`)
};

const de_mod_knowledge_issue_affects_hint = /** @type {(inputs: Mod_Knowledge_Issue_Affects_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Freitext, zum Beispiel „1.2.0 und älter“.`)
};

const fr_mod_knowledge_issue_affects_hint = /** @type {(inputs: Mod_Knowledge_Issue_Affects_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Texte libre, par exemple « 1.2.0 et antérieures ».`)
};

const it_mod_knowledge_issue_affects_hint = /** @type {(inputs: Mod_Knowledge_Issue_Affects_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Testo libero, ad esempio «1.2.0 e precedenti».`)
};

const nl_mod_knowledge_issue_affects_hint = /** @type {(inputs: Mod_Knowledge_Issue_Affects_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vrije tekst, bijvoorbeeld “1.2.0 en ouder”.`)
};

const pl_mod_knowledge_issue_affects_hint = /** @type {(inputs: Mod_Knowledge_Issue_Affects_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dowolny tekst, np. „1.2.0 i starsze”.`)
};

const pt_mod_knowledge_issue_affects_hint = /** @type {(inputs: Mod_Knowledge_Issue_Affects_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Texto livre, por exemplo “1.2.0 e anteriores”.`)
};

const ru_mod_knowledge_issue_affects_hint = /** @type {(inputs: Mod_Knowledge_Issue_Affects_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Произвольный текст, например «1.2.0 и старше».`)
};

const sv_mod_knowledge_issue_affects_hint = /** @type {(inputs: Mod_Knowledge_Issue_Affects_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fri text, till exempel ”1.2.0 och äldre”.`)
};

const tr_mod_knowledge_issue_affects_hint = /** @type {(inputs: Mod_Knowledge_Issue_Affects_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Serbest metin, örneğin “1.2.0 ve öncesi”.`)
};

const zh_mod_knowledge_issue_affects_hint = /** @type {(inputs: Mod_Knowledge_Issue_Affects_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`自由文本，例如“1.2.0 及更早版本”。`)
};

const ja_mod_knowledge_issue_affects_hint = /** @type {(inputs: Mod_Knowledge_Issue_Affects_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`自由記述。例：「1.2.0 以前」。`)
};

/**
* | output |
* | --- |
* | "Free text, for example “1.2.0 and older”." |
*
* @param {Mod_Knowledge_Issue_Affects_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_knowledge_issue_affects_hint = /** @type {((inputs?: Mod_Knowledge_Issue_Affects_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Knowledge_Issue_Affects_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_knowledge_issue_affects_hint(inputs)
	if (locale === "de") return de_mod_knowledge_issue_affects_hint(inputs)
	if (locale === "fr") return fr_mod_knowledge_issue_affects_hint(inputs)
	if (locale === "it") return it_mod_knowledge_issue_affects_hint(inputs)
	if (locale === "nl") return nl_mod_knowledge_issue_affects_hint(inputs)
	if (locale === "pl") return pl_mod_knowledge_issue_affects_hint(inputs)
	if (locale === "pt") return pt_mod_knowledge_issue_affects_hint(inputs)
	if (locale === "ru") return ru_mod_knowledge_issue_affects_hint(inputs)
	if (locale === "sv") return sv_mod_knowledge_issue_affects_hint(inputs)
	if (locale === "tr") return tr_mod_knowledge_issue_affects_hint(inputs)
	if (locale === "zh") return zh_mod_knowledge_issue_affects_hint(inputs)
	if (locale === "ja") return ja_mod_knowledge_issue_affects_hint(inputs)
	return en_mod_knowledge_issue_affects_hint(inputs)
});
