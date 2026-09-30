/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Settings_Successor_PlaceholderInputs */

const en_basecamp_settings_successor_placeholder = /** @type {(inputs: Basecamp_Settings_Successor_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No successor`)
};

const es_basecamp_settings_successor_placeholder = /** @type {(inputs: Basecamp_Settings_Successor_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sin sucesor`)
};

const de_basecamp_settings_successor_placeholder = /** @type {(inputs: Basecamp_Settings_Successor_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kein Nachfolger`)
};

const fr_basecamp_settings_successor_placeholder = /** @type {(inputs: Basecamp_Settings_Successor_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aucun successeur`)
};

const it_basecamp_settings_successor_placeholder = /** @type {(inputs: Basecamp_Settings_Successor_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nessun successore`)
};

const nl_basecamp_settings_successor_placeholder = /** @type {(inputs: Basecamp_Settings_Successor_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Geen opvolger`)
};

const pl_basecamp_settings_successor_placeholder = /** @type {(inputs: Basecamp_Settings_Successor_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bez następcy`)
};

const pt_basecamp_settings_successor_placeholder = /** @type {(inputs: Basecamp_Settings_Successor_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sem sucessor`)
};

const ru_basecamp_settings_successor_placeholder = /** @type {(inputs: Basecamp_Settings_Successor_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Без преемника`)
};

const sv_basecamp_settings_successor_placeholder = /** @type {(inputs: Basecamp_Settings_Successor_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ingen efterföljare`)
};

const tr_basecamp_settings_successor_placeholder = /** @type {(inputs: Basecamp_Settings_Successor_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Halef yok`)
};

const zh_basecamp_settings_successor_placeholder = /** @type {(inputs: Basecamp_Settings_Successor_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`无后继`)
};

const ja_basecamp_settings_successor_placeholder = /** @type {(inputs: Basecamp_Settings_Successor_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`後継なし`)
};

/**
* | output |
* | --- |
* | "No successor" |
*
* @param {Basecamp_Settings_Successor_PlaceholderInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_settings_successor_placeholder = /** @type {((inputs?: Basecamp_Settings_Successor_PlaceholderInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Settings_Successor_PlaceholderInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_settings_successor_placeholder(inputs)
	if (locale === "de") return de_basecamp_settings_successor_placeholder(inputs)
	if (locale === "fr") return fr_basecamp_settings_successor_placeholder(inputs)
	if (locale === "it") return it_basecamp_settings_successor_placeholder(inputs)
	if (locale === "nl") return nl_basecamp_settings_successor_placeholder(inputs)
	if (locale === "pl") return pl_basecamp_settings_successor_placeholder(inputs)
	if (locale === "pt") return pt_basecamp_settings_successor_placeholder(inputs)
	if (locale === "ru") return ru_basecamp_settings_successor_placeholder(inputs)
	if (locale === "sv") return sv_basecamp_settings_successor_placeholder(inputs)
	if (locale === "tr") return tr_basecamp_settings_successor_placeholder(inputs)
	if (locale === "zh") return zh_basecamp_settings_successor_placeholder(inputs)
	if (locale === "ja") return ja_basecamp_settings_successor_placeholder(inputs)
	return en_basecamp_settings_successor_placeholder(inputs)
});
