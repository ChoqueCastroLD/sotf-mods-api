/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Step_MediaInputs */

const en_upload_step_media = /** @type {(inputs: Upload_Step_MediaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Media`)
};

const es_upload_step_media = /** @type {(inputs: Upload_Step_MediaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Medios`)
};

const de_upload_step_media = /** @type {(inputs: Upload_Step_MediaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Medien`)
};

const fr_upload_step_media = /** @type {(inputs: Upload_Step_MediaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Médias`)
};

const it_upload_step_media = /** @type {(inputs: Upload_Step_MediaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Media`)
};

const nl_upload_step_media = /** @type {(inputs: Upload_Step_MediaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Media`)
};

const pl_upload_step_media = /** @type {(inputs: Upload_Step_MediaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Multimedia`)
};

const pt_upload_step_media = /** @type {(inputs: Upload_Step_MediaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mídia`)
};

const ru_upload_step_media = /** @type {(inputs: Upload_Step_MediaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Медиа`)
};

const sv_upload_step_media = /** @type {(inputs: Upload_Step_MediaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Media`)
};

const tr_upload_step_media = /** @type {(inputs: Upload_Step_MediaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Medya`)
};

const zh_upload_step_media = /** @type {(inputs: Upload_Step_MediaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`媒体`)
};

const ja_upload_step_media = /** @type {(inputs: Upload_Step_MediaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`メディア`)
};

/**
* | output |
* | --- |
* | "Media" |
*
* @param {Upload_Step_MediaInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_step_media = /** @type {((inputs?: Upload_Step_MediaInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Step_MediaInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_step_media(inputs)
	if (locale === "de") return de_upload_step_media(inputs)
	if (locale === "fr") return fr_upload_step_media(inputs)
	if (locale === "it") return it_upload_step_media(inputs)
	if (locale === "nl") return nl_upload_step_media(inputs)
	if (locale === "pl") return pl_upload_step_media(inputs)
	if (locale === "pt") return pt_upload_step_media(inputs)
	if (locale === "ru") return ru_upload_step_media(inputs)
	if (locale === "sv") return sv_upload_step_media(inputs)
	if (locale === "tr") return tr_upload_step_media(inputs)
	if (locale === "zh") return zh_upload_step_media(inputs)
	if (locale === "ja") return ja_upload_step_media(inputs)
	return en_upload_step_media(inputs)
});
