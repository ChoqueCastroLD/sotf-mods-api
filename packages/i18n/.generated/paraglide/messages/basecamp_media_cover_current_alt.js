/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Media_Cover_Current_AltInputs */

const en_basecamp_media_cover_current_alt = /** @type {(inputs: Basecamp_Media_Cover_Current_AltInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Current cover`)
};

const es_basecamp_media_cover_current_alt = /** @type {(inputs: Basecamp_Media_Cover_Current_AltInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Portada actual`)
};

const de_basecamp_media_cover_current_alt = /** @type {(inputs: Basecamp_Media_Cover_Current_AltInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aktuelles Titelbild`)
};

const fr_basecamp_media_cover_current_alt = /** @type {(inputs: Basecamp_Media_Cover_Current_AltInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Couverture actuelle`)
};

const it_basecamp_media_cover_current_alt = /** @type {(inputs: Basecamp_Media_Cover_Current_AltInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Copertina attuale`)
};

const nl_basecamp_media_cover_current_alt = /** @type {(inputs: Basecamp_Media_Cover_Current_AltInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Huidige omslag`)
};

const pl_basecamp_media_cover_current_alt = /** @type {(inputs: Basecamp_Media_Cover_Current_AltInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Obecna okładka`)
};

const pt_basecamp_media_cover_current_alt = /** @type {(inputs: Basecamp_Media_Cover_Current_AltInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Capa atual`)
};

const ru_basecamp_media_cover_current_alt = /** @type {(inputs: Basecamp_Media_Cover_Current_AltInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Текущая обложка`)
};

const sv_basecamp_media_cover_current_alt = /** @type {(inputs: Basecamp_Media_Cover_Current_AltInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nuvarande omslag`)
};

const tr_basecamp_media_cover_current_alt = /** @type {(inputs: Basecamp_Media_Cover_Current_AltInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mevcut kapak`)
};

const zh_basecamp_media_cover_current_alt = /** @type {(inputs: Basecamp_Media_Cover_Current_AltInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`当前封面`)
};

const ja_basecamp_media_cover_current_alt = /** @type {(inputs: Basecamp_Media_Cover_Current_AltInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`現在のカバー`)
};

/**
* | output |
* | --- |
* | "Current cover" |
*
* @param {Basecamp_Media_Cover_Current_AltInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_media_cover_current_alt = /** @type {((inputs?: Basecamp_Media_Cover_Current_AltInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Media_Cover_Current_AltInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_media_cover_current_alt(inputs)
	if (locale === "de") return de_basecamp_media_cover_current_alt(inputs)
	if (locale === "fr") return fr_basecamp_media_cover_current_alt(inputs)
	if (locale === "it") return it_basecamp_media_cover_current_alt(inputs)
	if (locale === "nl") return nl_basecamp_media_cover_current_alt(inputs)
	if (locale === "pl") return pl_basecamp_media_cover_current_alt(inputs)
	if (locale === "pt") return pt_basecamp_media_cover_current_alt(inputs)
	if (locale === "ru") return ru_basecamp_media_cover_current_alt(inputs)
	if (locale === "sv") return sv_basecamp_media_cover_current_alt(inputs)
	if (locale === "tr") return tr_basecamp_media_cover_current_alt(inputs)
	if (locale === "zh") return zh_basecamp_media_cover_current_alt(inputs)
	if (locale === "ja") return ja_basecamp_media_cover_current_alt(inputs)
	return en_basecamp_media_cover_current_alt(inputs)
});
