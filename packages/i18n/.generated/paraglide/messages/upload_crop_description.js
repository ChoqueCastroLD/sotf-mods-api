/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Crop_DescriptionInputs */

const en_upload_crop_description = /** @type {(inputs: Upload_Crop_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Drag the frame, or focus it and use the arrow keys. + and − resize it.`)
};

const es_upload_crop_description = /** @type {(inputs: Upload_Crop_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Arrastra el marco, o enfócalo y usa las flechas. + y − cambian su tamaño.`)
};

const de_upload_crop_description = /** @type {(inputs: Upload_Crop_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zieh den Rahmen oder fokussiere ihn und nutze die Pfeiltasten. + und − ändern die Größe.`)
};

const fr_upload_crop_description = /** @type {(inputs: Upload_Crop_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Faites glisser le cadre, ou sélectionnez-le et utilisez les flèches. + et − le redimensionnent.`)
};

const it_upload_crop_description = /** @type {(inputs: Upload_Crop_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Trascina la cornice, oppure selezionala e usa le frecce. + e − la ridimensionano.`)
};

const nl_upload_crop_description = /** @type {(inputs: Upload_Crop_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sleep het kader, of focus het en gebruik de pijltjestoetsen. + en − veranderen de grootte.`)
};

const pl_upload_crop_description = /** @type {(inputs: Upload_Crop_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Przeciągnij ramkę albo zaznacz ją i użyj strzałek. + i − zmieniają jej rozmiar.`)
};

const pt_upload_crop_description = /** @type {(inputs: Upload_Crop_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Arraste o quadro, ou selecione-o e use as setas. + e − mudam o tamanho.`)
};

const ru_upload_crop_description = /** @type {(inputs: Upload_Crop_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Перетащите рамку или выделите её и двигайте стрелками. + и − меняют размер.`)
};

const sv_upload_crop_description = /** @type {(inputs: Upload_Crop_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dra ramen, eller fokusera den och använd piltangenterna. + och − ändrar storleken.`)
};

const tr_upload_crop_description = /** @type {(inputs: Upload_Crop_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Çerçeveyi sürükle ya da odaklayıp ok tuşlarını kullan. + ve − boyutunu değiştirir.`)
};

const zh_upload_crop_description = /** @type {(inputs: Upload_Crop_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`拖动裁剪框，或选中后用方向键移动。+ 和 − 调整大小。`)
};

const ja_upload_crop_description = /** @type {(inputs: Upload_Crop_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`枠をドラッグするか、選択して矢印キーで動かします。＋と－でサイズを変えられます。`)
};

/**
* | output |
* | --- |
* | "Drag the frame, or focus it and use the arrow keys. + and − resize it." |
*
* @param {Upload_Crop_DescriptionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_crop_description = /** @type {((inputs?: Upload_Crop_DescriptionInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Crop_DescriptionInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_crop_description(inputs)
	if (locale === "de") return de_upload_crop_description(inputs)
	if (locale === "fr") return fr_upload_crop_description(inputs)
	if (locale === "it") return it_upload_crop_description(inputs)
	if (locale === "nl") return nl_upload_crop_description(inputs)
	if (locale === "pl") return pl_upload_crop_description(inputs)
	if (locale === "pt") return pt_upload_crop_description(inputs)
	if (locale === "ru") return ru_upload_crop_description(inputs)
	if (locale === "sv") return sv_upload_crop_description(inputs)
	if (locale === "tr") return tr_upload_crop_description(inputs)
	if (locale === "zh") return zh_upload_crop_description(inputs)
	if (locale === "ja") return ja_upload_crop_description(inputs)
	return en_upload_crop_description(inputs)
});
