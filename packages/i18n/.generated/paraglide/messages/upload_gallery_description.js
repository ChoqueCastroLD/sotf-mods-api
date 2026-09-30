/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Gallery_DescriptionInputs */

const en_upload_gallery_description = /** @type {(inputs: Upload_Gallery_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Up to 10 screenshots. Drag to order them and describe each one for screen readers.`)
};

const es_upload_gallery_description = /** @type {(inputs: Upload_Gallery_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hasta 10 capturas. Arrástralas para ordenarlas y describe cada una para los lectores de pantalla.`)
};

const de_upload_gallery_description = /** @type {(inputs: Upload_Gallery_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bis zu 10 Screenshots. Zieh sie in die richtige Reihenfolge und beschreibe jeden für Screenreader.`)
};

const fr_upload_gallery_description = /** @type {(inputs: Upload_Gallery_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jusqu’à 10 captures. Glissez-les pour les ordonner et décrivez-les pour les lecteurs d’écran.`)
};

const it_upload_gallery_description = /** @type {(inputs: Upload_Gallery_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fino a 10 screenshot. Trascinali per ordinarli e descrivi ciascuno per i lettori di schermo.`)
};

const nl_upload_gallery_description = /** @type {(inputs: Upload_Gallery_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tot 10 screenshots. Sleep ze in volgorde en beschrijf elke afbeelding voor schermlezers.`)
};

const pl_upload_gallery_description = /** @type {(inputs: Upload_Gallery_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Do 10 zrzutów ekranu. Przeciągnij, aby je uporządkować, i opisz każdy dla czytników ekranu.`)
};

const pt_upload_gallery_description = /** @type {(inputs: Upload_Gallery_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Até 10 capturas. Arraste para ordená-las e descreva cada uma para leitores de tela.`)
};

const ru_upload_gallery_description = /** @type {(inputs: Upload_Gallery_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`До 10 скриншотов. Перетаскивайте их, чтобы задать порядок, и описывайте каждый для экранных чтецов.`)
};

const sv_upload_gallery_description = /** @type {(inputs: Upload_Gallery_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Upp till 10 skärmbilder. Dra för att ordna dem och beskriv varje bild för skärmläsare.`)
};

const tr_upload_gallery_description = /** @type {(inputs: Upload_Gallery_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`En fazla 10 ekran görüntüsü. Sıralamak için sürükle ve ekran okuyucular için her birini açıkla.`)
};

const zh_upload_gallery_description = /** @type {(inputs: Upload_Gallery_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`最多 10 张截图。拖动排序，并为屏幕阅读器写下每张图的描述。`)
};

const ja_upload_gallery_description = /** @type {(inputs: Upload_Gallery_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`スクリーンショットは最大10枚。ドラッグで並べ替え、スクリーンリーダー向けに説明を付けましょう。`)
};

/**
* | output |
* | --- |
* | "Up to 10 screenshots. Drag to order them and describe each one for screen readers." |
*
* @param {Upload_Gallery_DescriptionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_gallery_description = /** @type {((inputs?: Upload_Gallery_DescriptionInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Gallery_DescriptionInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_gallery_description(inputs)
	if (locale === "de") return de_upload_gallery_description(inputs)
	if (locale === "fr") return fr_upload_gallery_description(inputs)
	if (locale === "it") return it_upload_gallery_description(inputs)
	if (locale === "nl") return nl_upload_gallery_description(inputs)
	if (locale === "pl") return pl_upload_gallery_description(inputs)
	if (locale === "pt") return pt_upload_gallery_description(inputs)
	if (locale === "ru") return ru_upload_gallery_description(inputs)
	if (locale === "sv") return sv_upload_gallery_description(inputs)
	if (locale === "tr") return tr_upload_gallery_description(inputs)
	if (locale === "zh") return zh_upload_gallery_description(inputs)
	if (locale === "ja") return ja_upload_gallery_description(inputs)
	return en_upload_gallery_description(inputs)
});
