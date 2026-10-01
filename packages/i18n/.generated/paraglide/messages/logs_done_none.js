/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Logs_Done_NoneInputs */

const en_logs_done_none = /** @type {(inputs: Logs_Done_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nothing sensitive was found.`)
};

const es_logs_done_none = /** @type {(inputs: Logs_Done_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No se encontró nada sensible.`)
};

const de_logs_done_none = /** @type {(inputs: Logs_Done_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Es wurde nichts Sensibles gefunden.`)
};

const fr_logs_done_none = /** @type {(inputs: Logs_Done_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rien de sensible n’a été trouvé.`)
};

const it_logs_done_none = /** @type {(inputs: Logs_Done_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Non è stato trovato nulla di sensibile.`)
};

const nl_logs_done_none = /** @type {(inputs: Logs_Done_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Er is niets gevoeligs gevonden.`)
};

const pl_logs_done_none = /** @type {(inputs: Logs_Done_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie znaleziono niczego poufnego.`)
};

const pt_logs_done_none = /** @type {(inputs: Logs_Done_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Não foi encontrado nada sensível.`)
};

const ru_logs_done_none = /** @type {(inputs: Logs_Done_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ничего конфиденциального не найдено.`)
};

const sv_logs_done_none = /** @type {(inputs: Logs_Done_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inget känsligt hittades.`)
};

const tr_logs_done_none = /** @type {(inputs: Logs_Done_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hassas bir şey bulunmadı.`)
};

const zh_logs_done_none = /** @type {(inputs: Logs_Done_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`未发现敏感内容。`)
};

const ja_logs_done_none = /** @type {(inputs: Logs_Done_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`機密情報は見つかりませんでした。`)
};

/**
* | output |
* | --- |
* | "Nothing sensitive was found." |
*
* @param {Logs_Done_NoneInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const logs_done_none = /** @type {((inputs?: Logs_Done_NoneInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Logs_Done_NoneInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_logs_done_none(inputs)
	if (locale === "de") return de_logs_done_none(inputs)
	if (locale === "fr") return fr_logs_done_none(inputs)
	if (locale === "it") return it_logs_done_none(inputs)
	if (locale === "nl") return nl_logs_done_none(inputs)
	if (locale === "pl") return pl_logs_done_none(inputs)
	if (locale === "pt") return pt_logs_done_none(inputs)
	if (locale === "ru") return ru_logs_done_none(inputs)
	if (locale === "sv") return sv_logs_done_none(inputs)
	if (locale === "tr") return tr_logs_done_none(inputs)
	if (locale === "zh") return zh_logs_done_none(inputs)
	if (locale === "ja") return ja_logs_done_none(inputs)
	return en_logs_done_none(inputs)
});
