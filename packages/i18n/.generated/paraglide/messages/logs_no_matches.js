/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Logs_No_MatchesInputs */

const en_logs_no_matches = /** @type {(inputs: Logs_No_MatchesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No lines match.`)
};

const es_logs_no_matches = /** @type {(inputs: Logs_No_MatchesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ninguna línea coincide.`)
};

const de_logs_no_matches = /** @type {(inputs: Logs_No_MatchesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Keine Zeile passt.`)
};

const fr_logs_no_matches = /** @type {(inputs: Logs_No_MatchesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aucune ligne ne correspond.`)
};

const it_logs_no_matches = /** @type {(inputs: Logs_No_MatchesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nessuna riga corrisponde.`)
};

const nl_logs_no_matches = /** @type {(inputs: Logs_No_MatchesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Geen regels gevonden.`)
};

const pl_logs_no_matches = /** @type {(inputs: Logs_No_MatchesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Żaden wiersz nie pasuje.`)
};

const pt_logs_no_matches = /** @type {(inputs: Logs_No_MatchesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nenhuma linha corresponde.`)
};

const ru_logs_no_matches = /** @type {(inputs: Logs_No_MatchesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Подходящих строк нет.`)
};

const sv_logs_no_matches = /** @type {(inputs: Logs_No_MatchesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inga rader matchar.`)
};

const tr_logs_no_matches = /** @type {(inputs: Logs_No_MatchesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Eşleşen satır yok.`)
};

const zh_logs_no_matches = /** @type {(inputs: Logs_No_MatchesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`没有匹配的行。`)
};

const ja_logs_no_matches = /** @type {(inputs: Logs_No_MatchesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`一致する行はありません。`)
};

/**
* | output |
* | --- |
* | "No lines match." |
*
* @param {Logs_No_MatchesInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const logs_no_matches = /** @type {((inputs?: Logs_No_MatchesInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Logs_No_MatchesInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_logs_no_matches(inputs)
	if (locale === "de") return de_logs_no_matches(inputs)
	if (locale === "fr") return fr_logs_no_matches(inputs)
	if (locale === "it") return it_logs_no_matches(inputs)
	if (locale === "nl") return nl_logs_no_matches(inputs)
	if (locale === "pl") return pl_logs_no_matches(inputs)
	if (locale === "pt") return pt_logs_no_matches(inputs)
	if (locale === "ru") return ru_logs_no_matches(inputs)
	if (locale === "sv") return sv_logs_no_matches(inputs)
	if (locale === "tr") return tr_logs_no_matches(inputs)
	if (locale === "zh") return zh_logs_no_matches(inputs)
	if (locale === "ja") return ja_logs_no_matches(inputs)
	return en_logs_no_matches(inputs)
});
