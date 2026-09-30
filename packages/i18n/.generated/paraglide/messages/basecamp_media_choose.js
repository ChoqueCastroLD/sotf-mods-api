/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Media_ChooseInputs */

const en_basecamp_media_choose = /** @type {(inputs: Basecamp_Media_ChooseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Choose images`)
};

const es_basecamp_media_choose = /** @type {(inputs: Basecamp_Media_ChooseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Elegir imágenes`)
};

const de_basecamp_media_choose = /** @type {(inputs: Basecamp_Media_ChooseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bilder wählen`)
};

const fr_basecamp_media_choose = /** @type {(inputs: Basecamp_Media_ChooseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Choisir des images`)
};

const it_basecamp_media_choose = /** @type {(inputs: Basecamp_Media_ChooseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scegli immagini`)
};

const nl_basecamp_media_choose = /** @type {(inputs: Basecamp_Media_ChooseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Afbeeldingen kiezen`)
};

const pl_basecamp_media_choose = /** @type {(inputs: Basecamp_Media_ChooseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wybierz obrazy`)
};

const pt_basecamp_media_choose = /** @type {(inputs: Basecamp_Media_ChooseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Escolher imagens`)
};

const ru_basecamp_media_choose = /** @type {(inputs: Basecamp_Media_ChooseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Выбрать изображения`)
};

const sv_basecamp_media_choose = /** @type {(inputs: Basecamp_Media_ChooseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Välj bilder`)
};

const tr_basecamp_media_choose = /** @type {(inputs: Basecamp_Media_ChooseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Görsel seç`)
};

const zh_basecamp_media_choose = /** @type {(inputs: Basecamp_Media_ChooseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`选择图片`)
};

const ja_basecamp_media_choose = /** @type {(inputs: Basecamp_Media_ChooseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`画像を選択`)
};

/**
* | output |
* | --- |
* | "Choose images" |
*
* @param {Basecamp_Media_ChooseInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_media_choose = /** @type {((inputs?: Basecamp_Media_ChooseInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Media_ChooseInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_media_choose(inputs)
	if (locale === "de") return de_basecamp_media_choose(inputs)
	if (locale === "fr") return fr_basecamp_media_choose(inputs)
	if (locale === "it") return it_basecamp_media_choose(inputs)
	if (locale === "nl") return nl_basecamp_media_choose(inputs)
	if (locale === "pl") return pl_basecamp_media_choose(inputs)
	if (locale === "pt") return pt_basecamp_media_choose(inputs)
	if (locale === "ru") return ru_basecamp_media_choose(inputs)
	if (locale === "sv") return sv_basecamp_media_choose(inputs)
	if (locale === "tr") return tr_basecamp_media_choose(inputs)
	if (locale === "zh") return zh_basecamp_media_choose(inputs)
	if (locale === "ja") return ja_basecamp_media_choose(inputs)
	return en_basecamp_media_choose(inputs)
});
