/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Editor_Rules_HintInputs */

const en_jams_editor_rules_hint = /** @type {(inputs: Jams_Editor_Rules_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The rules of the contest. Markdown is supported.`)
};

const es_jams_editor_rules_hint = /** @type {(inputs: Jams_Editor_Rules_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Las reglas del concurso. Admite Markdown.`)
};

const de_jams_editor_rules_hint = /** @type {(inputs: Jams_Editor_Rules_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Die Regeln des Wettbewerbs. Markdown wird unterstützt.`)
};

const fr_jams_editor_rules_hint = /** @type {(inputs: Jams_Editor_Rules_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Le règlement du concours. Le Markdown est pris en charge.`)
};

const it_jams_editor_rules_hint = /** @type {(inputs: Jams_Editor_Rules_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Il regolamento del concorso. Markdown supportato.`)
};

const nl_jams_editor_rules_hint = /** @type {(inputs: Jams_Editor_Rules_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De regels van de wedstrijd. Markdown wordt ondersteund.`)
};

const pl_jams_editor_rules_hint = /** @type {(inputs: Jams_Editor_Rules_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Regulamin konkursu. Obsługiwany jest Markdown.`)
};

const pt_jams_editor_rules_hint = /** @type {(inputs: Jams_Editor_Rules_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`As regras do concurso. Aceita Markdown.`)
};

const ru_jams_editor_rules_hint = /** @type {(inputs: Jams_Editor_Rules_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Правила конкурса. Поддерживается Markdown.`)
};

const sv_jams_editor_rules_hint = /** @type {(inputs: Jams_Editor_Rules_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tävlingens regler. Markdown stöds.`)
};

const tr_jams_editor_rules_hint = /** @type {(inputs: Jams_Editor_Rules_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yarışmanın kuralları. Markdown desteklenir.`)
};

const zh_jams_editor_rules_hint = /** @type {(inputs: Jams_Editor_Rules_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`比赛规则，支持 Markdown。`)
};

const ja_jams_editor_rules_hint = /** @type {(inputs: Jams_Editor_Rules_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`コンテストのルールです。Markdown が使えます。`)
};

/**
* | output |
* | --- |
* | "The rules of the contest. Markdown is supported." |
*
* @param {Jams_Editor_Rules_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_editor_rules_hint = /** @type {((inputs?: Jams_Editor_Rules_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Editor_Rules_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_editor_rules_hint(inputs)
	if (locale === "de") return de_jams_editor_rules_hint(inputs)
	if (locale === "fr") return fr_jams_editor_rules_hint(inputs)
	if (locale === "it") return it_jams_editor_rules_hint(inputs)
	if (locale === "nl") return nl_jams_editor_rules_hint(inputs)
	if (locale === "pl") return pl_jams_editor_rules_hint(inputs)
	if (locale === "pt") return pt_jams_editor_rules_hint(inputs)
	if (locale === "ru") return ru_jams_editor_rules_hint(inputs)
	if (locale === "sv") return sv_jams_editor_rules_hint(inputs)
	if (locale === "tr") return tr_jams_editor_rules_hint(inputs)
	if (locale === "zh") return zh_jams_editor_rules_hint(inputs)
	if (locale === "ja") return ja_jams_editor_rules_hint(inputs)
	return en_jams_editor_rules_hint(inputs)
});
