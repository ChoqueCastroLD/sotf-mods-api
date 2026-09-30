/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_No_MatchesInputs */

const en_admin_no_matches = /** @type {(inputs: Admin_No_MatchesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nothing matches these filters`)
};

const es_admin_no_matches = /** @type {(inputs: Admin_No_MatchesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nada coincide con estos filtros`)
};

const de_admin_no_matches = /** @type {(inputs: Admin_No_MatchesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nichts passt zu diesen Filtern`)
};

const fr_admin_no_matches = /** @type {(inputs: Admin_No_MatchesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rien ne correspond à ces filtres`)
};

const it_admin_no_matches = /** @type {(inputs: Admin_No_MatchesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Niente corrisponde a questi filtri`)
};

const nl_admin_no_matches = /** @type {(inputs: Admin_No_MatchesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Niets komt overeen met deze filters`)
};

const pl_admin_no_matches = /** @type {(inputs: Admin_No_MatchesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nic nie pasuje do tych filtrów`)
};

const pt_admin_no_matches = /** @type {(inputs: Admin_No_MatchesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nada corresponde a esses filtros`)
};

const ru_admin_no_matches = /** @type {(inputs: Admin_No_MatchesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Под эти фильтры ничего не подходит`)
};

const sv_admin_no_matches = /** @type {(inputs: Admin_No_MatchesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inget matchar de här filtren`)
};

const tr_admin_no_matches = /** @type {(inputs: Admin_No_MatchesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu filtrelere uyan bir şey yok`)
};

const zh_admin_no_matches = /** @type {(inputs: Admin_No_MatchesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`没有符合这些筛选条件的内容`)
};

const ja_admin_no_matches = /** @type {(inputs: Admin_No_MatchesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`このフィルターに一致するものはありません`)
};

/**
* | output |
* | --- |
* | "Nothing matches these filters" |
*
* @param {Admin_No_MatchesInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_no_matches = /** @type {((inputs?: Admin_No_MatchesInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_No_MatchesInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_no_matches(inputs)
	if (locale === "de") return de_admin_no_matches(inputs)
	if (locale === "fr") return fr_admin_no_matches(inputs)
	if (locale === "it") return it_admin_no_matches(inputs)
	if (locale === "nl") return nl_admin_no_matches(inputs)
	if (locale === "pl") return pl_admin_no_matches(inputs)
	if (locale === "pt") return pt_admin_no_matches(inputs)
	if (locale === "ru") return ru_admin_no_matches(inputs)
	if (locale === "sv") return sv_admin_no_matches(inputs)
	if (locale === "tr") return tr_admin_no_matches(inputs)
	if (locale === "zh") return zh_admin_no_matches(inputs)
	if (locale === "ja") return ja_admin_no_matches(inputs)
	return en_admin_no_matches(inputs)
});
