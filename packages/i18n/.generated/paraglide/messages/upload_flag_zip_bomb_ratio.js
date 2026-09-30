/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Flag_Zip_Bomb_RatioInputs */

const en_upload_flag_zip_bomb_ratio = /** @type {(inputs: Upload_Flag_Zip_Bomb_RatioInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The compression ratio is suspiciously high.`)
};

const es_upload_flag_zip_bomb_ratio = /** @type {(inputs: Upload_Flag_Zip_Bomb_RatioInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La tasa de compresión es sospechosamente alta.`)
};

const de_upload_flag_zip_bomb_ratio = /** @type {(inputs: Upload_Flag_Zip_Bomb_RatioInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Das Kompressionsverhältnis ist verdächtig hoch.`)
};

const fr_upload_flag_zip_bomb_ratio = /** @type {(inputs: Upload_Flag_Zip_Bomb_RatioInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Le taux de compression est anormalement élevé.`)
};

const it_upload_flag_zip_bomb_ratio = /** @type {(inputs: Upload_Flag_Zip_Bomb_RatioInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Il rapporto di compressione è sospettosamente alto.`)
};

const nl_upload_flag_zip_bomb_ratio = /** @type {(inputs: Upload_Flag_Zip_Bomb_RatioInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De compressieverhouding is verdacht hoog.`)
};

const pl_upload_flag_zip_bomb_ratio = /** @type {(inputs: Upload_Flag_Zip_Bomb_RatioInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Stopień kompresji jest podejrzanie wysoki.`)
};

const pt_upload_flag_zip_bomb_ratio = /** @type {(inputs: Upload_Flag_Zip_Bomb_RatioInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`A taxa de compressão é suspeitamente alta.`)
};

const ru_upload_flag_zip_bomb_ratio = /** @type {(inputs: Upload_Flag_Zip_Bomb_RatioInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Подозрительно высокая степень сжатия.`)
};

const sv_upload_flag_zip_bomb_ratio = /** @type {(inputs: Upload_Flag_Zip_Bomb_RatioInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Komprimeringsgraden är misstänkt hög.`)
};

const tr_upload_flag_zip_bomb_ratio = /** @type {(inputs: Upload_Flag_Zip_Bomb_RatioInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sıkıştırma oranı şüpheli derecede yüksek.`)
};

const zh_upload_flag_zip_bomb_ratio = /** @type {(inputs: Upload_Flag_Zip_Bomb_RatioInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`压缩比异常偏高。`)
};

const ja_upload_flag_zip_bomb_ratio = /** @type {(inputs: Upload_Flag_Zip_Bomb_RatioInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`圧縮率が不自然に高すぎます。`)
};

/**
* | output |
* | --- |
* | "The compression ratio is suspiciously high." |
*
* @param {Upload_Flag_Zip_Bomb_RatioInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_flag_zip_bomb_ratio = /** @type {((inputs?: Upload_Flag_Zip_Bomb_RatioInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Flag_Zip_Bomb_RatioInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_flag_zip_bomb_ratio(inputs)
	if (locale === "de") return de_upload_flag_zip_bomb_ratio(inputs)
	if (locale === "fr") return fr_upload_flag_zip_bomb_ratio(inputs)
	if (locale === "it") return it_upload_flag_zip_bomb_ratio(inputs)
	if (locale === "nl") return nl_upload_flag_zip_bomb_ratio(inputs)
	if (locale === "pl") return pl_upload_flag_zip_bomb_ratio(inputs)
	if (locale === "pt") return pt_upload_flag_zip_bomb_ratio(inputs)
	if (locale === "ru") return ru_upload_flag_zip_bomb_ratio(inputs)
	if (locale === "sv") return sv_upload_flag_zip_bomb_ratio(inputs)
	if (locale === "tr") return tr_upload_flag_zip_bomb_ratio(inputs)
	if (locale === "zh") return zh_upload_flag_zip_bomb_ratio(inputs)
	if (locale === "ja") return ja_upload_flag_zip_bomb_ratio(inputs)
	return en_upload_flag_zip_bomb_ratio(inputs)
});
