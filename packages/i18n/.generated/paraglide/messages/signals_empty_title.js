/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Signals_Empty_TitleInputs */

const en_signals_empty_title = /** @type {(inputs: Signals_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No notifications`)
};

const es_signals_empty_title = /** @type {(inputs: Signals_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No hay notificaciones`)
};

const de_signals_empty_title = /** @type {(inputs: Signals_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Keine Benachrichtigungen`)
};

const fr_signals_empty_title = /** @type {(inputs: Signals_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aucune notification`)
};

const it_signals_empty_title = /** @type {(inputs: Signals_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nessuna notifica`)
};

const nl_signals_empty_title = /** @type {(inputs: Signals_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Geen meldingen`)
};

const pl_signals_empty_title = /** @type {(inputs: Signals_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Brak powiadomień`)
};

const pt_signals_empty_title = /** @type {(inputs: Signals_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nenhuma notificação`)
};

const ru_signals_empty_title = /** @type {(inputs: Signals_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Уведомлений нет`)
};

const sv_signals_empty_title = /** @type {(inputs: Signals_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inga aviseringar`)
};

const tr_signals_empty_title = /** @type {(inputs: Signals_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bildirim yok`)
};

const zh_signals_empty_title = /** @type {(inputs: Signals_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`没有通知`)
};

const ja_signals_empty_title = /** @type {(inputs: Signals_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`通知はありません`)
};

/**
* | output |
* | --- |
* | "No notifications" |
*
* @param {Signals_Empty_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const signals_empty_title = /** @type {((inputs?: Signals_Empty_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Signals_Empty_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_signals_empty_title(inputs)
	if (locale === "de") return de_signals_empty_title(inputs)
	if (locale === "fr") return fr_signals_empty_title(inputs)
	if (locale === "it") return it_signals_empty_title(inputs)
	if (locale === "nl") return nl_signals_empty_title(inputs)
	if (locale === "pl") return pl_signals_empty_title(inputs)
	if (locale === "pt") return pt_signals_empty_title(inputs)
	if (locale === "ru") return ru_signals_empty_title(inputs)
	if (locale === "sv") return sv_signals_empty_title(inputs)
	if (locale === "tr") return tr_signals_empty_title(inputs)
	if (locale === "zh") return zh_signals_empty_title(inputs)
	if (locale === "ja") return ja_signals_empty_title(inputs)
	return en_signals_empty_title(inputs)
});
