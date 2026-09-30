/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Kits_Cover_Error_UploadInputs */

const en_kits_cover_error_upload = /** @type {(inputs: Kits_Cover_Error_UploadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The upload failed. Check your connection.`)
};

const es_kits_cover_error_upload = /** @type {(inputs: Kits_Cover_Error_UploadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La subida ha fallado. Revisa tu conexión.`)
};

const de_kits_cover_error_upload = /** @type {(inputs: Kits_Cover_Error_UploadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Der Upload ist fehlgeschlagen. Prüfe deine Verbindung.`)
};

const fr_kits_cover_error_upload = /** @type {(inputs: Kits_Cover_Error_UploadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Le téléversement a échoué. Vérifiez votre connexion.`)
};

const it_kits_cover_error_upload = /** @type {(inputs: Kits_Cover_Error_UploadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Caricamento non riuscito. Controlla la connessione.`)
};

const nl_kits_cover_error_upload = /** @type {(inputs: Kits_Cover_Error_UploadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Uploaden mislukt. Controleer je verbinding.`)
};

const pl_kits_cover_error_upload = /** @type {(inputs: Kits_Cover_Error_UploadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Przesyłanie nie powiodło się. Sprawdź połączenie.`)
};

const pt_kits_cover_error_upload = /** @type {(inputs: Kits_Cover_Error_UploadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`O envio falhou. Verifique sua conexão.`)
};

const ru_kits_cover_error_upload = /** @type {(inputs: Kits_Cover_Error_UploadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Загрузка не удалась. Проверьте подключение.`)
};

const sv_kits_cover_error_upload = /** @type {(inputs: Kits_Cover_Error_UploadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Uppladdningen misslyckades. Kontrollera anslutningen.`)
};

const tr_kits_cover_error_upload = /** @type {(inputs: Kits_Cover_Error_UploadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yükleme başarısız. Bağlantını kontrol et.`)
};

const zh_kits_cover_error_upload = /** @type {(inputs: Kits_Cover_Error_UploadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`上传失败，请检查网络连接。`)
};

const ja_kits_cover_error_upload = /** @type {(inputs: Kits_Cover_Error_UploadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`アップロードに失敗しました。接続を確認してください。`)
};

/**
* | output |
* | --- |
* | "The upload failed. Check your connection." |
*
* @param {Kits_Cover_Error_UploadInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kits_cover_error_upload = /** @type {((inputs?: Kits_Cover_Error_UploadInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Cover_Error_UploadInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kits_cover_error_upload(inputs)
	if (locale === "de") return de_kits_cover_error_upload(inputs)
	if (locale === "fr") return fr_kits_cover_error_upload(inputs)
	if (locale === "it") return it_kits_cover_error_upload(inputs)
	if (locale === "nl") return nl_kits_cover_error_upload(inputs)
	if (locale === "pl") return pl_kits_cover_error_upload(inputs)
	if (locale === "pt") return pt_kits_cover_error_upload(inputs)
	if (locale === "ru") return ru_kits_cover_error_upload(inputs)
	if (locale === "sv") return sv_kits_cover_error_upload(inputs)
	if (locale === "tr") return tr_kits_cover_error_upload(inputs)
	if (locale === "zh") return zh_kits_cover_error_upload(inputs)
	if (locale === "ja") return ja_kits_cover_error_upload(inputs)
	return en_kits_cover_error_upload(inputs)
});
