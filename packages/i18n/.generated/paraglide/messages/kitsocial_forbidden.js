/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Kitsocial_ForbiddenInputs */

const en_kitsocial_forbidden = /** @type {(inputs: Kitsocial_ForbiddenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`You cannot comment right now.`)
};

const es_kitsocial_forbidden = /** @type {(inputs: Kitsocial_ForbiddenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No puedes comentar ahora mismo.`)
};

const de_kitsocial_forbidden = /** @type {(inputs: Kitsocial_ForbiddenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Du kannst gerade nicht kommentieren.`)
};

const fr_kitsocial_forbidden = /** @type {(inputs: Kitsocial_ForbiddenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vous ne pouvez pas commenter pour le moment.`)
};

const it_kitsocial_forbidden = /** @type {(inputs: Kitsocial_ForbiddenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Al momento non puoi commentare.`)
};

const nl_kitsocial_forbidden = /** @type {(inputs: Kitsocial_ForbiddenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Je kunt nu niet reageren.`)
};

const pl_kitsocial_forbidden = /** @type {(inputs: Kitsocial_ForbiddenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie możesz teraz komentować.`)
};

const pt_kitsocial_forbidden = /** @type {(inputs: Kitsocial_ForbiddenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Você não pode comentar agora.`)
};

const ru_kitsocial_forbidden = /** @type {(inputs: Kitsocial_ForbiddenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Сейчас вы не можете комментировать.`)
};

const sv_kitsocial_forbidden = /** @type {(inputs: Kitsocial_ForbiddenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Du kan inte kommentera just nu.`)
};

const tr_kitsocial_forbidden = /** @type {(inputs: Kitsocial_ForbiddenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Şu anda yorum yapamazsın.`)
};

const zh_kitsocial_forbidden = /** @type {(inputs: Kitsocial_ForbiddenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`你现在无法评论。`)
};

const ja_kitsocial_forbidden = /** @type {(inputs: Kitsocial_ForbiddenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`現在コメントできません。`)
};

/**
* | output |
* | --- |
* | "You cannot comment right now." |
*
* @param {Kitsocial_ForbiddenInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kitsocial_forbidden = /** @type {((inputs?: Kitsocial_ForbiddenInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kitsocial_ForbiddenInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kitsocial_forbidden(inputs)
	if (locale === "de") return de_kitsocial_forbidden(inputs)
	if (locale === "fr") return fr_kitsocial_forbidden(inputs)
	if (locale === "it") return it_kitsocial_forbidden(inputs)
	if (locale === "nl") return nl_kitsocial_forbidden(inputs)
	if (locale === "pl") return pl_kitsocial_forbidden(inputs)
	if (locale === "pt") return pt_kitsocial_forbidden(inputs)
	if (locale === "ru") return ru_kitsocial_forbidden(inputs)
	if (locale === "sv") return sv_kitsocial_forbidden(inputs)
	if (locale === "tr") return tr_kitsocial_forbidden(inputs)
	if (locale === "zh") return zh_kitsocial_forbidden(inputs)
	if (locale === "ja") return ja_kitsocial_forbidden(inputs)
	return en_kitsocial_forbidden(inputs)
});
