/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ name: NonNullable<unknown> }} Mod_Video_TitleInputs */

const en_mod_video_title = /** @type {(inputs: Mod_Video_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Trailer of ${i?.name}`)
};

const es_mod_video_title = /** @type {(inputs: Mod_Video_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Tráiler de ${i?.name}`)
};

const de_mod_video_title = /** @type {(inputs: Mod_Video_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Trailer von ${i?.name}`)
};

const fr_mod_video_title = /** @type {(inputs: Mod_Video_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Bande-annonce de ${i?.name}`)
};

const it_mod_video_title = /** @type {(inputs: Mod_Video_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Trailer di ${i?.name}`)
};

const nl_mod_video_title = /** @type {(inputs: Mod_Video_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Trailer van ${i?.name}`)
};

const pl_mod_video_title = /** @type {(inputs: Mod_Video_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Zwiastun ${i?.name}`)
};

const pt_mod_video_title = /** @type {(inputs: Mod_Video_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Trailer de ${i?.name}`)
};

const ru_mod_video_title = /** @type {(inputs: Mod_Video_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Трейлер ${i?.name}`)
};

const sv_mod_video_title = /** @type {(inputs: Mod_Video_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Trailer för ${i?.name}`)
};

const tr_mod_video_title = /** @type {(inputs: Mod_Video_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} fragmanı`)
};

const zh_mod_video_title = /** @type {(inputs: Mod_Video_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} 预告片`)
};

const ja_mod_video_title = /** @type {(inputs: Mod_Video_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} のトレーラー`)
};

/**
* | output |
* | --- |
* | "Trailer of {name}" |
*
* @param {Mod_Video_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_video_title = /** @type {((inputs: Mod_Video_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Video_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_video_title(inputs)
	if (locale === "de") return de_mod_video_title(inputs)
	if (locale === "fr") return fr_mod_video_title(inputs)
	if (locale === "it") return it_mod_video_title(inputs)
	if (locale === "nl") return nl_mod_video_title(inputs)
	if (locale === "pl") return pl_mod_video_title(inputs)
	if (locale === "pt") return pt_mod_video_title(inputs)
	if (locale === "ru") return ru_mod_video_title(inputs)
	if (locale === "sv") return sv_mod_video_title(inputs)
	if (locale === "tr") return tr_mod_video_title(inputs)
	if (locale === "zh") return zh_mod_video_title(inputs)
	if (locale === "ja") return ja_mod_video_title(inputs)
	return en_mod_video_title(inputs)
});
