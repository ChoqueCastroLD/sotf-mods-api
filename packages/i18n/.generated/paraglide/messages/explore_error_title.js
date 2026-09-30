/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Explore_Error_TitleInputs */

const en_explore_error_title = /** @type {(inputs: Explore_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No signal`)
};

const es_explore_error_title = /** @type {(inputs: Explore_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sin señal`)
};

const de_explore_error_title = /** @type {(inputs: Explore_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kein Signal`)
};

const fr_explore_error_title = /** @type {(inputs: Explore_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pas de signal`)
};

const it_explore_error_title = /** @type {(inputs: Explore_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nessun segnale`)
};

const nl_explore_error_title = /** @type {(inputs: Explore_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Geen signaal`)
};

const pl_explore_error_title = /** @type {(inputs: Explore_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Brak sygnału`)
};

const pt_explore_error_title = /** @type {(inputs: Explore_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sem sinal`)
};

const ru_explore_error_title = /** @type {(inputs: Explore_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Нет сигнала`)
};

const sv_explore_error_title = /** @type {(inputs: Explore_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ingen signal`)
};

const tr_explore_error_title = /** @type {(inputs: Explore_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sinyal yok`)
};

const zh_explore_error_title = /** @type {(inputs: Explore_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`没有信号`)
};

const ja_explore_error_title = /** @type {(inputs: Explore_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`電波が届きません`)
};

/**
* | output |
* | --- |
* | "No signal" |
*
* @param {Explore_Error_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const explore_error_title = /** @type {((inputs?: Explore_Error_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Error_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_explore_error_title(inputs)
	if (locale === "de") return de_explore_error_title(inputs)
	if (locale === "fr") return fr_explore_error_title(inputs)
	if (locale === "it") return it_explore_error_title(inputs)
	if (locale === "nl") return nl_explore_error_title(inputs)
	if (locale === "pl") return pl_explore_error_title(inputs)
	if (locale === "pt") return pt_explore_error_title(inputs)
	if (locale === "ru") return ru_explore_error_title(inputs)
	if (locale === "sv") return sv_explore_error_title(inputs)
	if (locale === "tr") return tr_explore_error_title(inputs)
	if (locale === "zh") return zh_explore_error_title(inputs)
	if (locale === "ja") return ja_explore_error_title(inputs)
	return en_explore_error_title(inputs)
});
