/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Knowledge_Diff_Changelog_EmptyInputs */

const en_mod_knowledge_diff_changelog_empty = /** @type {(inputs: Mod_Knowledge_Diff_Changelog_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`There are no releases between these two versions.`)
};

const es_mod_knowledge_diff_changelog_empty = /** @type {(inputs: Mod_Knowledge_Diff_Changelog_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No hay lanzamientos entre estas dos versiones.`)
};

const de_mod_knowledge_diff_changelog_empty = /** @type {(inputs: Mod_Knowledge_Diff_Changelog_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zwischen diesen beiden Versionen gibt es keine Veröffentlichungen.`)
};

const fr_mod_knowledge_diff_changelog_empty = /** @type {(inputs: Mod_Knowledge_Diff_Changelog_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aucune publication entre ces deux versions.`)
};

const it_mod_knowledge_diff_changelog_empty = /** @type {(inputs: Mod_Knowledge_Diff_Changelog_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Non ci sono rilasci tra queste due versioni.`)
};

const nl_mod_knowledge_diff_changelog_empty = /** @type {(inputs: Mod_Knowledge_Diff_Changelog_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Er zijn geen releases tussen deze twee versies.`)
};

const pl_mod_knowledge_diff_changelog_empty = /** @type {(inputs: Mod_Knowledge_Diff_Changelog_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Brak wydań pomiędzy tymi dwiema wersjami.`)
};

const pt_mod_knowledge_diff_changelog_empty = /** @type {(inputs: Mod_Knowledge_Diff_Changelog_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Não há lançamentos entre estas duas versões.`)
};

const ru_mod_knowledge_diff_changelog_empty = /** @type {(inputs: Mod_Knowledge_Diff_Changelog_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Между этими версиями нет релизов.`)
};

const sv_mod_knowledge_diff_changelog_empty = /** @type {(inputs: Mod_Knowledge_Diff_Changelog_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Det finns inga utgåvor mellan dessa två versioner.`)
};

const tr_mod_knowledge_diff_changelog_empty = /** @type {(inputs: Mod_Knowledge_Diff_Changelog_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu iki sürüm arasında yayın yok.`)
};

const zh_mod_knowledge_diff_changelog_empty = /** @type {(inputs: Mod_Knowledge_Diff_Changelog_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`这两个版本之间没有发布。`)
};

const ja_mod_knowledge_diff_changelog_empty = /** @type {(inputs: Mod_Knowledge_Diff_Changelog_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`この2つのバージョンの間にリリースはありません。`)
};

/**
* | output |
* | --- |
* | "There are no releases between these two versions." |
*
* @param {Mod_Knowledge_Diff_Changelog_EmptyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_knowledge_diff_changelog_empty = /** @type {((inputs?: Mod_Knowledge_Diff_Changelog_EmptyInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Knowledge_Diff_Changelog_EmptyInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_knowledge_diff_changelog_empty(inputs)
	if (locale === "de") return de_mod_knowledge_diff_changelog_empty(inputs)
	if (locale === "fr") return fr_mod_knowledge_diff_changelog_empty(inputs)
	if (locale === "it") return it_mod_knowledge_diff_changelog_empty(inputs)
	if (locale === "nl") return nl_mod_knowledge_diff_changelog_empty(inputs)
	if (locale === "pl") return pl_mod_knowledge_diff_changelog_empty(inputs)
	if (locale === "pt") return pt_mod_knowledge_diff_changelog_empty(inputs)
	if (locale === "ru") return ru_mod_knowledge_diff_changelog_empty(inputs)
	if (locale === "sv") return sv_mod_knowledge_diff_changelog_empty(inputs)
	if (locale === "tr") return tr_mod_knowledge_diff_changelog_empty(inputs)
	if (locale === "zh") return zh_mod_knowledge_diff_changelog_empty(inputs)
	if (locale === "ja") return ja_mod_knowledge_diff_changelog_empty(inputs)
	return en_mod_knowledge_diff_changelog_empty(inputs)
});
