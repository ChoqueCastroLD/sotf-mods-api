/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Landing_Weekly_HintInputs */

const en_landing_weekly_hint = /** @type {(inputs: Landing_Weekly_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ranked by downloads in the last 7 days`)
};

const es_landing_weekly_hint = /** @type {(inputs: Landing_Weekly_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ordenados por descargas de los últimos 7 días`)
};

const de_landing_weekly_hint = /** @type {(inputs: Landing_Weekly_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nach Downloads der letzten 7 Tage`)
};

const fr_landing_weekly_hint = /** @type {(inputs: Landing_Weekly_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Classés par téléchargements des 7 derniers jours`)
};

const it_landing_weekly_hint = /** @type {(inputs: Landing_Weekly_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`In classifica per download degli ultimi 7 giorni`)
};

const nl_landing_weekly_hint = /** @type {(inputs: Landing_Weekly_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gerangschikt op downloads van de afgelopen 7 dagen`)
};

const pl_landing_weekly_hint = /** @type {(inputs: Landing_Weekly_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Uszeregowane według pobrań z ostatnich 7 dni`)
};

const pt_landing_weekly_hint = /** @type {(inputs: Landing_Weekly_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Classificados por downloads dos últimos 7 dias`)
};

const ru_landing_weekly_hint = /** @type {(inputs: Landing_Weekly_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`По числу скачиваний за последние 7 дней`)
};

const sv_landing_weekly_hint = /** @type {(inputs: Landing_Weekly_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rangordnade efter nedladdningar de senaste 7 dagarna`)
};

const tr_landing_weekly_hint = /** @type {(inputs: Landing_Weekly_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Son 7 gündeki indirmelere göre sıralı`)
};

const zh_landing_weekly_hint = /** @type {(inputs: Landing_Weekly_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`按最近 7 天的下载量排序`)
};

const ja_landing_weekly_hint = /** @type {(inputs: Landing_Weekly_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`過去7日間のダウンロード数順`)
};

/**
* | output |
* | --- |
* | "Ranked by downloads in the last 7 days" |
*
* @param {Landing_Weekly_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const landing_weekly_hint = /** @type {((inputs?: Landing_Weekly_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Landing_Weekly_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_landing_weekly_hint(inputs)
	if (locale === "de") return de_landing_weekly_hint(inputs)
	if (locale === "fr") return fr_landing_weekly_hint(inputs)
	if (locale === "it") return it_landing_weekly_hint(inputs)
	if (locale === "nl") return nl_landing_weekly_hint(inputs)
	if (locale === "pl") return pl_landing_weekly_hint(inputs)
	if (locale === "pt") return pt_landing_weekly_hint(inputs)
	if (locale === "ru") return ru_landing_weekly_hint(inputs)
	if (locale === "sv") return sv_landing_weekly_hint(inputs)
	if (locale === "tr") return tr_landing_weekly_hint(inputs)
	if (locale === "zh") return zh_landing_weekly_hint(inputs)
	if (locale === "ja") return ja_landing_weekly_hint(inputs)
	return en_landing_weekly_hint(inputs)
});
