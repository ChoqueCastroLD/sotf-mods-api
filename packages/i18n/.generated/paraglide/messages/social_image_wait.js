/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Social_Image_WaitInputs */

const en_social_image_wait = /** @type {(inputs: Social_Image_WaitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wait until the images finish uploading.`)
};

const es_social_image_wait = /** @type {(inputs: Social_Image_WaitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Espera a que terminen de subirse las imágenes.`)
};

const de_social_image_wait = /** @type {(inputs: Social_Image_WaitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Warte, bis die Bilder hochgeladen sind.`)
};

const fr_social_image_wait = /** @type {(inputs: Social_Image_WaitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Attendez la fin de l’envoi des images.`)
};

const it_social_image_wait = /** @type {(inputs: Social_Image_WaitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Attendi che le immagini finiscano di caricarsi.`)
};

const nl_social_image_wait = /** @type {(inputs: Social_Image_WaitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wacht tot de afbeeldingen zijn geüpload.`)
};

const pl_social_image_wait = /** @type {(inputs: Social_Image_WaitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Poczekaj, aż obrazy się prześlą.`)
};

const pt_social_image_wait = /** @type {(inputs: Social_Image_WaitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aguarde o envio das imagens terminar.`)
};

const ru_social_image_wait = /** @type {(inputs: Social_Image_WaitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Дождитесь окончания загрузки изображений.`)
};

const sv_social_image_wait = /** @type {(inputs: Social_Image_WaitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vänta tills bilderna har laddats upp.`)
};

const tr_social_image_wait = /** @type {(inputs: Social_Image_WaitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Görsellerin yüklenmesini bekle.`)
};

const zh_social_image_wait = /** @type {(inputs: Social_Image_WaitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`请等待图片上传完成。`)
};

const ja_social_image_wait = /** @type {(inputs: Social_Image_WaitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`画像のアップロードが終わるまでお待ちください。`)
};

/**
* | output |
* | --- |
* | "Wait until the images finish uploading." |
*
* @param {Social_Image_WaitInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const social_image_wait = /** @type {((inputs?: Social_Image_WaitInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Social_Image_WaitInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_social_image_wait(inputs)
	if (locale === "de") return de_social_image_wait(inputs)
	if (locale === "fr") return fr_social_image_wait(inputs)
	if (locale === "it") return it_social_image_wait(inputs)
	if (locale === "nl") return nl_social_image_wait(inputs)
	if (locale === "pl") return pl_social_image_wait(inputs)
	if (locale === "pt") return pt_social_image_wait(inputs)
	if (locale === "ru") return ru_social_image_wait(inputs)
	if (locale === "sv") return sv_social_image_wait(inputs)
	if (locale === "tr") return tr_social_image_wait(inputs)
	if (locale === "zh") return zh_social_image_wait(inputs)
	if (locale === "ja") return ja_social_image_wait(inputs)
	return en_social_image_wait(inputs)
});
