/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Hint_Redloader_TitleInputs */

const en_upload_hint_redloader_title = /** @type {(inputs: Upload_Hint_Redloader_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`This looks like a RedLoader mod`)
};

const es_upload_hint_redloader_title = /** @type {(inputs: Upload_Hint_Redloader_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Parece un mod de RedLoader`)
};

const de_upload_hint_redloader_title = /** @type {(inputs: Upload_Hint_Redloader_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Das sieht nach einer RedLoader-Mod aus`)
};

const fr_upload_hint_redloader_title = /** @type {(inputs: Upload_Hint_Redloader_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cela ressemble à un mod RedLoader`)
};

const it_upload_hint_redloader_title = /** @type {(inputs: Upload_Hint_Redloader_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sembra una mod RedLoader`)
};

const nl_upload_hint_redloader_title = /** @type {(inputs: Upload_Hint_Redloader_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dit lijkt een RedLoader-mod`)
};

const pl_upload_hint_redloader_title = /** @type {(inputs: Upload_Hint_Redloader_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`To wygląda na mod do RedLoadera`)
};

const pt_upload_hint_redloader_title = /** @type {(inputs: Upload_Hint_Redloader_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Parece um mod do RedLoader`)
};

const ru_upload_hint_redloader_title = /** @type {(inputs: Upload_Hint_Redloader_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Похоже на мод для RedLoader`)
};

const sv_upload_hint_redloader_title = /** @type {(inputs: Upload_Hint_Redloader_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Det här ser ut som en RedLoader-modd`)
};

const tr_upload_hint_redloader_title = /** @type {(inputs: Upload_Hint_Redloader_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu bir RedLoader moduna benziyor`)
};

const zh_upload_hint_redloader_title = /** @type {(inputs: Upload_Hint_Redloader_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`这看起来是 RedLoader 模组`)
};

const ja_upload_hint_redloader_title = /** @type {(inputs: Upload_Hint_Redloader_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`RedLoader 用のMODのようです`)
};

/**
* | output |
* | --- |
* | "This looks like a RedLoader mod" |
*
* @param {Upload_Hint_Redloader_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_hint_redloader_title = /** @type {((inputs?: Upload_Hint_Redloader_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Hint_Redloader_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_hint_redloader_title(inputs)
	if (locale === "de") return de_upload_hint_redloader_title(inputs)
	if (locale === "fr") return fr_upload_hint_redloader_title(inputs)
	if (locale === "it") return it_upload_hint_redloader_title(inputs)
	if (locale === "nl") return nl_upload_hint_redloader_title(inputs)
	if (locale === "pl") return pl_upload_hint_redloader_title(inputs)
	if (locale === "pt") return pt_upload_hint_redloader_title(inputs)
	if (locale === "ru") return ru_upload_hint_redloader_title(inputs)
	if (locale === "sv") return sv_upload_hint_redloader_title(inputs)
	if (locale === "tr") return tr_upload_hint_redloader_title(inputs)
	if (locale === "zh") return zh_upload_hint_redloader_title(inputs)
	if (locale === "ja") return ja_upload_hint_redloader_title(inputs)
	return en_upload_hint_redloader_title(inputs)
});
