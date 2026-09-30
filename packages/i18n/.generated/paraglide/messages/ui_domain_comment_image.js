/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ui_Domain_Comment_ImageInputs */

const en_ui_domain_comment_image = /** @type {(inputs: Ui_Domain_Comment_ImageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Image attached to the comment`)
};

const es_ui_domain_comment_image = /** @type {(inputs: Ui_Domain_Comment_ImageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Imagen adjunta al comentario`)
};

const de_ui_domain_comment_image = /** @type {(inputs: Ui_Domain_Comment_ImageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bild zum Kommentar`)
};

const fr_ui_domain_comment_image = /** @type {(inputs: Ui_Domain_Comment_ImageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Image jointe au commentaire`)
};

const it_ui_domain_comment_image = /** @type {(inputs: Ui_Domain_Comment_ImageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Immagine allegata al commento`)
};

const nl_ui_domain_comment_image = /** @type {(inputs: Ui_Domain_Comment_ImageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Afbeelding bij de reactie`)
};

const pl_ui_domain_comment_image = /** @type {(inputs: Ui_Domain_Comment_ImageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Obraz dołączony do komentarza`)
};

const pt_ui_domain_comment_image = /** @type {(inputs: Ui_Domain_Comment_ImageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Imagem anexada ao comentário`)
};

const ru_ui_domain_comment_image = /** @type {(inputs: Ui_Domain_Comment_ImageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Изображение к комментарию`)
};

const sv_ui_domain_comment_image = /** @type {(inputs: Ui_Domain_Comment_ImageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bild bifogad till kommentaren`)
};

const tr_ui_domain_comment_image = /** @type {(inputs: Ui_Domain_Comment_ImageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yoruma eklenen görsel`)
};

const zh_ui_domain_comment_image = /** @type {(inputs: Ui_Domain_Comment_ImageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`评论附带的图片`)
};

const ja_ui_domain_comment_image = /** @type {(inputs: Ui_Domain_Comment_ImageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`コメントに添付された画像`)
};

/**
* | output |
* | --- |
* | "Image attached to the comment" |
*
* @param {Ui_Domain_Comment_ImageInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ui_domain_comment_image = /** @type {((inputs?: Ui_Domain_Comment_ImageInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Domain_Comment_ImageInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ui_domain_comment_image(inputs)
	if (locale === "de") return de_ui_domain_comment_image(inputs)
	if (locale === "fr") return fr_ui_domain_comment_image(inputs)
	if (locale === "it") return it_ui_domain_comment_image(inputs)
	if (locale === "nl") return nl_ui_domain_comment_image(inputs)
	if (locale === "pl") return pl_ui_domain_comment_image(inputs)
	if (locale === "pt") return pt_ui_domain_comment_image(inputs)
	if (locale === "ru") return ru_ui_domain_comment_image(inputs)
	if (locale === "sv") return sv_ui_domain_comment_image(inputs)
	if (locale === "tr") return tr_ui_domain_comment_image(inputs)
	if (locale === "zh") return zh_ui_domain_comment_image(inputs)
	if (locale === "ja") return ja_ui_domain_comment_image(inputs)
	return en_ui_domain_comment_image(inputs)
});
