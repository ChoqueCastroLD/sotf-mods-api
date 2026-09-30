/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Knowledge_Diff_ChangelogInputs */

const en_mod_knowledge_diff_changelog = /** @type {(inputs: Mod_Knowledge_Diff_ChangelogInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Changelog in between`)
};

const es_mod_knowledge_diff_changelog = /** @type {(inputs: Mod_Knowledge_Diff_ChangelogInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Registro de cambios intermedio`)
};

const de_mod_knowledge_diff_changelog = /** @type {(inputs: Mod_Knowledge_Diff_ChangelogInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Changelog dazwischen`)
};

const fr_mod_knowledge_diff_changelog = /** @type {(inputs: Mod_Knowledge_Diff_ChangelogInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Journal des modifications entre les deux`)
};

const it_mod_knowledge_diff_changelog = /** @type {(inputs: Mod_Knowledge_Diff_ChangelogInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Changelog intermedio`)
};

const nl_mod_knowledge_diff_changelog = /** @type {(inputs: Mod_Knowledge_Diff_ChangelogInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Changelog ertussen`)
};

const pl_mod_knowledge_diff_changelog = /** @type {(inputs: Mod_Knowledge_Diff_ChangelogInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lista zmian pomiędzy`)
};

const pt_mod_knowledge_diff_changelog = /** @type {(inputs: Mod_Knowledge_Diff_ChangelogInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Registro de alterações entre elas`)
};

const ru_mod_knowledge_diff_changelog = /** @type {(inputs: Mod_Knowledge_Diff_ChangelogInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Список изменений между версиями`)
};

const sv_mod_knowledge_diff_changelog = /** @type {(inputs: Mod_Knowledge_Diff_ChangelogInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ändringslogg däremellan`)
};

const tr_mod_knowledge_diff_changelog = /** @type {(inputs: Mod_Knowledge_Diff_ChangelogInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aradaki değişiklik günlüğü`)
};

const zh_mod_knowledge_diff_changelog = /** @type {(inputs: Mod_Knowledge_Diff_ChangelogInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`期间的更新日志`)
};

const ja_mod_knowledge_diff_changelog = /** @type {(inputs: Mod_Knowledge_Diff_ChangelogInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`期間中の変更履歴`)
};

/**
* | output |
* | --- |
* | "Changelog in between" |
*
* @param {Mod_Knowledge_Diff_ChangelogInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_knowledge_diff_changelog = /** @type {((inputs?: Mod_Knowledge_Diff_ChangelogInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Knowledge_Diff_ChangelogInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_knowledge_diff_changelog(inputs)
	if (locale === "de") return de_mod_knowledge_diff_changelog(inputs)
	if (locale === "fr") return fr_mod_knowledge_diff_changelog(inputs)
	if (locale === "it") return it_mod_knowledge_diff_changelog(inputs)
	if (locale === "nl") return nl_mod_knowledge_diff_changelog(inputs)
	if (locale === "pl") return pl_mod_knowledge_diff_changelog(inputs)
	if (locale === "pt") return pt_mod_knowledge_diff_changelog(inputs)
	if (locale === "ru") return ru_mod_knowledge_diff_changelog(inputs)
	if (locale === "sv") return sv_mod_knowledge_diff_changelog(inputs)
	if (locale === "tr") return tr_mod_knowledge_diff_changelog(inputs)
	if (locale === "zh") return zh_mod_knowledge_diff_changelog(inputs)
	if (locale === "ja") return ja_mod_knowledge_diff_changelog(inputs)
	return en_mod_knowledge_diff_changelog(inputs)
});
