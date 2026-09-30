/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Analytics_Legacy_NoteInputs */

const en_basecamp_analytics_legacy_note = /** @type {(inputs: Basecamp_Analytics_Legacy_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Includes the complete history since 2023.`)
};

const es_basecamp_analytics_legacy_note = /** @type {(inputs: Basecamp_Analytics_Legacy_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Incluye el histórico completo desde 2023.`)
};

const de_basecamp_analytics_legacy_note = /** @type {(inputs: Basecamp_Analytics_Legacy_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enthält den kompletten Verlauf seit 2023.`)
};

const fr_basecamp_analytics_legacy_note = /** @type {(inputs: Basecamp_Analytics_Legacy_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Comprend tout l’historique depuis 2023.`)
};

const it_basecamp_analytics_legacy_note = /** @type {(inputs: Basecamp_Analytics_Legacy_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Include lo storico completo dal 2023.`)
};

const nl_basecamp_analytics_legacy_note = /** @type {(inputs: Basecamp_Analytics_Legacy_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bevat de volledige geschiedenis sinds 2023.`)
};

const pl_basecamp_analytics_legacy_note = /** @type {(inputs: Basecamp_Analytics_Legacy_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Obejmuje pełną historię od 2023 roku.`)
};

const pt_basecamp_analytics_legacy_note = /** @type {(inputs: Basecamp_Analytics_Legacy_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inclui o histórico completo desde 2023.`)
};

const ru_basecamp_analytics_legacy_note = /** @type {(inputs: Basecamp_Analytics_Legacy_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Включает всю историю с 2023 года.`)
};

const sv_basecamp_analytics_legacy_note = /** @type {(inputs: Basecamp_Analytics_Legacy_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Innehåller hela historiken sedan 2023.`)
};

const tr_basecamp_analytics_legacy_note = /** @type {(inputs: Basecamp_Analytics_Legacy_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`2023'ten beri tüm geçmişi içerir.`)
};

const zh_basecamp_analytics_legacy_note = /** @type {(inputs: Basecamp_Analytics_Legacy_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`包含 2023 年以来的完整历史数据。`)
};

const ja_basecamp_analytics_legacy_note = /** @type {(inputs: Basecamp_Analytics_Legacy_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`2023 年からの全履歴を含みます。`)
};

/**
* | output |
* | --- |
* | "Includes the complete history since 2023." |
*
* @param {Basecamp_Analytics_Legacy_NoteInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_analytics_legacy_note = /** @type {((inputs?: Basecamp_Analytics_Legacy_NoteInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Analytics_Legacy_NoteInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_analytics_legacy_note(inputs)
	if (locale === "de") return de_basecamp_analytics_legacy_note(inputs)
	if (locale === "fr") return fr_basecamp_analytics_legacy_note(inputs)
	if (locale === "it") return it_basecamp_analytics_legacy_note(inputs)
	if (locale === "nl") return nl_basecamp_analytics_legacy_note(inputs)
	if (locale === "pl") return pl_basecamp_analytics_legacy_note(inputs)
	if (locale === "pt") return pt_basecamp_analytics_legacy_note(inputs)
	if (locale === "ru") return ru_basecamp_analytics_legacy_note(inputs)
	if (locale === "sv") return sv_basecamp_analytics_legacy_note(inputs)
	if (locale === "tr") return tr_basecamp_analytics_legacy_note(inputs)
	if (locale === "zh") return zh_basecamp_analytics_legacy_note(inputs)
	if (locale === "ja") return ja_basecamp_analytics_legacy_note(inputs)
	return en_basecamp_analytics_legacy_note(inputs)
});
