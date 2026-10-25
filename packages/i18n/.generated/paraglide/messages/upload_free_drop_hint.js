/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ max: NonNullable<unknown> }} Upload_Free_Drop_HintInputs */

const en_upload_free_drop_hint = /** @type {(inputs: Upload_Free_Drop_HintInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Up to ${i?.max}, any file type`)
};

const es_upload_free_drop_hint = /** @type {(inputs: Upload_Free_Drop_HintInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Hasta ${i?.max}, cualquier tipo de archivo`)
};

const de_upload_free_drop_hint = /** @type {(inputs: Upload_Free_Drop_HintInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Bis zu ${i?.max}, jeder Dateityp`)
};

const fr_upload_free_drop_hint = /** @type {(inputs: Upload_Free_Drop_HintInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Jusqu’à ${i?.max}, tout type de fichier`)
};

const it_upload_free_drop_hint = /** @type {(inputs: Upload_Free_Drop_HintInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Fino a ${i?.max}, qualsiasi tipo di file`)
};

const nl_upload_free_drop_hint = /** @type {(inputs: Upload_Free_Drop_HintInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Tot ${i?.max}, elk bestandstype`)
};

const pl_upload_free_drop_hint = /** @type {(inputs: Upload_Free_Drop_HintInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Do ${i?.max}, dowolny typ pliku`)
};

const pt_upload_free_drop_hint = /** @type {(inputs: Upload_Free_Drop_HintInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Até ${i?.max}, qualquer tipo de arquivo`)
};

const ru_upload_free_drop_hint = /** @type {(inputs: Upload_Free_Drop_HintInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`До ${i?.max}, любой тип файла`)
};

const sv_upload_free_drop_hint = /** @type {(inputs: Upload_Free_Drop_HintInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Upp till ${i?.max}, valfri filtyp`)
};

const tr_upload_free_drop_hint = /** @type {(inputs: Upload_Free_Drop_HintInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.max} boyutuna kadar, her dosya türü`)
};

const zh_upload_free_drop_hint = /** @type {(inputs: Upload_Free_Drop_HintInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`最大 ${i?.max}，任意文件类型`)
};

const ja_upload_free_drop_hint = /** @type {(inputs: Upload_Free_Drop_HintInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`最大 ${i?.max}、ファイル形式は自由`)
};

/**
* | output |
* | --- |
* | "Up to {max}, any file type" |
*
* @param {Upload_Free_Drop_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_free_drop_hint = /** @type {((inputs: Upload_Free_Drop_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Free_Drop_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_free_drop_hint(inputs)
	if (locale === "de") return de_upload_free_drop_hint(inputs)
	if (locale === "fr") return fr_upload_free_drop_hint(inputs)
	if (locale === "it") return it_upload_free_drop_hint(inputs)
	if (locale === "nl") return nl_upload_free_drop_hint(inputs)
	if (locale === "pl") return pl_upload_free_drop_hint(inputs)
	if (locale === "pt") return pt_upload_free_drop_hint(inputs)
	if (locale === "ru") return ru_upload_free_drop_hint(inputs)
	if (locale === "sv") return sv_upload_free_drop_hint(inputs)
	if (locale === "tr") return tr_upload_free_drop_hint(inputs)
	if (locale === "zh") return zh_upload_free_drop_hint(inputs)
	if (locale === "ja") return ja_upload_free_drop_hint(inputs)
	return en_upload_free_drop_hint(inputs)
});
