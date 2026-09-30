/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Content_Radar_Uptime_TitleInputs */

const en_content_radar_uptime_title = /** @type {(inputs: Content_Radar_Uptime_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Platform uptime`)
};

const es_content_radar_uptime_title = /** @type {(inputs: Content_Radar_Uptime_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Disponibilidad de la plataforma`)
};

const de_content_radar_uptime_title = /** @type {(inputs: Content_Radar_Uptime_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verfügbarkeit der Plattform`)
};

const fr_content_radar_uptime_title = /** @type {(inputs: Content_Radar_Uptime_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Disponibilité de la plateforme`)
};

const it_content_radar_uptime_title = /** @type {(inputs: Content_Radar_Uptime_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Disponibilità della piattaforma`)
};

const nl_content_radar_uptime_title = /** @type {(inputs: Content_Radar_Uptime_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Uptime van het platform`)
};

const pl_content_radar_uptime_title = /** @type {(inputs: Content_Radar_Uptime_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dostępność platformy`)
};

const pt_content_radar_uptime_title = /** @type {(inputs: Content_Radar_Uptime_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Disponibilidade da plataforma`)
};

const ru_content_radar_uptime_title = /** @type {(inputs: Content_Radar_Uptime_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Доступность платформы`)
};

const sv_content_radar_uptime_title = /** @type {(inputs: Content_Radar_Uptime_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Plattformens drifttid`)
};

const tr_content_radar_uptime_title = /** @type {(inputs: Content_Radar_Uptime_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Platform çalışma süresi`)
};

const zh_content_radar_uptime_title = /** @type {(inputs: Content_Radar_Uptime_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`平台可用性`)
};

const ja_content_radar_uptime_title = /** @type {(inputs: Content_Radar_Uptime_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`プラットフォームの稼働状況`)
};

/**
* | output |
* | --- |
* | "Platform uptime" |
*
* @param {Content_Radar_Uptime_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const content_radar_uptime_title = /** @type {((inputs?: Content_Radar_Uptime_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Radar_Uptime_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_content_radar_uptime_title(inputs)
	if (locale === "de") return de_content_radar_uptime_title(inputs)
	if (locale === "fr") return fr_content_radar_uptime_title(inputs)
	if (locale === "it") return it_content_radar_uptime_title(inputs)
	if (locale === "nl") return nl_content_radar_uptime_title(inputs)
	if (locale === "pl") return pl_content_radar_uptime_title(inputs)
	if (locale === "pt") return pt_content_radar_uptime_title(inputs)
	if (locale === "ru") return ru_content_radar_uptime_title(inputs)
	if (locale === "sv") return sv_content_radar_uptime_title(inputs)
	if (locale === "tr") return tr_content_radar_uptime_title(inputs)
	if (locale === "zh") return zh_content_radar_uptime_title(inputs)
	if (locale === "ja") return ja_content_radar_uptime_title(inputs)
	return en_content_radar_uptime_title(inputs)
});
