/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Knowledge_Diff_Changelog_NoneInputs */

const en_mod_knowledge_diff_changelog_none = /** @type {(inputs: Mod_Knowledge_Diff_Changelog_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No changelog was written for this version.`)
};

const es_mod_knowledge_diff_changelog_none = /** @type {(inputs: Mod_Knowledge_Diff_Changelog_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No se escribió registro de cambios para esta versión.`)
};

const de_mod_knowledge_diff_changelog_none = /** @type {(inputs: Mod_Knowledge_Diff_Changelog_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Für diese Version wurde kein Changelog verfasst.`)
};

const fr_mod_knowledge_diff_changelog_none = /** @type {(inputs: Mod_Knowledge_Diff_Changelog_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aucun journal des modifications n’a été rédigé pour cette version.`)
};

const it_mod_knowledge_diff_changelog_none = /** @type {(inputs: Mod_Knowledge_Diff_Changelog_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Per questa versione non è stato scritto alcun changelog.`)
};

const nl_mod_knowledge_diff_changelog_none = /** @type {(inputs: Mod_Knowledge_Diff_Changelog_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Voor deze versie is geen changelog geschreven.`)
};

const pl_mod_knowledge_diff_changelog_none = /** @type {(inputs: Mod_Knowledge_Diff_Changelog_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dla tej wersji nie napisano listy zmian.`)
};

const pt_mod_knowledge_diff_changelog_none = /** @type {(inputs: Mod_Knowledge_Diff_Changelog_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nenhum registro de alterações foi escrito para esta versão.`)
};

const ru_mod_knowledge_diff_changelog_none = /** @type {(inputs: Mod_Knowledge_Diff_Changelog_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Для этой версии список изменений не написан.`)
};

const sv_mod_knowledge_diff_changelog_none = /** @type {(inputs: Mod_Knowledge_Diff_Changelog_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ingen ändringslogg skrevs för den här versionen.`)
};

const tr_mod_knowledge_diff_changelog_none = /** @type {(inputs: Mod_Knowledge_Diff_Changelog_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu sürüm için değişiklik günlüğü yazılmadı.`)
};

const zh_mod_knowledge_diff_changelog_none = /** @type {(inputs: Mod_Knowledge_Diff_Changelog_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`此版本没有更新日志。`)
};

const ja_mod_knowledge_diff_changelog_none = /** @type {(inputs: Mod_Knowledge_Diff_Changelog_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`このバージョンには変更履歴がありません。`)
};

/**
* | output |
* | --- |
* | "No changelog was written for this version." |
*
* @param {Mod_Knowledge_Diff_Changelog_NoneInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_knowledge_diff_changelog_none = /** @type {((inputs?: Mod_Knowledge_Diff_Changelog_NoneInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Knowledge_Diff_Changelog_NoneInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_knowledge_diff_changelog_none(inputs)
	if (locale === "de") return de_mod_knowledge_diff_changelog_none(inputs)
	if (locale === "fr") return fr_mod_knowledge_diff_changelog_none(inputs)
	if (locale === "it") return it_mod_knowledge_diff_changelog_none(inputs)
	if (locale === "nl") return nl_mod_knowledge_diff_changelog_none(inputs)
	if (locale === "pl") return pl_mod_knowledge_diff_changelog_none(inputs)
	if (locale === "pt") return pt_mod_knowledge_diff_changelog_none(inputs)
	if (locale === "ru") return ru_mod_knowledge_diff_changelog_none(inputs)
	if (locale === "sv") return sv_mod_knowledge_diff_changelog_none(inputs)
	if (locale === "tr") return tr_mod_knowledge_diff_changelog_none(inputs)
	if (locale === "zh") return zh_mod_knowledge_diff_changelog_none(inputs)
	if (locale === "ja") return ja_mod_knowledge_diff_changelog_none(inputs)
	return en_mod_knowledge_diff_changelog_none(inputs)
});
