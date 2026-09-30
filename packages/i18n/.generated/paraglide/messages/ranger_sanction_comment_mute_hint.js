/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Sanction_Comment_Mute_HintInputs */

const en_ranger_sanction_comment_mute_hint = /** @type {(inputs: Ranger_Sanction_Comment_Mute_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Can’t comment or review — everywhere or on one mod.`)
};

const es_ranger_sanction_comment_mute_hint = /** @type {(inputs: Ranger_Sanction_Comment_Mute_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No puede comentar ni reseñar: en todo el sitio o en un mod.`)
};

const de_ranger_sanction_comment_mute_hint = /** @type {(inputs: Ranger_Sanction_Comment_Mute_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kann nicht kommentieren oder rezensieren – überall oder bei einem Mod.`)
};

const fr_ranger_sanction_comment_mute_hint = /** @type {(inputs: Ranger_Sanction_Comment_Mute_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ne peut plus commenter ni donner d’avis — partout ou sur un mod.`)
};

const it_ranger_sanction_comment_mute_hint = /** @type {(inputs: Ranger_Sanction_Comment_Mute_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Non può commentare né recensire, ovunque o su una mod.`)
};

const nl_ranger_sanction_comment_mute_hint = /** @type {(inputs: Ranger_Sanction_Comment_Mute_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kan geen reacties of recensies plaatsen — overal of bij één mod.`)
};

const pl_ranger_sanction_comment_mute_hint = /** @type {(inputs: Ranger_Sanction_Comment_Mute_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie może komentować ani recenzować — wszędzie lub przy jednym modzie.`)
};

const pt_ranger_sanction_comment_mute_hint = /** @type {(inputs: Ranger_Sanction_Comment_Mute_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Não pode comentar nem avaliar — em todo o site ou em um mod.`)
};

const ru_ranger_sanction_comment_mute_hint = /** @type {(inputs: Ranger_Sanction_Comment_Mute_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Не сможет комментировать и писать отзывы — везде или у одного мода.`)
};

const sv_ranger_sanction_comment_mute_hint = /** @type {(inputs: Ranger_Sanction_Comment_Mute_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kan inte kommentera eller recensera – överallt eller på en modd.`)
};

const tr_ranger_sanction_comment_mute_hint = /** @type {(inputs: Ranger_Sanction_Comment_Mute_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yorum veya inceleme yazamaz — her yerde ya da tek bir modda.`)
};

const zh_ranger_sanction_comment_mute_hint = /** @type {(inputs: Ranger_Sanction_Comment_Mute_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`无法评论或评价——全站或仅限某个模组。`)
};

const ja_ranger_sanction_comment_mute_hint = /** @type {(inputs: Ranger_Sanction_Comment_Mute_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`コメントやレビューができません — 全体、または一つのMODのみ。`)
};

/**
* | output |
* | --- |
* | "Can’t comment or review — everywhere or on one mod." |
*
* @param {Ranger_Sanction_Comment_Mute_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_sanction_comment_mute_hint = /** @type {((inputs?: Ranger_Sanction_Comment_Mute_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Sanction_Comment_Mute_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_sanction_comment_mute_hint(inputs)
	if (locale === "de") return de_ranger_sanction_comment_mute_hint(inputs)
	if (locale === "fr") return fr_ranger_sanction_comment_mute_hint(inputs)
	if (locale === "it") return it_ranger_sanction_comment_mute_hint(inputs)
	if (locale === "nl") return nl_ranger_sanction_comment_mute_hint(inputs)
	if (locale === "pl") return pl_ranger_sanction_comment_mute_hint(inputs)
	if (locale === "pt") return pt_ranger_sanction_comment_mute_hint(inputs)
	if (locale === "ru") return ru_ranger_sanction_comment_mute_hint(inputs)
	if (locale === "sv") return sv_ranger_sanction_comment_mute_hint(inputs)
	if (locale === "tr") return tr_ranger_sanction_comment_mute_hint(inputs)
	if (locale === "zh") return zh_ranger_sanction_comment_mute_hint(inputs)
	if (locale === "ja") return ja_ranger_sanction_comment_mute_hint(inputs)
	return en_ranger_sanction_comment_mute_hint(inputs)
});
