/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Errors_Not_Found_TitleInputs */

const en_errors_not_found_title = /** @type {(inputs: Errors_Not_Found_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Page not found.`)
};

const es_errors_not_found_title = /** @type {(inputs: Errors_Not_Found_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Página no encontrada.`)
};

const de_errors_not_found_title = /** @type {(inputs: Errors_Not_Found_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Seite nicht gefunden.`)
};

const fr_errors_not_found_title = /** @type {(inputs: Errors_Not_Found_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Page introuvable.`)
};

const it_errors_not_found_title = /** @type {(inputs: Errors_Not_Found_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pagina non trovata.`)
};

const nl_errors_not_found_title = /** @type {(inputs: Errors_Not_Found_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pagina niet gevonden.`)
};

const pl_errors_not_found_title = /** @type {(inputs: Errors_Not_Found_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie znaleziono strony.`)
};

const pt_errors_not_found_title = /** @type {(inputs: Errors_Not_Found_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Página não encontrada.`)
};

const ru_errors_not_found_title = /** @type {(inputs: Errors_Not_Found_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Страница не найдена.`)
};

const sv_errors_not_found_title = /** @type {(inputs: Errors_Not_Found_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sidan hittades inte.`)
};

const tr_errors_not_found_title = /** @type {(inputs: Errors_Not_Found_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sayfa bulunamadı.`)
};

const zh_errors_not_found_title = /** @type {(inputs: Errors_Not_Found_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`页面未找到。`)
};

const ja_errors_not_found_title = /** @type {(inputs: Errors_Not_Found_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ページが見つかりません。`)
};

/**
* | output |
* | --- |
* | "Page not found." |
*
* @param {Errors_Not_Found_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const errors_not_found_title = /** @type {((inputs?: Errors_Not_Found_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Errors_Not_Found_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_errors_not_found_title(inputs)
	if (locale === "de") return de_errors_not_found_title(inputs)
	if (locale === "fr") return fr_errors_not_found_title(inputs)
	if (locale === "it") return it_errors_not_found_title(inputs)
	if (locale === "nl") return nl_errors_not_found_title(inputs)
	if (locale === "pl") return pl_errors_not_found_title(inputs)
	if (locale === "pt") return pt_errors_not_found_title(inputs)
	if (locale === "ru") return ru_errors_not_found_title(inputs)
	if (locale === "sv") return sv_errors_not_found_title(inputs)
	if (locale === "tr") return tr_errors_not_found_title(inputs)
	if (locale === "zh") return zh_errors_not_found_title(inputs)
	if (locale === "ja") return ja_errors_not_found_title(inputs)
	return en_errors_not_found_title(inputs)
});
