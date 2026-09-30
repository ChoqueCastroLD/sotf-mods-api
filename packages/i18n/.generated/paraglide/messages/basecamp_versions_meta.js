/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ date: NonNullable<unknown>, downloads: NonNullable<unknown>, size: NonNullable<unknown> }} Basecamp_Versions_MetaInputs */

const en_basecamp_versions_meta = /** @type {(inputs: Basecamp_Versions_MetaInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.date} · ${i?.downloads} downloads · ${i?.size}`)
};

const es_basecamp_versions_meta = /** @type {(inputs: Basecamp_Versions_MetaInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.date} · ${i?.downloads} descargas · ${i?.size}`)
};

const de_basecamp_versions_meta = /** @type {(inputs: Basecamp_Versions_MetaInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.date} · ${i?.downloads} Downloads · ${i?.size}`)
};

const fr_basecamp_versions_meta = /** @type {(inputs: Basecamp_Versions_MetaInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.date} · ${i?.downloads} téléchargements · ${i?.size}`)
};

const it_basecamp_versions_meta = /** @type {(inputs: Basecamp_Versions_MetaInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.date} · ${i?.downloads} download · ${i?.size}`)
};

const nl_basecamp_versions_meta = /** @type {(inputs: Basecamp_Versions_MetaInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.date} · ${i?.downloads} downloads · ${i?.size}`)
};

const pl_basecamp_versions_meta = /** @type {(inputs: Basecamp_Versions_MetaInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.date} · pobrania: ${i?.downloads} · ${i?.size}`)
};

const pt_basecamp_versions_meta = /** @type {(inputs: Basecamp_Versions_MetaInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.date} · ${i?.downloads} downloads · ${i?.size}`)
};

const ru_basecamp_versions_meta = /** @type {(inputs: Basecamp_Versions_MetaInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.date} · загрузок: ${i?.downloads} · ${i?.size}`)
};

const sv_basecamp_versions_meta = /** @type {(inputs: Basecamp_Versions_MetaInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.date} · ${i?.downloads} nedladdningar · ${i?.size}`)
};

const tr_basecamp_versions_meta = /** @type {(inputs: Basecamp_Versions_MetaInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.date} · ${i?.downloads} indirme · ${i?.size}`)
};

const zh_basecamp_versions_meta = /** @type {(inputs: Basecamp_Versions_MetaInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.date} · ${i?.downloads} 次下载 · ${i?.size}`)
};

const ja_basecamp_versions_meta = /** @type {(inputs: Basecamp_Versions_MetaInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.date} · ${i?.downloads} ダウンロード · ${i?.size}`)
};

/**
* | output |
* | --- |
* | "{date} · {downloads} downloads · {size}" |
*
* @param {Basecamp_Versions_MetaInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_versions_meta = /** @type {((inputs: Basecamp_Versions_MetaInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Versions_MetaInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_versions_meta(inputs)
	if (locale === "de") return de_basecamp_versions_meta(inputs)
	if (locale === "fr") return fr_basecamp_versions_meta(inputs)
	if (locale === "it") return it_basecamp_versions_meta(inputs)
	if (locale === "nl") return nl_basecamp_versions_meta(inputs)
	if (locale === "pl") return pl_basecamp_versions_meta(inputs)
	if (locale === "pt") return pt_basecamp_versions_meta(inputs)
	if (locale === "ru") return ru_basecamp_versions_meta(inputs)
	if (locale === "sv") return sv_basecamp_versions_meta(inputs)
	if (locale === "tr") return tr_basecamp_versions_meta(inputs)
	if (locale === "zh") return zh_basecamp_versions_meta(inputs)
	if (locale === "ja") return ja_basecamp_versions_meta(inputs)
	return en_basecamp_versions_meta(inputs)
});
