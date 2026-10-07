/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Reports_SearchInputs */

const en_ranger_reports_search = /** @type {(inputs: Ranger_Reports_SearchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Search details or reporter`)
};

const es_ranger_reports_search = /** @type {(inputs: Ranger_Reports_SearchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Buscar en los detalles o en quien reporta`)
};

const de_ranger_reports_search = /** @type {(inputs: Ranger_Reports_SearchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Details oder Melder suchen`)
};

const fr_ranger_reports_search = /** @type {(inputs: Ranger_Reports_SearchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rechercher dans les détails ou le signaleur`)
};

const it_ranger_reports_search = /** @type {(inputs: Ranger_Reports_SearchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cerca nei dettagli o in chi segnala`)
};

const nl_ranger_reports_search = /** @type {(inputs: Ranger_Reports_SearchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zoeken in details of melder`)
};

const pl_ranger_reports_search = /** @type {(inputs: Ranger_Reports_SearchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Szukaj w szczegółach lub zgłaszającym`)
};

const pt_ranger_reports_search = /** @type {(inputs: Ranger_Reports_SearchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Buscar nos detalhes ou em quem denunciou`)
};

const ru_ranger_reports_search = /** @type {(inputs: Ranger_Reports_SearchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Поиск по описанию или автору жалобы`)
};

const sv_ranger_reports_search = /** @type {(inputs: Ranger_Reports_SearchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sök i detaljer eller anmälare`)
};

const tr_ranger_reports_search = /** @type {(inputs: Ranger_Reports_SearchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ayrıntılarda veya bildirende ara`)
};

const zh_ranger_reports_search = /** @type {(inputs: Ranger_Reports_SearchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`搜索详情或举报人`)
};

const ja_ranger_reports_search = /** @type {(inputs: Ranger_Reports_SearchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`詳細または報告者を検索`)
};

/**
* | output |
* | --- |
* | "Search details or reporter" |
*
* @param {Ranger_Reports_SearchInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_reports_search = /** @type {((inputs?: Ranger_Reports_SearchInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Reports_SearchInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_reports_search(inputs)
	if (locale === "de") return de_ranger_reports_search(inputs)
	if (locale === "fr") return fr_ranger_reports_search(inputs)
	if (locale === "it") return it_ranger_reports_search(inputs)
	if (locale === "nl") return nl_ranger_reports_search(inputs)
	if (locale === "pl") return pl_ranger_reports_search(inputs)
	if (locale === "pt") return pt_ranger_reports_search(inputs)
	if (locale === "ru") return ru_ranger_reports_search(inputs)
	if (locale === "sv") return sv_ranger_reports_search(inputs)
	if (locale === "tr") return tr_ranger_reports_search(inputs)
	if (locale === "zh") return zh_ranger_reports_search(inputs)
	if (locale === "ja") return ja_ranger_reports_search(inputs)
	return en_ranger_reports_search(inputs)
});
