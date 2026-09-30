/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Comment_HiddenInputs */

const en_ranger_comment_hidden = /** @type {(inputs: Ranger_Comment_HiddenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Comment hidden.`)
};

const es_ranger_comment_hidden = /** @type {(inputs: Ranger_Comment_HiddenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Comentario oculto.`)
};

const de_ranger_comment_hidden = /** @type {(inputs: Ranger_Comment_HiddenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kommentar ausgeblendet.`)
};

const fr_ranger_comment_hidden = /** @type {(inputs: Ranger_Comment_HiddenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Commentaire masqué.`)
};

const it_ranger_comment_hidden = /** @type {(inputs: Ranger_Comment_HiddenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Commento nascosto.`)
};

const nl_ranger_comment_hidden = /** @type {(inputs: Ranger_Comment_HiddenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reactie verborgen.`)
};

const pl_ranger_comment_hidden = /** @type {(inputs: Ranger_Comment_HiddenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Komentarz ukryty.`)
};

const pt_ranger_comment_hidden = /** @type {(inputs: Ranger_Comment_HiddenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Comentário ocultado.`)
};

const ru_ranger_comment_hidden = /** @type {(inputs: Ranger_Comment_HiddenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Комментарий скрыт.`)
};

const sv_ranger_comment_hidden = /** @type {(inputs: Ranger_Comment_HiddenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kommentaren doldes.`)
};

const tr_ranger_comment_hidden = /** @type {(inputs: Ranger_Comment_HiddenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yorum gizlendi.`)
};

const zh_ranger_comment_hidden = /** @type {(inputs: Ranger_Comment_HiddenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`评论已隐藏。`)
};

const ja_ranger_comment_hidden = /** @type {(inputs: Ranger_Comment_HiddenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`コメントを非表示にしました。`)
};

/**
* | output |
* | --- |
* | "Comment hidden." |
*
* @param {Ranger_Comment_HiddenInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_comment_hidden = /** @type {((inputs?: Ranger_Comment_HiddenInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Comment_HiddenInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_comment_hidden(inputs)
	if (locale === "de") return de_ranger_comment_hidden(inputs)
	if (locale === "fr") return fr_ranger_comment_hidden(inputs)
	if (locale === "it") return it_ranger_comment_hidden(inputs)
	if (locale === "nl") return nl_ranger_comment_hidden(inputs)
	if (locale === "pl") return pl_ranger_comment_hidden(inputs)
	if (locale === "pt") return pt_ranger_comment_hidden(inputs)
	if (locale === "ru") return ru_ranger_comment_hidden(inputs)
	if (locale === "sv") return sv_ranger_comment_hidden(inputs)
	if (locale === "tr") return tr_ranger_comment_hidden(inputs)
	if (locale === "zh") return zh_ranger_comment_hidden(inputs)
	if (locale === "ja") return ja_ranger_comment_hidden(inputs)
	return en_ranger_comment_hidden(inputs)
});
