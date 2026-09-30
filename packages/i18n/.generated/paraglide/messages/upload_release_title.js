/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Release_TitleInputs */

const en_upload_release_title = /** @type {(inputs: Upload_Release_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Release`)
};

const es_upload_release_title = /** @type {(inputs: Upload_Release_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Versión`)
};

const de_upload_release_title = /** @type {(inputs: Upload_Release_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Release`)
};

const fr_upload_release_title = /** @type {(inputs: Upload_Release_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Version`)
};

const it_upload_release_title = /** @type {(inputs: Upload_Release_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rilascio`)
};

const nl_upload_release_title = /** @type {(inputs: Upload_Release_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Release`)
};

const pl_upload_release_title = /** @type {(inputs: Upload_Release_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wydanie`)
};

const pt_upload_release_title = /** @type {(inputs: Upload_Release_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lançamento`)
};

const ru_upload_release_title = /** @type {(inputs: Upload_Release_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Выпуск`)
};

const sv_upload_release_title = /** @type {(inputs: Upload_Release_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Release`)
};

const tr_upload_release_title = /** @type {(inputs: Upload_Release_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sürüm`)
};

const zh_upload_release_title = /** @type {(inputs: Upload_Release_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`发布版本`)
};

const ja_upload_release_title = /** @type {(inputs: Upload_Release_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`リリース`)
};

/**
* | output |
* | --- |
* | "Release" |
*
* @param {Upload_Release_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_release_title = /** @type {((inputs?: Upload_Release_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Release_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_release_title(inputs)
	if (locale === "de") return de_upload_release_title(inputs)
	if (locale === "fr") return fr_upload_release_title(inputs)
	if (locale === "it") return it_upload_release_title(inputs)
	if (locale === "nl") return nl_upload_release_title(inputs)
	if (locale === "pl") return pl_upload_release_title(inputs)
	if (locale === "pt") return pt_upload_release_title(inputs)
	if (locale === "ru") return ru_upload_release_title(inputs)
	if (locale === "sv") return sv_upload_release_title(inputs)
	if (locale === "tr") return tr_upload_release_title(inputs)
	if (locale === "zh") return zh_upload_release_title(inputs)
	if (locale === "ja") return ja_upload_release_title(inputs)
	return en_upload_release_title(inputs)
});
