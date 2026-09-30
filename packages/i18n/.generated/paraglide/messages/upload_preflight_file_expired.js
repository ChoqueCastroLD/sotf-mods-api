/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Preflight_File_ExpiredInputs */

const en_upload_preflight_file_expired = /** @type {(inputs: Upload_Preflight_File_ExpiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The upload expired: upload the file again.`)
};

const es_upload_preflight_file_expired = /** @type {(inputs: Upload_Preflight_File_ExpiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La subida caducó: vuelve a subir el archivo.`)
};

const de_upload_preflight_file_expired = /** @type {(inputs: Upload_Preflight_File_ExpiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Der Upload ist abgelaufen: Lade die Datei erneut hoch.`)
};

const fr_upload_preflight_file_expired = /** @type {(inputs: Upload_Preflight_File_ExpiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`L’envoi a expiré : renvoyez le fichier.`)
};

const it_upload_preflight_file_expired = /** @type {(inputs: Upload_Preflight_File_ExpiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Il caricamento è scaduto: carica di nuovo il file.`)
};

const nl_upload_preflight_file_expired = /** @type {(inputs: Upload_Preflight_File_ExpiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De upload is verlopen: upload het bestand opnieuw.`)
};

const pl_upload_preflight_file_expired = /** @type {(inputs: Upload_Preflight_File_ExpiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Przesyłka wygasła: wyślij plik ponownie.`)
};

const pt_upload_preflight_file_expired = /** @type {(inputs: Upload_Preflight_File_ExpiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`O envio expirou: envie o arquivo de novo.`)
};

const ru_upload_preflight_file_expired = /** @type {(inputs: Upload_Preflight_File_ExpiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Срок загрузки истёк: загрузите файл заново.`)
};

const sv_upload_preflight_file_expired = /** @type {(inputs: Upload_Preflight_File_ExpiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Uppladdningen har gått ut: ladda upp filen igen.`)
};

const tr_upload_preflight_file_expired = /** @type {(inputs: Upload_Preflight_File_ExpiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yüklemenin süresi doldu: dosyayı tekrar yükle.`)
};

const zh_upload_preflight_file_expired = /** @type {(inputs: Upload_Preflight_File_ExpiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`上传已过期：请重新上传文件。`)
};

const ja_upload_preflight_file_expired = /** @type {(inputs: Upload_Preflight_File_ExpiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`アップロードの期限が切れました。もう一度アップロードしてください。`)
};

/**
* | output |
* | --- |
* | "The upload expired: upload the file again." |
*
* @param {Upload_Preflight_File_ExpiredInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_preflight_file_expired = /** @type {((inputs?: Upload_Preflight_File_ExpiredInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Preflight_File_ExpiredInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_preflight_file_expired(inputs)
	if (locale === "de") return de_upload_preflight_file_expired(inputs)
	if (locale === "fr") return fr_upload_preflight_file_expired(inputs)
	if (locale === "it") return it_upload_preflight_file_expired(inputs)
	if (locale === "nl") return nl_upload_preflight_file_expired(inputs)
	if (locale === "pl") return pl_upload_preflight_file_expired(inputs)
	if (locale === "pt") return pt_upload_preflight_file_expired(inputs)
	if (locale === "ru") return ru_upload_preflight_file_expired(inputs)
	if (locale === "sv") return sv_upload_preflight_file_expired(inputs)
	if (locale === "tr") return tr_upload_preflight_file_expired(inputs)
	if (locale === "zh") return zh_upload_preflight_file_expired(inputs)
	if (locale === "ja") return ja_upload_preflight_file_expired(inputs)
	return en_upload_preflight_file_expired(inputs)
});
