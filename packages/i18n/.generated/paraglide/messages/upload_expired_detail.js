/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Expired_DetailInputs */

const en_upload_expired_detail = /** @type {(inputs: Upload_Expired_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The upload expired before it was used. Upload the file again.`)
};

const es_upload_expired_detail = /** @type {(inputs: Upload_Expired_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La subida caducó antes de usarse. Vuelve a subir el archivo.`)
};

const de_upload_expired_detail = /** @type {(inputs: Upload_Expired_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Der Upload ist abgelaufen, bevor er verwendet wurde. Lade die Datei erneut hoch.`)
};

const fr_upload_expired_detail = /** @type {(inputs: Upload_Expired_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`L’envoi a expiré avant d’être utilisé. Renvoyez le fichier.`)
};

const it_upload_expired_detail = /** @type {(inputs: Upload_Expired_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Il caricamento è scaduto prima di essere usato. Carica di nuovo il file.`)
};

const nl_upload_expired_detail = /** @type {(inputs: Upload_Expired_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De upload is verlopen voordat hij werd gebruikt. Upload het bestand opnieuw.`)
};

const pl_upload_expired_detail = /** @type {(inputs: Upload_Expired_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Przesyłka wygasła, zanim została użyta. Wyślij plik ponownie.`)
};

const pt_upload_expired_detail = /** @type {(inputs: Upload_Expired_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`O envio expirou antes de ser usado. Envie o arquivo de novo.`)
};

const ru_upload_expired_detail = /** @type {(inputs: Upload_Expired_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Срок загрузки истёк до её использования. Загрузите файл снова.`)
};

const sv_upload_expired_detail = /** @type {(inputs: Upload_Expired_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Uppladdningen gick ut innan den användes. Ladda upp filen igen.`)
};

const tr_upload_expired_detail = /** @type {(inputs: Upload_Expired_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yükleme kullanılmadan süresi doldu. Dosyayı tekrar yükle.`)
};

const zh_upload_expired_detail = /** @type {(inputs: Upload_Expired_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`上传在使用前已过期，请重新上传文件。`)
};

const ja_upload_expired_detail = /** @type {(inputs: Upload_Expired_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`使用される前にアップロードの期限が切れました。もう一度アップロードしてください。`)
};

/**
* | output |
* | --- |
* | "The upload expired before it was used. Upload the file again." |
*
* @param {Upload_Expired_DetailInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_expired_detail = /** @type {((inputs?: Upload_Expired_DetailInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Expired_DetailInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_expired_detail(inputs)
	if (locale === "de") return de_upload_expired_detail(inputs)
	if (locale === "fr") return fr_upload_expired_detail(inputs)
	if (locale === "it") return it_upload_expired_detail(inputs)
	if (locale === "nl") return nl_upload_expired_detail(inputs)
	if (locale === "pl") return pl_upload_expired_detail(inputs)
	if (locale === "pt") return pt_upload_expired_detail(inputs)
	if (locale === "ru") return ru_upload_expired_detail(inputs)
	if (locale === "sv") return sv_upload_expired_detail(inputs)
	if (locale === "tr") return tr_upload_expired_detail(inputs)
	if (locale === "zh") return zh_upload_expired_detail(inputs)
	if (locale === "ja") return ja_upload_expired_detail(inputs)
	return en_upload_expired_detail(inputs)
});
