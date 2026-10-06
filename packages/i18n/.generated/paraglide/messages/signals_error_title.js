/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Signals_Error_TitleInputs */

const en_signals_error_title = /** @type {(inputs: Signals_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Notifications didn’t load.`)
};

const es_signals_error_title = /** @type {(inputs: Signals_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Las notificaciones no se han cargado.`)
};

const de_signals_error_title = /** @type {(inputs: Signals_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Die Benachrichtigungen konnten nicht geladen werden.`)
};

const fr_signals_error_title = /** @type {(inputs: Signals_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Les notifications n’ont pas pu être chargées.`)
};

const it_signals_error_title = /** @type {(inputs: Signals_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Non è stato possibile caricare le notifiche.`)
};

const nl_signals_error_title = /** @type {(inputs: Signals_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De meldingen konden niet worden geladen.`)
};

const pl_signals_error_title = /** @type {(inputs: Signals_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie udało się wczytać powiadomień.`)
};

const pt_signals_error_title = /** @type {(inputs: Signals_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Não foi possível carregar as notificações.`)
};

const ru_signals_error_title = /** @type {(inputs: Signals_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Не удалось загрузить уведомления.`)
};

const sv_signals_error_title = /** @type {(inputs: Signals_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aviseringarna kunde inte laddas.`)
};

const tr_signals_error_title = /** @type {(inputs: Signals_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bildirimler yüklenemedi.`)
};

const zh_signals_error_title = /** @type {(inputs: Signals_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`通知加载失败。`)
};

const ja_signals_error_title = /** @type {(inputs: Signals_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`通知を読み込めませんでした。`)
};

/**
* | output |
* | --- |
* | "Notifications didn’t load." |
*
* @param {Signals_Error_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const signals_error_title = /** @type {((inputs?: Signals_Error_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Signals_Error_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_signals_error_title(inputs)
	if (locale === "de") return de_signals_error_title(inputs)
	if (locale === "fr") return fr_signals_error_title(inputs)
	if (locale === "it") return it_signals_error_title(inputs)
	if (locale === "nl") return nl_signals_error_title(inputs)
	if (locale === "pl") return pl_signals_error_title(inputs)
	if (locale === "pt") return pt_signals_error_title(inputs)
	if (locale === "ru") return ru_signals_error_title(inputs)
	if (locale === "sv") return sv_signals_error_title(inputs)
	if (locale === "tr") return tr_signals_error_title(inputs)
	if (locale === "zh") return zh_signals_error_title(inputs)
	if (locale === "ja") return ja_signals_error_title(inputs)
	return en_signals_error_title(inputs)
});
