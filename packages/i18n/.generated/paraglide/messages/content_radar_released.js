/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ date: NonNullable<unknown> }} Content_Radar_ReleasedInputs */

const en_content_radar_released = /** @type {(inputs: Content_Radar_ReleasedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Released ${i?.date}`)
};

const es_content_radar_released = /** @type {(inputs: Content_Radar_ReleasedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Publicado el ${i?.date}`)
};

const de_content_radar_released = /** @type {(inputs: Content_Radar_ReleasedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Veröffentlicht am ${i?.date}`)
};

const fr_content_radar_released = /** @type {(inputs: Content_Radar_ReleasedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Publié le ${i?.date}`)
};

const it_content_radar_released = /** @type {(inputs: Content_Radar_ReleasedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Pubblicata il ${i?.date}`)
};

const nl_content_radar_released = /** @type {(inputs: Content_Radar_ReleasedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Uitgebracht op ${i?.date}`)
};

const pl_content_radar_released = /** @type {(inputs: Content_Radar_ReleasedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Wydano ${i?.date}`)
};

const pt_content_radar_released = /** @type {(inputs: Content_Radar_ReleasedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Lançado em ${i?.date}`)
};

const ru_content_radar_released = /** @type {(inputs: Content_Radar_ReleasedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Выпущен ${i?.date}`)
};

const sv_content_radar_released = /** @type {(inputs: Content_Radar_ReleasedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Släppt ${i?.date}`)
};

const tr_content_radar_released = /** @type {(inputs: Content_Radar_ReleasedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Yayın tarihi: ${i?.date}`)
};

const zh_content_radar_released = /** @type {(inputs: Content_Radar_ReleasedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`发布于 ${i?.date}`)
};

const ja_content_radar_released = /** @type {(inputs: Content_Radar_ReleasedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.date} リリース`)
};

/**
* | output |
* | --- |
* | "Released {date}" |
*
* @param {Content_Radar_ReleasedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const content_radar_released = /** @type {((inputs: Content_Radar_ReleasedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Radar_ReleasedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_content_radar_released(inputs)
	if (locale === "de") return de_content_radar_released(inputs)
	if (locale === "fr") return fr_content_radar_released(inputs)
	if (locale === "it") return it_content_radar_released(inputs)
	if (locale === "nl") return nl_content_radar_released(inputs)
	if (locale === "pl") return pl_content_radar_released(inputs)
	if (locale === "pt") return pt_content_radar_released(inputs)
	if (locale === "ru") return ru_content_radar_released(inputs)
	if (locale === "sv") return sv_content_radar_released(inputs)
	if (locale === "tr") return tr_content_radar_released(inputs)
	if (locale === "zh") return zh_content_radar_released(inputs)
	if (locale === "ja") return ja_content_radar_released(inputs)
	return en_content_radar_released(inputs)
});
