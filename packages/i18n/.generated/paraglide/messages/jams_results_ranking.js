/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Results_RankingInputs */

const en_jams_results_ranking = /** @type {(inputs: Jams_Results_RankingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Entries by valid votes`)
};

const es_jams_results_ranking = /** @type {(inputs: Jams_Results_RankingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Participaciones por votos válidos`)
};

const de_jams_results_ranking = /** @type {(inputs: Jams_Results_RankingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Beiträge nach gültigen Stimmen`)
};

const fr_jams_results_ranking = /** @type {(inputs: Jams_Results_RankingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Participations par votes valides`)
};

const it_jams_results_ranking = /** @type {(inputs: Jams_Results_RankingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Partecipazioni per voti validi`)
};

const nl_jams_results_ranking = /** @type {(inputs: Jams_Results_RankingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inzendingen op geldige stemmen`)
};

const pl_jams_results_ranking = /** @type {(inputs: Jams_Results_RankingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zgłoszenia według ważnych głosów`)
};

const pt_jams_results_ranking = /** @type {(inputs: Jams_Results_RankingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inscrições por votos válidos`)
};

const ru_jams_results_ranking = /** @type {(inputs: Jams_Results_RankingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Работы по действительным голосам`)
};

const sv_jams_results_ranking = /** @type {(inputs: Jams_Results_RankingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bidrag efter giltiga röster`)
};

const tr_jams_results_ranking = /** @type {(inputs: Jams_Results_RankingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Geçerli oya göre katılımlar`)
};

const zh_jams_results_ranking = /** @type {(inputs: Jams_Results_RankingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`按有效票数排序的作品`)
};

const ja_jams_results_ranking = /** @type {(inputs: Jams_Results_RankingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`有効票数順の作品`)
};

/**
* | output |
* | --- |
* | "Entries by valid votes" |
*
* @param {Jams_Results_RankingInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_results_ranking = /** @type {((inputs?: Jams_Results_RankingInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Results_RankingInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_results_ranking(inputs)
	if (locale === "de") return de_jams_results_ranking(inputs)
	if (locale === "fr") return fr_jams_results_ranking(inputs)
	if (locale === "it") return it_jams_results_ranking(inputs)
	if (locale === "nl") return nl_jams_results_ranking(inputs)
	if (locale === "pl") return pl_jams_results_ranking(inputs)
	if (locale === "pt") return pt_jams_results_ranking(inputs)
	if (locale === "ru") return ru_jams_results_ranking(inputs)
	if (locale === "sv") return sv_jams_results_ranking(inputs)
	if (locale === "tr") return tr_jams_results_ranking(inputs)
	if (locale === "zh") return zh_jams_results_ranking(inputs)
	if (locale === "ja") return ja_jams_results_ranking(inputs)
	return en_jams_results_ranking(inputs)
});
