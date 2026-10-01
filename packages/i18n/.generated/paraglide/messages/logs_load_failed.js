/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Logs_Load_FailedInputs */

const en_logs_load_failed = /** @type {(inputs: Logs_Load_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Could not load the log.`)
};

const es_logs_load_failed = /** @type {(inputs: Logs_Load_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No se pudo cargar el log.`)
};

const de_logs_load_failed = /** @type {(inputs: Logs_Load_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Das Log konnte nicht geladen werden.`)
};

const fr_logs_load_failed = /** @type {(inputs: Logs_Load_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Impossible de charger le log.`)
};

const it_logs_load_failed = /** @type {(inputs: Logs_Load_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Impossibile caricare il log.`)
};

const nl_logs_load_failed = /** @type {(inputs: Logs_Load_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De log kon niet worden geladen.`)
};

const pl_logs_load_failed = /** @type {(inputs: Logs_Load_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie udało się wczytać logu.`)
};

const pt_logs_load_failed = /** @type {(inputs: Logs_Load_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Não foi possível carregar o log.`)
};

const ru_logs_load_failed = /** @type {(inputs: Logs_Load_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Не удалось загрузить лог.`)
};

const sv_logs_load_failed = /** @type {(inputs: Logs_Load_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Loggen kunde inte laddas.`)
};

const tr_logs_load_failed = /** @type {(inputs: Logs_Load_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Log yüklenemedi.`)
};

const zh_logs_load_failed = /** @type {(inputs: Logs_Load_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`无法加载日志。`)
};

const ja_logs_load_failed = /** @type {(inputs: Logs_Load_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ログを読み込めませんでした。`)
};

/**
* | output |
* | --- |
* | "Could not load the log." |
*
* @param {Logs_Load_FailedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const logs_load_failed = /** @type {((inputs?: Logs_Load_FailedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Logs_Load_FailedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_logs_load_failed(inputs)
	if (locale === "de") return de_logs_load_failed(inputs)
	if (locale === "fr") return fr_logs_load_failed(inputs)
	if (locale === "it") return it_logs_load_failed(inputs)
	if (locale === "nl") return nl_logs_load_failed(inputs)
	if (locale === "pl") return pl_logs_load_failed(inputs)
	if (locale === "pt") return pt_logs_load_failed(inputs)
	if (locale === "ru") return ru_logs_load_failed(inputs)
	if (locale === "sv") return sv_logs_load_failed(inputs)
	if (locale === "tr") return tr_logs_load_failed(inputs)
	if (locale === "zh") return zh_logs_load_failed(inputs)
	if (locale === "ja") return ja_logs_load_failed(inputs)
	return en_logs_load_failed(inputs)
});
