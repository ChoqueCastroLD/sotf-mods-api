/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Progress_DirectInputs */

const en_upload_progress_direct = /** @type {(inputs: Upload_Progress_DirectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sent straight to storage. If the connection drops you can resume.`)
};

const es_upload_progress_direct = /** @type {(inputs: Upload_Progress_DirectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Se envía directo al almacenamiento. Si se corta la conexión, puedes reanudar.`)
};

const de_upload_progress_direct = /** @type {(inputs: Upload_Progress_DirectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Geht direkt in den Speicher. Bricht die Verbindung ab, kannst du fortsetzen.`)
};

const fr_upload_progress_direct = /** @type {(inputs: Upload_Progress_DirectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Envoyé directement au stockage. Si la connexion coupe, vous pourrez reprendre.`)
};

const it_upload_progress_direct = /** @type {(inputs: Upload_Progress_DirectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inviato direttamente allo spazio di archiviazione. Se cade la connessione puoi riprendere.`)
};

const nl_upload_progress_direct = /** @type {(inputs: Upload_Progress_DirectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gaat rechtstreeks naar de opslag. Valt de verbinding weg, dan kun je hervatten.`)
};

const pl_upload_progress_direct = /** @type {(inputs: Upload_Progress_DirectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wysyłane prosto do magazynu. Jeśli połączenie zostanie przerwane, możesz wznowić.`)
};

const pt_upload_progress_direct = /** @type {(inputs: Upload_Progress_DirectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enviado direto para o armazenamento. Se a conexão cair, você pode retomar.`)
};

const ru_upload_progress_direct = /** @type {(inputs: Upload_Progress_DirectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Файл идёт напрямую в хранилище. Если связь оборвётся, загрузку можно продолжить.`)
};

const sv_upload_progress_direct = /** @type {(inputs: Upload_Progress_DirectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Skickas direkt till lagringen. Bryts anslutningen kan du återuppta.`)
};

const tr_upload_progress_direct = /** @type {(inputs: Upload_Progress_DirectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Doğrudan depolamaya gönderiliyor. Bağlantı koparsa devam edebilirsin.`)
};

const zh_upload_progress_direct = /** @type {(inputs: Upload_Progress_DirectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`文件直接上传到存储。连接中断后可以继续上传。`)
};

const ja_upload_progress_direct = /** @type {(inputs: Upload_Progress_DirectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ストレージに直接送信しています。接続が切れても再開できます。`)
};

/**
* | output |
* | --- |
* | "Sent straight to storage. If the connection drops you can resume." |
*
* @param {Upload_Progress_DirectInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_progress_direct = /** @type {((inputs?: Upload_Progress_DirectInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Progress_DirectInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_progress_direct(inputs)
	if (locale === "de") return de_upload_progress_direct(inputs)
	if (locale === "fr") return fr_upload_progress_direct(inputs)
	if (locale === "it") return it_upload_progress_direct(inputs)
	if (locale === "nl") return nl_upload_progress_direct(inputs)
	if (locale === "pl") return pl_upload_progress_direct(inputs)
	if (locale === "pt") return pt_upload_progress_direct(inputs)
	if (locale === "ru") return ru_upload_progress_direct(inputs)
	if (locale === "sv") return sv_upload_progress_direct(inputs)
	if (locale === "tr") return tr_upload_progress_direct(inputs)
	if (locale === "zh") return zh_upload_progress_direct(inputs)
	if (locale === "ja") return ja_upload_progress_direct(inputs)
	return en_upload_progress_direct(inputs)
});
