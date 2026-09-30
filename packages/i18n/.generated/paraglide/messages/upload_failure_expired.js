/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Failure_ExpiredInputs */

const en_upload_failure_expired = /** @type {(inputs: Upload_Failure_ExpiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The upload link expired. Try again to get a fresh one.`)
};

const es_upload_failure_expired = /** @type {(inputs: Upload_Failure_ExpiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`El enlace de subida caducó. Reintenta para obtener uno nuevo.`)
};

const de_upload_failure_expired = /** @type {(inputs: Upload_Failure_ExpiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Der Upload-Link ist abgelaufen. Versuch es erneut, um einen neuen zu bekommen.`)
};

const fr_upload_failure_expired = /** @type {(inputs: Upload_Failure_ExpiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Le lien d’envoi a expiré. Réessayez pour en obtenir un nouveau.`)
};

const it_upload_failure_expired = /** @type {(inputs: Upload_Failure_ExpiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Il link di caricamento è scaduto. Riprova per averne uno nuovo.`)
};

const nl_upload_failure_expired = /** @type {(inputs: Upload_Failure_ExpiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De uploadlink is verlopen. Probeer opnieuw om een nieuwe te krijgen.`)
};

const pl_upload_failure_expired = /** @type {(inputs: Upload_Failure_ExpiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Link do wysyłki wygasł. Spróbuj ponownie, aby dostać nowy.`)
};

const pt_upload_failure_expired = /** @type {(inputs: Upload_Failure_ExpiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`O link de envio expirou. Tente de novo para obter um novo.`)
};

const ru_upload_failure_expired = /** @type {(inputs: Upload_Failure_ExpiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ссылка для загрузки устарела. Повторите, чтобы получить новую.`)
};

const sv_upload_failure_expired = /** @type {(inputs: Upload_Failure_ExpiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Uppladdningslänken har gått ut. Försök igen för att få en ny.`)
};

const tr_upload_failure_expired = /** @type {(inputs: Upload_Failure_ExpiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yükleme bağlantısının süresi doldu. Yenisini almak için tekrar dene.`)
};

const zh_upload_failure_expired = /** @type {(inputs: Upload_Failure_ExpiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`上传链接已过期。重试以获取新链接。`)
};

const ja_upload_failure_expired = /** @type {(inputs: Upload_Failure_ExpiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`アップロード用リンクの期限が切れました。再試行すると新しいリンクを取得します。`)
};

/**
* | output |
* | --- |
* | "The upload link expired. Try again to get a fresh one." |
*
* @param {Upload_Failure_ExpiredInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_failure_expired = /** @type {((inputs?: Upload_Failure_ExpiredInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Failure_ExpiredInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_failure_expired(inputs)
	if (locale === "de") return de_upload_failure_expired(inputs)
	if (locale === "fr") return fr_upload_failure_expired(inputs)
	if (locale === "it") return it_upload_failure_expired(inputs)
	if (locale === "nl") return nl_upload_failure_expired(inputs)
	if (locale === "pl") return pl_upload_failure_expired(inputs)
	if (locale === "pt") return pt_upload_failure_expired(inputs)
	if (locale === "ru") return ru_upload_failure_expired(inputs)
	if (locale === "sv") return sv_upload_failure_expired(inputs)
	if (locale === "tr") return tr_upload_failure_expired(inputs)
	if (locale === "zh") return zh_upload_failure_expired(inputs)
	if (locale === "ja") return ja_upload_failure_expired(inputs)
	return en_upload_failure_expired(inputs)
});
