/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Social_PinnedInputs */

const en_social_pinned = /** @type {(inputs: Social_PinnedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Comment pinned.`)
};

const es_social_pinned = /** @type {(inputs: Social_PinnedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Comentario fijado.`)
};

const de_social_pinned = /** @type {(inputs: Social_PinnedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kommentar angeheftet.`)
};

const fr_social_pinned = /** @type {(inputs: Social_PinnedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Commentaire épinglé.`)
};

const it_social_pinned = /** @type {(inputs: Social_PinnedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Commento fissato in alto.`)
};

const nl_social_pinned = /** @type {(inputs: Social_PinnedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reactie vastgezet.`)
};

const pl_social_pinned = /** @type {(inputs: Social_PinnedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Komentarz przypięty.`)
};

const pt_social_pinned = /** @type {(inputs: Social_PinnedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Comentário fixado.`)
};

const ru_social_pinned = /** @type {(inputs: Social_PinnedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Комментарий закреплён.`)
};

const sv_social_pinned = /** @type {(inputs: Social_PinnedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kommentaren är fäst.`)
};

const tr_social_pinned = /** @type {(inputs: Social_PinnedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yorum sabitlendi.`)
};

const zh_social_pinned = /** @type {(inputs: Social_PinnedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`评论已置顶。`)
};

const ja_social_pinned = /** @type {(inputs: Social_PinnedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`コメントをピン留めしました。`)
};

/**
* | output |
* | --- |
* | "Comment pinned." |
*
* @param {Social_PinnedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const social_pinned = /** @type {((inputs?: Social_PinnedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Social_PinnedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_social_pinned(inputs)
	if (locale === "de") return de_social_pinned(inputs)
	if (locale === "fr") return fr_social_pinned(inputs)
	if (locale === "it") return it_social_pinned(inputs)
	if (locale === "nl") return nl_social_pinned(inputs)
	if (locale === "pl") return pl_social_pinned(inputs)
	if (locale === "pt") return pt_social_pinned(inputs)
	if (locale === "ru") return ru_social_pinned(inputs)
	if (locale === "sv") return sv_social_pinned(inputs)
	if (locale === "tr") return tr_social_pinned(inputs)
	if (locale === "zh") return zh_social_pinned(inputs)
	if (locale === "ja") return ja_social_pinned(inputs)
	return en_social_pinned(inputs)
});
