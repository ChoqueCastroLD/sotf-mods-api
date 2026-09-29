/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Errors_Code_Payload_Too_Large_DetailInputs */

const en_errors_code_payload_too_large_detail = /** @type {(inputs: Errors_Code_Payload_Too_Large_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`That file is over the size limit. Compress it or upload a smaller one.`)
};

const es_errors_code_payload_too_large_detail = /** @type {(inputs: Errors_Code_Payload_Too_Large_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ese archivo supera el límite de tamaño. Comprímelo o sube uno más pequeño.`)
};

const de_errors_code_payload_too_large_detail = /** @type {(inputs: Errors_Code_Payload_Too_Large_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Die Datei überschreitet die Größengrenze. Komprimiere sie oder lade eine kleinere hoch.`)
};

const fr_errors_code_payload_too_large_detail = /** @type {(inputs: Errors_Code_Payload_Too_Large_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ce fichier dépasse la taille maximale. Compressez-le ou envoyez-en un plus petit.`)
};

const it_errors_code_payload_too_large_detail = /** @type {(inputs: Errors_Code_Payload_Too_Large_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Il file supera il limite di dimensione. Comprimilo o caricane uno più piccolo.`)
};

const nl_errors_code_payload_too_large_detail = /** @type {(inputs: Errors_Code_Payload_Too_Large_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dat bestand is groter dan toegestaan. Comprimeer het of upload een kleiner bestand.`)
};

const pl_errors_code_payload_too_large_detail = /** @type {(inputs: Errors_Code_Payload_Too_Large_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ten plik przekracza limit rozmiaru. Skompresuj go lub prześlij mniejszy.`)
};

const pt_errors_code_payload_too_large_detail = /** @type {(inputs: Errors_Code_Payload_Too_Large_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Esse arquivo passa do limite de tamanho. Compacte-o ou envie um menor.`)
};

const ru_errors_code_payload_too_large_detail = /** @type {(inputs: Errors_Code_Payload_Too_Large_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Файл превышает допустимый размер. Сожмите его или загрузите файл поменьше.`)
};

const sv_errors_code_payload_too_large_detail = /** @type {(inputs: Errors_Code_Payload_Too_Large_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Filen överskrider storleksgränsen. Komprimera den eller ladda upp en mindre.`)
};

const tr_errors_code_payload_too_large_detail = /** @type {(inputs: Errors_Code_Payload_Too_Large_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu dosya boyut sınırını aşıyor. Sıkıştır ya da daha küçük bir dosya yükle.`)
};

const zh_errors_code_payload_too_large_detail = /** @type {(inputs: Errors_Code_Payload_Too_Large_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`该文件超出大小限制。请压缩后再传，或上传更小的文件。`)
};

const ja_errors_code_payload_too_large_detail = /** @type {(inputs: Errors_Code_Payload_Too_Large_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`このファイルはサイズの上限を超えています。圧縮するか、小さいファイルをアップロードしてください。`)
};

/**
* | output |
* | --- |
* | "That file is over the size limit. Compress it or upload a smaller one." |
*
* @param {Errors_Code_Payload_Too_Large_DetailInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const errors_code_payload_too_large_detail = /** @type {((inputs?: Errors_Code_Payload_Too_Large_DetailInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Errors_Code_Payload_Too_Large_DetailInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_errors_code_payload_too_large_detail(inputs)
	if (locale === "de") return de_errors_code_payload_too_large_detail(inputs)
	if (locale === "fr") return fr_errors_code_payload_too_large_detail(inputs)
	if (locale === "it") return it_errors_code_payload_too_large_detail(inputs)
	if (locale === "nl") return nl_errors_code_payload_too_large_detail(inputs)
	if (locale === "pl") return pl_errors_code_payload_too_large_detail(inputs)
	if (locale === "pt") return pt_errors_code_payload_too_large_detail(inputs)
	if (locale === "ru") return ru_errors_code_payload_too_large_detail(inputs)
	if (locale === "sv") return sv_errors_code_payload_too_large_detail(inputs)
	if (locale === "tr") return tr_errors_code_payload_too_large_detail(inputs)
	if (locale === "zh") return zh_errors_code_payload_too_large_detail(inputs)
	if (locale === "ja") return ja_errors_code_payload_too_large_detail(inputs)
	return en_errors_code_payload_too_large_detail(inputs)
});
