/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Media_Gallery_EmptyInputs */

const en_basecamp_media_gallery_empty = /** @type {(inputs: Basecamp_Media_Gallery_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No images yet. Listings with 3 or more images get more downloads.`)
};

const es_basecamp_media_gallery_empty = /** @type {(inputs: Basecamp_Media_Gallery_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aún no hay imágenes. Las fichas con 3 o más imágenes consiguen más descargas.`)
};

const de_basecamp_media_gallery_empty = /** @type {(inputs: Basecamp_Media_Gallery_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Noch keine Bilder. Seiten mit 3 oder mehr Bildern bekommen mehr Downloads.`)
};

const fr_basecamp_media_gallery_empty = /** @type {(inputs: Basecamp_Media_Gallery_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aucune image pour l’instant. Les fiches avec 3 images ou plus sont davantage téléchargées.`)
};

const it_basecamp_media_gallery_empty = /** @type {(inputs: Basecamp_Media_Gallery_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ancora nessuna immagine. Le schede con 3 o più immagini ottengono più download.`)
};

const nl_basecamp_media_gallery_empty = /** @type {(inputs: Basecamp_Media_Gallery_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nog geen afbeeldingen. Pagina's met 3 of meer afbeeldingen krijgen meer downloads.`)
};

const pl_basecamp_media_gallery_empty = /** @type {(inputs: Basecamp_Media_Gallery_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Na razie brak obrazów. Strony z 3 lub więcej obrazami mają więcej pobrań.`)
};

const pt_basecamp_media_gallery_empty = /** @type {(inputs: Basecamp_Media_Gallery_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ainda não há imagens. Páginas com 3 ou mais imagens recebem mais downloads.`)
};

const ru_basecamp_media_gallery_empty = /** @type {(inputs: Basecamp_Media_Gallery_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Изображений пока нет. Страницы с 3 и более изображениями скачивают чаще.`)
};

const sv_basecamp_media_gallery_empty = /** @type {(inputs: Basecamp_Media_Gallery_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inga bilder än. Sidor med 3 eller fler bilder får fler nedladdningar.`)
};

const tr_basecamp_media_gallery_empty = /** @type {(inputs: Basecamp_Media_Gallery_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Henüz görsel yok. 3 veya daha fazla görseli olan sayfalar daha çok indirilir.`)
};

const zh_basecamp_media_gallery_empty = /** @type {(inputs: Basecamp_Media_Gallery_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`还没有图片。有 3 张及以上图片的页面下载更多。`)
};

const ja_basecamp_media_gallery_empty = /** @type {(inputs: Basecamp_Media_Gallery_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`まだ画像がありません。画像が 3 枚以上あるページはダウンロードが増えます。`)
};

/**
* | output |
* | --- |
* | "No images yet. Listings with 3 or more images get more downloads." |
*
* @param {Basecamp_Media_Gallery_EmptyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_media_gallery_empty = /** @type {((inputs?: Basecamp_Media_Gallery_EmptyInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Media_Gallery_EmptyInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_media_gallery_empty(inputs)
	if (locale === "de") return de_basecamp_media_gallery_empty(inputs)
	if (locale === "fr") return fr_basecamp_media_gallery_empty(inputs)
	if (locale === "it") return it_basecamp_media_gallery_empty(inputs)
	if (locale === "nl") return nl_basecamp_media_gallery_empty(inputs)
	if (locale === "pl") return pl_basecamp_media_gallery_empty(inputs)
	if (locale === "pt") return pt_basecamp_media_gallery_empty(inputs)
	if (locale === "ru") return ru_basecamp_media_gallery_empty(inputs)
	if (locale === "sv") return sv_basecamp_media_gallery_empty(inputs)
	if (locale === "tr") return tr_basecamp_media_gallery_empty(inputs)
	if (locale === "zh") return zh_basecamp_media_gallery_empty(inputs)
	if (locale === "ja") return ja_basecamp_media_gallery_empty(inputs)
	return en_basecamp_media_gallery_empty(inputs)
});
