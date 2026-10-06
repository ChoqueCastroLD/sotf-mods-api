/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Success_Live_TitleInputs */

const en_upload_success_live_title = /** @type {(inputs: Upload_Success_Live_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Published`)
};

const es_upload_success_live_title = /** @type {(inputs: Upload_Success_Live_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publicado`)
};

const de_upload_success_live_title = /** @type {(inputs: Upload_Success_Live_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Veröffentlicht`)
};

const fr_upload_success_live_title = /** @type {(inputs: Upload_Success_Live_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publié`)
};

const it_upload_success_live_title = /** @type {(inputs: Upload_Success_Live_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pubblicato`)
};

const nl_upload_success_live_title = /** @type {(inputs: Upload_Success_Live_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gepubliceerd`)
};

const pl_upload_success_live_title = /** @type {(inputs: Upload_Success_Live_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Opublikowano`)
};

const pt_upload_success_live_title = /** @type {(inputs: Upload_Success_Live_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publicado`)
};

const ru_upload_success_live_title = /** @type {(inputs: Upload_Success_Live_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Опубликовано`)
};

const sv_upload_success_live_title = /** @type {(inputs: Upload_Success_Live_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publicerad`)
};

const tr_upload_success_live_title = /** @type {(inputs: Upload_Success_Live_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yayınlandı`)
};

const zh_upload_success_live_title = /** @type {(inputs: Upload_Success_Live_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已发布`)
};

const ja_upload_success_live_title = /** @type {(inputs: Upload_Success_Live_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`公開しました`)
};

/**
* | output |
* | --- |
* | "Published" |
*
* @param {Upload_Success_Live_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_success_live_title = /** @type {((inputs?: Upload_Success_Live_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Success_Live_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_success_live_title(inputs)
	if (locale === "de") return de_upload_success_live_title(inputs)
	if (locale === "fr") return fr_upload_success_live_title(inputs)
	if (locale === "it") return it_upload_success_live_title(inputs)
	if (locale === "nl") return nl_upload_success_live_title(inputs)
	if (locale === "pl") return pl_upload_success_live_title(inputs)
	if (locale === "pt") return pt_upload_success_live_title(inputs)
	if (locale === "ru") return ru_upload_success_live_title(inputs)
	if (locale === "sv") return sv_upload_success_live_title(inputs)
	if (locale === "tr") return tr_upload_success_live_title(inputs)
	if (locale === "zh") return zh_upload_success_live_title(inputs)
	if (locale === "ja") return ja_upload_success_live_title(inputs)
	return en_upload_success_live_title(inputs)
});
