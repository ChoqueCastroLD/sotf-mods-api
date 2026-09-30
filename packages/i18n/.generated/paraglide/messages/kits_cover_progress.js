/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ percent: NonNullable<unknown> }} Kits_Cover_ProgressInputs */

const en_kits_cover_progress = /** @type {(inputs: Kits_Cover_ProgressInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Uploading… ${i?.percent}%`)
};

const es_kits_cover_progress = /** @type {(inputs: Kits_Cover_ProgressInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Subiendo… ${i?.percent} %`)
};

const de_kits_cover_progress = /** @type {(inputs: Kits_Cover_ProgressInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Wird hochgeladen … ${i?.percent} %`)
};

const fr_kits_cover_progress = /** @type {(inputs: Kits_Cover_ProgressInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Téléversement… ${i?.percent} %`)
};

const it_kits_cover_progress = /** @type {(inputs: Kits_Cover_ProgressInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Caricamento… ${i?.percent}%`)
};

const nl_kits_cover_progress = /** @type {(inputs: Kits_Cover_ProgressInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Uploaden… ${i?.percent}%`)
};

const pl_kits_cover_progress = /** @type {(inputs: Kits_Cover_ProgressInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Przesyłanie… ${i?.percent}%`)
};

const pt_kits_cover_progress = /** @type {(inputs: Kits_Cover_ProgressInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Enviando… ${i?.percent}%`)
};

const ru_kits_cover_progress = /** @type {(inputs: Kits_Cover_ProgressInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Загрузка… ${i?.percent}%`)
};

const sv_kits_cover_progress = /** @type {(inputs: Kits_Cover_ProgressInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Laddar upp … ${i?.percent} %`)
};

const tr_kits_cover_progress = /** @type {(inputs: Kits_Cover_ProgressInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Yükleniyor… %${i?.percent}`)
};

const zh_kits_cover_progress = /** @type {(inputs: Kits_Cover_ProgressInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`正在上传… ${i?.percent}%`)
};

const ja_kits_cover_progress = /** @type {(inputs: Kits_Cover_ProgressInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`アップロード中… ${i?.percent}%`)
};

/**
* | output |
* | --- |
* | "Uploading… {percent}%" |
*
* @param {Kits_Cover_ProgressInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kits_cover_progress = /** @type {((inputs: Kits_Cover_ProgressInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Cover_ProgressInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kits_cover_progress(inputs)
	if (locale === "de") return de_kits_cover_progress(inputs)
	if (locale === "fr") return fr_kits_cover_progress(inputs)
	if (locale === "it") return it_kits_cover_progress(inputs)
	if (locale === "nl") return nl_kits_cover_progress(inputs)
	if (locale === "pl") return pl_kits_cover_progress(inputs)
	if (locale === "pt") return pt_kits_cover_progress(inputs)
	if (locale === "ru") return ru_kits_cover_progress(inputs)
	if (locale === "sv") return sv_kits_cover_progress(inputs)
	if (locale === "tr") return tr_kits_cover_progress(inputs)
	if (locale === "zh") return zh_kits_cover_progress(inputs)
	if (locale === "ja") return ja_kits_cover_progress(inputs)
	return en_kits_cover_progress(inputs)
});
