/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Crop_HelpInputs */

const en_settings_crop_help = /** @type {(inputs: Settings_Crop_HelpInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Drag the image or use the arrow keys to move it; use the slider or + and − to zoom.`)
};

const es_settings_crop_help = /** @type {(inputs: Settings_Crop_HelpInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Arrastra la imagen o usa las flechas para moverla; usa el control deslizante o + y − para hacer zoom.`)
};

const de_settings_crop_help = /** @type {(inputs: Settings_Crop_HelpInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ziehe das Bild oder verschiebe es mit den Pfeiltasten; zoome mit dem Regler oder + und −.`)
};

const fr_settings_crop_help = /** @type {(inputs: Settings_Crop_HelpInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Faites glisser l’image ou utilisez les flèches pour la déplacer ; utilisez le curseur ou + et − pour zoomer.`)
};

const it_settings_crop_help = /** @type {(inputs: Settings_Crop_HelpInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Trascina l’immagine o usa le frecce per spostarla; usa il cursore o + e − per lo zoom.`)
};

const nl_settings_crop_help = /** @type {(inputs: Settings_Crop_HelpInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sleep de afbeelding of gebruik de pijltjestoetsen om hem te verplaatsen; gebruik de schuifregelaar of + en − om te zoomen.`)
};

const pl_settings_crop_help = /** @type {(inputs: Settings_Crop_HelpInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Przeciągnij obraz lub przesuń go strzałkami; powiększaj suwakiem albo klawiszami + i −.`)
};

const pt_settings_crop_help = /** @type {(inputs: Settings_Crop_HelpInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Arraste a imagem ou use as setas para movê-la; use o controle deslizante ou + e − para dar zoom.`)
};

const ru_settings_crop_help = /** @type {(inputs: Settings_Crop_HelpInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Перетащите изображение или двигайте его стрелками; масштабируйте ползунком или клавишами + и −.`)
};

const sv_settings_crop_help = /** @type {(inputs: Settings_Crop_HelpInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dra bilden eller flytta den med piltangenterna; zooma med reglaget eller + och −.`)
};

const tr_settings_crop_help = /** @type {(inputs: Settings_Crop_HelpInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Görseli sürükle ya da ok tuşlarıyla taşı; yakınlaştırmak için kaydırıcıyı veya + ve − tuşlarını kullan.`)
};

const zh_settings_crop_help = /** @type {(inputs: Settings_Crop_HelpInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`拖动图片或用方向键移动；用滑块或 + 和 − 缩放。`)
};

const ja_settings_crop_help = /** @type {(inputs: Settings_Crop_HelpInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`画像をドラッグするか矢印キーで移動し、スライダーまたは + と − で拡大縮小します。`)
};

/**
* | output |
* | --- |
* | "Drag the image or use the arrow keys to move it; use the slider or + and − to zoom." |
*
* @param {Settings_Crop_HelpInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_crop_help = /** @type {((inputs?: Settings_Crop_HelpInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Crop_HelpInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_crop_help(inputs)
	if (locale === "de") return de_settings_crop_help(inputs)
	if (locale === "fr") return fr_settings_crop_help(inputs)
	if (locale === "it") return it_settings_crop_help(inputs)
	if (locale === "nl") return nl_settings_crop_help(inputs)
	if (locale === "pl") return pl_settings_crop_help(inputs)
	if (locale === "pt") return pt_settings_crop_help(inputs)
	if (locale === "ru") return ru_settings_crop_help(inputs)
	if (locale === "sv") return sv_settings_crop_help(inputs)
	if (locale === "tr") return tr_settings_crop_help(inputs)
	if (locale === "zh") return zh_settings_crop_help(inputs)
	if (locale === "ja") return ja_settings_crop_help(inputs)
	return en_settings_crop_help(inputs)
});
