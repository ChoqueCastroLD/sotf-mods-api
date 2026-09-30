/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Media_SavedInputs */

const en_basecamp_media_saved = /** @type {(inputs: Basecamp_Media_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Media saved`)
};

const es_basecamp_media_saved = /** @type {(inputs: Basecamp_Media_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Medios guardados`)
};

const de_basecamp_media_saved = /** @type {(inputs: Basecamp_Media_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Medien gespeichert`)
};

const fr_basecamp_media_saved = /** @type {(inputs: Basecamp_Media_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Médias enregistrés`)
};

const it_basecamp_media_saved = /** @type {(inputs: Basecamp_Media_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Media salvati`)
};

const nl_basecamp_media_saved = /** @type {(inputs: Basecamp_Media_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Media opgeslagen`)
};

const pl_basecamp_media_saved = /** @type {(inputs: Basecamp_Media_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Media zapisane`)
};

const pt_basecamp_media_saved = /** @type {(inputs: Basecamp_Media_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mídia salva`)
};

const ru_basecamp_media_saved = /** @type {(inputs: Basecamp_Media_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Медиа сохранены`)
};

const sv_basecamp_media_saved = /** @type {(inputs: Basecamp_Media_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Media sparade`)
};

const tr_basecamp_media_saved = /** @type {(inputs: Basecamp_Media_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Medya kaydedildi`)
};

const zh_basecamp_media_saved = /** @type {(inputs: Basecamp_Media_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`媒体已保存`)
};

const ja_basecamp_media_saved = /** @type {(inputs: Basecamp_Media_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`メディアを保存しました`)
};

/**
* | output |
* | --- |
* | "Media saved" |
*
* @param {Basecamp_Media_SavedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_media_saved = /** @type {((inputs?: Basecamp_Media_SavedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Media_SavedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_media_saved(inputs)
	if (locale === "de") return de_basecamp_media_saved(inputs)
	if (locale === "fr") return fr_basecamp_media_saved(inputs)
	if (locale === "it") return it_basecamp_media_saved(inputs)
	if (locale === "nl") return nl_basecamp_media_saved(inputs)
	if (locale === "pl") return pl_basecamp_media_saved(inputs)
	if (locale === "pt") return pt_basecamp_media_saved(inputs)
	if (locale === "ru") return ru_basecamp_media_saved(inputs)
	if (locale === "sv") return sv_basecamp_media_saved(inputs)
	if (locale === "tr") return tr_basecamp_media_saved(inputs)
	if (locale === "zh") return zh_basecamp_media_saved(inputs)
	if (locale === "ja") return ja_basecamp_media_saved(inputs)
	return en_basecamp_media_saved(inputs)
});
