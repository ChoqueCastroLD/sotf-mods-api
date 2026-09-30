/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Attention_Gallery_ActionInputs */

const en_basecamp_attention_gallery_action = /** @type {(inputs: Basecamp_Attention_Gallery_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Add images`)
};

const es_basecamp_attention_gallery_action = /** @type {(inputs: Basecamp_Attention_Gallery_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Añadir imágenes`)
};

const de_basecamp_attention_gallery_action = /** @type {(inputs: Basecamp_Attention_Gallery_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bilder hinzufügen`)
};

const fr_basecamp_attention_gallery_action = /** @type {(inputs: Basecamp_Attention_Gallery_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ajouter des images`)
};

const it_basecamp_attention_gallery_action = /** @type {(inputs: Basecamp_Attention_Gallery_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aggiungi immagini`)
};

const nl_basecamp_attention_gallery_action = /** @type {(inputs: Basecamp_Attention_Gallery_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Afbeeldingen toevoegen`)
};

const pl_basecamp_attention_gallery_action = /** @type {(inputs: Basecamp_Attention_Gallery_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dodaj obrazy`)
};

const pt_basecamp_attention_gallery_action = /** @type {(inputs: Basecamp_Attention_Gallery_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Adicionar imagens`)
};

const ru_basecamp_attention_gallery_action = /** @type {(inputs: Basecamp_Attention_Gallery_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Добавить изображения`)
};

const sv_basecamp_attention_gallery_action = /** @type {(inputs: Basecamp_Attention_Gallery_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lägg till bilder`)
};

const tr_basecamp_attention_gallery_action = /** @type {(inputs: Basecamp_Attention_Gallery_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Görsel ekle`)
};

const zh_basecamp_attention_gallery_action = /** @type {(inputs: Basecamp_Attention_Gallery_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`添加图片`)
};

const ja_basecamp_attention_gallery_action = /** @type {(inputs: Basecamp_Attention_Gallery_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`画像を追加`)
};

/**
* | output |
* | --- |
* | "Add images" |
*
* @param {Basecamp_Attention_Gallery_ActionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_attention_gallery_action = /** @type {((inputs?: Basecamp_Attention_Gallery_ActionInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Attention_Gallery_ActionInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_attention_gallery_action(inputs)
	if (locale === "de") return de_basecamp_attention_gallery_action(inputs)
	if (locale === "fr") return fr_basecamp_attention_gallery_action(inputs)
	if (locale === "it") return it_basecamp_attention_gallery_action(inputs)
	if (locale === "nl") return nl_basecamp_attention_gallery_action(inputs)
	if (locale === "pl") return pl_basecamp_attention_gallery_action(inputs)
	if (locale === "pt") return pt_basecamp_attention_gallery_action(inputs)
	if (locale === "ru") return ru_basecamp_attention_gallery_action(inputs)
	if (locale === "sv") return sv_basecamp_attention_gallery_action(inputs)
	if (locale === "tr") return tr_basecamp_attention_gallery_action(inputs)
	if (locale === "zh") return zh_basecamp_attention_gallery_action(inputs)
	if (locale === "ja") return ja_basecamp_attention_gallery_action(inputs)
	return en_basecamp_attention_gallery_action(inputs)
});
