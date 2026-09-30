/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Drop_ReplaceInputs */

const en_upload_drop_replace = /** @type {(inputs: Upload_Drop_ReplaceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Drop another file to replace it`)
};

const es_upload_drop_replace = /** @type {(inputs: Upload_Drop_ReplaceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Suelta otro archivo para reemplazarlo`)
};

const de_upload_drop_replace = /** @type {(inputs: Upload_Drop_ReplaceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zieh eine andere Datei hierher, um sie zu ersetzen`)
};

const fr_upload_drop_replace = /** @type {(inputs: Upload_Drop_ReplaceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Déposez un autre fichier pour le remplacer`)
};

const it_upload_drop_replace = /** @type {(inputs: Upload_Drop_ReplaceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Trascina un altro file per sostituirlo`)
};

const nl_upload_drop_replace = /** @type {(inputs: Upload_Drop_ReplaceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sleep een ander bestand hierheen om het te vervangen`)
};

const pl_upload_drop_replace = /** @type {(inputs: Upload_Drop_ReplaceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Upuść inny plik, aby go zastąpić`)
};

const pt_upload_drop_replace = /** @type {(inputs: Upload_Drop_ReplaceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Solte outro arquivo para substituí-lo`)
};

const ru_upload_drop_replace = /** @type {(inputs: Upload_Drop_ReplaceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Перетащите другой файл, чтобы заменить`)
};

const sv_upload_drop_replace = /** @type {(inputs: Upload_Drop_ReplaceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Släpp en annan fil för att ersätta den`)
};

const tr_upload_drop_replace = /** @type {(inputs: Upload_Drop_ReplaceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Değiştirmek için başka bir dosya bırak`)
};

const zh_upload_drop_replace = /** @type {(inputs: Upload_Drop_ReplaceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`拖入另一个文件以替换`)
};

const ja_upload_drop_replace = /** @type {(inputs: Upload_Drop_ReplaceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`差し替えるには別のファイルをドロップ`)
};

/**
* | output |
* | --- |
* | "Drop another file to replace it" |
*
* @param {Upload_Drop_ReplaceInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_drop_replace = /** @type {((inputs?: Upload_Drop_ReplaceInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Drop_ReplaceInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_drop_replace(inputs)
	if (locale === "de") return de_upload_drop_replace(inputs)
	if (locale === "fr") return fr_upload_drop_replace(inputs)
	if (locale === "it") return it_upload_drop_replace(inputs)
	if (locale === "nl") return nl_upload_drop_replace(inputs)
	if (locale === "pl") return pl_upload_drop_replace(inputs)
	if (locale === "pt") return pt_upload_drop_replace(inputs)
	if (locale === "ru") return ru_upload_drop_replace(inputs)
	if (locale === "sv") return sv_upload_drop_replace(inputs)
	if (locale === "tr") return tr_upload_drop_replace(inputs)
	if (locale === "zh") return zh_upload_drop_replace(inputs)
	if (locale === "ja") return ja_upload_drop_replace(inputs)
	return en_upload_drop_replace(inputs)
});
