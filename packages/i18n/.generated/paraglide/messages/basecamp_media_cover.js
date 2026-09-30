/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Media_CoverInputs */

const en_basecamp_media_cover = /** @type {(inputs: Basecamp_Media_CoverInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cover`)
};

const es_basecamp_media_cover = /** @type {(inputs: Basecamp_Media_CoverInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Portada`)
};

const de_basecamp_media_cover = /** @type {(inputs: Basecamp_Media_CoverInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Titelbild`)
};

const fr_basecamp_media_cover = /** @type {(inputs: Basecamp_Media_CoverInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Couverture`)
};

const it_basecamp_media_cover = /** @type {(inputs: Basecamp_Media_CoverInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Copertina`)
};

const nl_basecamp_media_cover = /** @type {(inputs: Basecamp_Media_CoverInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Omslag`)
};

const pl_basecamp_media_cover = /** @type {(inputs: Basecamp_Media_CoverInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Okładka`)
};

const pt_basecamp_media_cover = /** @type {(inputs: Basecamp_Media_CoverInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Capa`)
};

const ru_basecamp_media_cover = /** @type {(inputs: Basecamp_Media_CoverInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Обложка`)
};

const sv_basecamp_media_cover = /** @type {(inputs: Basecamp_Media_CoverInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Omslag`)
};

const tr_basecamp_media_cover = /** @type {(inputs: Basecamp_Media_CoverInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kapak`)
};

const zh_basecamp_media_cover = /** @type {(inputs: Basecamp_Media_CoverInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`封面`)
};

const ja_basecamp_media_cover = /** @type {(inputs: Basecamp_Media_CoverInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`カバー`)
};

/**
* | output |
* | --- |
* | "Cover" |
*
* @param {Basecamp_Media_CoverInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_media_cover = /** @type {((inputs?: Basecamp_Media_CoverInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Media_CoverInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_media_cover(inputs)
	if (locale === "de") return de_basecamp_media_cover(inputs)
	if (locale === "fr") return fr_basecamp_media_cover(inputs)
	if (locale === "it") return it_basecamp_media_cover(inputs)
	if (locale === "nl") return nl_basecamp_media_cover(inputs)
	if (locale === "pl") return pl_basecamp_media_cover(inputs)
	if (locale === "pt") return pt_basecamp_media_cover(inputs)
	if (locale === "ru") return ru_basecamp_media_cover(inputs)
	if (locale === "sv") return sv_basecamp_media_cover(inputs)
	if (locale === "tr") return tr_basecamp_media_cover(inputs)
	if (locale === "zh") return zh_basecamp_media_cover(inputs)
	if (locale === "ja") return ja_basecamp_media_cover(inputs)
	return en_basecamp_media_cover(inputs)
});
