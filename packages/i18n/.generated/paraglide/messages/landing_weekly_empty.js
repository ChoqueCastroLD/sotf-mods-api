/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Landing_Weekly_EmptyInputs */

const en_landing_weekly_empty = /** @type {(inputs: Landing_Weekly_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No downloads recorded this week yet.`)
};

const es_landing_weekly_empty = /** @type {(inputs: Landing_Weekly_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Todavía no hay descargas registradas esta semana.`)
};

const de_landing_weekly_empty = /** @type {(inputs: Landing_Weekly_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Diese Woche wurden noch keine Downloads erfasst.`)
};

const fr_landing_weekly_empty = /** @type {(inputs: Landing_Weekly_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aucun téléchargement enregistré cette semaine pour le moment.`)
};

const it_landing_weekly_empty = /** @type {(inputs: Landing_Weekly_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Questa settimana non sono ancora stati registrati download.`)
};

const nl_landing_weekly_empty = /** @type {(inputs: Landing_Weekly_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Er zijn deze week nog geen downloads geregistreerd.`)
};

const pl_landing_weekly_empty = /** @type {(inputs: Landing_Weekly_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`W tym tygodniu nie zarejestrowano jeszcze pobrań.`)
};

const pt_landing_weekly_empty = /** @type {(inputs: Landing_Weekly_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ainda não há downloads registrados esta semana.`)
};

const ru_landing_weekly_empty = /** @type {(inputs: Landing_Weekly_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`На этой неделе скачиваний пока нет.`)
};

const sv_landing_weekly_empty = /** @type {(inputs: Landing_Weekly_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inga nedladdningar har registrerats den här veckan än.`)
};

const tr_landing_weekly_empty = /** @type {(inputs: Landing_Weekly_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu hafta henüz indirme kaydedilmedi.`)
};

const zh_landing_weekly_empty = /** @type {(inputs: Landing_Weekly_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`本周还没有下载记录。`)
};

const ja_landing_weekly_empty = /** @type {(inputs: Landing_Weekly_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`今週のダウンロードはまだ記録されていません。`)
};

/**
* | output |
* | --- |
* | "No downloads recorded this week yet." |
*
* @param {Landing_Weekly_EmptyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const landing_weekly_empty = /** @type {((inputs?: Landing_Weekly_EmptyInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Landing_Weekly_EmptyInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_landing_weekly_empty(inputs)
	if (locale === "de") return de_landing_weekly_empty(inputs)
	if (locale === "fr") return fr_landing_weekly_empty(inputs)
	if (locale === "it") return it_landing_weekly_empty(inputs)
	if (locale === "nl") return nl_landing_weekly_empty(inputs)
	if (locale === "pl") return pl_landing_weekly_empty(inputs)
	if (locale === "pt") return pt_landing_weekly_empty(inputs)
	if (locale === "ru") return ru_landing_weekly_empty(inputs)
	if (locale === "sv") return sv_landing_weekly_empty(inputs)
	if (locale === "tr") return tr_landing_weekly_empty(inputs)
	if (locale === "zh") return zh_landing_weekly_empty(inputs)
	if (locale === "ja") return ja_landing_weekly_empty(inputs)
	return en_landing_weekly_empty(inputs)
});
