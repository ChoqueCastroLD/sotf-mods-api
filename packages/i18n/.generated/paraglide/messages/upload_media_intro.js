/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Media_IntroInputs */

const en_upload_media_intro = /** @type {(inputs: Upload_Media_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Good images sell a mod. Listings with 3 or more images get far more downloads.`)
};

const es_upload_media_intro = /** @type {(inputs: Upload_Media_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Las buenas imágenes venden un mod. Las fichas con 3 imágenes o más reciben muchas más descargas.`)
};

const de_upload_media_intro = /** @type {(inputs: Upload_Media_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gute Bilder verkaufen einen Mod. Einträge mit 3 oder mehr Bildern werden viel öfter heruntergeladen.`)
};

const fr_upload_media_intro = /** @type {(inputs: Upload_Media_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De belles images font vendre un mod. Les fiches avec 3 images ou plus sont bien plus téléchargées.`)
};

const it_upload_media_intro = /** @type {(inputs: Upload_Media_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Belle immagini vendono una mod. Le schede con 3 o più immagini ricevono molti più download.`)
};

const nl_upload_media_intro = /** @type {(inputs: Upload_Media_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Goede afbeeldingen verkopen een mod. Vermeldingen met 3 of meer afbeeldingen worden veel vaker gedownload.`)
};

const pl_upload_media_intro = /** @type {(inputs: Upload_Media_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dobre obrazy sprzedają moda. Wpisy z 3 lub więcej obrazami są pobierane znacznie częściej.`)
};

const pt_upload_media_intro = /** @type {(inputs: Upload_Media_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Boas imagens vendem um mod. Fichas com 3 imagens ou mais recebem muito mais downloads.`)
};

const ru_upload_media_intro = /** @type {(inputs: Upload_Media_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Хорошие картинки продают мод. Карточки с 3 и более изображениями скачивают гораздо чаще.`)
};

const sv_upload_media_intro = /** @type {(inputs: Upload_Media_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bra bilder säljer en mod. Sidor med 3 eller fler bilder laddas ner betydligt oftare.`)
};

const tr_upload_media_intro = /** @type {(inputs: Upload_Media_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İyi görseller bir modu satar. 3 veya daha fazla görseli olan sayfalar çok daha fazla indirilir.`)
};

const zh_upload_media_intro = /** @type {(inputs: Upload_Media_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`好的图片能让模组更受欢迎。有 3 张以上图片的页面下载量要高得多。`)
};

const ja_upload_media_intro = /** @type {(inputs: Upload_Media_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`良い画像はMODの魅力を伝えます。画像が3枚以上あるページはダウンロード数が大きく伸びます。`)
};

/**
* | output |
* | --- |
* | "Good images sell a mod. Listings with 3 or more images get far more downloads." |
*
* @param {Upload_Media_IntroInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_media_intro = /** @type {((inputs?: Upload_Media_IntroInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Media_IntroInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_media_intro(inputs)
	if (locale === "de") return de_upload_media_intro(inputs)
	if (locale === "fr") return fr_upload_media_intro(inputs)
	if (locale === "it") return it_upload_media_intro(inputs)
	if (locale === "nl") return nl_upload_media_intro(inputs)
	if (locale === "pl") return pl_upload_media_intro(inputs)
	if (locale === "pt") return pt_upload_media_intro(inputs)
	if (locale === "ru") return ru_upload_media_intro(inputs)
	if (locale === "sv") return sv_upload_media_intro(inputs)
	if (locale === "tr") return tr_upload_media_intro(inputs)
	if (locale === "zh") return zh_upload_media_intro(inputs)
	if (locale === "ja") return ja_upload_media_intro(inputs)
	return en_upload_media_intro(inputs)
});
