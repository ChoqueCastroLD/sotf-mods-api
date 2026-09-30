/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Content_Radar_Broken_TitleInputs */

const en_content_radar_broken_title = /** @type {(inputs: Content_Radar_Broken_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reported broken`)
};

const es_content_radar_broken_title = /** @type {(inputs: Content_Radar_Broken_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reportados como rotos`)
};

const de_content_radar_broken_title = /** @type {(inputs: Content_Radar_Broken_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Als kaputt gemeldet`)
};

const fr_content_radar_broken_title = /** @type {(inputs: Content_Radar_Broken_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Signalés cassés`)
};

const it_content_radar_broken_title = /** @type {(inputs: Content_Radar_Broken_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Segnalate come rotte`)
};

const nl_content_radar_broken_title = /** @type {(inputs: Content_Radar_Broken_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gemeld als kapot`)
};

const pl_content_radar_broken_title = /** @type {(inputs: Content_Radar_Broken_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zgłoszone jako zepsute`)
};

const pt_content_radar_broken_title = /** @type {(inputs: Content_Radar_Broken_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Relatados como quebrados`)
};

const ru_content_radar_broken_title = /** @type {(inputs: Content_Radar_Broken_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Отмечены как сломанные`)
};

const sv_content_radar_broken_title = /** @type {(inputs: Content_Radar_Broken_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rapporterade som trasiga`)
};

const tr_content_radar_broken_title = /** @type {(inputs: Content_Radar_Broken_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bozuk olarak bildirilenler`)
};

const zh_content_radar_broken_title = /** @type {(inputs: Content_Radar_Broken_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`报告失效`)
};

const ja_content_radar_broken_title = /** @type {(inputs: Content_Radar_Broken_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`不具合の報告あり`)
};

/**
* | output |
* | --- |
* | "Reported broken" |
*
* @param {Content_Radar_Broken_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const content_radar_broken_title = /** @type {((inputs?: Content_Radar_Broken_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Radar_Broken_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_content_radar_broken_title(inputs)
	if (locale === "de") return de_content_radar_broken_title(inputs)
	if (locale === "fr") return fr_content_radar_broken_title(inputs)
	if (locale === "it") return it_content_radar_broken_title(inputs)
	if (locale === "nl") return nl_content_radar_broken_title(inputs)
	if (locale === "pl") return pl_content_radar_broken_title(inputs)
	if (locale === "pt") return pt_content_radar_broken_title(inputs)
	if (locale === "ru") return ru_content_radar_broken_title(inputs)
	if (locale === "sv") return sv_content_radar_broken_title(inputs)
	if (locale === "tr") return tr_content_radar_broken_title(inputs)
	if (locale === "zh") return zh_content_radar_broken_title(inputs)
	if (locale === "ja") return ja_content_radar_broken_title(inputs)
	return en_content_radar_broken_title(inputs)
});
