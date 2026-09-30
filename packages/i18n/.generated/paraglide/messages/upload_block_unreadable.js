/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Block_UnreadableInputs */

const en_upload_block_unreadable = /** @type {(inputs: Upload_Block_UnreadableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The file couldn’t be read. Is it a valid, complete download?`)
};

const es_upload_block_unreadable = /** @type {(inputs: Upload_Block_UnreadableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No se pudo leer el archivo. ¿Es una descarga válida y completa?`)
};

const de_upload_block_unreadable = /** @type {(inputs: Upload_Block_UnreadableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Die Datei konnte nicht gelesen werden. Ist der Download gültig und vollständig?`)
};

const fr_upload_block_unreadable = /** @type {(inputs: Upload_Block_UnreadableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Le fichier n’a pas pu être lu. Est-ce un téléchargement valide et complet ?`)
};

const it_upload_block_unreadable = /** @type {(inputs: Upload_Block_UnreadableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Impossibile leggere il file. È un download valido e completo?`)
};

const nl_upload_block_unreadable = /** @type {(inputs: Upload_Block_UnreadableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Het bestand kon niet worden gelezen. Is het een geldige, volledige download?`)
};

const pl_upload_block_unreadable = /** @type {(inputs: Upload_Block_UnreadableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie udało się odczytać pliku. Czy to poprawne i kompletne pobranie?`)
};

const pt_upload_block_unreadable = /** @type {(inputs: Upload_Block_UnreadableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Não foi possível ler o arquivo. É um download válido e completo?`)
};

const ru_upload_block_unreadable = /** @type {(inputs: Upload_Block_UnreadableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Не удалось прочитать файл. Он скачан полностью и без ошибок?`)
};

const sv_upload_block_unreadable = /** @type {(inputs: Upload_Block_UnreadableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Filen kunde inte läsas. Är den en giltig, komplett nedladdning?`)
};

const tr_upload_block_unreadable = /** @type {(inputs: Upload_Block_UnreadableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dosya okunamadı. Geçerli ve eksiksiz bir indirme mi?`)
};

const zh_upload_block_unreadable = /** @type {(inputs: Upload_Block_UnreadableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`无法读取文件。它是完整有效的下载吗？`)
};

const ja_upload_block_unreadable = /** @type {(inputs: Upload_Block_UnreadableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ファイルを読み込めませんでした。正しく完全にダウンロードされていますか？`)
};

/**
* | output |
* | --- |
* | "The file couldn’t be read. Is it a valid, complete download?" |
*
* @param {Upload_Block_UnreadableInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_block_unreadable = /** @type {((inputs?: Upload_Block_UnreadableInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Block_UnreadableInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_block_unreadable(inputs)
	if (locale === "de") return de_upload_block_unreadable(inputs)
	if (locale === "fr") return fr_upload_block_unreadable(inputs)
	if (locale === "it") return it_upload_block_unreadable(inputs)
	if (locale === "nl") return nl_upload_block_unreadable(inputs)
	if (locale === "pl") return pl_upload_block_unreadable(inputs)
	if (locale === "pt") return pt_upload_block_unreadable(inputs)
	if (locale === "ru") return ru_upload_block_unreadable(inputs)
	if (locale === "sv") return sv_upload_block_unreadable(inputs)
	if (locale === "tr") return tr_upload_block_unreadable(inputs)
	if (locale === "zh") return zh_upload_block_unreadable(inputs)
	if (locale === "ja") return ja_upload_block_unreadable(inputs)
	return en_upload_block_unreadable(inputs)
});
