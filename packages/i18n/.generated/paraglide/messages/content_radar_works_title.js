/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Content_Radar_Works_TitleInputs */

const en_content_radar_works_title = /** @type {(inputs: Content_Radar_Works_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Confirmed working`)
};

const es_content_radar_works_title = /** @type {(inputs: Content_Radar_Works_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Confirmados que funcionan`)
};

const de_content_radar_works_title = /** @type {(inputs: Content_Radar_Works_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bestätigt funktionsfähig`)
};

const fr_content_radar_works_title = /** @type {(inputs: Content_Radar_Works_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Confirmés fonctionnels`)
};

const it_content_radar_works_title = /** @type {(inputs: Content_Radar_Works_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Confermate funzionanti`)
};

const nl_content_radar_works_title = /** @type {(inputs: Content_Radar_Works_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bevestigd werkend`)
};

const pl_content_radar_works_title = /** @type {(inputs: Content_Radar_Works_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Potwierdzone jako działające`)
};

const pt_content_radar_works_title = /** @type {(inputs: Content_Radar_Works_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Confirmados funcionando`)
};

const ru_content_radar_works_title = /** @type {(inputs: Content_Radar_Works_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Подтверждено: работают`)
};

const sv_content_radar_works_title = /** @type {(inputs: Content_Radar_Works_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bekräftat fungerande`)
};

const tr_content_radar_works_title = /** @type {(inputs: Content_Radar_Works_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Çalıştığı doğrulananlar`)
};

const zh_content_radar_works_title = /** @type {(inputs: Content_Radar_Works_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`确认可用`)
};

const ja_content_radar_works_title = /** @type {(inputs: Content_Radar_Works_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`動作確認済み`)
};

/**
* | output |
* | --- |
* | "Confirmed working" |
*
* @param {Content_Radar_Works_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const content_radar_works_title = /** @type {((inputs?: Content_Radar_Works_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Radar_Works_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_content_radar_works_title(inputs)
	if (locale === "de") return de_content_radar_works_title(inputs)
	if (locale === "fr") return fr_content_radar_works_title(inputs)
	if (locale === "it") return it_content_radar_works_title(inputs)
	if (locale === "nl") return nl_content_radar_works_title(inputs)
	if (locale === "pl") return pl_content_radar_works_title(inputs)
	if (locale === "pt") return pt_content_radar_works_title(inputs)
	if (locale === "ru") return ru_content_radar_works_title(inputs)
	if (locale === "sv") return sv_content_radar_works_title(inputs)
	if (locale === "tr") return tr_content_radar_works_title(inputs)
	if (locale === "zh") return zh_content_radar_works_title(inputs)
	if (locale === "ja") return ja_content_radar_works_title(inputs)
	return en_content_radar_works_title(inputs)
});
