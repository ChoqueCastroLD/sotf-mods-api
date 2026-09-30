/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Content_Radar_Legend_TitleInputs */

const en_content_radar_legend_title = /** @type {(inputs: Content_Radar_Legend_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`How the status is decided`)
};

const es_content_radar_legend_title = /** @type {(inputs: Content_Radar_Legend_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cómo se decide el estado`)
};

const de_content_radar_legend_title = /** @type {(inputs: Content_Radar_Legend_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`So wird der Status bestimmt`)
};

const fr_content_radar_legend_title = /** @type {(inputs: Content_Radar_Legend_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Comment l’état est décidé`)
};

const it_content_radar_legend_title = /** @type {(inputs: Content_Radar_Legend_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Come si decide lo stato`)
};

const nl_content_radar_legend_title = /** @type {(inputs: Content_Radar_Legend_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zo wordt de status bepaald`)
};

const pl_content_radar_legend_title = /** @type {(inputs: Content_Radar_Legend_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jak ustalany jest stan`)
};

const pt_content_radar_legend_title = /** @type {(inputs: Content_Radar_Legend_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Como o status é decidido`)
};

const ru_content_radar_legend_title = /** @type {(inputs: Content_Radar_Legend_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Как определяется статус`)
};

const sv_content_radar_legend_title = /** @type {(inputs: Content_Radar_Legend_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Så bestäms statusen`)
};

const tr_content_radar_legend_title = /** @type {(inputs: Content_Radar_Legend_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Durum nasıl belirlenir`)
};

const zh_content_radar_legend_title = /** @type {(inputs: Content_Radar_Legend_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`状态如何判定`)
};

const ja_content_radar_legend_title = /** @type {(inputs: Content_Radar_Legend_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`状態の決まり方`)
};

/**
* | output |
* | --- |
* | "How the status is decided" |
*
* @param {Content_Radar_Legend_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const content_radar_legend_title = /** @type {((inputs?: Content_Radar_Legend_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Radar_Legend_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_content_radar_legend_title(inputs)
	if (locale === "de") return de_content_radar_legend_title(inputs)
	if (locale === "fr") return fr_content_radar_legend_title(inputs)
	if (locale === "it") return it_content_radar_legend_title(inputs)
	if (locale === "nl") return nl_content_radar_legend_title(inputs)
	if (locale === "pl") return pl_content_radar_legend_title(inputs)
	if (locale === "pt") return pt_content_radar_legend_title(inputs)
	if (locale === "ru") return ru_content_radar_legend_title(inputs)
	if (locale === "sv") return sv_content_radar_legend_title(inputs)
	if (locale === "tr") return tr_content_radar_legend_title(inputs)
	if (locale === "zh") return zh_content_radar_legend_title(inputs)
	if (locale === "ja") return ja_content_radar_legend_title(inputs)
	return en_content_radar_legend_title(inputs)
});
