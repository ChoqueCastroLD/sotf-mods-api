/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Knowledge_Diff_Changelog_TruncatedInputs */

const en_mod_knowledge_diff_changelog_truncated = /** @type {(inputs: Mod_Knowledge_Diff_Changelog_TruncatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Only the most recent releases in the range are shown.`)
};

const es_mod_knowledge_diff_changelog_truncated = /** @type {(inputs: Mod_Knowledge_Diff_Changelog_TruncatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Solo se muestran los lanzamientos más recientes del intervalo.`)
};

const de_mod_knowledge_diff_changelog_truncated = /** @type {(inputs: Mod_Knowledge_Diff_Changelog_TruncatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Es werden nur die neuesten Veröffentlichungen des Bereichs angezeigt.`)
};

const fr_mod_knowledge_diff_changelog_truncated = /** @type {(inputs: Mod_Knowledge_Diff_Changelog_TruncatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Seules les publications les plus récentes de la plage sont affichées.`)
};

const it_mod_knowledge_diff_changelog_truncated = /** @type {(inputs: Mod_Knowledge_Diff_Changelog_TruncatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sono mostrati solo i rilasci più recenti dell’intervallo.`)
};

const nl_mod_knowledge_diff_changelog_truncated = /** @type {(inputs: Mod_Knowledge_Diff_Changelog_TruncatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alleen de meest recente releases in het bereik worden getoond.`)
};

const pl_mod_knowledge_diff_changelog_truncated = /** @type {(inputs: Mod_Knowledge_Diff_Changelog_TruncatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pokazano tylko najnowsze wydania z zakresu.`)
};

const pt_mod_knowledge_diff_changelog_truncated = /** @type {(inputs: Mod_Knowledge_Diff_Changelog_TruncatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Apenas os lançamentos mais recentes do intervalo são mostrados.`)
};

const ru_mod_knowledge_diff_changelog_truncated = /** @type {(inputs: Mod_Knowledge_Diff_Changelog_TruncatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Показаны только самые новые релизы из диапазона.`)
};

const sv_mod_knowledge_diff_changelog_truncated = /** @type {(inputs: Mod_Knowledge_Diff_Changelog_TruncatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bara de senaste utgåvorna i intervallet visas.`)
};

const tr_mod_knowledge_diff_changelog_truncated = /** @type {(inputs: Mod_Knowledge_Diff_Changelog_TruncatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aralıktaki yalnızca en son yayınlar gösteriliyor.`)
};

const zh_mod_knowledge_diff_changelog_truncated = /** @type {(inputs: Mod_Knowledge_Diff_Changelog_TruncatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`仅显示该范围内最近的发布。`)
};

const ja_mod_knowledge_diff_changelog_truncated = /** @type {(inputs: Mod_Knowledge_Diff_Changelog_TruncatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`範囲内の最新のリリースのみ表示しています。`)
};

/**
* | output |
* | --- |
* | "Only the most recent releases in the range are shown." |
*
* @param {Mod_Knowledge_Diff_Changelog_TruncatedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_knowledge_diff_changelog_truncated = /** @type {((inputs?: Mod_Knowledge_Diff_Changelog_TruncatedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Knowledge_Diff_Changelog_TruncatedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_knowledge_diff_changelog_truncated(inputs)
	if (locale === "de") return de_mod_knowledge_diff_changelog_truncated(inputs)
	if (locale === "fr") return fr_mod_knowledge_diff_changelog_truncated(inputs)
	if (locale === "it") return it_mod_knowledge_diff_changelog_truncated(inputs)
	if (locale === "nl") return nl_mod_knowledge_diff_changelog_truncated(inputs)
	if (locale === "pl") return pl_mod_knowledge_diff_changelog_truncated(inputs)
	if (locale === "pt") return pt_mod_knowledge_diff_changelog_truncated(inputs)
	if (locale === "ru") return ru_mod_knowledge_diff_changelog_truncated(inputs)
	if (locale === "sv") return sv_mod_knowledge_diff_changelog_truncated(inputs)
	if (locale === "tr") return tr_mod_knowledge_diff_changelog_truncated(inputs)
	if (locale === "zh") return zh_mod_knowledge_diff_changelog_truncated(inputs)
	if (locale === "ja") return ja_mod_knowledge_diff_changelog_truncated(inputs)
	return en_mod_knowledge_diff_changelog_truncated(inputs)
});
