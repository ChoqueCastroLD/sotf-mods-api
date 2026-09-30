/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Landing_Trending_HintInputs */

const en_landing_trending_hint = /** @type {(inputs: Landing_Trending_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`By downloads in the last 7 days`)
};

const es_landing_trending_hint = /** @type {(inputs: Landing_Trending_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Por descargas de los últimos 7 días`)
};

const de_landing_trending_hint = /** @type {(inputs: Landing_Trending_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nach Downloads der letzten 7 Tage`)
};

const fr_landing_trending_hint = /** @type {(inputs: Landing_Trending_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Selon les téléchargements des 7 derniers jours`)
};

const it_landing_trending_hint = /** @type {(inputs: Landing_Trending_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`In base ai download degli ultimi 7 giorni`)
};

const nl_landing_trending_hint = /** @type {(inputs: Landing_Trending_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Op basis van downloads in de laatste 7 dagen`)
};

const pl_landing_trending_hint = /** @type {(inputs: Landing_Trending_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Według pobrań z ostatnich 7 dni`)
};

const pt_landing_trending_hint = /** @type {(inputs: Landing_Trending_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Por downloads nos últimos 7 dias`)
};

const ru_landing_trending_hint = /** @type {(inputs: Landing_Trending_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`По загрузкам за последние 7 дней`)
};

const sv_landing_trending_hint = /** @type {(inputs: Landing_Trending_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Efter nedladdningar de senaste 7 dagarna`)
};

const tr_landing_trending_hint = /** @type {(inputs: Landing_Trending_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Son 7 günün indirmelerine göre`)
};

const zh_landing_trending_hint = /** @type {(inputs: Landing_Trending_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`按最近 7 天的下载量`)
};

const ja_landing_trending_hint = /** @type {(inputs: Landing_Trending_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`直近7日間のダウンロード数順`)
};

/**
* | output |
* | --- |
* | "By downloads in the last 7 days" |
*
* @param {Landing_Trending_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const landing_trending_hint = /** @type {((inputs?: Landing_Trending_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Landing_Trending_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_landing_trending_hint(inputs)
	if (locale === "de") return de_landing_trending_hint(inputs)
	if (locale === "fr") return fr_landing_trending_hint(inputs)
	if (locale === "it") return it_landing_trending_hint(inputs)
	if (locale === "nl") return nl_landing_trending_hint(inputs)
	if (locale === "pl") return pl_landing_trending_hint(inputs)
	if (locale === "pt") return pt_landing_trending_hint(inputs)
	if (locale === "ru") return ru_landing_trending_hint(inputs)
	if (locale === "sv") return sv_landing_trending_hint(inputs)
	if (locale === "tr") return tr_landing_trending_hint(inputs)
	if (locale === "zh") return zh_landing_trending_hint(inputs)
	if (locale === "ja") return ja_landing_trending_hint(inputs)
	return en_landing_trending_hint(inputs)
});
