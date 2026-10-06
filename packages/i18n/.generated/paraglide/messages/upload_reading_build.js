/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Reading_BuildInputs */

const en_upload_reading_build = /** @type {(inputs: Upload_Reading_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reading the build…`)
};

const es_upload_reading_build = /** @type {(inputs: Upload_Reading_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Leyendo la build…`)
};

const de_upload_reading_build = /** @type {(inputs: Upload_Reading_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Build wird gelesen…`)
};

const fr_upload_reading_build = /** @type {(inputs: Upload_Reading_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lecture du build…`)
};

const it_upload_reading_build = /** @type {(inputs: Upload_Reading_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lettura della build…`)
};

const nl_upload_reading_build = /** @type {(inputs: Upload_Reading_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Build lezen…`)
};

const pl_upload_reading_build = /** @type {(inputs: Upload_Reading_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Odczytywanie builda…`)
};

const pt_upload_reading_build = /** @type {(inputs: Upload_Reading_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lendo a build…`)
};

const ru_upload_reading_build = /** @type {(inputs: Upload_Reading_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Читаем постройку…`)
};

const sv_upload_reading_build = /** @type {(inputs: Upload_Reading_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Läser bygget…`)
};

const tr_upload_reading_build = /** @type {(inputs: Upload_Reading_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yapı okunuyor…`)
};

const zh_upload_reading_build = /** @type {(inputs: Upload_Reading_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`正在读取建筑…`)
};

const ja_upload_reading_build = /** @type {(inputs: Upload_Reading_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`建築を読み込み中…`)
};

/**
* | output |
* | --- |
* | "Reading the build…" |
*
* @param {Upload_Reading_BuildInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_reading_build = /** @type {((inputs?: Upload_Reading_BuildInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Reading_BuildInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_reading_build(inputs)
	if (locale === "de") return de_upload_reading_build(inputs)
	if (locale === "fr") return fr_upload_reading_build(inputs)
	if (locale === "it") return it_upload_reading_build(inputs)
	if (locale === "nl") return nl_upload_reading_build(inputs)
	if (locale === "pl") return pl_upload_reading_build(inputs)
	if (locale === "pt") return pt_upload_reading_build(inputs)
	if (locale === "ru") return ru_upload_reading_build(inputs)
	if (locale === "sv") return sv_upload_reading_build(inputs)
	if (locale === "tr") return tr_upload_reading_build(inputs)
	if (locale === "zh") return zh_upload_reading_build(inputs)
	if (locale === "ja") return ja_upload_reading_build(inputs)
	return en_upload_reading_build(inputs)
});
