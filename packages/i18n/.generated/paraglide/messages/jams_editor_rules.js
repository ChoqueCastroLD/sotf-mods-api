/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Editor_RulesInputs */

const en_jams_editor_rules = /** @type {(inputs: Jams_Editor_RulesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rules`)
};

const es_jams_editor_rules = /** @type {(inputs: Jams_Editor_RulesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reglas`)
};

const de_jams_editor_rules = /** @type {(inputs: Jams_Editor_RulesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Regeln`)
};

const fr_jams_editor_rules = /** @type {(inputs: Jams_Editor_RulesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Règles`)
};

const it_jams_editor_rules = /** @type {(inputs: Jams_Editor_RulesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Regole`)
};

const nl_jams_editor_rules = /** @type {(inputs: Jams_Editor_RulesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Regels`)
};

const pl_jams_editor_rules = /** @type {(inputs: Jams_Editor_RulesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zasady`)
};

const pt_jams_editor_rules = /** @type {(inputs: Jams_Editor_RulesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Regras`)
};

const ru_jams_editor_rules = /** @type {(inputs: Jams_Editor_RulesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Правила`)
};

const sv_jams_editor_rules = /** @type {(inputs: Jams_Editor_RulesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Regler`)
};

const tr_jams_editor_rules = /** @type {(inputs: Jams_Editor_RulesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kurallar`)
};

const zh_jams_editor_rules = /** @type {(inputs: Jams_Editor_RulesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`规则`)
};

const ja_jams_editor_rules = /** @type {(inputs: Jams_Editor_RulesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ルール`)
};

/**
* | output |
* | --- |
* | "Rules" |
*
* @param {Jams_Editor_RulesInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_editor_rules = /** @type {((inputs?: Jams_Editor_RulesInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Editor_RulesInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_editor_rules(inputs)
	if (locale === "de") return de_jams_editor_rules(inputs)
	if (locale === "fr") return fr_jams_editor_rules(inputs)
	if (locale === "it") return it_jams_editor_rules(inputs)
	if (locale === "nl") return nl_jams_editor_rules(inputs)
	if (locale === "pl") return pl_jams_editor_rules(inputs)
	if (locale === "pt") return pt_jams_editor_rules(inputs)
	if (locale === "ru") return ru_jams_editor_rules(inputs)
	if (locale === "sv") return sv_jams_editor_rules(inputs)
	if (locale === "tr") return tr_jams_editor_rules(inputs)
	if (locale === "zh") return zh_jams_editor_rules(inputs)
	if (locale === "ja") return ja_jams_editor_rules(inputs)
	return en_jams_editor_rules(inputs)
});
