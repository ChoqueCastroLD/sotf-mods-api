/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Kitsocial_Form_SubmitInputs */

const en_kitsocial_form_submit = /** @type {(inputs: Kitsocial_Form_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Post comment`)
};

const es_kitsocial_form_submit = /** @type {(inputs: Kitsocial_Form_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publicar comentario`)
};

const de_kitsocial_form_submit = /** @type {(inputs: Kitsocial_Form_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kommentar senden`)
};

const fr_kitsocial_form_submit = /** @type {(inputs: Kitsocial_Form_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publier le commentaire`)
};

const it_kitsocial_form_submit = /** @type {(inputs: Kitsocial_Form_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pubblica commento`)
};

const nl_kitsocial_form_submit = /** @type {(inputs: Kitsocial_Form_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reactie plaatsen`)
};

const pl_kitsocial_form_submit = /** @type {(inputs: Kitsocial_Form_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Opublikuj komentarz`)
};

const pt_kitsocial_form_submit = /** @type {(inputs: Kitsocial_Form_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publicar comentário`)
};

const ru_kitsocial_form_submit = /** @type {(inputs: Kitsocial_Form_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Опубликовать`)
};

const sv_kitsocial_form_submit = /** @type {(inputs: Kitsocial_Form_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publicera kommentar`)
};

const tr_kitsocial_form_submit = /** @type {(inputs: Kitsocial_Form_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yorumu gönder`)
};

const zh_kitsocial_form_submit = /** @type {(inputs: Kitsocial_Form_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`发表评论`)
};

const ja_kitsocial_form_submit = /** @type {(inputs: Kitsocial_Form_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`コメントを投稿`)
};

/**
* | output |
* | --- |
* | "Post comment" |
*
* @param {Kitsocial_Form_SubmitInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kitsocial_form_submit = /** @type {((inputs?: Kitsocial_Form_SubmitInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kitsocial_Form_SubmitInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kitsocial_form_submit(inputs)
	if (locale === "de") return de_kitsocial_form_submit(inputs)
	if (locale === "fr") return fr_kitsocial_form_submit(inputs)
	if (locale === "it") return it_kitsocial_form_submit(inputs)
	if (locale === "nl") return nl_kitsocial_form_submit(inputs)
	if (locale === "pl") return pl_kitsocial_form_submit(inputs)
	if (locale === "pt") return pt_kitsocial_form_submit(inputs)
	if (locale === "ru") return ru_kitsocial_form_submit(inputs)
	if (locale === "sv") return sv_kitsocial_form_submit(inputs)
	if (locale === "tr") return tr_kitsocial_form_submit(inputs)
	if (locale === "zh") return zh_kitsocial_form_submit(inputs)
	if (locale === "ja") return ja_kitsocial_form_submit(inputs)
	return en_kitsocial_form_submit(inputs)
});
