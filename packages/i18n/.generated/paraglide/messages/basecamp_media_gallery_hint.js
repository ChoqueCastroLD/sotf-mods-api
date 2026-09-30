/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Media_Gallery_HintInputs */

const en_basecamp_media_gallery_hint = /** @type {(inputs: Basecamp_Media_Gallery_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Drag to reorder, or use the arrows. Describe each image for players who cannot see it.`)
};

const es_basecamp_media_gallery_hint = /** @type {(inputs: Basecamp_Media_Gallery_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Arrastra para ordenar o usa las flechas. Describe cada imagen para quien no pueda verla.`)
};

const de_basecamp_media_gallery_hint = /** @type {(inputs: Basecamp_Media_Gallery_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ziehe zum Sortieren oder nutze die Pfeile. Beschreibe jedes Bild für alle, die es nicht sehen können.`)
};

const fr_basecamp_media_gallery_hint = /** @type {(inputs: Basecamp_Media_Gallery_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fais glisser pour réordonner ou utilise les flèches. Décris chaque image pour ceux qui ne peuvent pas la voir.`)
};

const it_basecamp_media_gallery_hint = /** @type {(inputs: Basecamp_Media_Gallery_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Trascina per riordinare o usa le frecce. Descrivi ogni immagine per chi non può vederla.`)
};

const nl_basecamp_media_gallery_hint = /** @type {(inputs: Basecamp_Media_Gallery_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sleep om te ordenen of gebruik de pijlen. Beschrijf elke afbeelding voor wie hem niet kan zien.`)
};

const pl_basecamp_media_gallery_hint = /** @type {(inputs: Basecamp_Media_Gallery_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Przeciągnij, aby zmienić kolejność, albo użyj strzałek. Opisz każdy obraz dla osób, które go nie widzą.`)
};

const pt_basecamp_media_gallery_hint = /** @type {(inputs: Basecamp_Media_Gallery_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Arraste para reordenar ou use as setas. Descreva cada imagem para quem não pode vê-la.`)
};

const ru_basecamp_media_gallery_hint = /** @type {(inputs: Basecamp_Media_Gallery_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Перетаскивайте, чтобы изменить порядок, или используйте стрелки. Опишите каждое изображение для тех, кто его не видит.`)
};

const sv_basecamp_media_gallery_hint = /** @type {(inputs: Basecamp_Media_Gallery_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dra för att ändra ordning eller använd pilarna. Beskriv varje bild för den som inte kan se den.`)
};

const tr_basecamp_media_gallery_hint = /** @type {(inputs: Basecamp_Media_Gallery_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sıralamak için sürükle ya da okları kullan. Göremeyenler için her görseli açıkla.`)
};

const zh_basecamp_media_gallery_hint = /** @type {(inputs: Basecamp_Media_Gallery_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`拖动或使用箭头调整顺序。为每张图片写上描述，方便看不到图片的人。`)
};

const ja_basecamp_media_gallery_hint = /** @type {(inputs: Basecamp_Media_Gallery_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ドラッグまたは矢印で並べ替えます。画像が見えない人のために、各画像の説明を書いてください。`)
};

/**
* | output |
* | --- |
* | "Drag to reorder, or use the arrows. Describe each image for players who cannot see it." |
*
* @param {Basecamp_Media_Gallery_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_media_gallery_hint = /** @type {((inputs?: Basecamp_Media_Gallery_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Media_Gallery_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_media_gallery_hint(inputs)
	if (locale === "de") return de_basecamp_media_gallery_hint(inputs)
	if (locale === "fr") return fr_basecamp_media_gallery_hint(inputs)
	if (locale === "it") return it_basecamp_media_gallery_hint(inputs)
	if (locale === "nl") return nl_basecamp_media_gallery_hint(inputs)
	if (locale === "pl") return pl_basecamp_media_gallery_hint(inputs)
	if (locale === "pt") return pt_basecamp_media_gallery_hint(inputs)
	if (locale === "ru") return ru_basecamp_media_gallery_hint(inputs)
	if (locale === "sv") return sv_basecamp_media_gallery_hint(inputs)
	if (locale === "tr") return tr_basecamp_media_gallery_hint(inputs)
	if (locale === "zh") return zh_basecamp_media_gallery_hint(inputs)
	if (locale === "ja") return ja_basecamp_media_gallery_hint(inputs)
	return en_basecamp_media_gallery_hint(inputs)
});
