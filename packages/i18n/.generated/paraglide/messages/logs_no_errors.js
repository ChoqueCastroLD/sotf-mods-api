/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Logs_No_ErrorsInputs */

const en_logs_no_errors = /** @type {(inputs: Logs_No_ErrorsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No errors found.`)
};

const es_logs_no_errors = /** @type {(inputs: Logs_No_ErrorsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No se encontraron errores.`)
};

const de_logs_no_errors = /** @type {(inputs: Logs_No_ErrorsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Keine Fehler gefunden.`)
};

const fr_logs_no_errors = /** @type {(inputs: Logs_No_ErrorsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aucune erreur trouvée.`)
};

const it_logs_no_errors = /** @type {(inputs: Logs_No_ErrorsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nessun errore trovato.`)
};

const nl_logs_no_errors = /** @type {(inputs: Logs_No_ErrorsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Geen fouten gevonden.`)
};

const pl_logs_no_errors = /** @type {(inputs: Logs_No_ErrorsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie znaleziono błędów.`)
};

const pt_logs_no_errors = /** @type {(inputs: Logs_No_ErrorsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Não foram encontrados erros.`)
};

const ru_logs_no_errors = /** @type {(inputs: Logs_No_ErrorsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ошибок не найдено.`)
};

const sv_logs_no_errors = /** @type {(inputs: Logs_No_ErrorsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inga fel hittades.`)
};

const tr_logs_no_errors = /** @type {(inputs: Logs_No_ErrorsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hata bulunamadı.`)
};

const zh_logs_no_errors = /** @type {(inputs: Logs_No_ErrorsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`未发现错误。`)
};

const ja_logs_no_errors = /** @type {(inputs: Logs_No_ErrorsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`エラーは見つかりませんでした。`)
};

/**
* | output |
* | --- |
* | "No errors found." |
*
* @param {Logs_No_ErrorsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const logs_no_errors = /** @type {((inputs?: Logs_No_ErrorsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Logs_No_ErrorsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_logs_no_errors(inputs)
	if (locale === "de") return de_logs_no_errors(inputs)
	if (locale === "fr") return fr_logs_no_errors(inputs)
	if (locale === "it") return it_logs_no_errors(inputs)
	if (locale === "nl") return nl_logs_no_errors(inputs)
	if (locale === "pl") return pl_logs_no_errors(inputs)
	if (locale === "pt") return pt_logs_no_errors(inputs)
	if (locale === "ru") return ru_logs_no_errors(inputs)
	if (locale === "sv") return sv_logs_no_errors(inputs)
	if (locale === "tr") return tr_logs_no_errors(inputs)
	if (locale === "zh") return zh_logs_no_errors(inputs)
	if (locale === "ja") return ja_logs_no_errors(inputs)
	return en_logs_no_errors(inputs)
});
