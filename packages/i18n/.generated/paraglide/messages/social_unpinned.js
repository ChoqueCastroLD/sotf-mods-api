/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Social_UnpinnedInputs */

const en_social_unpinned = /** @type {(inputs: Social_UnpinnedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Comment unpinned.`)
};

const es_social_unpinned = /** @type {(inputs: Social_UnpinnedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Comentario desfijado.`)
};

const de_social_unpinned = /** @type {(inputs: Social_UnpinnedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kommentar gelöst.`)
};

const fr_social_unpinned = /** @type {(inputs: Social_UnpinnedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Commentaire désépinglé.`)
};

const it_social_unpinned = /** @type {(inputs: Social_UnpinnedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Commento rimosso dall’alto.`)
};

const nl_social_unpinned = /** @type {(inputs: Social_UnpinnedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reactie losgemaakt.`)
};

const pl_social_unpinned = /** @type {(inputs: Social_UnpinnedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Komentarz odpięty.`)
};

const pt_social_unpinned = /** @type {(inputs: Social_UnpinnedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Comentário desafixado.`)
};

const ru_social_unpinned = /** @type {(inputs: Social_UnpinnedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Комментарий откреплён.`)
};

const sv_social_unpinned = /** @type {(inputs: Social_UnpinnedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kommentaren är lossad.`)
};

const tr_social_unpinned = /** @type {(inputs: Social_UnpinnedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yorumun sabitlemesi kaldırıldı.`)
};

const zh_social_unpinned = /** @type {(inputs: Social_UnpinnedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已取消置顶。`)
};

const ja_social_unpinned = /** @type {(inputs: Social_UnpinnedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ピン留めを解除しました。`)
};

/**
* | output |
* | --- |
* | "Comment unpinned." |
*
* @param {Social_UnpinnedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const social_unpinned = /** @type {((inputs?: Social_UnpinnedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Social_UnpinnedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_social_unpinned(inputs)
	if (locale === "de") return de_social_unpinned(inputs)
	if (locale === "fr") return fr_social_unpinned(inputs)
	if (locale === "it") return it_social_unpinned(inputs)
	if (locale === "nl") return nl_social_unpinned(inputs)
	if (locale === "pl") return pl_social_unpinned(inputs)
	if (locale === "pt") return pt_social_unpinned(inputs)
	if (locale === "ru") return ru_social_unpinned(inputs)
	if (locale === "sv") return sv_social_unpinned(inputs)
	if (locale === "tr") return tr_social_unpinned(inputs)
	if (locale === "zh") return zh_social_unpinned(inputs)
	if (locale === "ja") return ja_social_unpinned(inputs)
	return en_social_unpinned(inputs)
});
