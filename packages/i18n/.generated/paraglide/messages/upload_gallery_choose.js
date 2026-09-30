/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Gallery_ChooseInputs */

const en_upload_gallery_choose = /** @type {(inputs: Upload_Gallery_ChooseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Choose images`)
};

const es_upload_gallery_choose = /** @type {(inputs: Upload_Gallery_ChooseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Elegir imágenes`)
};

const de_upload_gallery_choose = /** @type {(inputs: Upload_Gallery_ChooseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bilder wählen`)
};

const fr_upload_gallery_choose = /** @type {(inputs: Upload_Gallery_ChooseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Choisir des images`)
};

const it_upload_gallery_choose = /** @type {(inputs: Upload_Gallery_ChooseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scegli immagini`)
};

const nl_upload_gallery_choose = /** @type {(inputs: Upload_Gallery_ChooseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Afbeeldingen kiezen`)
};

const pl_upload_gallery_choose = /** @type {(inputs: Upload_Gallery_ChooseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wybierz obrazy`)
};

const pt_upload_gallery_choose = /** @type {(inputs: Upload_Gallery_ChooseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Escolher imagens`)
};

const ru_upload_gallery_choose = /** @type {(inputs: Upload_Gallery_ChooseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Выбрать изображения`)
};

const sv_upload_gallery_choose = /** @type {(inputs: Upload_Gallery_ChooseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Välj bilder`)
};

const tr_upload_gallery_choose = /** @type {(inputs: Upload_Gallery_ChooseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Görsel seç`)
};

const zh_upload_gallery_choose = /** @type {(inputs: Upload_Gallery_ChooseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`选择图片`)
};

const ja_upload_gallery_choose = /** @type {(inputs: Upload_Gallery_ChooseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`画像を選択`)
};

/**
* | output |
* | --- |
* | "Choose images" |
*
* @param {Upload_Gallery_ChooseInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_gallery_choose = /** @type {((inputs?: Upload_Gallery_ChooseInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Gallery_ChooseInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_gallery_choose(inputs)
	if (locale === "de") return de_upload_gallery_choose(inputs)
	if (locale === "fr") return fr_upload_gallery_choose(inputs)
	if (locale === "it") return it_upload_gallery_choose(inputs)
	if (locale === "nl") return nl_upload_gallery_choose(inputs)
	if (locale === "pl") return pl_upload_gallery_choose(inputs)
	if (locale === "pt") return pt_upload_gallery_choose(inputs)
	if (locale === "ru") return ru_upload_gallery_choose(inputs)
	if (locale === "sv") return sv_upload_gallery_choose(inputs)
	if (locale === "tr") return tr_upload_gallery_choose(inputs)
	if (locale === "zh") return zh_upload_gallery_choose(inputs)
	if (locale === "ja") return ja_upload_gallery_choose(inputs)
	return en_upload_gallery_choose(inputs)
});
