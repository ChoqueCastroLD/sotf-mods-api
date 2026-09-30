/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Preflight_Tags_OkInputs */

const en_upload_preflight_tags_ok = /** @type {(inputs: Upload_Preflight_Tags_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tags chosen.`)
};

const es_upload_preflight_tags_ok = /** @type {(inputs: Upload_Preflight_Tags_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Etiquetas elegidas.`)
};

const de_upload_preflight_tags_ok = /** @type {(inputs: Upload_Preflight_Tags_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tags gewählt.`)
};

const fr_upload_preflight_tags_ok = /** @type {(inputs: Upload_Preflight_Tags_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tags choisis.`)
};

const it_upload_preflight_tags_ok = /** @type {(inputs: Upload_Preflight_Tags_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tag scelti.`)
};

const nl_upload_preflight_tags_ok = /** @type {(inputs: Upload_Preflight_Tags_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tags gekozen.`)
};

const pl_upload_preflight_tags_ok = /** @type {(inputs: Upload_Preflight_Tags_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tagi wybrane.`)
};

const pt_upload_preflight_tags_ok = /** @type {(inputs: Upload_Preflight_Tags_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tags escolhidas.`)
};

const ru_upload_preflight_tags_ok = /** @type {(inputs: Upload_Preflight_Tags_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Теги выбраны.`)
};

const sv_upload_preflight_tags_ok = /** @type {(inputs: Upload_Preflight_Tags_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Taggar valda.`)
};

const tr_upload_preflight_tags_ok = /** @type {(inputs: Upload_Preflight_Tags_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Etiketler seçildi.`)
};

const zh_upload_preflight_tags_ok = /** @type {(inputs: Upload_Preflight_Tags_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已选择标签。`)
};

const ja_upload_preflight_tags_ok = /** @type {(inputs: Upload_Preflight_Tags_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`タグを選択済み。`)
};

/**
* | output |
* | --- |
* | "Tags chosen." |
*
* @param {Upload_Preflight_Tags_OkInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_preflight_tags_ok = /** @type {((inputs?: Upload_Preflight_Tags_OkInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Preflight_Tags_OkInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_preflight_tags_ok(inputs)
	if (locale === "de") return de_upload_preflight_tags_ok(inputs)
	if (locale === "fr") return fr_upload_preflight_tags_ok(inputs)
	if (locale === "it") return it_upload_preflight_tags_ok(inputs)
	if (locale === "nl") return nl_upload_preflight_tags_ok(inputs)
	if (locale === "pl") return pl_upload_preflight_tags_ok(inputs)
	if (locale === "pt") return pt_upload_preflight_tags_ok(inputs)
	if (locale === "ru") return ru_upload_preflight_tags_ok(inputs)
	if (locale === "sv") return sv_upload_preflight_tags_ok(inputs)
	if (locale === "tr") return tr_upload_preflight_tags_ok(inputs)
	if (locale === "zh") return zh_upload_preflight_tags_ok(inputs)
	if (locale === "ja") return ja_upload_preflight_tags_ok(inputs)
	return en_upload_preflight_tags_ok(inputs)
});
