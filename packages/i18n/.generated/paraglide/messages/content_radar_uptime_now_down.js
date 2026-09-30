/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Content_Radar_Uptime_Now_DownInputs */

const en_content_radar_uptime_now_down = /** @type {(inputs: Content_Radar_Uptime_Now_DownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Down now`)
};

const es_content_radar_uptime_now_down = /** @type {(inputs: Content_Radar_Uptime_Now_DownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Caído ahora`)
};

const de_content_radar_uptime_now_down = /** @type {(inputs: Content_Radar_Uptime_Now_DownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gerade ausgefallen`)
};

const fr_content_radar_uptime_now_down = /** @type {(inputs: Content_Radar_Uptime_Now_DownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hors service`)
};

const it_content_radar_uptime_now_down = /** @type {(inputs: Content_Radar_Uptime_Now_DownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Non disponibile`)
};

const nl_content_radar_uptime_now_down = /** @type {(inputs: Content_Radar_Uptime_Now_DownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nu onbereikbaar`)
};

const pl_content_radar_uptime_now_down = /** @type {(inputs: Content_Radar_Uptime_Now_DownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie działa`)
};

const pt_content_radar_uptime_now_down = /** @type {(inputs: Content_Radar_Uptime_Now_DownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fora do ar agora`)
};

const ru_content_radar_uptime_now_down = /** @type {(inputs: Content_Radar_Uptime_Now_DownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Сейчас недоступно`)
};

const sv_content_radar_uptime_now_down = /** @type {(inputs: Content_Radar_Uptime_Now_DownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nere just nu`)
};

const tr_content_radar_uptime_now_down = /** @type {(inputs: Content_Radar_Uptime_Now_DownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Şu an kapalı`)
};

const zh_content_radar_uptime_now_down = /** @type {(inputs: Content_Radar_Uptime_Now_DownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`当前不可用`)
};

const ja_content_radar_uptime_now_down = /** @type {(inputs: Content_Radar_Uptime_Now_DownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`現在停止中`)
};

/**
* | output |
* | --- |
* | "Down now" |
*
* @param {Content_Radar_Uptime_Now_DownInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const content_radar_uptime_now_down = /** @type {((inputs?: Content_Radar_Uptime_Now_DownInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Radar_Uptime_Now_DownInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_content_radar_uptime_now_down(inputs)
	if (locale === "de") return de_content_radar_uptime_now_down(inputs)
	if (locale === "fr") return fr_content_radar_uptime_now_down(inputs)
	if (locale === "it") return it_content_radar_uptime_now_down(inputs)
	if (locale === "nl") return nl_content_radar_uptime_now_down(inputs)
	if (locale === "pl") return pl_content_radar_uptime_now_down(inputs)
	if (locale === "pt") return pt_content_radar_uptime_now_down(inputs)
	if (locale === "ru") return ru_content_radar_uptime_now_down(inputs)
	if (locale === "sv") return sv_content_radar_uptime_now_down(inputs)
	if (locale === "tr") return tr_content_radar_uptime_now_down(inputs)
	if (locale === "zh") return zh_content_radar_uptime_now_down(inputs)
	if (locale === "ja") return ja_content_radar_uptime_now_down(inputs)
	return en_content_radar_uptime_now_down(inputs)
});
