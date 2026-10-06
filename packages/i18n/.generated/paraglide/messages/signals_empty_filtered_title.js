/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Signals_Empty_Filtered_TitleInputs */

const en_signals_empty_filtered_title = /** @type {(inputs: Signals_Empty_Filtered_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No notifications here`)
};

const es_signals_empty_filtered_title = /** @type {(inputs: Signals_Empty_Filtered_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No hay notificaciones aquí`)
};

const de_signals_empty_filtered_title = /** @type {(inputs: Signals_Empty_Filtered_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hier gibt es keine Benachrichtigungen`)
};

const fr_signals_empty_filtered_title = /** @type {(inputs: Signals_Empty_Filtered_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aucune notification ici`)
};

const it_signals_empty_filtered_title = /** @type {(inputs: Signals_Empty_Filtered_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nessuna notifica qui`)
};

const nl_signals_empty_filtered_title = /** @type {(inputs: Signals_Empty_Filtered_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hier zijn geen meldingen`)
};

const pl_signals_empty_filtered_title = /** @type {(inputs: Signals_Empty_Filtered_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Brak powiadomień`)
};

const pt_signals_empty_filtered_title = /** @type {(inputs: Signals_Empty_Filtered_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nenhuma notificação aqui`)
};

const ru_signals_empty_filtered_title = /** @type {(inputs: Signals_Empty_Filtered_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Здесь уведомлений нет`)
};

const sv_signals_empty_filtered_title = /** @type {(inputs: Signals_Empty_Filtered_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inga aviseringar här`)
};

const tr_signals_empty_filtered_title = /** @type {(inputs: Signals_Empty_Filtered_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Burada bildirim yok`)
};

const zh_signals_empty_filtered_title = /** @type {(inputs: Signals_Empty_Filtered_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`这里没有通知`)
};

const ja_signals_empty_filtered_title = /** @type {(inputs: Signals_Empty_Filtered_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ここに通知はありません`)
};

/**
* | output |
* | --- |
* | "No notifications here" |
*
* @param {Signals_Empty_Filtered_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const signals_empty_filtered_title = /** @type {((inputs?: Signals_Empty_Filtered_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Signals_Empty_Filtered_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_signals_empty_filtered_title(inputs)
	if (locale === "de") return de_signals_empty_filtered_title(inputs)
	if (locale === "fr") return fr_signals_empty_filtered_title(inputs)
	if (locale === "it") return it_signals_empty_filtered_title(inputs)
	if (locale === "nl") return nl_signals_empty_filtered_title(inputs)
	if (locale === "pl") return pl_signals_empty_filtered_title(inputs)
	if (locale === "pt") return pt_signals_empty_filtered_title(inputs)
	if (locale === "ru") return ru_signals_empty_filtered_title(inputs)
	if (locale === "sv") return sv_signals_empty_filtered_title(inputs)
	if (locale === "tr") return tr_signals_empty_filtered_title(inputs)
	if (locale === "zh") return zh_signals_empty_filtered_title(inputs)
	if (locale === "ja") return ja_signals_empty_filtered_title(inputs)
	return en_signals_empty_filtered_title(inputs)
});
