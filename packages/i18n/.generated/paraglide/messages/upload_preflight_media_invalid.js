/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Preflight_Media_InvalidInputs */

const en_upload_preflight_media_invalid = /** @type {(inputs: Upload_Preflight_Media_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`An image failed: remove it or upload it again.`)
};

const es_upload_preflight_media_invalid = /** @type {(inputs: Upload_Preflight_Media_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Una imagen falló: quítala o vuelve a subirla.`)
};

const de_upload_preflight_media_invalid = /** @type {(inputs: Upload_Preflight_Media_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ein Bild ist fehlgeschlagen: Entferne es oder lade es erneut hoch.`)
};

const fr_upload_preflight_media_invalid = /** @type {(inputs: Upload_Preflight_Media_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Une image a échoué : retirez-la ou renvoyez-la.`)
};

const it_upload_preflight_media_invalid = /** @type {(inputs: Upload_Preflight_Media_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Un’immagine non è riuscita: rimuovila o ricaricala.`)
};

const nl_upload_preflight_media_invalid = /** @type {(inputs: Upload_Preflight_Media_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Een afbeelding is mislukt: verwijder of upload hem opnieuw.`)
};

const pl_upload_preflight_media_invalid = /** @type {(inputs: Upload_Preflight_Media_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jeden obraz się nie powiódł: usuń go lub wyślij ponownie.`)
};

const pt_upload_preflight_media_invalid = /** @type {(inputs: Upload_Preflight_Media_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Uma imagem falhou: remova-a ou envie de novo.`)
};

const ru_upload_preflight_media_invalid = /** @type {(inputs: Upload_Preflight_Media_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Одно изображение не обработалось: удалите его или загрузите снова.`)
};

const sv_upload_preflight_media_invalid = /** @type {(inputs: Upload_Preflight_Media_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`En bild misslyckades: ta bort den eller ladda upp den igen.`)
};

const tr_upload_preflight_media_invalid = /** @type {(inputs: Upload_Preflight_Media_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bir görsel başarısız oldu: kaldır ya da yeniden yükle.`)
};

const zh_upload_preflight_media_invalid = /** @type {(inputs: Upload_Preflight_Media_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`有一张图片处理失败：请移除或重新上传。`)
};

const ja_upload_preflight_media_invalid = /** @type {(inputs: Upload_Preflight_Media_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`処理に失敗した画像があります。削除するか再アップロードしてください。`)
};

/**
* | output |
* | --- |
* | "An image failed: remove it or upload it again." |
*
* @param {Upload_Preflight_Media_InvalidInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_preflight_media_invalid = /** @type {((inputs?: Upload_Preflight_Media_InvalidInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Preflight_Media_InvalidInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_preflight_media_invalid(inputs)
	if (locale === "de") return de_upload_preflight_media_invalid(inputs)
	if (locale === "fr") return fr_upload_preflight_media_invalid(inputs)
	if (locale === "it") return it_upload_preflight_media_invalid(inputs)
	if (locale === "nl") return nl_upload_preflight_media_invalid(inputs)
	if (locale === "pl") return pl_upload_preflight_media_invalid(inputs)
	if (locale === "pt") return pt_upload_preflight_media_invalid(inputs)
	if (locale === "ru") return ru_upload_preflight_media_invalid(inputs)
	if (locale === "sv") return sv_upload_preflight_media_invalid(inputs)
	if (locale === "tr") return tr_upload_preflight_media_invalid(inputs)
	if (locale === "zh") return zh_upload_preflight_media_invalid(inputs)
	if (locale === "ja") return ja_upload_preflight_media_invalid(inputs)
	return en_upload_preflight_media_invalid(inputs)
});
