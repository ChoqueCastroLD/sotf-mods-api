/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Decision_No_TemplateInputs */

const en_ranger_decision_no_template = /** @type {(inputs: Ranger_Decision_No_TemplateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No template — only my note`)
};

const es_ranger_decision_no_template = /** @type {(inputs: Ranger_Decision_No_TemplateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sin plantilla: solo mi nota`)
};

const de_ranger_decision_no_template = /** @type {(inputs: Ranger_Decision_No_TemplateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Keine Vorlage – nur meine Notiz`)
};

const fr_ranger_decision_no_template = /** @type {(inputs: Ranger_Decision_No_TemplateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pas de modèle — seulement ma note`)
};

const it_ranger_decision_no_template = /** @type {(inputs: Ranger_Decision_No_TemplateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nessun modello: solo la mia nota`)
};

const nl_ranger_decision_no_template = /** @type {(inputs: Ranger_Decision_No_TemplateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Geen sjabloon — alleen mijn notitie`)
};

const pl_ranger_decision_no_template = /** @type {(inputs: Ranger_Decision_No_TemplateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bez szablonu — tylko moja notatka`)
};

const pt_ranger_decision_no_template = /** @type {(inputs: Ranger_Decision_No_TemplateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sem modelo — só a minha nota`)
};

const ru_ranger_decision_no_template = /** @type {(inputs: Ranger_Decision_No_TemplateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Без шаблона — только моя заметка`)
};

const sv_ranger_decision_no_template = /** @type {(inputs: Ranger_Decision_No_TemplateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ingen mall – bara min anteckning`)
};

const tr_ranger_decision_no_template = /** @type {(inputs: Ranger_Decision_No_TemplateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Şablon yok — yalnızca notum`)
};

const zh_ranger_decision_no_template = /** @type {(inputs: Ranger_Decision_No_TemplateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`不用模板——只用我的备注`)
};

const ja_ranger_decision_no_template = /** @type {(inputs: Ranger_Decision_No_TemplateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`テンプレートなし — メモのみ`)
};

/**
* | output |
* | --- |
* | "No template — only my note" |
*
* @param {Ranger_Decision_No_TemplateInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_decision_no_template = /** @type {((inputs?: Ranger_Decision_No_TemplateInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Decision_No_TemplateInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_decision_no_template(inputs)
	if (locale === "de") return de_ranger_decision_no_template(inputs)
	if (locale === "fr") return fr_ranger_decision_no_template(inputs)
	if (locale === "it") return it_ranger_decision_no_template(inputs)
	if (locale === "nl") return nl_ranger_decision_no_template(inputs)
	if (locale === "pl") return pl_ranger_decision_no_template(inputs)
	if (locale === "pt") return pt_ranger_decision_no_template(inputs)
	if (locale === "ru") return ru_ranger_decision_no_template(inputs)
	if (locale === "sv") return sv_ranger_decision_no_template(inputs)
	if (locale === "tr") return tr_ranger_decision_no_template(inputs)
	if (locale === "zh") return zh_ranger_decision_no_template(inputs)
	if (locale === "ja") return ja_ranger_decision_no_template(inputs)
	return en_ranger_decision_no_template(inputs)
});
