/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ build: NonNullable<unknown> }} Content_Radar_Cta_TitleInputs */

const en_content_radar_cta_title = /** @type {(inputs: Content_Radar_Cta_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Tried any of these on ${i?.build}?`)
};

const es_content_radar_cta_title = /** @type {(inputs: Content_Radar_Cta_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`¿Probaste alguno de estos en ${i?.build}?`)
};

const de_content_radar_cta_title = /** @type {(inputs: Content_Radar_Cta_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Einen davon auf ${i?.build} ausprobiert?`)
};

const fr_content_radar_cta_title = /** @type {(inputs: Content_Radar_Cta_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Vous en avez essayé un sur ${i?.build} ?`)
};

const it_content_radar_cta_title = /** @type {(inputs: Content_Radar_Cta_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ne hai provata qualcuna su ${i?.build}?`)
};

const nl_content_radar_cta_title = /** @type {(inputs: Content_Radar_Cta_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Een van deze geprobeerd op ${i?.build}?`)
};

const pl_content_radar_cta_title = /** @type {(inputs: Content_Radar_Cta_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Sprawdziłeś któryś z nich na ${i?.build}?`)
};

const pt_content_radar_cta_title = /** @type {(inputs: Content_Radar_Cta_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Testou algum destes na ${i?.build}?`)
};

const ru_content_radar_cta_title = /** @type {(inputs: Content_Radar_Cta_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Пробовали что-то из этого на ${i?.build}?`)
};

const sv_content_radar_cta_title = /** @type {(inputs: Content_Radar_Cta_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Testat någon av dessa på ${i?.build}?`)
};

const tr_content_radar_cta_title = /** @type {(inputs: Content_Radar_Cta_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Bunlardan birini ${i?.build} sürümünde denedin mi?`)
};

const zh_content_radar_cta_title = /** @type {(inputs: Content_Radar_Cta_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`在 ${i?.build} 上试过其中的模组吗？`)
};

const ja_content_radar_cta_title = /** @type {(inputs: Content_Radar_Cta_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.build} でこれらを試しましたか？`)
};

/**
* | output |
* | --- |
* | "Tried any of these on {build}?" |
*
* @param {Content_Radar_Cta_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const content_radar_cta_title = /** @type {((inputs: Content_Radar_Cta_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Radar_Cta_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_content_radar_cta_title(inputs)
	if (locale === "de") return de_content_radar_cta_title(inputs)
	if (locale === "fr") return fr_content_radar_cta_title(inputs)
	if (locale === "it") return it_content_radar_cta_title(inputs)
	if (locale === "nl") return nl_content_radar_cta_title(inputs)
	if (locale === "pl") return pl_content_radar_cta_title(inputs)
	if (locale === "pt") return pt_content_radar_cta_title(inputs)
	if (locale === "ru") return ru_content_radar_cta_title(inputs)
	if (locale === "sv") return sv_content_radar_cta_title(inputs)
	if (locale === "tr") return tr_content_radar_cta_title(inputs)
	if (locale === "zh") return zh_content_radar_cta_title(inputs)
	if (locale === "ja") return ja_content_radar_cta_title(inputs)
	return en_content_radar_cta_title(inputs)
});
